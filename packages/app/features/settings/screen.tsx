import { PageHeader } from 'app/components/core/page-header'
import SettingBody from 'app/components/settings/account-information/body'
import { Column, ScrollView } from 'native-base'

export function SettingScreen() {
  return (
    <>
      <Column flex={1} bg={'#0E121C'} w="100%" maxW={'800'} minH="500px">
        <PageHeader title="Settings" />
        <ScrollView keyboardShouldPersistTaps="handled">
          <SettingBody />
        </ScrollView>
      </Column>
    </>
  )
}
