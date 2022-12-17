import { Amplify, Auth } from 'aws-amplify'
import { CognitoUser } from '@aws-amplify/auth'
import { API_URL } from '../constants'
import { Platform } from 'react-native'
import { isWeb } from '../hooks/platform'

type SignupParams = {
  username: string
  email: string
  password: string
}

enum SocialProvider {
  Google = 'google',
  Facebook = 'facebook',
  Apple = 'apple',
}

initAmplify()
console.log('---------------------------------------')
console.log(process.env.NODE_ENV == 'development' ? 'localhost' : 'pokersocial.net')

/**
 * Initialize Amplify Auth
 */
export function initAmplify() {
  Amplify.configure({
    Auth: {
      // userPoolId: 'ap-south-1_vVUOxBHCJ',
      userPoolId: 'ap-south-1_8x5zkIDR5',
      // userPoolWebClientId: '4leasfjtpbb31o7a7oggvl1aeo',
      userPoolWebClientId: '4fue3f234hd3fof1praof6lsa5',
      cookieStorage: isWeb
        ? {
          domain: process.env.NODE_ENV == 'development' ? 'localhost' : 'pokersocial.net',
          secure: process.env.NODE_ENV == 'development' ? false : true,
          path: '/',
          expires: 365,
        }
        : undefined,
    },
    ssr: isWeb,
  })
}

/**
 *
 * @returns Google auth module
 */
async function initGoogleAuth() {
  const { GoogleSignin } = await import(
    '@react-native-google-signin/google-signin'
  )

  GoogleSignin.configure({
    webClientId:
      '442761370789-gpiem129dvprm333sqsmmjomp7qgphhp.apps.googleusercontent.com',
    scopes: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
    ],
  })
  return {
    GoogleSignin,
  }
}

/**
 *
 * @returns Facebook auth module
 */
async function initFacebookAuth() {
  const module = await import('react-native-fbsdk-next')
  return module
}

/**
 *
 * @returns current user
 */
export function getCurrentAuthenticatedUser(): Promise<CognitoUser> {
  return Auth.currentAuthenticatedUser()
}

/**
 *
 * @returns current session of user
 */
export async function getCurrentSession() {
  const user = await getCurrentAuthenticatedUser()
  return user.getSignInUserSession()
}

/**
 *
 * @param email email of user
 * @param password password of user
 * @returns CognitoUser object of user
 */
export function signInWithEmail(email: string, password: string) {
  return Auth.signIn(email, password)
}

/**
 *
 * @returns current user
 */
export async function signInWithGoogle() {
  const { GoogleSignin } = await initGoogleAuth()

  await GoogleSignin.hasPlayServices()
  await GoogleSignin.signOut()
  const userInfo = await GoogleSignin.signIn()
  if (!userInfo.idToken) {
    throw new Error('No idToken')
  }
  try {
    return await socialSignIn(SocialProvider.Google, userInfo.idToken)
  } catch (error) {
    if (error.message === 'User not found') {
      return {
        isSuccess: false,
        error: error,
        data: {
          name: userInfo?.user.name,
          pictureUrl: userInfo?.user.photo,
        },
      }
    }
    throw error
  }
}

/**
 *
 * @returns current user
 */
export async function signInWithFacebook() {
  const { LoginManager, AuthenticationToken, AccessToken, Profile } =
    await initFacebookAuth()

  await LoginManager.logInWithPermissions([
    'public_profile',
    'email',
    'user_friends',
  ])
  let token: string | undefined
  if (Platform.OS === 'ios') {
    const result = await AuthenticationToken.getAuthenticationTokenIOS()
    token = result?.authenticationToken
  } else {
    const result = await AccessToken.getCurrentAccessToken()
    token = result?.accessToken
  }
  if (!token) {
    throw new Error('No token')
  }
  try {
    return await socialSignIn(SocialProvider.Facebook, token)
  } catch (error) {
    if (error.message === 'User not found') {
      const profile = await Profile.getCurrentProfile()
      return {
        isSuccess: false,
        error: error,
        data: {
          name: profile?.name,
          pictureUrl: profile?.imageURL,
        },
      }
    }
    throw error
  }
}

export async function socialSignIn(provider: SocialProvider, token: string) {
  const { username, authChallenge } = await getCodeFromOauthToken(
    provider,
    token
  )

  const user = await Auth.signIn(username)

  const response = await Auth.sendCustomChallengeAnswer(user, authChallenge)

  return {
    isSuccess: true,
    error: null,
    data: response,
  }
}

/**
 *
 * @param param0 params of signup
 * @returns
 */
export function signUp({ username, email, password }: SignupParams) {
  return Auth.signUp({
    username,
    password,
    attributes: {
      email,
    },
  })
}

/**
 *
 * @returns void
 */
export function signOut() {
  return Auth.signOut()
}

/**
 *
 * @param email email of user
 * @returns void
 */
export function forgotPassword(email: string) {
  return Auth.forgotPassword(email)
}

/**
 *
 * @param email email of user
 * @param code OTP code sent to the user
 * @param password new password of user
 * @returns
 */
export function resetPassword(email: string, code: string, password: string) {
  return Auth.forgotPasswordSubmit(email, code, password)
}

/**
 *
 * @param oldPassword old password of user
 * @param newPassword new password of user
 * @returns
 */
export async function changePassword(oldPassword: string, newPassword: string) {
  const user = await Auth.currentAuthenticatedUser()
  return await Auth.changePassword(user, oldPassword, newPassword)
}

/**
 *
 * @param email email of user
 * @returns
 */
export async function changeEmail(email: string) {
  const user = await Auth.currentAuthenticatedUser()

  const response = await Auth.updateUserAttributes(user, {
    email,
  })

  await sendVerifyEmailCode()

  return response
}

/**
 *
 * @param phone phone of user
 * @returns
 */
export async function changePhone(phone: string) {
  const user = await Auth.currentAuthenticatedUser()

  const response = await Auth.updateUserAttributes(user, {
    phone_number: '+91' + phone,
  })

  await sendVerifyPhoneCode()

  return response
}

export function sendVerifyEmailCode() {
  return Auth.verifyCurrentUserAttribute('email')
}

export function sendVerifyPhoneCode() {
  return Auth.verifyCurrentUserAttribute('phone_number')
}

export function verifyEmailCode(code: string) {
  return Auth.verifyCurrentUserAttributeSubmit('email', code)
}

export function verifyPhoneCode(code: string) {
  return Auth.verifyCurrentUserAttributeSubmit('phone_number', code)
}

/**
 *
 * @returns JwtToken of user
 */
export async function getToken() {
  const session = await getCurrentSession()
  return session?.getIdToken().getJwtToken()
}

async function getCodeFromOauthToken(provider: SocialProvider, token: string) {
  const response = await fetch(`${API_URL}/auth/tokenlogin`, {
    method: 'POST',
    body: JSON.stringify({ token, provider }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await response.json()

  if (response.status !== 201) {
    throw data
  }

  return data as { username: string; authChallenge: string }
}
