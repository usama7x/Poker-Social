import React from 'react'
import { View } from 'native-base'
import Toast from 'react-native-toast-message'
import { toastConfig } from '../themes/toast.config'

export function LayoutProvider({ children }) {
  return (
    <>
      <View flex={1} bg="#1A2235" flexDirection="row" justifyContent="center">
        {children}
      </View>
      <Toast config={toastConfig} position="bottom" visibilityTime={2000} />
    </>
  )
}
