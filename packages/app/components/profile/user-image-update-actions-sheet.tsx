import React from 'react'
import { Actionsheet, Center, useDisclose } from 'native-base'
import { ImageUpdateDialog } from './image-image-update-dialog'

type UserImageUpdateActionsSheetProps = {
  isOpen: boolean
  onClose: () => void
  updateProfileImageHandler: () => void
  removeProfileImageHandler: () => void
}

export function UserImageUpdateActionsSheet({
  isOpen,
  onClose,
  updateProfileImageHandler,
  removeProfileImageHandler,
}: UserImageUpdateActionsSheetProps) {
  const disclose = useDisclose()

  return (
    <>
      <ImageUpdateDialog
        isOpen={disclose.isOpen}
        onClose={disclose.onClose}
        onRemove={removeProfileImageHandler}
      />
      <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator={true}>
        <Actionsheet.Content p={0}>
          <Actionsheet.Item
            onPress={() => {
              updateProfileImageHandler()
              onClose()
            }}
            bg="#3ABEFE"
            _text={{
              fontSize: 'sm',
              fontWeight: 'bold',
            }}
          >
            New Profile
          </Actionsheet.Item>
          <Actionsheet.Item
            onPress={() => {
              disclose.onOpen()
              onClose()
            }}
            _text={{
              fontSize: 'sm',
              fontWeight: 'bold',
              color: '#D83742',
            }}
          >
            Remove Profile
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  )
}
