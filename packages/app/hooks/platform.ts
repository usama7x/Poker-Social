import { useEffect, useMemo, useState } from 'react'
import { Platform } from 'react-native'
import { useMediaQuery } from 'native-base'

/**
 * Minimum width to use for the tablet layout.
 */
const TABLET_MIN_WIDTH = 768

/**
 * Minimum width to use for the desktop layout.
 */
const DESKTOP_MIN_WIDTH = 1024

/**
 * @returns true if the platform is web otherwise false
 */
export const isWeb = Platform.OS === 'web'

/**
 * Return boolean hooks to detect platform size
 *
 */
export function usePlatform() {
  const [hasMounted, setMouted] = useState(false)

  useEffect(() => {
    setMouted(true)
  }, [])

  const [isTabletSize = false] = useMediaQuery({
    minWidth: TABLET_MIN_WIDTH,
  })

  const [isDesktopSize = false] = useMediaQuery({
    minWidth: DESKTOP_MIN_WIDTH,
  })

  const isTablet = useMemo(
    () => hasMounted && isTabletSize,
    [isDesktopSize, hasMounted]
  )

  const isDesktop = useMemo(
    () => hasMounted && isDesktopSize,
    [isDesktopSize, hasMounted]
  )

  return {
    isWeb,
    isDesktop,
    isTablet,
  }
}
