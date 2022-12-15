import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { UserDocument, useUserQuery } from 'app/generates'
import { useClient } from 'urql'

interface UserState {
  user?: {
    id: string
    name: string
    email: string
    username: string
    profileImage: {
      url: string
      hash: string
    }
  }
  fetch: (username: string) => void
}

const useUserStore = create<UserState>()(
  devtools(
    persist((set) => ({
      user: undefined,
      fetch: async (username) => {
        const client = useClient()
        const { data, error } = await client
          .query(UserDocument, { username })
          .toPromise()

        console.log(data, error)

        set({ user: undefined })
      },
    }))
  )
)

// const {} = useUserStore((store) => store.user)
