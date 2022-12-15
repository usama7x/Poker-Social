import React, { useEffect, useState } from 'react'
import {
  Row,
  IconButton,
  Text,
  TextArea,
  Avatar,
  View,
  Input,
  Divider,
} from 'native-base'
import AntDesign from '@expo/vector-icons/AntDesign'
import Ionicons from '@expo/vector-icons/Ionicons'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { useEvent, useEventDispatch } from 'app/hooks/event'
import { Button, Modal, VStack, HStack, Radio } from 'native-base'
import { Image } from 'react-native'

type PostCardActionsProps = {
  postId: string
  isLiked: boolean
  activity: {
    likesCount: number
    commentsCount: number
  }
  onLikePressed: (isLiked: boolean) => void
  onCommentPressed: () => void
}

export function PostCardActions({
  activity,
  onLikePressed,
  onCommentPressed,
  postId,
  ...props
}: PostCardActionsProps) {
  const [isLiked, setIsLiked] = useState(props.isLiked)
  const [likesCount, setLikesCount] = useState(activity.likesCount)

  const [showModal, setShowModal] = useState(false)
  const [showModal2, setShowModal2] = useState(false)
  const [showModal3, setShowModal3] = useState(false)
  const [showModal4, setShowModal4] = useState(false)

  const dispatch = useEventDispatch()

  function setCount(isLiked: boolean) {
    if (isLiked) {
      setLikesCount(likesCount + 1)
    } else {
      setLikesCount(likesCount - 1)
    }
  }

  useEvent('post-like-' + postId, onLikeEvent)

  function onLikeEvent(isLiked: boolean) {
    setIsLiked(isLiked)
    setCount(isLiked)
  }

  return (
    <>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="xl">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Share Post</Modal.Header>
          <Modal.Body>
            <VStack space={3}>
              <HStack alignItems="center" justifyContent="space-between">
                <TextArea
                  placeholder="Write a caption..."
                  size="sm"
                  _light={{
                    placeholderTextColor: 'blueGray.400',
                  }}
                  _dark={{
                    placeholderTextColor: 'blueGray.50',
                  }}
                  color="white"
                  flex={1}
                />
              </HStack>
              <View
                borderColor="gray.200"
                borderWidth={1}
                borderRadius={5}
                padding={2}
              >
                <HStack alignItems="center" display="flex">
                  <Avatar
                    source={{
                      uri: 'https://pbs.twimg.com/profile_images/1361031716879368192/6QZQZQ9n_400x400.jpg',
                    }}
                  />
                  <Text fontWeight="medium" margin="3px">
                    Bimasha
                  </Text>
                </HStack>
                <HStack alignItems="center">
                  <Text fontWeight="normal" margin="4px">
                    This is the content of the post
                  </Text>
                </HStack>
              </View>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              onPress={() => {
                setShowModal2(true)
                setShowModal(false)
              }}
            >
              Continue
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <Modal isOpen={showModal2} onClose={() => setShowModal2(false)} size="lg">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Add Location (Optional)</Modal.Header>
          <Modal.Body>
            <VStack space={3}>
              <HStack alignItems="center">
                <Input
                  placeholder="Add Location..."
                  size="sm"
                  _light={{
                    placeholderTextColor: 'blueGray.400',
                  }}
                  _dark={{
                    placeholderTextColor: 'blueGray.50',
                  }}
                  color="white"
                  flex={1}
                  name="location"
                />
              </HStack>

              <View></View>
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              onPress={() => {
                setShowModal3(true)
              }}
            >
              Continue
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <Modal isOpen={showModal3} size="lg" onClose={() => setShowModal3(false)}>
        <Modal.Content maxWidth="350">
          <Modal.CloseButton />
          <Modal.Header>Payment Options</Modal.Header>
          <Modal.Body>
            <Radio.Group name="payment" size="sm">
              <VStack space={3}>
                <Radio
                  alignItems="flex-start"
                  _text={{
                    mt: '-1',
                    ml: '2',
                    fontSize: 'sm',
                  }}
                  value="payment1"
                >
                  Cash on delivery
                </Radio>
                <Radio
                  alignItems="flex-start"
                  _text={{
                    mt: '-1',
                    ml: '2',
                    fontSize: 'sm',
                  }}
                  value="payment2"
                >
                  Credit/ Debit/ ATM Card
                </Radio>
                <Radio
                  alignItems="flex-start"
                  _text={{
                    mt: '-1',
                    ml: '2',
                    fontSize: 'sm',
                  }}
                  value="payment3"
                >
                  UPI
                </Radio>
              </VStack>
            </Radio.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              onPress={() => {
                setShowModal(false)
                setShowModal2(false)
                setShowModal3(false)
              }}
            >
              Checkout
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      <Modal isOpen={showModal4} size="lg">
        <Modal.Content maxWidth="350">
          <Modal.CloseButton
            onPress={() => {
              setShowModal4(false)
            }}
          />
          <Modal.Header>Who liked this post?</Modal.Header>
          <Modal.Body>
            <View>
              <HStack alignItems="center" display="flex" marginTop="5px">
                <Avatar
                  source={{
                    uri: 'https://pbs.twimg.com/profile_images/1361031716879368192/6QZQZQ9n_400x400.jpg',
                  }}
                />
                <Text fontWeight="medium" margin="3px">
                  Bimasha
                </Text>
              </HStack>

              <HStack alignItems="center" display="flex" marginTop="5px">
                <Avatar
                  source={{
                    uri: 'https://pbs.twimg.com/profile_images/1361031716879368192/6QZQZQ9n_400x400.jpg',
                  }}
                />
                <Text fontWeight="medium" margin="3px">
                  Bimasha Zaman
                </Text>
              </HStack>
            </View>
          </Modal.Body>
        </Modal.Content>
      </Modal>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}
      >
        <Text
          onPress={() => {
            setShowModal4(true)
          }}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            color: '#A5AFCE',
          }}
        >
          <Text
            color={likesCount != 0 ? '#A5AFCE' : 'transparent'}
            fontSize="xs"
          >
            Bimasha, and {likesCount} others liked this
          </Text>
        </Text>

        <Text style={{ color: '#A5AFCE' }}>3 Shares</Text>
      </View>

      <Row justifyContent="space-between" px={3} pt={1}>
        <Row alignItems="center" space={1}>
          <IconButton
            onPress={() => {
              dispatch('post-like-' + postId, !isLiked)
              onLikePressed(!isLiked)
            }}
            icon={
              <AntDesign
                name={isLiked ? 'like1' : 'like2'}
                size={21}
                color={isLiked ? '#3ABEFE' : 'white'}
              />
            }
            p={1}
          />
          <Text
            color={likesCount != 0 ? '#A5AFCE' : 'transparent'}
            fontSize="xs"
          >
            {likesCount}
          </Text>
        </Row>

        <Row alignItems="center" space={1}>
          <IconButton
            onPress={onCommentPressed}
            icon={
              <Ionicons name="chatbubble-outline" size={21} color="white" />
            }
            p={1}
            _pressed={{ bg: 'transparent' }}
            _hover={{ bg: 'transparent' }}
          />

          <Text color="#A5AFCE" fontSize="xs">
            {activity.commentsCount}
          </Text>
        </Row>

        <Row alignItems="center" space={1}>
          <IconButton
            icon={
              <FontAwesome5
                name="share"
                size={21}
                color="white"
                onPress={() => setShowModal(true)}
              />
            }
            p={1}
          />
          <Text
            fontSize="xs"
            color="#A5AFCE"
            onPress={() => setShowModal(true)}
          >
            Share Post
          </Text>
        </Row>
      </Row>

      <Text
        style={{
          color: '#A5AFCE',
          fontSize: 12,
          marginLeft: 10,
          marginTop: 10,
          textAlign: 'left',
        }}
      >
        {activity.commentsCount}{' '}
        {activity.commentsCount > 1 ? 'Comments' : 'Comment'}
      </Text>
    </>
  )
}
