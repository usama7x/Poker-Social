import { EventContext } from 'app/contexts/event'
import { useContext, useEffect } from 'react'

export function useEvent(event: string, callback: any) {
  const [subscribe, unsubscribe, _dispatch] = useContext(EventContext)

  useEffect(() => {
    subscribe!(event, callback)

    return () => unsubscribe!(event, callback)
  }, [subscribe, unsubscribe, event, callback])
}

export function useEventDispatch() {
  const [_, __, dispatch] = useContext(EventContext)

  return dispatch!
}
