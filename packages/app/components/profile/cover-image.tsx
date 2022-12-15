import React from 'react'
import { Image } from 'native-base'
import { IMAGES } from 'app/assets/images'

type CoverImageProps = {
  url?: string
}

function CoverImage({ url }: CoverImageProps) {
  return (
    <Image
      style={{ position: 'relative' }}
      source={url ? { uri: url } : IMAGES.BlankCoverImage}
      alt="cover"
      size="2xl"
      w="100%"
      maxW="800px"
      h="100%"
    />
  )
}

export default CoverImage
