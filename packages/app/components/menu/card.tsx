import { Box, Button, Row, Text } from 'native-base'
import { useRouter } from 'solito/router'
type MenuCardProps = {
  icon?: any
}

function MenuCard({ icon }: MenuCardProps) {
  const { push } = useRouter()
  return (
    <Button
      bgColor="#0A0D15"
      rounded="3xl"
      borderRadius="full"
      maxW={'150px'}
      width="100%"
      p={0}
      my={5}
      borderColor="#556080"
      borderWidth="2"
      onPress={() => push('/')}
    >
      <Row
        rounded={'3xl'}
        borderRadius="full"
        justifyContent="center"
        borderColor="#161D2D"
        p={3}
        backgroundColor="#0A0D15"
        borderWidth="2"
        space={2}
      >
        <Row
          space={1}
          rounded="3xl"
          borderRadius="full"
          alignItems="center"
          borderColor="#161D2D"
          backgroundColor="#0A0D15"
          borderWidth="2"
        >
          <Box size={9}>{icon}</Box>
          <Text color="gray.500">Coming soon</Text>
        </Row>
      </Row>
    </Button>
  )
}

export default MenuCard
