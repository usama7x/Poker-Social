import { COOKIES_URL } from 'app/constants'
import React from 'react'
import { WebView } from 'react-native-webview'

export function CookiePolicyScreen() {
  return (
    <WebView
      source={{
        uri: COOKIES_URL,
      }}
    />
  )
}
