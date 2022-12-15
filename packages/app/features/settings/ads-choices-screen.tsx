import { ADS_CHOICES_URL } from 'app/constants'
import React from 'react'
import { WebView } from 'react-native-webview'

export function AdsChoicesScreen() {
  return (
    <WebView
      source={{
        uri: ADS_CHOICES_URL,
      }}
    />
  )
}
