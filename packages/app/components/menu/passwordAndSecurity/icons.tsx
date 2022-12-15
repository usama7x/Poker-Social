import { PasswordKeyIcon } from 'app/assets/icons/password-key-icon'
import { IconButton } from 'native-base'
import React from 'react'

function KeyIcons() {
  return (
    <IconButton
      width="30"
      height="30"
      borderRadius={'full'}
      variant="solid"
      background="transparent"
      _icon={{
        size: 'xl',
      }}
      _hover={{
        bg: 'transparent',
      }}
    >
      <PasswordKeyIcon color="#3ABEFE" />
    </IconButton>
  )
}

export default KeyIcons
