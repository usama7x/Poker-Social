import { DateOfBirthIcon } from 'app/assets/icons/setting page icon/newsettingicon/date-of-birth-icon'
import { NameIcon } from 'app/assets/icons/setting page icon/newsettingicon/name-icon'
import { UserNameIcon } from 'app/assets/icons/setting page icon/newsettingicon/username-icon'
import { AuthContext } from 'app/contexts/auth'
import { useUpdateUserMutation, useUserQuery } from 'app/generates'
import { showErrorToast, showSuccessToast } from 'app/utils/toast'
import { Column, useToast } from 'native-base'
import { useContext, useEffect, useState } from 'react'
import InputField from '../input-field'
import SaveButton from '../save-button'

function AllInputField() {
  const { user } = useContext(AuthContext)

  const [{ data, fetching }] = useUserQuery({
    variables: {
      username: user?.username || '',
    },
    requestPolicy: 'network-only',
  })

  const [, updateUser] = useUpdateUserMutation()

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [dob, setDob] = useState<string>('')

  useEffect(() => {
    if (data) {
      setName(data.user.name!)
      setUsername(data.user.username)

      const date = new Date(data.user.dob!)
      setDob(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`)
    }
  }, [data?.user.username])

  const handleSave = async () => {
    const [firstName, lastName] = name.split(' ')
    const [day, month, year] = dob.split('/')

    if (!firstName || !lastName || !month || !day || !year) {
      return showErrorToast('Please fill all fields')
    }

    const date = new Date(
      Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(day))
    )

    const { error } = await updateUser({
      firstName: firstName ?? '',
      lastName: lastName ?? '',
      dob: date.toUTCString(),
    })

    if (error) {
      showErrorToast(error.message)
      return
    }

    showSuccessToast('Your account has been updated')
  }

  if (fetching) return null

  return (
    <Column>
      <InputField
        name={'Name'}
        placeholder={'Name'}
        value={name}
        setValue={setName}
        icon={<NameIcon />}
      />
      <InputField
        name={'Username'}
        placeholder={'Username'}
        value={username}
        setValue={setUsername}
        disabled={true}
        icon={<UserNameIcon />}
      />
      <InputField
        name={'Date of Birth'}
        placeholder={'Date of Birth'}
        value={dob!}
        setValue={setDob}
        icon={<DateOfBirthIcon />}
      />
      <SaveButton onPress={handleSave} />
    </Column>
  )
}

export default AllInputField
