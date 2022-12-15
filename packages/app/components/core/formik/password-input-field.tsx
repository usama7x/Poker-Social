import React from 'react'

import { FormikInputField } from './input-field'

export function FormikPasswordInputField() {
  function validatePassword(value: string) {
    let error = ''
    if (!value) {
      error = ' Password Required'
    }
    // else if (value.length < 8) {
    //   error = 'Invalid password'
    // }
    return error
  }

  return (
    <FormikInputField
      key="password"
      type="password"
      name="password"
      validate={validatePassword}
      placeholder="Password"
    />
  )
}
