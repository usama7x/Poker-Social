import { PRIVACY_URL } from 'app/constants'
import React from 'react'
import { WebView } from 'react-native-webview'

export function PrivacyScreen() {
  return (
    <WebView
      source={{
        uri: PRIVACY_URL,
      }}
    />
  )
}
