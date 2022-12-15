import React from 'react'

import { FormikInputField } from './input-field'

type FormikConfirmmPassInputFieldProps = {
  type?: string
}

export function FormikConfirmmPassInputField({type}:FormikConfirmmPassInputFieldProps) {
  function validateConfirmPassword(value: string) {
    let error = ''
    if (!value) {
      error = 'Re-enter the new password'
    } else if (value.length < 8) {
      error = 'Invalid password'
    }

    return error
  }
  return (
    <FormikInputField
      key="confirmPassword"
      type={type ?? "text"}
      name="confirmPassword"
      validate={validateConfirmPassword}
      placeholder="Confirm Password"
    />
  )
}
