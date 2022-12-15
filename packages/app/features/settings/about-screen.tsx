import { ABOUT_URL } from 'app/constants'
import React from 'react'
import { WebView } from 'react-native-webview'

export function AboutScreen() {
  return (
    <WebView
      source={{
        uri: ABOUT_URL,
      }}
    />
  )
}
