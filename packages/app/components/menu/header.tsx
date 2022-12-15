import { Row, Text } from 'native-base'

function MenuHeader() {
  return (
    <Row
      bgColor="#0A0D14"
      justifyContent="center"
      p={2}
      borderBottomColor="gray.800"
      borderWidth={1}
    >
      <Text bold color="#34A8E1" fontSize="2xl">
        Menu
      </Text>
    </Row>
  )
}

export default MenuHeader
