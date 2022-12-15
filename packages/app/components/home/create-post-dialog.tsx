import React, { useMemo } from 'react'
import { Modal } from 'native-base'
import { CreatePost } from '../core/post/create-post'
import { Dimensions } from 'react-native'
import { CreatePost2 } from '../core/post/create-post2'
import { usePlatform } from 'app/hooks/platform'

type CreatePostDialogProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function CreatePostDialog({ isOpen, setIsOpen }: CreatePostDialogProps) {
  const dialogKey = useMemo(() => Date.now().toString(), [])
  const { isDesktop } = usePlatform()

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      avoidKeyboard
      closeOnOverlayClick={false}
      isKeyboardDismissable={false}
      // maxHeight={`${Dimensions.get('window').height - 50}px`}
      // top="20"
      zIndex={-1111}
    >
      <Modal.Content
        maxWidth="550"
        backgroundColor="#111623"
        borderColor="#5393B2"
        borderWidth={2}
        borderRadius={20}
        maxHeight={`${Dimensions.get('window').height - 10}px`}
      >
        {isDesktop ? (
          <>
            <Modal.CloseButton />
            <CreatePost2 key={dialogKey} />
          </>
        ) : (
          <CreatePost key={dialogKey} />
        )}
      </Modal.Content>
    </Modal>
  )
}
