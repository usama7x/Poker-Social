import React from 'react'
import { Box, Center, HStack, Pressable, Text } from 'native-base'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import Ionicons from '@expo/vector-icons/Ionicons'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { useAuth } from 'app/hooks/auth'

const icons = {
  home: (
    <MaterialCommunityIcons
      mb="1"
      name="home-outline"
      color="white"
      size={24}
    />
  ),
  friends: <Ionicons mb="1" name="people-outline" color="white" size={24} />,
  profile: (
    <MaterialCommunityIcons
      mb="1"
      name="account-outline"
      color="white"
      size={24}
    />
  ),
  watch: <Ionicons mb="1" color="white" name="tv-outline" size={24} />,
  menu: <Ionicons mb="1" color="white" name="menu-outline" size={24} />,
}

function AppBottomBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { user } = useAuth()

  return (
    <Box
      bg={{
        linearGradient: {
          colors: ['#005594', '#11224A'],
          start: [0, 0],
          end: [0, 1],
        },
      }}
      safeAreaTop
      width="100%"
      alignSelf="center"
    >
      <HStack alignItems="center" safeAreaBottom shadow={6}>
        {state.routes.map((route, index) => {
          const descriptor = descriptors[route.key]
          const options = descriptor?.options!

          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name

          const isFocused = state.index === index

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved

              if (route.name === 'Profile' || route.name === 'Friends') {
                navigation.navigate({
                  name: route.name,
                  merge: true,
                  params: {
                    username: user!.username,
                  },
                } as any)
              }
              navigation.navigate({
                name: route.name,
                merge: true,
              } as any)
            }
          }

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            })
          }

          return (
            <Pressable
              //   cursor="pointer"
              key={label.toString()}
              opacity={isFocused ? 1 : 0.5}
              py="2"
              flex={1}
              onPress={onPress}
            >
              <Center>
                {icons[route.name.toLowerCase()]}
                <Text color="white" fontSize="12">
                  {label as any}
                </Text>
              </Center>
            </Pressable>
          )
        })}
      </HStack>
    </Box>
  )
}

export default AppBottomBar
