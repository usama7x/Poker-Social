import React, { useContext, useMemo } from 'react'
import {
  Provider,
  cacheExchange,
  createClient,
  dedupExchange,
  subscriptionExchange,
  ssrExchange,
  Exchange,
} from 'urql'
import { createClient as createWSClient } from 'graphql-ws'
import { multipartFetchExchange } from '@urql/exchange-multipart-fetch'
import { authExchange } from '@urql/exchange-auth'
import { getToken } from '../../services/authentication'
import { AuthContext } from 'app/contexts/auth'
import { GRAPHQL_URL, GRAPHQL_WS_URL } from 'app/constants'

async function getAuth({ authState }) {
  if (!authState) {
    try {
      const token = await getToken()
      return { token }
    } catch (error) {
      return null
    }
  }
  return null
}

function addAuthToOperation({ authState, operation }) {
  // the token isn't in the auth state, return the operation without changes
  if (!authState || !authState.token) {
    return operation
  }

  // fetchOptions can be a function (See Client API) but you can simplify this based on usage
  const fetchOptions =
    typeof operation.context.fetchOptions === 'function'
      ? operation.context.fetchOptions()
      : operation.context.fetchOptions || {}

  return {
    ...operation,
    context: {
      ...operation.context,
      fetchOptions: {
        ...fetchOptions,
        headers: {
          ...fetchOptions.headers,
          Authorization: `Bearer ${authState.token}`,
        },
      },
    },
  }
}

const willAuthError = ({ authState }) => {
  if (!authState) return true
  return false
}

const isServerSide = typeof window === 'undefined'

// The `ssrExchange` must be initialized with `isClient` and `initialState`
const ssr = ssrExchange({
  isClient: !isServerSide,
  initialState: !isServerSide ? (window as any).__URQL_DATA__ : undefined,
})

const wsClient = !isServerSide
  ? createWSClient({
      url: GRAPHQL_WS_URL,
    })
  : null

const exchanges = [
  dedupExchange,
  cacheExchange,
  authExchange({
    getAuth,
    addAuthToOperation,
    willAuthError,
  }),
  wsClient
    ? subscriptionExchange({
        forwardSubscription: (operation) => ({
          subscribe: (sink) => ({
            unsubscribe: wsClient.subscribe(operation, sink),
          }),
        }),
      })
    : null,
  ssr,
  multipartFetchExchange,
].filter((x) => x !== null) as Exchange[]

const createUrqlClient = () =>
  createClient({
    url: GRAPHQL_URL,
    exchanges,
  })

export function GraphQLProvider({ children }: { children: React.ReactNode }) {
  const { user } = useContext(AuthContext)

  const client = useMemo(createUrqlClient, [user])

  return <Provider value={client}>{children}</Provider>
}
