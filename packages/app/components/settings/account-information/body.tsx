import { Column } from 'native-base'
import AllInput from './all-input'
import Footer from './footer'
import Title from './title'

function SettingBody() {
  return (
    <Column bg={'#1A2235'} p={3} pl={12}>
      <Title />
      <AllInput />
      <Footer />
    </Column>
  )
}

export default SettingBody
