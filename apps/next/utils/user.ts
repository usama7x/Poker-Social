import { withSSRContext } from 'aws-amplify'
import { AuthClass } from '@aws-amplify/auth/lib-esm/Auth'

export async function isLoggedIn(context: any) {
  const { Auth }: { Auth: AuthClass } = withSSRContext(context)
  try {
    const user = await Auth.currentAuthenticatedUser()
    return {
      props: {
        username: user.username,
        authenticated: false,
      },
    }
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    }
  }
}
