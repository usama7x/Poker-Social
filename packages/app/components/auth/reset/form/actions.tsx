import { Column } from 'native-base'

import SubmitButton from '../submit-button'
type ResetFormActionsProps = {
  isLoading?: boolean
  onPress?: () => void
}

export function ResetFormActions(props: ResetFormActionsProps) {
  return (
    <Column space={12}>
      <SubmitButton {...props} />
    </Column>
  )
}
