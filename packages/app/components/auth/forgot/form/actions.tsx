import { Column } from 'native-base'
import ResetButton from '../reset-button'
type ForgotFormActionsProps = {
  isLoading?: boolean
  onPress?: () => void
}

export function ForgotFormActions(props: ForgotFormActionsProps) {
  return (
    <Column space={12}>
      <ResetButton {...props} />
    </Column>
  )
}
