import Image from 'next/image'

export default function Icon({ width = 24, height = 24, path }) {
  return (
    <Image
      src={`/icons/${path}.svg`}
      width={width}
      height={width ?? height}
      alt={path}
    />
  )
}
