import React, { useContext, useEffect, useState } from 'react'
import { Column, Text, useToast } from 'native-base'
import { EmailFormActions } from './actions'
import { EmailFormContent } from './content'
import { useUserQuery } from 'app/generates'
import { AuthContext } from 'app/contexts/auth'
import {
  changeEmail,
  changePhone,
  verifyEmailCode,
  verifyPhoneCode,
} from 'app/services/authentication'
import { useRouter } from 'solito/router'
import { showErrorToast, showSuccessToast } from 'app/utils/toast'

export function EmailForm() {
  const router = useRouter()
  const { user } = useContext(AuthContext)

  const [{ data, fetching }] = useUserQuery({
    variables: { username: user?.username ?? '' },
    requestPolicy: 'network-only',
  })

  useEffect(() => {
    if (data) {
      setForm({ email: data.user.email, phone: '' })
    }
  }, [data?.user.username])

  const [form, setForm] = useState<{
    email: string
    phone: string
    otp?: string
  }>({
    email: '',
    phone: '',
    otp: '',
  })

  const [formEdit, setFormEdit] = useState({
    email: false,
    phone: false,
  })

  const [otpSent, setOtpSent] = useState(false)

  function resetForm() {
    setForm({
      email: data!.user.email,
      phone: '',
    })
    setFormEdit({
      email: false,
      phone: false,
    })
  }

  async function sendOtp() {
    try {
      if (formEdit.email) {
        await changeEmail(form.email)
      } else {
        await changePhone(form.phone)
      }
      setOtpSent(true)
      showSuccessToast('OTP sent successfully')
    } catch (error) {
      showErrorToast(error.message)
    }
  }

  async function verifyEmailOrPhone(code: string) {
    try {
      if (formEdit.email) {
        await verifyEmailCode(code)
      } else {
        await verifyPhoneCode(code)
      }
      showSuccessToast('Saved successfully')
      router.back()
    } catch (error) {
      showErrorToast(error.message)
    }
  }

  async function handleSave() {
    if (!otpSent) {
      sendOtp()
    } else {
      if (!form.otp) {
        return showErrorToast('Please enter OTP')
      }
      verifyEmailOrPhone(form.otp)
    }
  }

  if (fetching) {
    return <Column />
  }

  return (
    <Column py={6} px={6}>
      <Text bold fontSize={23} color="#3ABEFE" ml={4}>
        Manage contact info
      </Text>
      <EmailFormContent
        form={form}
        setForm={setForm}
        formEdit={formEdit}
        setFormEdit={setFormEdit}
        resetForm={resetForm}
        isOtp={otpSent}
      />
      {(formEdit.email || formEdit.phone) && (
        <EmailFormActions onSave={handleSave} otpSent={otpSent} />
      )}
    </Column>
  )
}
