import { EmailForm } from 'app/components/settings/email/form'
import { EmailHeader } from 'app/components/settings/email/header'
import { Column } from 'native-base'
import React from 'react'

export function EmailScreen() {
  return (
    <Column flex={1} bg={'#1A2235'} w="100%" maxW={'800'}>
      <EmailHeader />
      <EmailForm />
    </Column>
  )
}
