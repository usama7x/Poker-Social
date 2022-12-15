import React from 'react'
import { LoginForm } from 'app/components/auth/login/form'
import { Flex } from 'native-base'
import { ImageBackground } from 'react-native'
import { IMAGES } from 'app/assets/images'

function LoginScreen() {
  return (
    <ImageBackground
      source={IMAGES.BackgroundImage}
      resizeMode="cover"
      style={{ flex: 1, justifyContent: 'center' }}
    >
      <Flex flex="1" flexDirection="row" justifyContent="center">
        <LoginForm />
      </Flex>
    </ImageBackground>
  )
}

export default LoginScreen
