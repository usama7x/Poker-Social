import { FriendsIcon } from 'app/assets/icons/friends'
import { FriendsActiveIcon } from 'app/assets/icons/friends-active'
import { HomeIcon } from 'app/assets/icons/home'
import { HomeActiveIcon } from 'app/assets/icons/home-active'
import { MessageIcon } from 'app/assets/icons/message'
import { MessageActiveIcon } from 'app/assets/icons/message-active'
import { NotificationIcon } from 'app/assets/icons/notification'
import { NotificationActiveIcon } from 'app/assets/icons/notification-active'
import { UserAvatar } from 'app/components/core/user-avatar'
import { useAuth } from 'app/hooks/auth'
import { Row } from 'native-base'
import React, { useMemo } from 'react'
import { useRouter } from 'next/router'
import MenuComponent from './menu-component'

export default function MenuIcon() {
  const router = useRouter()
  const { user } = useAuth()

  const data = useMemo(
    () => [
      {
        iname: 'Home',
        icon: router.asPath == '/' ? <HomeActiveIcon /> : <HomeIcon />,
        color: router.asPath == '/' ? '#34A8E1' : 'white',
        link: '/',
      },
      {
        iname: 'Friends',
        icon:
          router.asPath == '/friends' ? <FriendsActiveIcon /> : <FriendsIcon />,
        color: router.asPath == '/friends' ? '#34A8E1' : 'white',
        link: '/friends',
      },

      {
        iname: 'Profile',
        icon: <UserAvatar width={46} height={46} />,
        color: router.asPath == '/' + user?.username ? '#34A8E1' : 'white',
        link: '/' + user?.username,
      },
      {
        iname: 'Notifications',
        icon:
          router.asPath == '/notification' ? (
            <NotificationActiveIcon />
          ) : (
            <NotificationIcon />
          ),
        color: router.asPath == '/notification' ? '#34A8E1' : 'white',
        link: '/notification',
      },
      {
        iname: 'Message',
        icon: router.asPath == '' ? <MessageActiveIcon /> : <MessageIcon />,
        color: router.asPath == '//' ? '#34A8E1' : 'white',
        link: '//',
      },
    ],
    [JSON.stringify(user), router.asPath]
  )
  return (
    <Row alignItems="center" space={24}>
      {data.map(({ iname, icon, link, color }, index) => (
        <MenuComponent
          tname={iname}
          icon={icon}
          key={index}
          color={color}
          link={link}
        />
      ))}
    </Row>
  )
}
