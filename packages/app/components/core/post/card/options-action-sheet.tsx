import { Actionsheet, Center } from 'native-base'
import React from 'react'

type PostCardOptionsActionSheetProps = {
  isOpen: boolean
  onClose: () => void
  onRemoveButtonPressed: () => void
}

export default function PostCardOptionsActionSheet({
  isOpen,
  onClose,
  onRemoveButtonPressed,
}: PostCardOptionsActionSheetProps) {
  return (
    <Center>
      <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator={true}>
        <Actionsheet.Content p={0}>
          <Actionsheet.Item
            onPress={() => {
              onRemoveButtonPressed()
              onClose()
            }}
            bg="#3ABEFE"
            _text={{
              fontSize: 'sm',
              fontWeight: 'bold',
            }}
          >
            Remove Post
          </Actionsheet.Item>
          <Actionsheet.Item
            onPress={onClose}
            _text={{
              fontSize: 'sm',
              fontWeight: 'bold',
              color: '#D83742',
            }}
          >
            Cancel
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  )
}
