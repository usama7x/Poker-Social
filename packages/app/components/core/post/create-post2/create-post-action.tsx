import React from 'react'
import { Column, Pressable, Row, Text, Box, Button } from 'native-base'
import * as ImagePicker from 'expo-image-picker/build/ImagePicker'

type CreatePostHeaderProps = {
  onPostCreate?: () => void
  isLoading?: boolean
}
export function CreatePostAction({
  onPostCreate,
  isLoading,
}: CreatePostHeaderProps) {
  return (
    <Row
      justifyContent="center"
      borderTopColor="gray.700"
      borderTopWidth={1}
      p={6}
    >
      <Button
        isLoading={isLoading}
        onPress={onPostCreate}
        size="lg"
        py="1"
        px={40}
        rounded="3xl"
        bg="#3ABEFE"
        _hover={{ bg: '#007EBB' }}
      >
        <Text px={4} bold fontSize="xl">
          Post
        </Text>
      </Button>
    </Row>
  )
}
