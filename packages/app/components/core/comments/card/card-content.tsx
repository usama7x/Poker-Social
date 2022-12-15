import { Row, Text } from 'native-base'

type CommentCardContentProps = {
  text?: string
}

export function CommentCardContent({ text }: CommentCardContentProps) {
  return (
    <Row mb={1} space={1}>
      <Text fontSize="sm">{text}</Text>
    </Row>
  )
}
