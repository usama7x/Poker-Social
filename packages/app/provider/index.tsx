import React from 'react'
import { NavigationProvider } from './navigation'
import { NativeBaseProvider } from 'native-base'
import { AuthProvider } from './auth'
import { GraphQLProvider } from './graphql'
import { EventEmitter } from './event-emitter'
import { LayoutProvider } from './layout'
import { theme, config } from './themes'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NavigationProvider>
      <GraphQLProvider>
        <NativeBaseProvider theme={theme} config={config}>
          <AuthProvider>
            <EventEmitter>
              <LayoutProvider>{children}</LayoutProvider>
            </EventEmitter>
          </AuthProvider>
        </NativeBaseProvider>
      </GraphQLProvider>
    </NavigationProvider>
  )
}
