import { Row } from 'native-base'
import React from 'react'

import MenuIcon from './center/menu-icon.web'
import Logo from './left-side/logo'
import TopBarSearch from './right-side/searchbar'

export default function TopBar() {
  return (
    <Row
      h={105}
      bg={{
        linearGradient: {
          colors: ['#006CBF', '#020304'],
          start: [0, 0],
          end: [0, 1],
        },
      }}
      position="fixed"
      top={0}
      w="full"
      zIndex={999}
      justifyContent="space-around"
      alignItems="center"
      py={2}
    >
      <Logo />
      <MenuIcon />
      <TopBarSearch />
    </Row>
  )
}
