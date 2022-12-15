import { Field, FieldProps } from 'formik'
import {
  Box,
  CheckIcon,
  FormControl,
  Select,
  WarningOutlineIcon,
} from 'native-base'
import React from 'react'

const resolvePath = (object, path, defaultValue) =>
  path.split('.').reduce((o, p) => (o ? o[p] : defaultValue), object)

type FormikDropdownInputFieldProps = {
  name: string
  placeholder?: string
  validate?: (value: string) => any
  items: {
    label: string
    value: string
  }[]
}

export function FormikDropdownInputField({
  name,
  placeholder,
  items,
  validate,
}: FormikDropdownInputFieldProps) {
  return (
    <Field name={name} validate={validate} placeholder={placeholder}>
      {({ form: { handleChange, errors, values, touched } }: FieldProps) => (
        <FormControl w="31%" isInvalid={name in errors && name in touched}>
          <Select
            size="md"
            borderRadius={5}
            borderWidth={1}
            borderColor="#556080"
            selectedValue={resolvePath(values, name, '')}
            placeholder={placeholder}
            _selectedItem={{
              bg: 'teal.600',
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={handleChange(name)}
          >
            {items.map((item) => (
              <Select.Item key={item.value} {...item} />
            ))}
          </Select>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Please select DOB!
          </FormControl.ErrorMessage>
        </FormControl>
      )}
    </Field>
  )
}
