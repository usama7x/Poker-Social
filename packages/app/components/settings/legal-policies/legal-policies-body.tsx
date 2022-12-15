import { AboutIcon } from 'app/assets/icons/setting page icon/newsettingicon/about-icon'
import { AddchoicesIcon } from 'app/assets/icons/setting page icon/newsettingicon/add-choices-icon'
import { CookiesIcon } from 'app/assets/icons/setting page icon/newsettingicon/cookies-icon'
import { CommunityIcon } from 'app/assets/icons/setting page icon/newsettingicon/cummunity-icon'
import { PrivacyIcon } from 'app/assets/icons/setting page icon/newsettingicon/privacy-icon'
import { TermsOfServicesIcon } from 'app/assets/icons/setting page icon/newsettingicon/terms-of-services'
import { Column } from 'native-base'
import React from 'react'
import LinkComponent from '../terms-of-services'

function LegalPoliciesBody() {
  const links = [
    {
      title: 'Terms of Service',
      icon: <TermsOfServicesIcon />,
      link: '/terms-of-service',
    },
    {
      title: 'Community Guidelines',
      icon: <CommunityIcon />,
      link: '/community-guidelines',
    },
    {
      title: 'Privacy',
      icon: <PrivacyIcon />,
      link: '/privacy',
    },
    {
      title: 'Adds choices',
      icon: <AddchoicesIcon />,
      link: '/ads-choices',
    },
    {
      title: 'Cookie policy',
      icon: <CookiesIcon />,
      link: '/cookie-policy',
    },
    {
      title: 'About',
      icon: <AboutIcon />,
      link: '/about',
    },
  ]

  return (
    <Column space={1}>
      {links.map(({ title, icon, link }) => (
        <LinkComponent key={title} name={title} icon={icon} path={link} />
      ))}
    </Column>
  )
}

export default LegalPoliciesBody
