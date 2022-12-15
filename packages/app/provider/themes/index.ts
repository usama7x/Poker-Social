import { extendTheme } from 'native-base'
import { LinearGradient } from 'expo-linear-gradient'
import { register } from 'timeago.js'
import { Poppins, RussoOne } from './fonts'
import enShortLocale from 'app/utils/locale/en_short'

register('en_short', enShortLocale)

export const config = {
  dependencies: {
    'linear-gradient': LinearGradient,
  },
}

export const theme = extendTheme({
  fontConfig: {
    Poppins,
    RussoOne,
  },
  fonts: {
    heading: 'RussoOne',
    body: 'Poppins',
    mono: 'Poppins',
  },
  components: {
    Text: {
      baseStyle: {
        fontSize: 'md',
      },
    },
    Modal: {
      baseStyle: {
        _fade: { exitDuration: 100, entryDuration: 200 },
      },
    },
    AlertDialog: {
      baseStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      },
    },
    AlertDialogHeader: {
      baseStyle: {
        backgroundColor: '#0E121C',
        _dark: {
          _text: {
            textAlign: 'center',
            color: '#3ABEFE',
            fontWeight: 'bold',
          },
          _icon: {
            color: '#3ABEFE',
          },
        },
      },
    },
    AlertDialogCloseButton: {
      baseStyle: {
        _dark: {
          _icon: {
            color: '#3ABEFE',
          },
        },
      },
    },
    AlertDialogBody: {
      baseStyle: {
        backgroundColor: '#0E121C',
      },
    },
    AlertDialogFooter: {
      baseStyle: {
        justifyContent: 'space-between',
        backgroundColor: '#0E121C',
      },
    },
    Actionsheet: {
      defaultProps: {
        size: 'full',
        justifyContent: 'flex-end',
        animationPreset: 'fade',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      },
    },
    ActionsheetContent: {
      baseStyle: {
        backgroundColor: '#1A2235',
      },
    },
    ActionsheetItem: {
      baseStyle: {
        backgroundColor: '#1A2235',
        alignItems: 'center',
        _pressed: {
          backgroundColor: '#0E121C',
        },
      },
    },
  },
  colors: {
    brand: {
      main: '#0D111D',
      accent: '#556080',
      btn: '#008CF3',
      btnHover: '#0471c2',
      googleBtn: '#CF4332',
      fbBtn: '#385B91',
    },
  },
  config: {
    initialColorMode: 'dark',
    dependencies: {
      'linear-gradient': LinearGradient,
    },
  },
})
