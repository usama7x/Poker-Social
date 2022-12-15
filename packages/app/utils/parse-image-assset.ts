import { Platform } from 'react-native'

export function parseImageAsset(data: any) {
  return Platform.OS === 'web' ? data.src : data
}
