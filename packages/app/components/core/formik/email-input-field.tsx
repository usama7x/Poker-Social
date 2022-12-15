import React from 'react'

import { FormikInputField } from './input-field'

export function FormikEmailInputField() {
  function validateEmail(value: string) {
    let error = ''
    if (!value) {
      error = 'Email Required'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.trim())
    ) {
      error = 'Invalid email address'
    }
    return error
  }

  return (
    <FormikInputField
      key="email"
      type="text"
      name="email"
      validate={validateEmail}
      placeholder="Email/Mobile"
    />
  )
}
