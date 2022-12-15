import { getMonthFromNumber } from 'app/utils/date'
import { Column, Row, Text } from 'native-base'
import React, { useMemo } from 'react'
import { FormikDropdownInputField } from './drop-down-input-field'

export function FormikAgeInputField() {
  function validateAge(value: string) {
    let error = ''
    if (!value) {
      error = 'Age Required'
    } else !/^[0-9]/i.test(value)
    {
      return error
    }
  }

  const days = useMemo(
    () =>
      Array<number>(31)
        .fill(1)
        .map<string>((element, index) => (index + element).toString()),
    []
  )

  const months = useMemo(
    () =>
      Array<number>(12)
        .fill(1)
        .map<string>((element, index) => getMonthFromNumber(index + element)),
    []
  )

  const years = useMemo(
    () =>
      Array<number>(104)
        .fill(1900)
        .map((element, index) => index + element)
        .sort((a, b) => b - a)
        .map<string>((element) => element.toString()),
    []
  )

  return (
    <Column p={2} my={2} space={2}>
      <Text fontWeight="semibold">Date Of Birth</Text>
      <Row space={4} justifyContent="space-between">
        <FormikDropdownInputField
          key="dob.day"
          name="dob.day"
          validate={validateAge}
          items={days.map((day) => ({ label: day, value: day }))}
          placeholder="Day"
        />
        <FormikDropdownInputField
          key="dob.month"
          name="dob.month"
          validate={validateAge}
          items={months.map((day, index) => ({
            label: day,
            value: (index + 1).toString(),
          }))}
          placeholder="Month"
        />
        <FormikDropdownInputField
          key="dob.year"
          name="dob.year"
          validate={validateAge}
          items={years.map((day) => ({ label: day, value: day }))}
          placeholder="Year"
        />
      </Row>
    </Column>
  )
}
