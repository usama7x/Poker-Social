import { ProfileScreen } from 'app/features/profile/screen'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

export default function Profile() {
  const router = useRouter()

  const usernameParam = useMemo(
    () =>
      router.asPath === '/[username]' ? undefined : router.asPath.split('/')[1],
    [router.asPath]
  )

  return <ProfileScreen usernameParam={usernameParam} />
}
