import { Box, Button, Text } from 'native-base'

type LoginButtonProps = {
  isLoading?: boolean
  onPress?: () => void
}

function SubmitButton({ isLoading, onPress }: LoginButtonProps) {
  return (
    <Box
      mx={4}
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
          fontWeight: 'bold',
        }}
        _hover={{ bg: 'brand.btnHover' }}
      >
        <Text fontSize={16} fontWeight="semibold">
          Submit
        </Text>
      </Button>
    </Box>
  )
}

export default SubmitButton
