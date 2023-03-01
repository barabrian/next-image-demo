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
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        <Frame ratio>
          <Image
            loader={dummyLoader}
            className={styles.image}
            src="dummyimage.com"
            alt="dummy"
            fill
            sizes="(min-width: 1024px) 33vw, 50vw"
            priority
          />
        </Frame>
        <Frame ratio>
          <Image
            loader={dummyLoader}
            className={styles.image}
            src="dummyimage.com"
            alt="dummy"
            fill
            sizes="(min-width: 1024px) 33vw, 50vw"
            priority
          />
        </Frame>
        <div className="max-lg:col-span-2">
          <Frame ratio>
            <Image
              loader={dummyLoader}
              className={styles.image}
              src="dummyimage.com"
              alt="dummy"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              priority
            />
          </Frame>
        </div>
      </div>
    </>
  )
}
