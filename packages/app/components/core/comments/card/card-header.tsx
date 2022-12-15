import { useState } from 'react'
import { usePlatform } from 'app/hooks/platform'
import { useProfileLink } from 'app/hooks/profile-link'
import { Pressable, Row, Spacer, Text, useDisclose, View } from 'native-base'
import Entypo from '@expo/vector-icons/Entypo'
import { Link as SolitoLink } from 'solito/link'
import CommentCardOptionsActionSheet from './options-action-sheet'
import CommentCardOptionsPopover from './options-popover'

type CommentCardHeaderProps = {
  username: string
  showOptions: boolean
  onRemoveButtonPressed: () => void
}

export function CommentCardHeader({
  username,
  showOptions,
  onRemoveButtonPressed,
}: CommentCardHeaderProps) {
  const { isDesktop } = usePlatform()
  const { isOpen, onClose, onOpen } = useDisclose()

  const profileLink = useProfileLink(username)
  return (
    <Row space={1}>
      {!username.includes('DISABLED') && (
        <SolitoLink href={profileLink}>
          <Text fontWeight="semibold" color="#3ABEFE">
            {username}
          </Text>
        </SolitoLink>
      )}
      <Spacer />
      {showOptions ? (
        isDesktop ? (
          <CommentCardOptionsPopover
            onRemoveButtonPressed={onRemoveButtonPressed}
          />
        ) : (
          <View>
            <Pressable onPress={onOpen}>
              <Entypo name="dots-three-horizontal" size={24} color="#A5AFCE" />
            </Pressable>
            <CommentCardOptionsActionSheet
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
