import { Column } from 'native-base'
import ContinueButton from './continue.button'

type SocialSignUpFormActionsProps = {
  isLoading?: boolean
  onPress?: () => void
}

export function SocialSignUpFormActions(props: SocialSignUpFormActionsProps) {
  return (
    <Column space={6}>
      <ContinueButton {...props} />
    </Column>
  )
}
