import { Box, Button } from 'native-base'

type SingUpButtonProps = {
  isLoading?: boolean
  onPress?: () => void
}

function SignUpButton({ isLoading, onPress }: SingUpButtonProps) {
  return (
    <Box
      bg={{
        linearGradient: {
          colors: ['#008CF3', '#11224A'],
          start: [0, 0],
          end: [0, 1],
        },
      }}
      rounded="sm"
    >
      <Button
        width="full"
        isLoading={isLoading}
        onPress={onPress}
        bg="transparent"
        _text={{
          fontWeight: 'semibold',
          fontSize: 16,
        }}
        _hover={{ bg: 'brand.btnHover' }}
      >
        Create
      </Button>
    </Box>
  )
}

export default SignUpButton
