import React from 'react'
import { ForgotForm } from 'app/components/auth/forgot/form'
import { Flex } from 'native-base'
import { ImageBackground } from 'react-native'

const image = { uri: 'https://i.ibb.co/3mJQcFY/bgmain-3.png' }

function ForgotScreen() {
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={{ flex: 1, justifyContent: 'center' }}
    >
      <Flex flex="1" flexDirection="row" justifyContent="center">
        <ForgotForm />
      </Flex>
    </ImageBackground>
  )
}

export default ForgotScreen
