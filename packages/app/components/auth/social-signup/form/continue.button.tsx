import { Button } from 'native-base'

type SingUpButtonProps = {
  isLoading?: boolean
  onPress?: () => void
}

function ContinueButton({ isLoading, onPress }: SingUpButtonProps) {
  return (
    <Button
      width="full"
      isLoading={isLoading}
      onPress={onPress}
      bg="brand.btn"
      _text={{
        fontWeight: 'bold',
      }}
      _hover={{ bg: 'brand.btnHover' }}
    >
      Continue
    </Button>
  )
}

export default ContinueButton
