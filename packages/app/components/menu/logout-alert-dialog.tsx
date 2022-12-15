import React from 'react'
import { AlertDialog, Button } from 'native-base'

type LogoutAlertDialogProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  onLogout: () => void
}

export default function LogoutAlertDialog({
  onLogout,
  isOpen,
  setIsOpen,
}: LogoutAlertDialogProps) {
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
        <AlertDialog.Body>Are you sure you want to logout?</AlertDialog.Body>
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
              onLogout()
              onClose()
            }}
            px={8}
            py={1}
          >
            Log out
          </Button>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  )
}
