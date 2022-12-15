import { LogOutIcon } from 'app/assets/icons/logout-icon'
import { usePlatform } from 'app/hooks/platform'
import { Button, IconButton, Row, Text } from 'native-base'
import React, { useState } from 'react'
import LogoutAlertDialog from './logout-alert-dialog'

type LogoutButtonProps = {
  onLogout: () => void
}

export function LogoutButton({ onLogout }: LogoutButtonProps) {
  const { isDesktop } = usePlatform()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <LogoutAlertDialog
        onLogout={onLogout}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Button
        _pressed={{ bg: 'transparent' }}
        p={0}
        mx={isDesktop ? '20' : '0'}
        bg={!isDesktop ? '#1A2235' : '#3ABEFE'}
        onPress={() => setIsOpen(true)}
        _text={{
          fontWeight: 'bold',
        }}
        _hover={{ bg: '#007EBB' }}
      >
        <Row alignItems="center">
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
            onPress={() => setIsOpen(true)}
          >
            <LogOutIcon color={!isDesktop ? '#3ABEFE' : 'white'} />
          </IconButton>
          <Text bold color={!isDesktop ? '#3ABEFE' : 'white'} fontSize="20">
            Log Out
          </Text>
        </Row>
      </Button>
    </>
  )
}
