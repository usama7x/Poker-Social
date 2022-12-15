import { useState } from 'react'
import { changePassword } from 'app/services/authentication'
import { Column, Text, useToast } from 'native-base'
import { PasswordFormActions } from './actions'
import { PasswordFormContent } from './content'
import { useRouter } from 'solito/router'
import { showErrorToast, showSuccessToast } from 'app/utils/toast'
import { Formik } from 'formik';

export function PasswordForm() {
  const router = useRouter()
  const formInitialValues = {
    password: '',
    newPassword: '',
    confirmPassword: '',
  }
  async function formSubmit(
    values: any,
    { setSubmitting }: { setSubmitting: any  }
  )  { 
    console.log(values);
    setSubmitting(false)
    try {
      if (
        values.password === '' ||
        values.newPassword === '' ||
        values.confirmPassword === ''
      ) {
        throw new Error('Please fill out all fields.')
      }
      await changePassword(values.password, values.confirmPassword)

      showSuccessToast('Password changed successfully')
      router.back()
    } catch (error) {
      showErrorToast(error.message)
    }
  }

  return (
    <Column bg="#1A2235" px={6}>
      <Text bold fontSize={20} color="#3ABEFE" ml={10} mt={6}>
        Change Password
      </Text>
      <Formik initialValues={formInitialValues} onSubmit={formSubmit}>
      {({ isSubmitting, handleSubmit }) => (
        <>
          <PasswordFormContent />
          <PasswordFormActions onSave={handleSubmit} isLoading={isSubmitting} />
        </>
      )}
      </Formik>
    </Column>
  )
}
