'use client'
import { Frame } from '@src/cmp/Frame'
import Image from 'next/image'
import styles from '../../cmp/Frame.module.css'
import { dummyLoader } from '../dummyLoader'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl lg:text-5xl text-center mb-8">
        Responsive image sizes
      </h1>
      <div className="w-full grid grid-cols-2 gap-4 md:gap-8">
        <Frame ratio>
          <Image
            loader={dummyLoader}
            className={styles.image}
            src="dummyimage.com"
            alt="dummy"
            fill
            sizes="50vw"
            priority
          />
        </Frame>
        <Frame ratio>
          <Image
            loader={dummyLoader}
            className={styles.image}
            src="dummyimage.com"
            alt="dummy"
            sizes="50vw"
            fill
            priority
          />
        </Frame>
      </div>
    </>
  )
}
