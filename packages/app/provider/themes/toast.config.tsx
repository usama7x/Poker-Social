import { Box, Row } from 'native-base'
import { ErrorToast, SuccessToast } from 'react-native-toast-message'
import Entypo from '@expo/vector-icons/Entypo'
import Feather from '@expo/vector-icons/Feather'

/*
  1. Create the config
*/
export const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props) => (
    <SuccessToast
      {...props}
      style={{
        borderLeftColor: '#49D76A',
        borderLeftWidth: 16,
        borderRadius: 15,
        backgroundColor: 'rgba(255, 255, 255, 1)',
      }}
      text1="Success"
      text1Style={{
        fontSize: 16,
        fontWeight: '600',
      }}
      text2Style={{
        fontSize: 14,
        color: '#707070',
      }}
      renderLeadingIcon={() => (
        <Row alignItems="center" ml={4} borderRadius={15}>
          <Box borderRadius={50}>
            <Feather name="check-circle" size={30} color="#49D76A" />
          </Box>
        </Row>
      )}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      style={{
        borderLeftColor: '#D83742',
        borderLeftWidth: 16,
        borderRadius: 15,
        backgroundColor: 'rgba(255, 255, 255, 1)',
      }}
      text1="Error"
      text1Style={{
        fontSize: 16,
        fontWeight: '600',
      }}
      text2Style={{
        fontSize: 14,
        color: '#707070',
      }}
      renderLeadingIcon={() => (
        <Row alignItems="center" ml={4} borderRadius={15}>
          <Box bg="#D83742" borderRadius={50}>
            <Entypo name="cross" size={30} color="white" />
          </Box>
        </Row>
      )}
    />
  ),
}
