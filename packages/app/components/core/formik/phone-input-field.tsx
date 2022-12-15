import React from 'react'

import { FormikInputField } from './input-field'

export function FormikPhoneInputField() {
  return (
    <FormikInputField key="phone" type="tel" name="phone" placeholder="Phone" />
  )
}
