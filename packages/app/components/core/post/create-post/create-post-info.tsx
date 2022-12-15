import { useProfile } from 'app/hooks/profile'
import { Column, Row, Spacer, Text } from 'native-base'
import { UserAvatar } from '../../user-avatar'
import PostTextArea from './create-post-textarea'

export type PostInfoParmas = {
  name: string
  textAreaValue: string
  setTextAreaValue: (value: string) => void
}

export function CreatePostInfo({
  name,
  textAreaValue,
  setTextAreaValue,
}: PostInfoParmas) {
  const profile = useProfile()
  return (
    <Column space={5} px={4}>
      <Row alignItems="center" space={5}>
        <UserAvatar url={profile?.profileImage?.url} />
        <Text fontSize={15} bold>
          {name}
        </Text>
      </Row>
      <PostTextArea
        textAreaValue={textAreaValue}
        setTextAreaValue={setTextAreaValue}
      />
      <Spacer />
    </Column>
  )
}
