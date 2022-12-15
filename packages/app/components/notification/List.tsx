import { Column, FlatList } from 'native-base'
import React, { useEffect, useMemo, useState } from 'react'
import { NotificationCount } from './notification-count'
import { NotificationListItem } from './notification-list-item'
import {
  useNotificationsQuery,
  useWatchNotificationsSubscription,
  FriendRequestNotification,
  GeneralNotification,
} from 'app/generates'

export function NotificationList() {
  const [friendRequestNotifications, setFriendRequestNotifications] = useState<
    FriendRequestNotification[]
  >([])

  const [generaltNotifications, setGeneralNotifications] = useState<
    GeneralNotification[]
  >([])

  const [{ data }] = useNotificationsQuery({
    requestPolicy: 'network-only',
  })
  const [{ data: dataSub }] = useWatchNotificationsSubscription()

  useEffect(() => {
    const friendRequests = data?.notifications.friendRequests
    const general = data?.notifications.general

    if (friendRequests?.length) {
      setFriendRequestNotifications(friendRequests)
    }

    if (general?.length) {
      setGeneralNotifications(general as any)
    }
  }, [data])

  useEffect(() => {
    const friendRequest = dataSub?.watchNotifications.friendRequest

    if (friendRequest) {
      setFriendRequestNotifications([
        ...friendRequestNotifications,
        friendRequest,
      ])
    }
  }, [dataSub])

  // Sorting Posts
  const filteredNotifications = useMemo(
    () =>
      [...friendRequestNotifications, ...generaltNotifications].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ),
    [friendRequestNotifications, generaltNotifications]
  )

  return (
    <Column px="2">
      {filteredNotifications && (
        <NotificationCount count={filteredNotifications.length} />
      )}

      {data?.notifications && (
        <FlatList
          data={filteredNotifications}
          renderItem={({ item }) =>
            item.__typename === 'FriendRequestNotification' ? (
              <NotificationListItem
                name={item.fromName}
                username={item.fromUsername}
                profileImage={item.fromProfileImage?.url}
                text={`sent you a friend request`}
              />
            ) : item.__typename === 'GeneralNotification' ? (
              <NotificationListItem
                profileImage={item.media?.url}
                text={item.message}
              />
            ) : null
          }
        />
      )}
    </Column>
  )
}
