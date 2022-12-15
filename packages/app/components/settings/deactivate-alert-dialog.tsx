import React from 'react'
import { AlertDialog, Button } from 'native-base'

type DeactivateAlertDialogProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  onDeactivate: () => void
}

export default function DeactivateAlertDialog({
  onDeactivate,
  isOpen,
  setIsOpen,
}: DeactivateAlertDialogProps) {
  const onClose = () => setIsOpen(false)

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
        <AlertDialog.Body>
          Are you sure you want to deactivate?
        </AlertDialog.Body>
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
              onDeactivate()
              onClose()
            }}
            px={8}
            py={1}
          >
            Deactivate
          </Button>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  )
}
