import { CameraIcon } from 'app/assets/icons/camera-icon'
import { SmileIcon } from 'app/assets/icons/smile-icon'
import { Column, IconButton, Row } from 'native-base'
import React, { MutableRefObject, useState } from 'react'
import { CreateCommentMultiLine } from './create-comment-textarea'
import CommentBtn from '../Icon-comment-btn'
import { KeyboardAvoidingView } from 'react-native'

type CreateCommentProps = {
  selectedComment: {
    commentId: string
    username: string
  }
  onCreateComment: (content: string) => void
  innerRef: MutableRefObject<any>
}

export function CreateComment({
  selectedComment,
  onCreateComment,
  innerRef,
}: CreateCommentProps) {
  const [textAreaValue, setTextAreaValue] = useState('')

  return (
    <Column bg="#1A2235" px={4} pt={4} pb={6}>
      <Row space={4}>
        <CreateCommentMultiLine
          leading={selectedComment.username}
          textAreaValue={textAreaValue}
          setTextAreaValue={setTextAreaValue}
          innerRef={innerRef}
        />
        <CommentBtn
          onPress={() => {
            onCreateComment(textAreaValue)
            setTextAreaValue('')
          }}
        />
        {/* <IconButton
          _icon={{
            size: 'lg',
          }}
          _hover={{
            bg: 'transparent',
          }}
          _pressed={{
            bg: 'transparent',
          }}
        >
          <CameraIcon />
        </IconButton>
        <IconButton
          width="60"
          height="60"
          borderRadius={'full'}
          _icon={{
            size: 'xl',
          }}
          _hover={{
            bg: 'transparent',
          }}
          _pressed={{
            bg: 'transparent',
          }}
        >
          <SmileIcon />
        </IconButton> */}
      </Row>
    </Column>
  )
}
