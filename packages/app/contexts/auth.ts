import { createContext } from 'react'

export type CurrentUser = {
  userId: string
  username: string
}

// Create a context that will hold the values that we are going to expose to our components.
// Don't worry about the `null` value. It's gonna be *instantly* overriden by the component below
export const AuthContext = createContext<{
  user?: CurrentUser | null
  isLoading?: boolean | null
  login: (usernameOrEmailOrPhone: string, password: string) => Promise<any>
  socialSignIn: (provider: string) => Promise<{
    isSuccess: boolean
    error: Error | undefined | null
    data: any
  }>

  logout: () => Promise<void>
}>({
  login: async () => {},
  socialSignIn: async () => ({ isSuccess: false, error: null, data: null }),
  logout: async () => {},
})
