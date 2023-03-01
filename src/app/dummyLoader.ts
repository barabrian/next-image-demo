import { ImageLoader } from 'next/image'

export const dummyLoader: ImageLoader = ({ src, width }) => {
  return `https://${src}/${width}x${Math.round(0.5625 * width)}/000/fff`
}
