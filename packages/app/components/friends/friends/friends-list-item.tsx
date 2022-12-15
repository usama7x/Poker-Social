import React, { ReactNode, useState } from 'react'
import { Row, Image, Text, Spacer, Pressable } from 'native-base'
import { Link as SolitoLink } from 'solito/link'
import { useProfileLink } from 'app/hooks/profile-link'
import Entypo from '@expo/vector-icons/Entypo'

type FriendsListItemProps = {
  name: string
  username: string
  profileImage?: {
    url: string
    hash: string
  } | null
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

export function FriendsListItem({
  name,
  username,
  profileImage,
}: FriendsListItemProps) {
  const profileLink = useProfileLink(username)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Pressable
      my={1}
      bg="#1A2235"
      borderLeftRadius={50}
      borderRightRadius={50}
      _hover={{ bg: '#0E121C' }}
    >
      <Row
        space={4}
        px={4}
        py={3}
        alignItems="center"
        borderLeftRadius={50}
        borderRightRadius={50}
      >
        <LinkButton username={username}>
          <Image
            source={{
              uri:
                profileImage?.url ||
                'https://pokersocial-public.s3.ap-south-1.amazonaws.com/blank-avatar.png',
            }}
            width={60}
            height={60}
            borderWidth="2"
            borderRadius={100}
            alt="card"
          />
        </LinkButton>
        <Row space={2} alignItems="center">
          <SolitoLink href={profileLink}>
            <Text color="#3ABEFE" bold fontSize="lg">
              {name}
            </Text>
          </SolitoLink>
          <Text color="white">
            {username.includes('DISABLED') ? '' : `(${username})`}
          </Text>
        </Row>
        <Spacer />
        <Pressable onPress={() => setIsOpen(true)}>
          <Entypo name="dots-three-horizontal" size={24} color="white" />
        </Pressable>
      </Row>
    </Pressable>
  )
}
