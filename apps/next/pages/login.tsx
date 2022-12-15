import { withSSRContext } from 'aws-amplify'
import { AuthClass } from '@aws-amplify/auth/lib-esm/Auth'
import LoginScreen from 'app/features/auth/login-screen'

export default LoginScreen

export async function getServerSideProps(context: any) {
  const { Auth }: { Auth: AuthClass } = withSSRContext(context)
  try {
    await Auth.currentAuthenticatedUser()
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    }
  } catch (err) {
    return {
      props: {
        authenticated: false,
      },
    }
  }
}
