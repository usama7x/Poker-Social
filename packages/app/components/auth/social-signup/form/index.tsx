import { Formik } from 'formik'
import { Box, Column, Spacer, useToast } from 'native-base'
import React, { useState } from 'react'
import { SignUpFormFooter } from './../../signup/form/footer'
import { SocialSignUpFormHeader } from './header'
import { SocialSignUpFormContent } from './content'
import { useContext } from 'react'
import { AuthContext } from 'app/contexts/auth'
import { useUpdateUserMutation } from 'app/generates'
import { signUp, signInWithEmail } from 'app/services/authentication'
import { SocialSignUpFormActions } from './actions'
import { showErrorToast } from 'app/utils/toast'
import { FormError } from '../../form-error'

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

export function SocialSignUpForm() {
  const { login } = useContext(AuthContext)
  const [error, setError] = useState('')
  const clearError = () => useState('')

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
      pb={4}
      height="full"
      bg="brand.main"
      maxWidth={500}
      width="full"
    >
      <SocialSignUpFormHeader />
      {error && <FormError msg={error} setError={setError} />}
      <Box mt={8}>
        <Formik initialValues={formInitialValues} onSubmit={formSubmit}>
          {({ isSubmitting, handleSubmit }) => (
            <Column space={9}>
              <SocialSignUpFormContent />
              <Spacer />
              <SocialSignUpFormActions
                isLoading={isSubmitting}
                onPress={handleSubmit}
              />
            </Column>
          )}
        </Formik>
      </Box>
      <Spacer />
      <SignUpFormFooter />
    </Box>
  )
}
