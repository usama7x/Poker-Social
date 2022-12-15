import IconBackButton from 'app/components/core/buttons/icon-back-button'
import SearchBar from 'app/components/core/searchbar'
import { usePlatform } from 'app/hooks/platform'
import { Box, Column, Row, Text } from 'native-base'
import { useRouter } from 'solito/router'
import { ShortFriendsHeader } from '../short-friends-header'
import { FriendsCount } from './friends-count'

export function FriendsHeader() {
  const { back } = useRouter()
  const { isDesktop } = usePlatform()
  return (
    <Column>
      {/*  <Row
        justifyContent={isDesktop ? 'center' : 'space-between'}
        alignItems="center"
        p={3}
        backgroundColor="#1A2235"
        h={100}
        borderBottomColor="black"
        borderBottomWidth={10}
      >
        {!isDesktop ? <IconBackButton onPress={() => back()} /> : null}
        <Text fontSize={20} bold color="#3ABEFE">
          All Friends
        </Text>
        <Box />
      </Row>
      <Box bg="#1A2235">
        <Row>
          <FriendsCount />
        </Row>
        <Row w={'60%'} ml={80} p={8}>
          <SearchBar backgroundColor="#0E121C" />
        </Row>
      </Box> */}
      <ShortFriendsHeader />
      <Row
        justifyContent="space-around"
        bg="#1A2235"
        p={4}
        borderBottomColor="black"
        borderBottomWidth={6}
      >
        <FriendsCount />
        <Box w="64%">
          <SearchBar backgroundColor="#0E121C" />
        </Box>
      </Row>
    </Column>
  )
}
