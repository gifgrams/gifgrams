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

  useEffect(() => {
    setQuery('')
  }, [mediaType])

  const changeHandler = (event) => {
    console.log(event.target.value)
    setQuery(event.target.value)
  }

  const debouncedChangeHandler = useMemo(() => {
    return debounce(changeHandler, 500)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.barCategory}>
        <button
          className={styleBuilder([[styles.active, mediaType === 'gif']])}
          onClick={() => {
            setMediaType('gif')
            setQuery('')
          }}
        >
          <ClapperboardPlay />
          GIF
        </button>
        <button
          className={styleBuilder([[styles.active, mediaType === 'sticker']])}
          onClick={() => {
            setMediaType('sticker')
            setQuery('')
          }}
        >
          <VideoLibrary />
          Sticker
        </button>
        <button
          className={styleBuilder([[styles.active, mediaType === 'image']])}
          onClick={() => {
            setMediaType('image')
            setQuery('')
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
              key={mediaType}
              placeholder="Search"
              style={{ width: '100%' }}
              onChange={(e) => debouncedChangeHandler(e)}
            />
            <div className={styles.resultContainer}>
              {Array(10)
                .fill(null)
                .map((elem, index) => (
                  <img key={index} src="" className={styles.result} />
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
