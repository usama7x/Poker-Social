import { Column } from 'native-base'
import { LeftSideBody } from '../left-side/body'
import { LeftSideHeader } from '../left-side/header'

export function RightSide() {
  return (
    <Column
      bg="#1A2235"
      maxW={400}
      width="full"
      position="fixed"
      right={0}
      bottom={0}
    >
      <LeftSideHeader />
      <LeftSideBody />
    </Column>
  )
}
