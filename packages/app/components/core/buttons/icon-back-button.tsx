import { ArrowBackIcon, IconButton } from 'native-base'
import React from 'react'

type IconButtonProps = {
  onPress?: () => void
}

function IconBackButton({ onPress }: IconButtonProps) {
  return (
    <IconButton
      p={0}
      m={0}
      size="sm"
      variant="unstyled"
      onPress={onPress}
      icon={<ArrowBackIcon size={5} color="#3ABEFE" />}
    />
  )
}

export default IconBackButton
