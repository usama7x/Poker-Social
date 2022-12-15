import React from 'react'

import { FormikInputField } from './input-field'

export function FormikOtpInputField() {
  function validateOtp(value: string) {
    let error = ''
    if (!value) {
      error = 'OTP Required'
    } else if (value.length < 6) {
      error = 'Invalid otp'
    }
    return error
  }
  return (
    <FormikInputField
      key="OTP"
      type="number"
      name="otp"
      validate={validateOtp}
      placeholder="OTP"
    />
  )
}
