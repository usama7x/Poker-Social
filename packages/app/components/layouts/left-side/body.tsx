import { ChannelIcon } from 'app/assets/icons/menuicon/newmenuicon/channel-icon'
import { CommunityHelpIcon } from 'app/assets/icons/menuicon/newmenuicon/community-help-icon'
import { EventsIcon } from 'app/assets/icons/menuicon/newmenuicon/events-icon'
import { GroupIcon } from 'app/assets/icons/menuicon/newmenuicon/group-icon'
import { LiveIcon } from 'app/assets/icons/menuicon/newmenuicon/live-icon'
import { PagesIcon } from 'app/assets/icons/menuicon/newmenuicon/page-icon'

import { WatchIcon } from 'app/assets/icons/topbaricon/newtopbar/watch-icon'
import { Column } from 'native-base'
import React from 'react'
import MediaCard from './media-card'

export function LeftSideBody() {
  const icons = [
    <WatchIcon />,
    <ChannelIcon />,
    <GroupIcon />,
    <PagesIcon />,
    <LiveIcon />,
    <EventsIcon />,
    <CommunityHelpIcon />,
  ]
  return (
    <Column px={8} p={6} space={6}>
      {icons.map((icon, i) => (
        <MediaCard icon={icon} key={i} />
      ))}
    </Column>
  )
}
