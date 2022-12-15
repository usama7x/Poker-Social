import React from 'react'
import { ShortUser } from 'app/generates'
import { useProfileLink } from 'app/hooks/profile-link'
import { Row, Text, Column, Button, View, Modal, ScrollView } from 'native-base'
import { useMemo } from 'react'
import { Link as SolitoLink } from 'solito/link'
import { Image } from 'react-native'

type ProfileFriendsProps = {
  username: string
  friends?: ShortUser[]
}

function ProfileFriends({ friends, username }: ProfileFriendsProps) {
  const [modalVisible, setModalVisible] = React.useState(false)
  const [size, setSize] = React.useState('md')

  const handleSizeClick = (newSize) => {
    setSize(newSize)
    setModalVisible(!modalVisible)
  }

  const profileLink = useProfileLink(username)

  const profileFriendsLink = useMemo(
    () => profileLink + '/friends',
    [profileLink]
  )

  return (
    <Column bg="#1A2235" borderRadius="lg" p="4">
      <Modal isOpen={modalVisible} onClose={setModalVisible} size={size}>
        <Modal.Content maxH="212">
          <Modal.CloseButton
            onPress={() => {
              setModalVisible(false)
            }}
          />
          <Modal.Header>All Friends</Modal.Header>
          <Modal.Body>
            <ScrollView>
              <Column>
                {friends?.map((friend) => (
                  <SolitoLink
                    key={friend.username}
                    href={`/${friend.username}`}
                  >
                    <Row
                      key={friend.username}
                      alignItems="center"
                      justifyContent="space-between"
                      p="2"
                    >
                      <Row alignItems="center">
                        <Image
                          source={{ uri: friend.avatar }}
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            marginRight: 10,
                          }}
                        />
                        <Text>{friend.username}</Text>
                      </Row>
                      <Text>View Profile</Text>
                    </Row>
                  </SolitoLink>
                ))}
              </Column>
            </ScrollView>
          </Modal.Body>
        </Modal.Content>
      </Modal>
      <Column mb="4" mt="3">
        <Row ml="6" justifyContent="space-between" alignItems="center">
          <SolitoLink href="/">
            <Text fontSize="20" bold mr="1">
              Friends ({friends?.length ?? 0})
            </Text>
          </SolitoLink>

          <Button
            rounded="3xl"
            size="sm"
            bg="#3ABEFE"
            _hover={{ bg: '#007EBB' }}
            _pressed={{ bg: '#007EBB' }}
            _text={{ color: 'white' }}
            marginRight="6"
          >
            {/* <SolitoLink href={profileFriendsLink}> */}
            {/* <SolitoLink href="/friends"> */}
            <Text fontSize={14} bold onPress={() => handleSizeClick('lg')}>
              View All Friends
            </Text>
            {/* </SolitoLink> */}
          </Button>
        </Row>
      </Column>
    </Column>
  )
}

export default ProfileFriends
