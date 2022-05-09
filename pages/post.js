import React from 'react'
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
    () => import('../components/Post'),
    { ssr: false }
  )

function Post() {
   
    return (
        <div>
            <DynamicComponentWithNoSSR/>
        </div>
    )
}

export default Post