import { Text } from 'native-base'
import SaveButton from '../../save-button'

type PasswordFormActionsProps = {
  onSave: () => void
  isLoading?: boolean
}

export function PasswordFormActions({ onSave, isLoading }: PasswordFormActionsProps) {
  return <SaveButton onPress={onSave} isLoading={isLoading}/>
}
