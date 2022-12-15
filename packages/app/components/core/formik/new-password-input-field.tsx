import React from 'react'

import { FormikInputField } from './input-field'


type FormikNewPassInputFieldProps = {
  type?: string
}

export function FormikNewPassInputField({type} : FormikNewPassInputFieldProps) {
  function validateNewPassword(value: string) {
    let error = ''
    if (!value) {
      error = 'New password is required'
    }
    else if (value.length < 8) {
      error = 'Invalid password'
    }
    return error
  }
  return (
    <FormikInputField
      key="newPassword"
      type={type ?? "text"}
      name="newPassword"
      validate={validateNewPassword}
      placeholder="New Password"
    />
  )
}
