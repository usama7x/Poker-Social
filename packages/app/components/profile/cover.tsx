import React from 'react'
import CoverImage from './cover-image'
import { usePlatform } from 'app/hooks/platform'
import { Box, useDisclose, ZStack } from 'native-base'
import { CoverImageUpdateActionsSheet } from './cover-image-update-actions-sheet'
import CoverImageUpdateButton from './cover-image-update-btn'

type ProfileCoverProps = {
  isUser: boolean
  imageUrl?: string
  updateCoverImageHandler: () => void
  removeCoverImageHandler: () => void
}

export function ProfileCover({
  isUser,
  imageUrl,
  updateCoverImageHandler,
  removeCoverImageHandler,
}: ProfileCoverProps) {
  const { isDesktop } = usePlatform()
  const { isOpen, onClose, onOpen } = useDisclose()
  return (
    <>
      <ZStack w="full" h={isDesktop ? 308 : 228}>
        <CoverImage url={imageUrl} />
        {isUser && (
          <Box ml={isDesktop ? 710 : 520} mt={isDesktop ? 370 : 200}>
            <CoverImageUpdateButton onPress={onOpen} />
          </Box>
        )}
      </ZStack>
      <CoverImageUpdateActionsSheet
        isOpen={isOpen}
        onClose={onClose}
        updateCoverImageHandler={updateCoverImageHandler}
        removeCoverImageHandler={removeCoverImageHandler}
      />
    </>
  )
}
