import { useMemo } from 'react'
import { isWeb } from './platform'

export function useProfileLink(username: string) {
  return useMemo(() => {
    return `${isWeb ? '' : '/profile'}/${username}`
  }, [username])
}
