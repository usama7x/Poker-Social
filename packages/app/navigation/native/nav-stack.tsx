import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../../features/home/screen'
import { ProfileScreen } from '../../features/profile/screen'
import { Menuscreen } from 'app/features/menu/screen'
import { ShortFriendsScreen } from 'app/features/friends/short-friends-screen'
import AppBottomBar from 'app/components/core/bottom-bar'
import AppHeader from 'app/components/core/app-header'

const Tab = createBottomTabNavigator()

export function NavStackNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <AppBottomBar {...props} />}
      screenOptions={{
        header: (props) => <AppHeader />,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Friends" component={ShortFriendsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Menu" component={Menuscreen} />
    </Tab.Navigator>
  )
}
