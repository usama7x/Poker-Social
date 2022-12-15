import {
  Text,
  Row,
  Spacer,
  Pressable,
  View,
  Column,
  useDisclose,
} from 'native-base'
import { Avatar } from 'native-base'
import { Link as SolitoLink } from 'solito/link'
import Entypo from '@expo/vector-icons/Entypo'
import PostCardOptionsPopover from './options-popover'
import { usePlatform } from 'app/hooks/platform'
import PostCardOptionsActionSheet from './options-action-sheet'
import { format } from 'timeago.js'
import { useProfileLink } from 'app/hooks/profile-link'

export type PostCardProps = {
  name?: string
  profileImage?: {
    url: string
    hash: string
  }
  username: string
  showOptions: boolean
  createdAt: string
  onRemoveButtonPressed: () => void
}

export function PostCardHeader({
  name,
  profileImage,
  username,
  showOptions,
  createdAt,
  onRemoveButtonPressed,
}: PostCardProps) {
  const { isDesktop } = usePlatform()

  const { isOpen, onOpen, onClose } = useDisclose()

  const profileLink = useProfileLink(username)
  return (
    <Row px={3} alignItems="center" space={2}>
      <SolitoLink href={profileLink}>
        <Avatar
          source={{
            uri:
              profileImage?.url ??
              'https://pokersocial-public.s3.ap-south-1.amazonaws.com/blank-avatar.png',
          }}
          size={10}
        />
      </SolitoLink>

      <SolitoLink href={profileLink}>
        <Row space={2}>
          <Text fontWeight="semibold" color="#3ABEFE">
            {username.includes('DISABLED') ? '' : `${username}`}
          </Text>
        </Row>
        <Text fontSize="xs" color="#A5AFCE">
          {format(new Date(createdAt), 'en_US')}
        </Text>
      </SolitoLink>

      <Spacer />
      {showOptions ? (
        isDesktop ? (
          <PostCardOptionsPopover
            onRemoveButtonPressed={onRemoveButtonPressed}
          />
        ) : (
          <View>
            <Pressable onPress={onOpen}>
              <Entypo name="dots-three-horizontal" size={24} color="#A5AFCE" />
            </Pressable>
            <PostCardOptionsActionSheet
              isOpen={isOpen}
              onClose={onClose}
              onRemoveButtonPressed={onRemoveButtonPressed}
            />
          </View>
        )
      ) : null}
    </Row>
  )
}
