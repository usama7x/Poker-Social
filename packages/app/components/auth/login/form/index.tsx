import { Formik } from 'formik'
import { Box, Spacer, Column, Modal, Spinner } from 'native-base'
import { useState } from 'react'
import { Keyboard } from 'react-native'
import { LoginFormActions } from './actions'
import { LoginFormContent } from './content'
import { LoginFormFooter } from './footer'
import { LoginFormHeader } from './header'
import { useRouter } from 'solito/router'
import { useAuth } from 'app/hooks/auth'
import { usePlatform } from 'app/hooks/platform'
import { FormError } from '../../form-error'
import { showSuccessToast, showErrorToast } from 'app/utils/toast'

type FormValues = {
  email: string
  password: string
  phone: string
}

export function LoginForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const clearError = () => setError('')
  const { login, socialSignIn } = useAuth()
  const router = useRouter()
  const { isWeb } = usePlatform()

  const formInitialValues = {
    email: '',
    password: '',
  }

  async function formSubmit(
    { email, password }: FormValues,
    { setSubmitting }: { setSubmitting: any }
  ) {
    clearError()
    try {
      Keyboard.dismiss()
      await login(email, password)
      showSuccessToast('Logged in successfully')

      isWeb && router.replace('/')
    } catch (error) {
      showErrorToast(error.message)
      setError(error.message)
    } finally {
      setSubmitting(false)
    }
  }

  const handleSocialSignIn = async (provider: string) => {
    clearError()
    try {
      setLoading(true)
      const { error } = await socialSignIn(provider)
      if (error?.message === 'User not found') {
        router.push('/signup')
      }
    } catch (error) {
      showErrorToast(error.message)
      setError(error.message)
    } finally {
      setLoading(false)
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
      <Modal isOpen={loading}>
        <Modal.Content
          justifyContent="center"
          borderRadius={0}
          bg="transparent"
        >
          <Spinner size="lg" />
        </Modal.Content>
      </Modal>
      <LoginFormHeader />
      {error && <FormError msg={error} setError={setError} />}
      <Box mt={8}>
        <Formik initialValues={formInitialValues} onSubmit={formSubmit}>
          {({ isSubmitting, handleSubmit }) => (
            <Column space={8}>
              <LoginFormContent />
              <LoginFormActions
                isLoading={isSubmitting}
                onPress={handleSubmit}
                onGooglePress={() => handleSocialSignIn('google')}
                onFacebookPress={() => handleSocialSignIn('facebook')}
              />
            </Column>
          )}
        </Formik>
      </Box>
      <Spacer />
      <LoginFormFooter />
    </Box>
  )
}
