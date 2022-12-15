import { Input, Row } from 'native-base'
type InputProps = {
  placeholder?: string
}

function InputField({ placeholder }: InputProps) {
  return (
    <Row w="full">
      <Input
        variant="rounded"
        width="full"
        type="password"
        px={6}
        color="white"
        placeholder={placeholder}
        backgroundColor="#1A2235"
      />
    </Row>
  )
}

export default InputField
