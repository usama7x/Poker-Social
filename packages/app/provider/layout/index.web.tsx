import React, { useEffect, useMemo, useState } from 'react'
import TopBar from 'app/components/layouts/topbar'
import { Column, Row, useMediaQuery } from 'native-base'
import { LeftSide } from 'app/components/layouts/left-side'
import { useRouter } from 'next/router'

const guestRoutes = ['/login', '/signup', '/forgot', '/reset']
export function LayoutProvider({ children }) {
  const router = useRouter()
  // Checking if we are on client side
  const [hasMounted, setMouted] = useState(false)
  useEffect(() => {
    setMouted(true)
  }, [])

  const [isMobile] = useMediaQuery({
    maxWidth: 800,
  })
  const isGuest = useMemo(
    () => guestRoutes.includes(router.pathname),
    [router.pathname]
  )

  const isDesktop = useMemo(
    () => hasMounted && !isMobile && !isGuest,

    [isMobile, hasMounted, isGuest]
  )

  return (
    <Column flex={1} bg="#0B0F17">
      {isDesktop && <TopBar />}
      <Row flex={1} justifyContent="center" mt={!isDesktop ? '0' : '105'}>
        {isDesktop && <LeftSide />}
        {children}
        {/* {isDesktop && <RightSide />} */}
      </Row>
    </Column>
  )
}
