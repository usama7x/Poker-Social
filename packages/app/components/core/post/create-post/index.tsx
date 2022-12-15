import { CreatePostInfo } from './create-post-info'
import { useCreatePostMutation } from 'app/generates'
import { useAuth } from 'app/hooks/auth'
import {
  Box,
  CloseIcon,
  Image,
  Pressable,
  Spacer,
  Text,
  useToast,
} from 'native-base'
import { useState } from 'react'
import { useRouter } from 'solito/router'
import { useEventDispatch } from 'app/hooks/event'
// import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'
// import { ImageInfo } from 'expo-image-picker/build/ImagePicker'
import { generateRNFile } from 'app/utils/file'
import { CreatePostHeader } from './create-post-header'
import { CreatePostActions } from './create-post-action'
import { showErrorToast, showSuccessToast } from 'app/utils/toast'
import { Keyboard } from 'react-native'
import * as ImagePicker from 'expo-image-picker/build/ImagePicker'

export function CreatePost() {
  const { user } = useAuth()

  const router = useRouter()
  const dispatch = useEventDispatch()

  const [textAreaValue, setTextAreaValue] = useState('')
  const [image, setImage] = useState<any | null>(null)

  const [{ fetching }, createPost] = useCreatePostMutation()

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

  async function onPostCreateHandler() {
    if (!textAreaValue && !image) {
      return showSuccessToast("Can't create empty post")
    }

    Keyboard.dismiss()

    try {
      const images: any[] = []

      if (image) {
        const imageName = image.uri.split('/').pop()
        if (!imageName) {
          throw new Error('Image name is empty')
        }
        images.push(generateRNFile(image.uri, imageName, image.type ?? 'image'))
      }

      // Calling API to create post
      const res = await createPost({
        content: textAreaValue,
        media: images,
      })
      if (res.error) {
        throw res.error
      }

      // Redirect back to home page
      dispatch('home-posts-refresh', {})
      router.back()
      showSuccessToast('Post created successfully')
    } catch (err) {
      showErrorToast(err.message)
    }
  }

  return (
    <>
      <CreatePostHeader
        onPostCreate={onPostCreateHandler}
        isLoading={fetching}
      />
      <CreatePostInfo
        name={user!?.username}
        textAreaValue={textAreaValue}
        setTextAreaValue={setTextAreaValue}
      />
      {image && (
        <>
          <Box alignItems="center" w="100%">
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
              style={{
                position: 'absolute',
                top: 4,
                right: 4,
              }}
            >
              <CloseIcon color="red.500" />
            </Pressable>

            <Pressable
              onPress={() => {
                pickImage('gallery')
              }}
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                left: 0,
                height: 50,
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
      )}
      <Spacer />
      <Spacer />
      <Spacer />
      <CreatePostActions image={image} setImage={setImage} />
    </>
  )
}

/* <Video
  style={{
    height: 300,
    borderRadius: 8,
  }}
  useNativeControls={false}
  shouldPlay={true}
  resizeMode={Video.RESIZE_MODE_CONTAIN}
  source={{ uri: image.uri }}
/> */
