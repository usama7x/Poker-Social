import React, { useEffect, useRef, useState } from 'react'
import { Box, Column, FlatList, Spinner, StatusBar, Text } from 'native-base'
import { useSearchUsersQuery } from 'app/generates'
import { SearchUserCard } from 'app/components/search/user-card'
import SearchBar from 'app/components/core/searchbar'

export function SearchScreen() {
  const searchBarRef = useRef<any>(null)
  const [searchText, setSearchText] = useState('')

  const [{ data, fetching }] = useSearchUsersQuery({
    variables: {
      query: searchText,
    },
    requestPolicy: 'network-only',
  })

  useEffect(() => {
    if (searchBarRef.current) {
      setTimeout(() => searchBarRef.current.focus(), 0)
    }
  }, [searchBarRef])

  return (
    <Column
      flex={1}
      bg="#0A0D14"
      maxW={800}
      width="full"
      py={8}
      px={4}
      space={4}
    >
      <Box h={10}>
        <SearchBar
          innerRef={searchBarRef}
          showSoftInputOnFocus={true}
          state={[searchText, setSearchText]}
        />
      </Box>
      {fetching ? (
        <Spinner size="lg" />
      ) : (
        <FlatList
          keyboardShouldPersistTaps="always"
          data={
            searchText
              ? data?.searchUsers.filter(
                  (s) => !s.username.includes('DISABLED')
                )
              : []
          }
          ItemSeparatorComponent={() => <Box height={4} />}
          ListEmptyComponent={() => (
            <Text textAlign="center">
              {searchText ? 'No results found' : 'Type into the search bar.'}
            </Text>
          )}
          keyExtractor={(item) => item.username}
          renderItem={({ item }) => <SearchUserCard {...item} />}
        />
      )}

      <StatusBar backgroundColor="#0A0D14" />
    </Column>
  )
}
