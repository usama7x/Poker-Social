import { Field, FieldProps } from 'formik'
import { FormControl, Icon, Input, Stack } from 'native-base'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useState } from 'react'

type FormikInputFieldProps = {
  type: string
  name: string
  placeholder?: string
  validate?: (value: string) => any
}

export function FormikInputField({
  type,
  name,
  placeholder = '',
  validate,
}: FormikInputFieldProps) {
  const [show, setShow] = useState(type !== 'password')

  return (
    <Field name={name} validate={validate} placeholder={placeholder}>
      {({
        form: { handleChange, errors, values, handleBlur, touched },
      }: FieldProps) => (
        <FormControl isInvalid={name in errors && name in touched}>
          <Stack mb={4}>
            <Input
              style={{
                shadowColor: 'white',
                shadowRadius: 10,
                shadowOpacity: 0,
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
              }}
              autocomplete={true}
              blurOnSubmit={false}
              type={show ? 'text' : 'password'}
              placeholder={placeholder}
              onChangeText={handleChange(name)}
              value={values[name]}
              variant="unstyled"
              onBlur={handleBlur(name)}
              borderWidth={0}
              borderBottomWidth={2}
              fontSize="md"
              fontWeight="semibold"
              borderRadius={0}
              pl={0}
              py={1}
              borderBottomColor="#3ABEFE"
              placeholderTextColor="brand.accent"
              InputRightElement={
                type === 'password' && values[name] ? (
                  <Icon
                    as={
                      <MaterialIcons
                        name={show ? 'visibility' : 'visibility-off'}
                      />
                    }
                    size={5}
                    mr="2"
                    color="muted.400"
                    onPress={() => setShow(!show)}
                  />
                ) : undefined
              }
              _invalid={{
                _stack: {
                  style: {
                    borderBottomColor: 'error.500',
                  },
                },
              }}
            />
            <FormControl.ErrorMessage>{errors[name]}</FormControl.ErrorMessage>
          </Stack>
        </FormControl>
      )}
    </Field>
  )
}
