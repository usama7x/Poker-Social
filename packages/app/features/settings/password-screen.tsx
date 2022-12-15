import React from 'react'
import { Column } from 'native-base'
import { PasswordHeader } from 'app/components/settings/password/header'
import { PasswordForm } from 'app/components/settings/password/form'

export function PasswordScreen() {
  return (
    <Column flex={1} bg={'#1A2235'} w="100%" maxW={'800'}>
      <PasswordHeader />
      <PasswordForm />
    </Column>
  )
}
