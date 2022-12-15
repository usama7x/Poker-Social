import { Formik } from 'formik'
import { signUp, signInWithEmail } from 'app/services/authentication'
import { Box, Spacer, useToast, VStack as Column } from 'native-base'
import { SignUpFormActions } from './actions'
import { SignUpFormContent } from './content'
import { SignUpFormFooter } from './footer'
import { SignUpFormHeader } from './header'
import { useUpdateUserMutation } from 'app/generates'
import { useContext, useState } from 'react'
import { AuthContext } from 'app/contexts/auth'
import { showErrorToast } from 'app/utils/toast'
import { Keyboard } from 'react-native'
import { FormError } from '../../form-error'
import { useRouter } from 'solito/router'
import { usePlatform } from 'app/hooks/platform'

type FormInitialValuesParams = {
  fullName: string
  username: string
  dob: {
    day: string
    month: string
    year: string
  }
  email: string
  password: string
  gender: string
}

export function SignUpForm() {
  const { login } = useContext(AuthContext)
  const router = useRouter()
  const { isWeb } = usePlatform()

  const [error, setError] = useState('')
  const clearError = () => setError('')

  const [, mutate] = useUpdateUserMutation()

  // const formik = withFormik({})

  const formInitialValues: FormInitialValuesParams = {
    fullName: '',
    username: '',
    dob: {
      day: '1',
      month: '1',
      year: '2000',
    },
    email: '',
    password: '',
    gender: 'male',
  }

  async function formSubmit(
    values: FormInitialValuesParams,
    { setSubmitting }: { setSubmitting: any }
  ) {
    clearError()
    try {
      Keyboard.dismiss()

      // Create account
      await signUp({
        username: values.username,
        email: values.email,
        password: values.password,
      })

      // Login into account
      await signInWithEmail(values.email, values.password)

      // Retreving values
      const { fullName, gender, dob } = values
      const [firstName, lastName = ''] = fullName.split(' ')
      const date = new Date(
        Date.UTC(parseInt(dob.year), parseInt(dob.month) - 1, parseInt(dob.day))
      )

      // Updating user data
      const { error } = await mutate({
        firstName,
        lastName,
        gender,
        dob: date.toISOString(),
      })

      if (error) {
        throw error
      }

      login(values.username, values.password)
      isWeb && router.replace('/')
    } catch (error) {
      showErrorToast(error.message)
      setError(error.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Box
      px={12}
      pb={12}
      height="full"
      bg={{
        linearGradient: {
          colors: ['#1A2134', '#090C13'],
          start: [0, 1],
          end: [0, 0],
        },
      }}
      maxWidth={500}
      width="full"
    >
      <SignUpFormHeader />
      {error && <FormError msg={error} setError={setError} />}
      <Box>
        <Formik initialValues={formInitialValues} onSubmit={formSubmit}>
          {({ isSubmitting, handleSubmit }) => (
            <Column space={9}>
              <SignUpFormContent />
              <SignUpFormActions
                isLoading={isSubmitting}
                onPress={handleSubmit}
              />
            </Column>
          )}
        </Formik>
      </Box>
      <Spacer h={20} />
      <SignUpFormFooter />
    </Box>
  )
}
