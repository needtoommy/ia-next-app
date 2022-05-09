import React from 'react'
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
    () => import('../components/Hero'),
    { ssr: false }
  )

function Hero() {
  return (
    <div>
        <DynamicComponentWithNoSSR/>
    </div>
  )
}

export default Hero