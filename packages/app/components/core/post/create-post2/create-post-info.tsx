import { useProfile } from 'app/hooks/profile'
import { Column, Row, Spacer, Text } from 'native-base'
import React from 'react'
import { UserAvatar } from '../../user-avatar'
import PostTextArea from './create-post-textarea'

export type PostInfoParmas = {
  name: string
  textAreaValue: string
  setTextAreaValue: (value: string) => void
  image: any | null
  setImage: (image: any | null) => void
}

export function CreatePostInfo({
  name,
  textAreaValue,
  setTextAreaValue,
  image,
  setImage,
}: PostInfoParmas) {
  const profile = useProfile()
  console.log(profile)

  return (
    <Column space={5} p={8}>
      {/* <Row alignItems="center" space={5}>
        <UserAvatar width={50} height={50} url={profile?.profileImage?.url} />
        <Text fontSize="md" bold>
          {name}
        </Text>
      </Row> */}
      <PostTextArea
        textAreaValue={textAreaValue}
        setTextAreaValue={setTextAreaValue}
        setImage={setImage}
        image={image}
      />
      <Spacer /> <Spacer /> <Spacer />
    </Column>
  )
}
