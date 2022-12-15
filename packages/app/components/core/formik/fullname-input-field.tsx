import React from 'react'

import { FormikInputField } from './input-field'

export function FormikFullnameInputField() {
  function validateFullName(value) {
    let error
    if (!value) {
      error = 'Full Name Required'
    } else !/^[A-Za-z]/i.test(value)
    {
      return error
    }
  }
  return (
    <FormikInputField
      key="fullName"
      type="text"
      name="fullName"
      validate={validateFullName}
      placeholder="Full Name"
    />
  )
}
