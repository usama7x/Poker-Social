import React, { useMemo } from 'react'
import { Image, View } from 'native-base'
import { Video } from 'expo-av'
import { usePlatform } from 'app/hooks/platform'
// import VideoPlayer from 'expo-video-player'

export type PostCardMediaProps = {
  media: { url: string; mimetype: string; hash: string }[]
}

export function PostCardMedia({ media }: PostCardMediaProps) {
  const { isDesktop } = usePlatform()

  const component = useMemo(() => {
    if (!media.length) {
      return <View />
    }

    const mediaType = media[0]?.mimetype.split('/')[0] ?? ''

    if (mediaType === 'image') {
      return (
        <Image
          source={{
            uri: media[0]!.url,
          }}
          alt="Alternate Text"
          width="100%"
          height={isDesktop ? 547 : 362}
        />
      )
    }

    // if (mediaType === 'video') {
    //   return (
    //     <VideoPlayer
    //       style={{
    //         height: 300,
    //       }}
    //       videoProps={{
    //         useNativeControls: true,
    //         shouldPlay: false,
    //         resizeMode: Video.RESIZE_MODE_CONTAIN,
    //         source: {
    //           uri: media[0]!.url,
    //         },
    //       }}
    //     />
    //   )
    // }

    return <View />
  }, [JSON.stringify(media), isDesktop])

  return <>{component}</>
}
