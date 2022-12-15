import React from 'react'
import {
  initAmplify,
  getCurrentAuthenticatedUser,
  signInWithEmail,
  signOut,
  signInWithGoogle,
  signInWithFacebook,
} from 'app/services/authentication'
import { AuthContext, CurrentUser } from 'app/contexts/auth'

function covertCognitoUserToUser(cognitoUser: any): CurrentUser {
  const payload = cognitoUser.signInUserSession.idToken.payload
  return {
    userId: payload.userId,
    username: payload['cognito:username'],
  }
}

const providersMap = {
  google: signInWithGoogle,
  facebook: signInWithFacebook,
}

// Create a "controller" component that will calculate all the data that we need to give to our
// components bellow via the `UserContext.Provider` component. This is where the Amplify will be
// mapped to a different interface, the one that we are going to expose to the rest of the app.
export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState<CurrentUser | null>(null)
  const [isLoading, setLoading] = React.useState(true)

  React.useEffect(() => {
    // attempt to fetch the info of the user that was already logged in
    getCurrentAuthenticatedUser()
      .then((user) => setUser(covertCognitoUserToUser(user)))
      .catch(() => setUser(null))
      .finally(() => setLoading(false))
  }, [])

  // We make sure to handle the user update here, but return the resolve value in order for our components to be
  // able to chain additional `.then()` logic. Additionally, we `.catch` the error and "enhance it" by providing
  // a message that our React components can use.
  const login = async (usernameOrEmailOrPhone: string, password: string) => {
    try {
      const user = await signInWithEmail(usernameOrEmailOrPhone, password)
      setUser(covertCognitoUserToUser(user))
    } catch (err) {
      if (err.code === 'UserNotFoundException') {
        err.message = 'Invalid username or password'
      }

      throw err
    }
  }

  const socialSignIn = async (provider: string) => {
    const func = providersMap[provider]

    if (!func) {
      throw new Error('Provider not supported')
    }

    const result = await func()

    if (result.isSuccess) {
      setUser(covertCognitoUserToUser(result.data))
    }
    return result
  }

  // same thing here
  const logout = async () => {
    await signOut()
    setUser(null)
  }

  // Make sure to not force a re-render on the components that are reading these values,
  // unless the `user` value has changed. This is an optimisation that is mostly needed in cases
  // where the parent of the current component re-renders and thus the current component is forced
  // to re-render as well. If it does, we want to make sure to give the `UserContext.Provider` the
  // same value as long as the user data is the same. If you have multiple other "controller"
  // components or Providers above this component, then this will be a performance booster.
  const values = React.useMemo(
    () => ({
      user,
      login,
      socialSignIn,
      logout,
      isLoading,
    }),
    [user, isLoading]
  )

  // Finally, return the interface that we want to expose to our other components
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}
