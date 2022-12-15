import { Column } from 'native-base'
import React from 'react'
import LegalPoliciesBody from './legal-policies-body'
import LegalPoliciesTitle from './legal-policies-title'

function LegalPolicies() {
  return (
    <Column space={4} px={4}>
      <LegalPoliciesTitle />
      <LegalPoliciesBody />
    </Column>
  )
}

export default LegalPolicies
