import React, { useEffect, useState } from 'react'
import { LogBox, Platform } from 'react-native'
import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import SpInAppUpdates, {
  IAUUpdateKind,
  StartUpdateOptions,
} from 'sp-react-native-in-app-updates'
import * as PoppinsFont from '@expo-google-fonts/poppins'
import * as RussoOneFont from '@expo-google-fonts/russo-one'
const { useFonts, __metadata__, ...poppinsFonts } = PoppinsFont
const { useFonts: _, __metadata__: __, ...russoOneFonts } = RussoOneFont

LogBox.ignoreLogs(['Setting a timer for a long period of time'])

const inAppUpdates = new SpInAppUpdates(
  false // isDebug
)

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)

  const [fontsLoaded] = useFonts({ ...poppinsFonts, ...russoOneFonts })

  useEffect(() => {
    async function prepare() {
      try {
        if (__DEV__) {
          return
        }

        const result = await inAppUpdates.checkNeedsUpdate()

        if (result.shouldUpdate) {
          let updateOptions: StartUpdateOptions = {}
          if (Platform.OS === 'android') {
            updateOptions = {
              updateType: IAUUpdateKind.IMMEDIATE,
            }
          }

          await inAppUpdates.startUpdate(updateOptions)

          inAppUpdates.installUpdate()
        }
      } catch (e) {
        console.warn(e)
      } finally {
        // Tell the application to render
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  if (!appIsReady || !fontsLoaded) {
    return null
  }

  return (
    <Provider>
      <NativeNavigation />
    </Provider>
  )
}
