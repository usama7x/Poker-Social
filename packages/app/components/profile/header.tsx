import { useToast, Column } from 'native-base'
import { ProfileCover } from './cover'
import { ProfileImage } from './image'
import ProfileActions from './actions'
import ProfileContent from './content'
import { pickImage } from 'app/utils/image-picker'
import {
  useCreateFriendRequestMutation,
  useRemoveFriendRequestMutation,
  useRemoveProfileImageMutation,
  useRemoveCoverImageMutation,
  useFriendExistsQuery,
  useFriendRequestQuery,
  useUpdateUserMutation,
} from 'app/generates'
import { showErrorToast, showSuccessToast } from 'app/utils/toast'

type ProfileHeaderProps = {
  userId: string
  isUser: boolean
  fullName: string
  username: string
  bio?: string
  profileImage?: {
    url?: string
    hash?: string
  } | null
  coverImage?: {
    url?: string
    hash?: string
  } | null
}

function ProfileHeader({
  userId,
  fullName,
  username,
  bio,
  isUser,
  profileImage,
  coverImage,
}: ProfileHeaderProps) {
  const [, updateUser] = useUpdateUserMutation()
  const [, removeProfileImage] = useRemoveProfileImageMutation()
  const [, removeCoverImage] = useRemoveCoverImageMutation()
  const [, sendFriendRequest] = useCreateFriendRequestMutation()
  const [, removeFriendRequest] = useRemoveFriendRequestMutation()

  const [{ data: friendRequest }] = useFriendRequestQuery({
    variables: {
      userId,
    },
    requestPolicy: 'network-only',
  })

  const [{ data: friendExists }] = useFriendExistsQuery({
    variables: {
      id: userId,
    },
    requestPolicy: 'network-only',
  })

  /* -------------------------------------------------------------------------- */
  /*                         Updating user's data logic                         */
  /* -------------------------------------------------------------------------- */

  async function removeImageHandler(imageType: 'profile' | 'cover') {
    const func = imageType === 'profile' ? removeProfileImage : removeCoverImage

    const { error } = await func()

    if (error) {
      showErrorToast(error.message)
    }
  }

  function removeProfileImageHandler() {
    removeImageHandler('profile')
  }

  function removeCoverImageHandler() {
    removeImageHandler('cover')
  }

  async function updateImageHandler(imageType: 'profile' | 'cover') {
    const result = await pickImage()

    if (!result) {
      return
    }

    const { file } = result
    const { error } = await updateUser({
      [imageType === 'cover' ? 'coverImage' : 'profileImage']: file,
    })

    if (error) {
      showErrorToast(error.message)
    }
  }

  function updateProfileImageHandler() {
    updateImageHandler('profile')
  }

  function updateCoverImageHandler() {
    updateImageHandler('cover')
  }

  /* -------------------------------------------------------------------------- */
  /*                            Friend Request logic                            */
  /* -------------------------------------------------------------------------- */

  async function onActionHandler(type: string) {
    if (type == 'send') {
      const { error } = await sendFriendRequest({
        userId,
      })

      if (error) {
        showErrorToast(error.graphQLErrors[0]?.message ?? error.message)
      } else {
        showSuccessToast('Friend request sent')
      }
    }
    if (type == 'cancel') {
      const {} = await removeFriendRequest({
        id: friendRequest?.friendRequestSent?.id!,
      })
    }
  }

  return (
    <Column bg="#1A2235" mb={1} alignItems="center">
      <ProfileCover
        isUser={isUser}
        imageUrl={coverImage?.url}
        updateCoverImageHandler={updateCoverImageHandler}
        removeCoverImageHandler={removeCoverImageHandler}
      />
      <ProfileImage
        isUser={isUser}
        imageUrl={profileImage?.url}
        updateProfileImageHandler={updateProfileImageHandler}
        removeProfileImageHandler={removeProfileImageHandler}
      />
      <ProfileContent fullName={fullName} username={username} bio={bio} />
      <ProfileActions
        isUser={isUser}
        isFriend={friendExists?.friendExists ?? false}
        hasRequestSent={!!friendRequest?.friendRequestSent?.id}
        hasRequestReceived={!!friendRequest?.friendRequest?.id}
        onPress={onActionHandler}
      />
    </Column>
  )
}

export default ProfileHeader
