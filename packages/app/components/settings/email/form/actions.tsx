import SaveButton from '../../save-button'

type EmailFormActionsProps = {
  onSave: () => void
  otpSent?: boolean
}

export function EmailFormActions({ onSave, otpSent }: EmailFormActionsProps) {
  return (
    <SaveButton
      title={otpSent ? 'Save Changes' : 'Send OTP'}
      onPress={onSave}
    />
  )
}
