import React from 'react'
import { Actionsheet, Center, useDisclose } from 'native-base'
import { ImageUpdateDialog } from './image-image-update-dialog'

type CoverImageUpdateActionsSheetProps = {
  isOpen: boolean
  onClose: () => void
  updateCoverImageHandler: () => void
  removeCoverImageHandler: () => void
}

export function CoverImageUpdateActionsSheet({
  isOpen,
  onClose,
  updateCoverImageHandler,
  removeCoverImageHandler,
}: CoverImageUpdateActionsSheetProps) {
  const disclose = useDisclose()
  return (
    <Center>
      <ImageUpdateDialog
        isOpen={disclose.isOpen}
        onClose={disclose.onClose}
        onRemove={removeCoverImageHandler}
      />
      <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator={true}>
        <Actionsheet.Content p={0}>
          <Actionsheet.Item
            onPress={() => {
              updateCoverImageHandler()
              onClose()
            }}
            bg="#3ABEFE"
            _text={{
              fontSize: 'sm',
              fontWeight: 'bold',
            }}
          >
            New Cover
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
            Remove Cover
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  )
}
