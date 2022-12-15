import { useContext } from 'react'
import { AuthContext } from 'app/contexts/auth'

// We also create a simple custom hook to read these values from. We want our React components
// to know as little as possible on how everything is handled, so we are not only abtracting them from
// the fact that we are using React's context, but we also skip some imports.
export const useAuth = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error(
      '`useUser` hook must be used within a `UserProvider` component'
    )
  }
  return context
}
