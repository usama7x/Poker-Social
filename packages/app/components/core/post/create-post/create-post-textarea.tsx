import { Box, TextArea } from 'native-base'

export type PostMultiLineParmas = {
  textAreaValue: string
  setTextAreaValue: (value: string) => void
}

function PostMultiLine({
  textAreaValue,
  setTextAreaValue,
}: PostMultiLineParmas) {
  return (
    <Box alignItems="center" w="100%">
      <TextArea
        value={textAreaValue}
        onChangeText={setTextAreaValue}
        placeholder="say something about this post..."
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

export default PostMultiLine
