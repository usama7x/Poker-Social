import { EditIcon } from 'app/assets/icons'
import Entypo from '@expo/vector-icons/Entypo'
import { Box, Column, Icon, Input, Pressable, Row, Text } from 'native-base'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useState } from 'react'
type MainProps = {
  name?: string
  type?: 'text' | 'password'
  placeholder?: string
  icon?: any
  disabled?: boolean
  value?: string
  setValue?: (value: string) => void
  editAllowed?: boolean
  edit?: boolean
  onEditPressed?: (value: boolean) => void
}

function InputFieldComponent({
  name,
  type = 'text',
  placeholder,
  icon,
  value,
  disabled = false,
  setValue,
  editAllowed = false,
  edit = false,
  onEditPressed,
}: MainProps) {
  const inputType = "text"
  const [show, setShow] = useState(type !== 'password')
  return (
    <Column w="90%" p={2} space={1}>
      <Text ml={10} pl={4} color="#2E92C4" fontSize="20">
        {name}
      </Text>
      <Row space={2} alignItems="center">
        <Box size={6}>{icon}</Box>
        <Input
          h={46}
          isDisabled={disabled}
          value={value}
          onChangeText={setValue}
          placeholder={placeholder}
          variant="rounded"
          flexGrow={1}
          type={show ? inputType : type}
          px={6}
          fontSize="21"
          backgroundColor="black"
          InputRightElement={
            type === 'password' && true ? (
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
        {editAllowed && type == 'text' && (
          <Pressable
            onPress={() => {
              onEditPressed && onEditPressed(!edit)
            }}
          >
            <Box size={7}>
              {!edit ? (
                <EditIcon color="#2E92C4" />
              ) : (
                <Entypo color="red" name="cross" size={24} />
              )}
            </Box>
          </Pressable>
        )}
      </Row>
    </Column>
  )
}

export default InputFieldComponent
