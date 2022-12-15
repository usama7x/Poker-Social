import { Formik } from 'formik'
import { Box, Spacer, Column } from 'native-base'
import { useState } from 'react'
import { forgotPassword } from 'app/services/authentication'
import { ForgotFormActions } from './actions'
import { ForgotFormFooter } from './footer'
import { ForgotFormContent } from './content'
import { ForgotFormHeader } from './header'
import { useRouter } from 'solito/router'
import { showErrorToast } from 'app/utils/toast'
import { Keyboard } from 'react-native'
import { FormError } from '../../form-error'

export function ForgotForm() {
  const router = useRouter()
  const [error, setError] = useState('')
  const clearError = () => setError('')

  const [isMobile] = useState(false)
  const formInitialValues = {
    email: '',
  }

  async function formSubmit(
    values: any,
    { setSubmitting }: { setSubmitting: any }
  ) {
    clearError()
    Keyboard.dismiss()
    try {
      await forgotPassword(values.email)
      router.push(`/reset/${values.email}`)
    } catch (error) {
      showErrorToast(error.message)
      setError(error.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Box
      px={8}
      pb={12}
      height="full"
      bg="brand.main"
      maxWidth={500}
      width="full"
    >
      <ForgotFormHeader />
      {error && <FormError msg={error} setError={setError} />}
      <Box mt={8}>
        <Formik initialValues={formInitialValues} onSubmit={formSubmit}>
          {({ isSubmitting, handleSubmit }) => (
            <Column space={8}>
              <ForgotFormContent isMobile={isMobile} />
              <ForgotFormActions
                isLoading={isSubmitting}
                onPress={handleSubmit}
              />
            </Column>
          )}
        </Formik>
      </Box>
      <Spacer />
      <ForgotFormFooter />
    </Box>
  )
}
