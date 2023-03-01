'use client'
import { Frame } from '@src/cmp/Frame'
import Image from 'next/image'
import styles from '../../cmp/Frame.module.css'
import { dummyLoader } from '../dummyLoader'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl lg:text-5xl text-center mb-8">
        Responsive image `srcset`
      </h1>
      <Frame ratio>
        <Image
          loader={dummyLoader}
          className={styles.image}
          src="dummyimage.com"
          alt="dummy"
          fill // Responsive image, auto generates `srcset` based on next.js settings
          priority // Load image immediately, not lazy, should only be used for above the fold images
        />
      </Frame>
    </>
  )
}
