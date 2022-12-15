import MenuActions from 'app/components/menu/actions'
import MenuContent from 'app/components/menu/content'
import MenuHeader from 'app/components/menu/header'
import { Column, ScrollView } from 'native-base'

export function Menuscreen() {
  return (
    <Column bg="#0A0D14" flex={1} w="full" maxW={800}>
      <MenuHeader />
      <ScrollView>
        <MenuContent />
        <MenuActions />
      </ScrollView>
    </Column>
  )
}
