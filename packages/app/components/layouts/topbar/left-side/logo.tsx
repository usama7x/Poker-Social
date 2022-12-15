import SiteLogo from 'app/components/core/site-logo'
import { Box, Row } from 'native-base'
import { Link as SolitoLink } from 'solito/link'

export default function Logo() {
  return (
    <SolitoLink href="/">
      <SiteLogo height={51} width={339} />
    </SolitoLink>
  )
}
