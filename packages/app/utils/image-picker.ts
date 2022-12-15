import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker'
import { generateRNFile } from './file'

export const pickImage = async () => {
  // No permissions request is necessary for launching the image library
  const result = await launchImageLibraryAsync({
    mediaTypes: MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  })

  if (result.cancelled) {
    return null
  }
  const imageName = result.uri.split('/').pop()
  if (!imageName) {
    throw new Error('Image name is empty')
  }
  return { image: result, file: generateRNFile(result.uri, imageName, 'image') }
}
