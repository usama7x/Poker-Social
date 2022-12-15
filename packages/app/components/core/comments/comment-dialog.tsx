import React from 'react'
import { Box, Modal } from 'native-base'
import { CommentsList } from './list'

type CreatePostCommentDialogProps = {
  id: string
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

export function CreatePostCommentDialog({
  id,
  isOpen,
  setIsOpen,
}: CreatePostCommentDialogProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      closeOnOverlayClick={false}
      avoidKeyboard
      isKeyboardDismissable={false}
      animationPreset="slide"
      _slide={{ duration: 50 }}
      _backdrop={{
        background: 'black',
        opacity: 0.7,
      }}
    >
      <Modal.Content maxW="500" minH="600" maxH={600} backgroundColor="#111623">
        <Modal.CloseButton />
        <CommentsList postId={id} />
      </Modal.Content>
    </Modal>
  )
}
function setShowModal(arg0: boolean) {
  throw new Error('Function not implemented.')
}
