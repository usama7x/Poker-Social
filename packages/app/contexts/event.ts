import { createContext } from 'react'

export const EventContext = createContext([
  (_event, _cb) => {}, // subscribe
  (_event, _cb) => {}, // unsubscribe
  (_event, _payload) => {}, // dispatch
])
