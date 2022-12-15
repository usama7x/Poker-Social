import React from 'react'
import { Box, useDisclose, ZStack } from 'native-base'
import UserImage from './user-image'
import UpdatProfileImageButton from './user-image-update-btn'
import { UserImageUpdateActionsSheet } from './user-image-update-actions-sheet'

type ProfileImageProps = {
  isUser: boolean
  imageUrl?: string
  updateProfileImageHandler: () => void
  removeProfileImageHandler: () => void
}

export function ProfileImage({
  isUser,
  imageUrl,
  updateProfileImageHandler,
  removeProfileImageHandler,
}: ProfileImageProps) {
  const { isOpen, onClose, onOpen } = useDisclose()

  return (
    <>
      <ZStack mt={-100} w={200}>
        <UserImage url={imageUrl} />
        {isUser && (
          <Box ml={180} mt={130}>
            <UpdatProfileImageButton onPress={onOpen} />
          </Box>
        )}
      </ZStack>
      <UserImageUpdateActionsSheet
        isOpen={isOpen}
        onClose={onClose}
        updateProfileImageHandler={updateProfileImageHandler}
        removeProfileImageHandler={removeProfileImageHandler}
      />
    </>
  )
}
