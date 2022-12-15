import { Row, Button } from 'native-base'
import React, { useState } from 'react'
import SearchBar from '../core/searchbar'
import { useRouter } from 'solito/router'
import { AddPostIcon } from 'app/assets/icons/add-post-icon'
import { CreatePostDialog } from './create-post-dialog'
import { usePlatform } from 'app/hooks/platform'

export function HomeHeader() {
  const router = useRouter()
  const { isDesktop } = usePlatform()

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Row p={2} space={2} bg="#121724">
      <SearchBar key="search-bar" />

      {<CreatePostDialog isOpen={isOpen} setIsOpen={setIsOpen} />}

      <Button
        onPress={() => {
          if (isDesktop) setIsOpen(true)
          else router.push('/create-post')
        }}
        m={0}
        p={0}
        bg="transparent"
        key="add-post"
        varient="unstyled"
        _hover={{ bg: 'transparent' }}
        _pressed={{
          bg: 'transparent',
        }}
      >
        <AddPostIcon />
      </Button>
    </Row>
  )
}
