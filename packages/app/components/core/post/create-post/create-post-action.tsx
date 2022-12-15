import { CameraIcon } from 'app/assets/icons/camera-icon'
import { GalleryIcon } from 'app/assets/icons/gallery-icon'
import { Column, Pressable, Row, Text, Box } from 'native-base'
import * as ImagePicker from 'expo-image-picker/build/ImagePicker'
import { ImageInfo } from 'expo-image-picker/build/ImagePicker'

export type CreatePostActionsProps = {
  image: any | null
  setImage: (image: any | null) => void
}

export function CreatePostActions({ image, setImage }: CreatePostActionsProps) {
  const pickImage = async (type: string) => {
    const func =
      type === 'camera'
        ? ImagePicker.launchCameraAsync
        : ImagePicker.launchImageLibraryAsync

    // No permissions request is necessary for launching the image library
    let result = await func({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.cancelled) {
      setImage(result)
    }
  }

  return (
    <Column mb={2} px={6} space={2}>
      <Pressable onPress={() => pickImage('camera')}>
        <Row
          alignItems="center"
          justifyContent="center"
          background="blue.500"
          space={2}
          py={1}
          borderRadius={10}
        >
          <Box size={8}>
            <CameraIcon />
          </Box>
          <Text bold>Camera</Text>
        </Row>
      </Pressable>
      <Pressable onPress={() => pickImage('gallery')}>
        <Row
          alignItems="center"
          justifyContent="center"
          space={4}
          py={2}
          background="black"
          borderRadius={10}
        >
          <Box size={6}>
            <GalleryIcon color="#60a5FA" />
          </Box>

          <Text color="blue.400" bold>
            Gallery
          </Text>
        </Row>
      </Pressable>
    </Column>
  )
}
