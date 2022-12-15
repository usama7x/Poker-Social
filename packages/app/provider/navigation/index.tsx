import React from 'react'
import * as Linking from 'expo-linking'
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { useMemo } from 'react'
import { StatusBar } from 'native-base'
import { navigationRef } from './navigation'

export function NavigationProvider({
  children,
}: {
  children: React.ReactElement
}) {
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={{
        dark: true,
        colors: { ...DarkTheme.colors, background: '#000' },
      }}
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL('/')],
          config: {
            screens: {
              Auth: {
                screens: {
                  Login: 'login',
                  Signup: 'signup',
                  Reset: 'reset/:id',
                  Forgot: 'forgot',
                },
              },
              Main: {
                screens: {
                  Nav: {
                    screens: {
                      Home: '',
                      Menu: 'menu',
                      Friends: 'friends',
                    },
                  },
                  Profile: 'profile/:username',
                  Search: 'search',
                  AllFriends: 'profile/:username/friends',
                  AllFriendRequests: 'friends-requests',
                  Post: 'post/:id',
                  CreatePost: 'create-post',
                  Notifications: 'notifications',
                  Settings: 'settings',
                  Password: 'settings/password',
                  Email: 'settings/email',
                  About: 'about',
                  Privacy: 'privacy',
                  TermsOfService: 'terms-of-service',
                  CommunityGuidelines: 'community-guidelines',
                  CookiePolicy: 'cookie-policy',
                  AdsChoices: 'ads-choices',
                },
              },
            },
          },
        }),
        []
      )}
    >
      <StatusBar backgroundColor="#0D111D" />
      {children}
    </NavigationContainer>
  )
}
