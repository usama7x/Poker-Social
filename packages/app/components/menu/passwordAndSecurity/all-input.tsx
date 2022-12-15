import { Column } from 'native-base'
import PasswordInputField from './body'

function AllPasswordInputField() {
  return (
    <Column>
      <PasswordInputField
        name={'Current Password'}
        placeholder={'Current Password'}
      />
      <PasswordInputField name={'New Password'} placeholder={'New Password'} />
      <PasswordInputField
        name={'Confirm Password'}
        placeholder={'Confirm Password'}
      />
    </Column>
  )
}

export default AllPasswordInputField
