import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack'

import LoginScreen from '../..//features/auth/login-screen'
import SignUpScreen from '../..//features/auth/signup-screen'
import ResetScreen from '../..//features/auth/reset-screen'
import ForgotScreen from '../..//features/auth/forgot-screen'

const AuthStack = createStackNavigator()

export function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        cardStyle: { backgroundColor: '#FFFFFF' },
        cardShadowEnabled: false,
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
      initialRouteName="login"
    >
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
      <AuthStack.Screen
        name="Signup"
        component={SignUpScreen}
        options={{
          title: 'Signup',
        }}
      />
      <AuthStack.Screen
        name="Reset"
        component={ResetScreen}
        options={{
          title: 'Reset',
        }}
      />
      <AuthStack.Screen
        name="Forgot"
        component={ForgotScreen}
        options={{
          title: 'Forgot',
        }}
      />
    </AuthStack.Navigator>
  )
}
