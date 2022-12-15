import { ReactNativeFile } from 'apollo-upload-client'

export function generateRNFile(uri: string, name: string, type: string) {
  return new ReactNativeFile({
    uri,
    name,
    type: type + '/' + name.split('.').pop(),
  })
}
