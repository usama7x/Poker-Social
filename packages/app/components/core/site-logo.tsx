import { getVersion } from 'react-native-device-info'
import { Image, Text, Row } from 'native-base'
import { IMAGES } from 'app/assets/images'
import { useMemo } from 'react'

type SiteLogoProps = {
  height?: number
  width?: number
}

function SiteLogo({ height = 57, width = 351 }: SiteLogoProps) {
  const version = useMemo(() => getVersion(), [])

  return (
    <Row>
      <Image
        source={IMAGES.SiteLogoImage}
        alt="logo"
        resizeMode="contain"
        height={height}
        width={width}
      />
      <Text fontSize="xs">{version === 'unknown' ? '' : `v${version}`}</Text>
    </Row>
  )
}

export default SiteLogo
