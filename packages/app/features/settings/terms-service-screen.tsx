import { TERMS_SERVICE_URL } from 'app/constants'
import { useMediaQuery } from 'native-base'
import React, { useEffect, useMemo, useState } from 'react'
import { WebView } from 'react-native-webview'

export function TermsOfServiceScreen() {
  let url =
    'http://ps-docs-content.s3-website.ap-south-1.amazonaws.com/pokersocial/terms-of-service.html'

  // Checking if we are on client side
  const [hasMounted, setMouted] = useState(false)
  useEffect(() => {
    setMouted(true)
  }, [])

  const [isMobile] = useMediaQuery({
    maxWidth: 800,
  })

  const isDesktop = useMemo(
    () => hasMounted && !isMobile,
    [isMobile, hasMounted]
  )

  return (
    <WebView
      source={{
        uri: TERMS_SERVICE_URL,
      }}
    />
  )
}
