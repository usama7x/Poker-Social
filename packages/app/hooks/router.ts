import { CommonActions, useLinkTo } from '@react-navigation/native'
import { navigationRef } from 'app/provider/navigation/navigation'
import { useCallback } from 'react'
import { getActionFromState, getStateFromPath } from '@react-navigation/native'

export function dispatch(action: any) {
  navigationRef.dispatch(action)
}

export function linkTo(path: string, options?: any) {
  var state = getStateFromPath(path, options)
  var action = getActionFromState(state!)
  if (action !== undefined) {
    dispatch(action)
  }
}

export function useAppRouter() {
  // const linkTo = useLinkTo()

  const push = useCallback((path: any) => {
    if (navigationRef.isReady()) {
      linkTo(path as never)
    }
  }, [])

  const reset = useCallback((path: string) => {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: path }],
        })
      )
    }
  }, [])

  const back = useCallback(() => {
    if (navigationRef.isReady()) {
      navigationRef.goBack()
    }
  }, [])
  return { push, reset, back }
}
