import { createStackNavigator } from '@react-navigation/stack'
import { TransitionPresets } from '@react-navigation/stack'
import { useAuth } from 'app/hooks/auth'
import { Box, Spinner } from 'native-base'
import { AuthStackNavigator } from './auth-stack'
import { MainStackNavigator } from './main-stack'

const Stack = createStackNavigator()

export function NativeNavigation() {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return <Box />
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        cardStyle: { backgroundColor: '#000000' },
        cardShadowEnabled: false,
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      {user ? (
        <Stack.Screen name="Main" component={MainStackNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthStackNavigator} />
      )}
    </Stack.Navigator>
  )
}
