import { GUIDELINES_URL } from 'app/constants'
import React from 'react'
import { WebView } from 'react-native-webview'

export function CommunityGuidelinesScreen() {
  return (
    <WebView
      source={{
        uri: GUIDELINES_URL,
      }}
    />
  )
}
