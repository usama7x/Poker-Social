import { Column, Text } from 'native-base'
import React from 'react'
import { Link as SolitoLink } from 'solito/link'
type MenuComponentProps = {
  tname?: string
  color?: string
  icon?: any
  link?: string
}

export default function MenuComponent({
  tname,
  color,
  icon,
  link,
}: MenuComponentProps) {
  return (
    <SolitoLink href={`${link}`}>
      <Column alignItems="center" justifyContent="center">
        {icon}
        <Text bold color={color} fontSize="20">
          {tname}
        </Text>
      </Column>
    </SolitoLink>
  )
}
