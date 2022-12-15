import { Box, Button } from 'native-base'

type LoginButtonProps = {
  isLoading?: boolean
  onPress?: () => void
}

function ResetButton({ isLoading, onPress }: LoginButtonProps) {
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
        Send OTP
      </Button>
    </Box>
  )
}

export default ResetButton
