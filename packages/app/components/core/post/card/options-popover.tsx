import { Box, Button, Popover, Row, Text } from 'native-base'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo'
import { DeleteAccountIcon } from 'app/assets/icons/setting page icon/newsettingicon/delete-account-icon'
type PostCardDesktopActionsProps = {
  onRemoveButtonPressed: () => void
}
export default function PostCardOptionsPopover({
  onRemoveButtonPressed,
}: PostCardDesktopActionsProps) {
  return (
    <Popover
      trigger={(triggerProps) => {
        return (
          <Button
            {...triggerProps}
            colorScheme="transparent"
            p={0}
            _hover={{ bg: 'transparent' }}
          >
            <Entypo name="dots-three-horizontal" size={24} color="#A5AFCE" />
          </Button>
        )
      }}
    >
      <Popover.Content accessibilityLabel="delete" w="40">
        <Popover.Arrow />
        <Popover.Header bg="#111623" justifyContent="flex-end">
          <Button
            onPress={onRemoveButtonPressed}
            background="transparent"
            p={0}
          >
            <Row alignItems="center" space={2}>
              <Box size="4">
                <DeleteAccountIcon />
              </Box>
              <Text bold color="#3ABEFE" fontSize="lg">
                Delete
              </Text>
            </Row>
          </Button>
        </Popover.Header>
      </Popover.Content>
    </Popover>
  )
}
