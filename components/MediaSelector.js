/* eslint-disable @next/next/no-img-element */
'use client'

import { useState, useEffect, useMemo } from 'react'
import debounce from 'lodash.debounce'
import styleBuilder from '@/util/styleBuilder'
import TextInput from '@/ui/TextInput'
import ClapperboardPlay from '@/public/icons/ClapperboardPlay.svg'
import GalleryMinimalistic from '@/public/icons/GalleryMinimalistic.svg'
import Upload from '@/public/icons/Upload.svg'
import VideoLibrary from '@/public/icons/VideoLibrary.svg'
import styles from '@/styles/components/MediaSelector.module.scss'

export default function MediaSelector({ formData, setFormData }) {
  const [mediaType, setMediaType] = useState('gif')
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    console.log('mediaType', mediaType)
  }, [mediaType])

  useEffect(() => {
    const fetchResults = async () => {
      const data = await (
        await fetch(`/api/v1/${mediaType}/search?query=${query}`)
      ).json()
      setResults(data.data.results)
      console.log('data', data.data.results)
    }
    if (query && ['gif', 'sticker'].includes(mediaType)) fetchResults()
    else setResults([])
  }, [query, mediaType])

  const changeHandler = (event) => {
    console.log(event.target.value)
    setQuery(event.target.value)
  }

  const debouncedChangeHandler = useMemo(() => {
    return debounce(changeHandler, 300)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.barCategory}>
        <button
          className={styleBuilder([[styles.active, mediaType === 'gif']])}
          onClick={() => {
            setMediaType('gif')
          }}
        >
          <ClapperboardPlay />
          GIF
        </button>
        <button
          className={styleBuilder([[styles.active, mediaType === 'sticker']])}
          onClick={() => {
            setMediaType('sticker')
          }}
        >
          <VideoLibrary />
          Sticker
        </button>
        <button
          className={styleBuilder([[styles.active, mediaType === 'image']])}
          onClick={() => {
            setMediaType('image')
          }}
        >
          <GalleryMinimalistic />
          Image
        </button>
      </div>
      <div className={styles.searchContainer}>
        {['gif', 'sticker'].includes(mediaType) && (
          <>
            <TextInput
              placeholder="Search"
              style={{ width: '100%' }}
              onChange={(e) => debouncedChangeHandler(e)}
            />
            <div key={query} className={styles.resultContainer}>
              {results.map((elem, index) => (
                <button key={elem.id}>
                  <img
                    src={elem.media_formats.tinygif.url}
                    className={styles.result}
                    loading="lazy"
                    onLoad={() => {
                      console.log('loaded', index)
                    }}
                  />
                </button>
              ))}
            </div>
          </>
        )}
        {mediaType === 'image' && (
          <div className={styles.uploadPanel}>
            <Upload />
            <div>
              Choose a file to <strong>upload</strong>
            </div>
            <input type="file" />
          </div>
        )}
      </div>
    </div>
  )
}
