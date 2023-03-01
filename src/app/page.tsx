'use client'
import { Frame } from '@src/cmp/Frame'
import Image from 'next/image'
import { dummyLoader } from './dummyLoader'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl lg:text-5xl text-center mb-8">
        Static image 1x, 2x
      </h1>
      <Frame ratio={false}>
        <Image
          loader={dummyLoader}
          src="dummyimage.com"
          className="mx-auto"
          alt="dummy"
          width={640}
          height={360}
          priority
        />
      </Frame>
    </>
  )
}
