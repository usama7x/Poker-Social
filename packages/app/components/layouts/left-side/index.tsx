import { Column } from 'native-base'
import React from 'react'
import { LeftSideBody } from './body'
import { LeftSideHeader } from './header'

export function LeftSide() {
  return (
    <Column
      maxW={400}
      width="full"
      bg="#1A2235"
      position="fixed"
      left={0}
      h="full"
    >
      <LeftSideHeader />
      <LeftSideBody />
    </Column>
  )
}

export default LeftSide
