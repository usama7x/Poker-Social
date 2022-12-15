import { useRouter } from 'next/router'
import { useCallback } from 'react'

export function useAppRouter() {
  const router = useRouter()

  const push = useCallback((path: string, params: any) => {
    router.push(path, params)
  }, [])

  const replace = useCallback((path: string) => {
    router.replace(path)
  }, [])

  const reset = useCallback((path: string) => {
    router.replace(path)
  }, [])

  const back = useCallback(() => {
    router.back()
  }, [])

  return { push, replace, reset, back }
}
