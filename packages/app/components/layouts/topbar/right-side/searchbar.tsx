import { ToggleIcon } from 'app/assets/icons/topbaricon/newtopbar/toggle-icon'
import SearchBar from 'app/components/core/searchbar'
import { Box, Button, Column, FlatList, Popover, Row, Text } from 'native-base'
import React, { useEffect } from 'react'
import { useRouter } from 'solito/router'
import { SettingIcon } from 'app/assets/icons/setting-icon'
import { SearchUserCard } from 'app/components/search/user-card'
import { useSearchUsersQuery } from 'app/generates'
import { Pressable } from 'native-base'

export default function TopBarSearch() {
  const { push } = useRouter()

  const [searchText, setSearchText] = React.useState('')
  const [isOpen, setIsOpen] = React.useState(false)

  const [{ data, fetching }, refetch] = useSearchUsersQuery({
    pause: true,
    variables: {
      query: searchText,
    },
    requestPolicy: 'network-only',
  })

  useEffect(() => {
    if (searchText.length > 0) {
      refetch()
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }, [searchText])

  return (
    <Row alignItems="center" space={6}>
      <Column>
        <SearchBar
          backgroundColor="#0E121C"
          state={[searchText, setSearchText]}
          onSearchBlur={() => setIsOpen(false)}
        />
        {isOpen && (
          <Pressable my={1} _hover={{ bg: '#0E121C' }} bg="#1A2235">
            <Box
              position="absolute"
              bg="#1A2235"
              w="full"
              px={4}
              borderRadius={4}
              borderColor="#3ABEFE"
              borderWidth={1}
            >
              <FlatList
                keyboardShouldPersistTaps="always"
                ListHeaderComponent={
                  <Row
                    justifyContent="center"
                    mb={4}
                    p={4}
                    borderBottomWidth="1"
                    borderBottomColor="black"
                  >
                    <Text fontSize="2xl" color="#3ABEFE">
                      Search Results
                    </Text>
                  </Row>
                }
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
                    {searchText
                      ? 'No results found'
                      : 'Type into the search bar.'}
                  </Text>
                )}
                keyExtractor={(item) => item.username}
                renderItem={({ item }) => (
                  <Box
                    borderLeftRadius={50}
                    borderRightRadius={50}
                    py={2}
                    bg="#0E121C"
                    mb={4}
                    px={2}
                  >
                    <SearchUserCard {...item} />
                  </Box>
                )}
              />
            </Box>
          </Pressable>
        )}
      </Column>

      <Button
        bgColor="black"
        w={8}
        h={8}
        borderRadius="50"
        p={0}
        onPress={() => push('/settings')}
        _hover={{ bg: 'transparent', color: 'transparent' }}
        _pressed={{ bg: 'transparent' }}
      >
        <Box mt={2}>
          <Popover
            shouldOverlapWithTrigger={false}
            trapFocus={false}
            trigger={(triggerProps) => {
              return (
                <Button
                  {...triggerProps}
                  colorScheme="transparent"
                  p={0}
                  _pressed={{ bg: 'transparent' }}
                  _hover={{ bg: 'transparent' }}
                >
                  <ToggleIcon color="white" />
                </Button>
              )
            }}
          >
            <Popover.Content accessibilityLabel="settings" mr={2}>
              <Popover.Arrow />
              <Popover.Header bg="#111623">
                <Row alignItems="center" space={2}>
                  <Box size="5">
                    <SettingIcon color="#3ABEFE" />
                  </Box>
                  <Button
                    onPress={() => push('/settings')}
                    background="transparent"
                    p={0}
                    _pressed={{
                      bg: 'transparent',
                    }}
                    _hover={{ bg: 'transparent' }}
                  >
                    <Text bold color="#3ABEFE" fontSize="20">
                      Settings
                    </Text>
                  </Button>
                </Row>
              </Popover.Header>
            </Popover.Content>
          </Popover>
        </Box>
      </Button>
    </Row>
  )
}
