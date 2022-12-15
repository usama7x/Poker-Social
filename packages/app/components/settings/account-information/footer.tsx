import { Box, Column } from 'native-base'
import React from 'react'
import AccountDeactivation from '../account-deactivation'
import { EmailBtn } from '../email-btn'
import LegalPolicies from '../legal-policies/legal-policies'
import PasswordSecurityBtn from '../password-security-btn'

function Footer() {
  return (
    <Column my={4} space={6}>
      <EmailBtn />
      <PasswordSecurityBtn />
      <LegalPolicies />
      <AccountDeactivation />
    </Column>
  )
}

export default Footer
