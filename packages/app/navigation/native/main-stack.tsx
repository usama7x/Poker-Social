import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack'
import { NavStackNavigator } from './nav-stack'
import { CreatePostscreen } from 'app/features/post/create-post-screen'
import { PostCommentsScreen } from 'app/features/post/comments-screen'
import { NotificationScreen } from 'app/features/notification/screen'
import { SettingScreen } from 'app/features/settings/screen'
import { ProfileScreen } from 'app/features/profile/screen'
import { PasswordScreen } from 'app/features/settings/password-screen'
import { EmailScreen } from 'app/features/settings/email-screen'
import { PrivacyScreen } from 'app/features/settings/privacy-screen'
import { TermsOfServiceScreen } from 'app/features/settings/terms-service-screen'
import { CommunityGuidelinesScreen } from 'app/features/settings/community-guidelines-screen'
import { AdsChoicesScreen } from 'app/features/settings/ads-choices-screen'
import { CookiePolicyScreen } from 'app/features/settings/cookie-policy-screen'
import { AboutScreen } from 'app/features/settings/about-screen'
import { FriendsScreen } from 'app/features/friends/friends-screen'
import { FriendRequestsScreen } from 'app/features/friends/friend-requests-screen'
import { SearchScreen } from 'app/features/search/screen'

const MainStack = createStackNavigator()

export function MainStackNavigator() {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerShown: false,
      }}
      initialRouteName="NavStack"
    >
      <MainStack.Screen name="Nav" component={NavStackNavigator} />
      <MainStack.Screen
        options={{
          ...TransitionPresets.DefaultTransition,
        }}
        name="Search"
        component={SearchScreen}
      />
      <MainStack.Screen
        options={{
          ...TransitionPresets.DefaultTransition,
        }}
        name="Profile"
        component={ProfileScreen}
      />
      <MainStack.Screen
        options={{
          ...TransitionPresets.DefaultTransition,
        }}
        name="AllFriends"
        component={FriendsScreen}
      />
      <MainStack.Screen
        options={{
          ...TransitionPresets.DefaultTransition,
        }}
        name="AllFriendRequests"
        component={FriendRequestsScreen}
      />
      <MainStack.Screen
        options={{
          ...TransitionPresets.ModalTransition,
        }}
        name="CreatePost"
        component={CreatePostscreen}
      />
      <MainStack.Screen
        options={{
          ...TransitionPresets.ModalTransition,
        }}
        name="Post"
        component={PostCommentsScreen}
      />
      <MainStack.Screen
        options={{
          ...TransitionPresets.DefaultTransition,
        }}
        name="Notifications"
        component={NotificationScreen}
      />
      <MainStack.Screen
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
        name="Settings"
        component={SettingScreen}
      />
      <MainStack.Screen
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
        name="Password"
        component={PasswordScreen}
      />
      <MainStack.Screen
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
        name="Email"
        component={EmailScreen}
      />
      <MainStack.Screen
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
        name="Privacy"
        component={PrivacyScreen}
      />
      <MainStack.Screen
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
        name="TermsOfService"
        component={TermsOfServiceScreen}
      />
      <MainStack.Screen
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
        name="CommunityGuidelines"
        component={CommunityGuidelinesScreen}
      />
      <MainStack.Screen
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
        name="CookiePolicy"
        component={CookiePolicyScreen}
      />
      <MainStack.Screen
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
        name="AdsChoices"
        component={AdsChoicesScreen}
      />
      <MainStack.Screen
        options={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
        name="About"
        component={AboutScreen}
      />
    </MainStack.Navigator>
  )
}
