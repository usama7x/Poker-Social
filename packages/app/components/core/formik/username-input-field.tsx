import React from 'react'

import { FormikInputField } from './input-field'

export function FormikUsernameInputField() {
  function validateuserName(value: string) {
    let error = ''
    if (!value) {
      error = 'User Name Required'
    } else !/^[A-Za-z]/i.test(value)
    {
      return error
    }
  }
  return (
    <FormikInputField
      key="username"
      type="text"
      name="username"
      validate={validateuserName}
      placeholder="Username"
    />
  )
}
