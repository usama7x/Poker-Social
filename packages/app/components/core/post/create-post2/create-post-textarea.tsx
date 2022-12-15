import { GalleryIcon } from 'app/assets/icons/gallery-icon'
import {
  Box,
  TextArea,
  Pressable,
  Image,
  Column,
  Text,
  CloseIcon,
} from 'native-base'
import React from 'react'
import * as ImagePicker from 'expo-image-picker/build/ImagePicker'
import { ImageInfo } from 'expo-image-picker/build/ImagePicker'
import { CameraIcon } from 'app/assets/icons/camera-icon'

export type PostMultiLineParmas = {
  textAreaValue: string
  setTextAreaValue: (value: string) => void
  setImage: (image: any | null) => void
  image: any | null
}

export default function PostMultiLine({
  textAreaValue,
  setTextAreaValue,
  setImage,
  image,
}: PostMultiLineParmas) {
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
    <Box alignItems="center" w="100%">
      <TextArea
        value={textAreaValue}
        onChangeText={setTextAreaValue}
        placeholder="say something about this post..."
        fontSize={14}
        _dark={{
          placeholderTextColor: 'gray.500',
        }}
        _focus={{ borderColor: 'gray.500' }}
        _hover={{ borderColor: 'gray.500' }}
        w="full"
        autoCompleteType={undefined}
      />
      <Column
        h="100%"
        w={480}
        borderColor="#1A2235"
        borderWidth={3}
        borderRadius={8}
        mt={2}
        alignItems="center"
        justifyContent="center"
      >
        {image ? (
          <>
            <Box>
              <Image
                borderRadius={8}
                source={{ uri: image.uri }}
                w="full"
                style={{
                  aspectRatio: image.width / image.height,
                  width: 200,
                }}
                alt="selected-image"
              />

              <Pressable
                onPress={() => setImage(null)}
                style={{ position: 'absolute', top: 4, right: 4 }}
              >
                <CloseIcon color="red.500" />
              </Pressable>

              <Pressable
                onPress={() => pickImage('gallery')}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  left: 0,
                }}
              >
                <Text
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    left: 0,
                    textAlign: 'center',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                  }}
                  color="blue.500"
                >
                  Change Image
                </Text>
              </Pressable>
            </Box>
          </>
        ) : (
          <Pressable onPress={() => pickImage('gallery')}>
            <Column
              justifyContent="center"
              borderColor="#3ABEFE"
              borderWidth={1}
              px={4}
              borderStyle="dotted"
              borderRadius={8}
            >
              <Box w={20}>
                <CameraIcon />
              </Box>
              <Text fontSize="xl" bold color="#3ABEFE">
                Add Post
              </Text>
            </Column>
          </Pressable>
        )}
      </Column>
    </Box>
  )
}
