import { DeactivateAccountIcon } from 'app/assets/icons/setting page icon/newsettingicon/deactivate-account-icon'
import { DeleteAccountIcon } from 'app/assets/icons/setting page icon/newsettingicon/delete-account-icon'
import { AuthContext } from 'app/contexts/auth'
import { useDeactivateUserMutation } from 'app/generates'
import { usePlatform } from 'app/hooks/platform'
import { Box, Column, DeleteIcon, Text } from 'native-base'
import React, { useContext, useState } from 'react'
import { useRouter } from 'solito/router'
import { LogoutButton } from '../menu/logout-button'
import DeactivateAlertDialog from './deactivate-alert-dialog'

import LinkComponent from './terms-of-services'

function AccountDeactivation() {
  const { isDesktop } = usePlatform()
  const { replace } = useRouter()
  const { logout } = useContext(AuthContext)

  const [, deactivate] = useDeactivateUserMutation()

  const [isOpen, setIsOpen] = useState(false)

  const handleDeactivate = async () => {
    const { error } = await deactivate()

    if (error) {
      console.log(error)
      return
    }
    await logout()
  }
  return (
    <Column px={4}>
      <DeactivateAlertDialog
        onDeactivate={handleDeactivate}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Text bold color="#3ABEFE" fontSize="23">
        Account Deactivation
      </Text>

      <LinkComponent
        name="Deactivate Account"
        icon={<DeactivateAccountIcon />}
        onPressed={() => setIsOpen(true)}
      />

      <Box borderTopColor="black" my={6} borderTopWidth={1} />
      {isDesktop ? (
        <LogoutButton
          onLogout={() => {
            replace('/login')
            logout()
          }}
        />
      ) : null}
    </Column>
  )
}

export default AccountDeactivation
