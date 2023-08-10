'use client'

import { useState } from 'react'
import styleBuilder from '@/util/styleBuilder'
import TextInput from '@/ui/TextInput'
import ClapperboardPlay from '@/public/icons/ClapperboardPlay.svg'
import VideoLibrary from '@/public/icons/VideoLibrary.svg'
import GalleryMinimalistic from '@/public/icons/GalleryMinimalistic.svg'
import styles from '@/styles/components/MediaSelector.module.scss'

export default function MediaSelector({ setFormData }) {
  const [mediaType, setMediaType] = useState('gif')
  const [query, setQuery] = useState('')

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
        <TextInput
          placeholder="Search"
          style={{ width: '100%' }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className={styles.resultContainer}>
          {Array(10)
            .fill(null)
            .map((elem) => (
              <img key={elem} src="" className={styles.result} />
            ))}
        </div>
      </div>
    </div>
  )
}
