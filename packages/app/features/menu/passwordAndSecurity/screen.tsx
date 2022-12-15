import PasswordAndSecurityContent from 'app/components/menu/passwordAndSecurity/body/content'
import PasswordAndSecuirtyHeader from 'app/components/menu/passwordAndSecurity/header'

import { Column } from 'native-base'

function PasswordAndSecurityScreen() {
  return (
    <Column width="100%" maxW="500px" bg="#0A0D14">
      <PasswordAndSecuirtyHeader />
      <PasswordAndSecurityContent />
    </Column>
  )
}

export default PasswordAndSecurityScreen
