import React, { ReactNode, useState } from 'react'
import { Row, Image, Text, Spacer, Pressable } from 'native-base'
import { Link as SolitoLink } from 'solito/link'
import Entypo from '@expo/vector-icons/Entypo'
import { useProfileLink } from 'app/hooks/profile-link'

type NotificationListItemProps = {
  profileImage?: string
  name?: string
  username?: string
  text: string
}

const LinkButton = ({
  children,
  username,
}: {
  children: ReactNode
  username?: string
}) =>
  username ? (
    <SolitoLink href={useProfileLink(username)}>{children}</SolitoLink>
  ) : (
    <>{children}</>
  )

export function NotificationListItem({
  profileImage,
  name,
  username,
  text,
}: NotificationListItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Pressable
      my={1}
      _hover={{ bg: '#0E121C' }}
      bg="#1A2235"
      borderLeftRadius={50}
      borderRightRadius={50}
    >
      <Row space={4} px={4} py={2} alignItems="center">
        {/* <LinkButton username={username}>
          <Image
            source={{
              uri:
                profileImage ||
                'https://pokersocial-public.s3.ap-south-1.amazonaws.com/blank-avatar.png',
            }}
            width={71}
            height={73}
            borderRadius={100}
            alt="user-image"
          />
        </LinkButton> */}

        <Row space={2}>
          <Text color="#3ABEFE" bold fontSize="20">
            {name}
          </Text>
          <Text color="white" fontSize="18">
            {text}
          </Text>
        </Row>

        <Spacer />

        <Row mr={4}>
          <Pressable onPress={() => setIsOpen(false)}>
            <Entypo name="cross" size={24} color="white" />
          </Pressable>
        </Row>
      </Row>
    </Pressable>
  )
}
