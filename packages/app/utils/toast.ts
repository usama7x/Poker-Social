import Toast from 'react-native-toast-message'

export const showErrorToast = (msg: string) => {
  Toast.show({
    type: 'error',
    text2: msg,
  })
}

export const showSuccessToast = (msg: string) => {
  Toast.show({
    type: 'success',
    text2: msg,
  })
}
