/* eslint-disable @next/next/no-img-element */
'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import debounce from 'lodash.debounce'
import styleBuilder from '@/util/styleBuilder'
import TextInput from '@/ui/TextInput'
import ClapperboardPlay from '@/public/icons/ClapperboardPlay.svg'
import ConfoundedCircle from '@/public/icons/ConfoundedCircle.svg'
import GalleryMinimalistic from '@/public/icons/GalleryMinimalistic.svg'
import CheckSquare from '@/public/icons/CheckSquare.svg'
import Upload from '@/public/icons/Upload.svg'
import VideoLibrary from '@/public/icons/VideoLibrary.svg'
import styles from '@/styles/components/MediaSelector.module.scss'

const suggestions = [
  {
    title: 'Thank You',
    gif: 'https://media.tenor.com/OBg23ghDrrkAAAAM/thank-you.gif',
    sticker: 'https://media.tenor.com/B4_Sj1oaZZEAAAAM/thanks.gif',
  },
  {
    title: 'Happy Birthday',
    gif: 'https://media.tenor.com/rngI-iARtUsAAAAM/happy-birthday.gif',
    sticker: 'https://media.tenor.com/v1PKEQJB7gUAAAAM/tantan-lamronspace.gif',
  },
  {
    title: 'Happy Holidays',
    gif: 'https://media.tenor.com/0sD95JSGCUIAAAAM/happy-holidays-gifkaro.gif',
    sticker:
      'https://media.tenor.com/X9VQ1nQQvTwAAAAM/aimy-bunny-happy-holidays.gif',
  },
  {
    title: 'Congrats',
    gif: 'https://media.tenor.com/Bysws45JqI8AAAAM/congratulations-congrats.gif',
    sticker:
      'https://media.tenor.com/F0UWHBTt6xQAAAAM/congratulations-congrats.gif',
  },
  {
    title: 'Get Well',
    gif: 'https://media.tenor.com/WrhaNwzpXqAAAAAM/mimineko-anh-thien-be-heo.gif',
    sticker: 'https://media.tenor.com/RIdTrLC_Y80AAAAM/feel-better-snoopy.gif',
  },
  {
    title: 'Graduation',
    gif: 'https://media.tenor.com/GCDPBAXephIAAAAM/one-day-at-a-time-penelope-alvarez.gif',
    sticker: 'https://media.tenor.com/aLSBjqUC51IAAAAM/class-of2020-2020.gif',
  },
]

export default function MediaSelector({ formData, setFormData }) {
  const [mediaType, setMediaType] = useState('gif')
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [connectionError, setConnectionError] = useState(false)

  const searchInput = useRef()

  useEffect(() => {
    console.log('mediaType', mediaType)
  }, [mediaType])

  useEffect(() => {
    const fetchResults = async () => {
      fetch(`/api/v1/${mediaType}/search?query=${query}`)
        .then(async (res) => {
          const data = await res.json()
          console.log('data', data)
          setResults(data.data.results)
          console.log('data', data.data.results)
        })
        .catch((e) => {
          setConnectionError(true)
        })
    }
    if (query && ['gif', 'sticker'].includes(mediaType)) fetchResults()
    else setResults(Array(48).fill(''))
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
              searchInput={searchInput}
              placeholder="Search"
              style={{ width: '100%' }}
              onChange={(e) => debouncedChangeHandler(e)}
            />
            {connectionError ? (
              <div className={styles.errorContainer}>
                <ConfoundedCircle />
                Oops! Connection failed.
              </div>
            ) : query ? (
              <div
                key={`${query}${mediaType}`}
                className={styles.resultContainer}
              >
                {results.map((elem, index) => (
                  <button
                    key={elem.id}
                    onClick={() => {
                      setFormData((prev) => {
                        return { ...prev, mediaUrl: elem.media_formats.gif.url }
                      })
                    }}
                    className={styleBuilder([
                      [
                        styles.selected,
                        elem.media_formats?.gif.url === formData.mediaUrl,
                      ],
                    ])}
                  >
                    <img
                      src={elem.media_formats?.tinygif.url}
                      className={styles.result}
                      loading="lazy"
                      onLoad={() => {
                        console.log('loaded', index)
                      }}
                    />
                    <div className={styles.selectionBackdrop}>
                      <div className={styles.selectionText}>
                        <CheckSquare />
                        Selected
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className={styles.suggestionContainer}>
                {suggestions.map((elem, index) => (
                  <button
                    key={index}
                    className={styles.suggestion}
                    onClick={() => {
                      if (searchInput.current)
                        searchInput.current.value = elem.title
                      setQuery(elem.title)
                    }}
                    style={{ backgroundImage: `url(${elem[mediaType]})` }}
                  >
                    <p>{elem.title}</p>
                  </button>
                ))}
              </div>
            )}
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
