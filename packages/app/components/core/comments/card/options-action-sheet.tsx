import React from 'react'
import { Actionsheet, Box, Center, Text } from 'native-base'

type CommentCardOptionsActionSheetProps = {
  isOpen: boolean
  onClose: () => void
  onRemoveButtonPressed: () => void
}

export default function CommentCardOptionsActionSheet({
  isOpen,
  onClose,
  onRemoveButtonPressed,
}: CommentCardOptionsActionSheetProps) {
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
            Remove Comment
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
