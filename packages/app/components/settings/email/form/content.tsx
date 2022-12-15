import { EmailIcon } from 'app/assets/icons/setting page icon/newsettingicon/email-icon'
import { MobileIcon } from 'app/assets/icons/setting page icon/newsettingicon/mobile-icon'
import { Column } from 'native-base'
import InputFieldComponent from '../../input-field'

type EmailFormContentProps = {
  form: {
    email: string
    phone: string
    otp?: string
  }
  formEdit: {
    email: boolean
    phone: boolean
  }
  setForm: (form: { email: string; phone: string; otp?: string }) => void
  setFormEdit: (formEdit: { email: boolean; phone: boolean }) => void
  resetForm: () => void
  isOtp: boolean
}

export function EmailFormContent({
  form,
  setForm,
  formEdit,
  setFormEdit,
  resetForm,
  isOtp,
}: EmailFormContentProps) {
  return (
    <Column mt={4} px={4}>
      {!formEdit.phone && (
        <InputFieldComponent
          name="Email"
          value={form.email}
          setValue={(value) => setForm({ ...form, email: value })}
          icon={<EmailIcon />}
          disabled={isOtp || !formEdit.email}
          editAllowed={true}
          edit={formEdit.email}
          onEditPressed={(value) =>
            value ? setFormEdit({ email: true, phone: false }) : resetForm()
          }
        />
      )}
      {!formEdit.email && (
        <InputFieldComponent
          name="Mobile"
          value={form.phone}
          setValue={(value) => setForm({ ...form, phone: value })}
          icon={<MobileIcon />}
          disabled={isOtp || !formEdit.phone}
          editAllowed={true}
          edit={formEdit.phone}
          onEditPressed={(value) =>
            value ? setFormEdit({ email: false, phone: true }) : resetForm()
          }
        />
      )}
      {isOtp && (
        <InputFieldComponent
          name="OTP"
          value={form.otp}
          setValue={(value) => setForm({ ...form, otp: value })}
        />
      )}
    </Column>
  )
}
