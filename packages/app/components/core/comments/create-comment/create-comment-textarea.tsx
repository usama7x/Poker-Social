import { Box, Text, TextArea } from 'native-base'
import { MutableRefObject, useEffect, useRef } from 'react'

type CreateCommentMultiLineProps = {
  leading: string
  textAreaValue: string
  setTextAreaValue: (text: string) => void
  innerRef: MutableRefObject<any>
}

export function CreateCommentMultiLine({
  leading,
  textAreaValue,
  setTextAreaValue,
  innerRef,
}: CreateCommentMultiLineProps) {
  return (
    <Box flexGrow={1}>
      {leading.length > 0 && (
        <Box mb={2} ml={2}>
          <Text fontSize="xs" fontWeight="medium">
            Replying to <Text color="#3ABEFE">{leading}</Text>
          </Text>
        </Box>
      )}
      <TextArea
        ref={innerRef}
        h={10}
        rounded="3xl"
        value={textAreaValue}
        onChangeText={setTextAreaValue}
        placeholder="Write a Comment..."
        backgroundColor="#0A0E16"
        fontSize={14}
        _dark={{
          placeholderTextColor: 'gray.500',
        }}
        _focus={{ borderColor: 'gray.500' }}
        _hover={{ borderColor: 'gray.500' }}
        w="full"
        autoCompleteType={undefined}
      />
    </Box>
  )
}
