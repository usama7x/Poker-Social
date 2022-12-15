import { Column } from 'native-base'
import { NotificationList } from 'app/components/notification/List'
import { PageHeader } from 'app/components/core/page-header'

export function NotificationScreen() {
  return (
    <Column flex={1} w="full" maxW="800px" backgroundColor="#1A2235">
      <PageHeader title="Notifications" />
      <NotificationList />
    </Column>
  )
}
