import React from 'react'
import { Flex, ScrollView } from 'native-base'
import { ImageBackground } from 'react-native'
import { SignUpForm } from 'app/components/auth/signup/form'

const image = { uri: 'https://i.ibb.co/3mJQcFY/bgmain-3.png' }

function SignUpScreen() {
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={{ flex: 1, justifyContent: 'center' }}
    >
      <ScrollView>
        <Flex flex="1" flexDirection="row" justifyContent="center">
          <SignUpForm />
        </Flex>
      </ScrollView>
    </ImageBackground>
  )
}

export default SignUpScreen
