import React from 'react'
import { AlertDialog, Button } from 'native-base'

type ImageUpdateDialogProps = {
  isOpen: boolean
  onClose: () => void
  onRemove: () => void
}

export function ImageUpdateDialog({
  isOpen,
  onRemove,
  onClose,
}: ImageUpdateDialogProps) {
  const cancelRef = React.useRef(null)
  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Header>Confirmation</AlertDialog.Header>
        <AlertDialog.Body>Are you sure you want to remove?</AlertDialog.Body>
        <AlertDialog.Footer>
          <Button
            py={1}
            px={8}
            rounded={100}
            bg="#1A2235"
            onPress={onClose}
            ref={cancelRef}
          >
            Cancel
          </Button>
          <Button
            colorScheme="danger"
            rounded={100}
            onPress={() => {
              onRemove()
              onClose()
            }}
            px={8}
            py={1}
          >
            Remove
          </Button>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  )
}
