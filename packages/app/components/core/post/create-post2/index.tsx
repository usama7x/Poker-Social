import { useCreatePostMutation } from 'app/generates'
import { useAuth } from 'app/hooks/auth'
import { useEventDispatch } from 'app/hooks/event'
import { generateRNFile } from 'app/utils/file'
import { showErrorToast, showSuccessToast } from 'app/utils/toast'
import { Column, useToast } from 'native-base'
import React, { useState } from 'react'
import { useRouter } from 'solito/router'
import { CreatePostAction } from './create-post-action'
import { CreatePostHeader } from './create-post-header'
import { CreatePostInfo } from './create-post-info'

export function CreatePost2() {
  const { user } = useAuth()

  // console.log(user)

  const router = useRouter()
  const dispatch = useEventDispatch()

  const [textAreaValue, setTextAreaValue] = useState('')
  const [image, setImage] = useState<any | null>(null)

  const [{ fetching }, createPost] = useCreatePostMutation()

  async function onPostCreateHandler() {
    if (!textAreaValue && !image) {
      return showSuccessToast("Can't create empty post")
    }

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
    <Column bg="#0E121C">
      <CreatePostHeader />
      <CreatePostInfo
        name={user?.username ?? ''}
        textAreaValue={textAreaValue}
        setTextAreaValue={setTextAreaValue}
        image={image}
        setImage={setImage}
      />
      <CreatePostAction onPostCreate={onPostCreateHandler} isLoading={false} />
    </Column>
  )
}
