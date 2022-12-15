import { SettingIcon } from 'app/assets/icons/setting-icon'
import { AuthContext } from 'app/contexts/auth'
import { Box, Button, Column, IconButton, Row, Text } from 'native-base'
import { useContext } from 'react'
import { useRouter } from 'solito/router'
import { LogoutButton } from './logout-button'

function MenuActions() {
  const { push } = useRouter()
  const { logout } = useContext(AuthContext)
  return (
    <Column bgColor="#0E111B">
      <Box mb={2} borderBottomColor="gray.800" borderWidth={1}>
        <Button
          p={0}
          width="full"
          bg="#0D111A"
          onPress={() => push('/settings')}
          _text={{
            fontWeight: 'bold',
          }}
          _hover={{ bg: 'transparent' }}
          _focus={{ bg: 'transparent' }}
          _pressed={{ bg: 'transparent' }}
          justifyContent="center"
        >
          <Row alignItems="center" width="full">
            <IconButton
              _icon={{
                size: 'lg',
              }}
              _hover={{
                bg: 'transparent',
              }}
              _pressed={{
                bg: 'transparent',
              }}
              onPress={() => push('/settings')}
            >
              <SettingIcon color="#34A8E1" />
            </IconButton>
            <Text bold color="#34A8E1">
              Settings
            </Text>
          </Row>
        </Button>
      </Box>
      <Box justifyContent="center" rounded="3xl" mb={2} mx={3}>
        <LogoutButton onLogout={logout} />
      </Box>
    </Column>
  )
}

export default MenuActions
