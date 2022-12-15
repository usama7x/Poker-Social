import { Box, Button } from 'native-base'

type LoginButtonProps = {
  isLoading?: boolean
  onPress?: () => void
}

function LoginButton({ isLoading, onPress }: LoginButtonProps) {
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
        bg="transparent"
        onPress={onPress}
        _text={{
          fontWeight: 'semibold',
          fontSize: 16,
        }}
        _hover={{ bg: 'transparent' }}
      >
        Sign in
      </Button>
    </Box>
  )
}

export default LoginButton
