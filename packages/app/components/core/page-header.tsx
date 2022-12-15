import { Box, Row, Text } from 'native-base'
// import { Text } from 'react-native'
import { useRouter } from 'solito/router'
import IconBackButton from 'app/components/core/buttons/icon-back-button'
import { usePlatform } from 'app/hooks/platform'

type PageHeaderProps = {
  title: string
}

export function PageHeader({ title }: PageHeaderProps) {
  const { isDesktop } = usePlatform()
  const { back } = useRouter()
  return (
    <Row
      h={100}
      bg={
        isDesktop
          ? '#1A2235'
          : {
              linearGradient: {
                colors: ['#1A2235', '#000000'],
                start: [0, 1],
                end: [0, 0],
              },
            }
      }
      justifyContent="space-between"
      alignItems="center"
      p={3}
      borderBottomColor="black"
      borderBottomWidth={10}
    >
      {isDesktop ? <Box /> : <IconBackButton onPress={back} />}
      <Text fontFamily="heading" fontSize={24} color="#3ABEFE">
        {title}
      </Text>
      <Box />
    </Row>
  )
}
