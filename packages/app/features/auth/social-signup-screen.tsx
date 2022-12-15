import {  Flex, ScrollView } from 'native-base'
import React from 'react'
import { ImageBackground } from 'react-native'
import { SocialSignUpForm } from './../../components/auth/social-signup/form/index'

const image = { uri: 'https://i.ibb.co/3mJQcFY/bgmain-3.png' }

export function SocialSignupScreen() {
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={{ flex: 1, justifyContent: 'center' }}
    >
      <ScrollView>
        <Flex flex="1" flexDirection="row" justifyContent="center">
          <SocialSignUpForm />
        </Flex>
      </ScrollView>
    </ImageBackground>
  )
}
