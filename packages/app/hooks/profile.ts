import { useUserQuery } from 'app/generates'
import { useEffect, useMemo } from 'react'
import { useAuth } from './auth'

export function useProfile() {
  const { user } = useAuth()
  const [{ data }, fetch] = useUserQuery({
    pause: true,
    variables: {
      username: user?.username ?? '',
    },
    requestPolicy: 'network-only',
  })

  useEffect(() => {
    user && fetch()
  }, [user])

  const profile = useMemo(() => data?.user, [data?.user])
  return profile
}
