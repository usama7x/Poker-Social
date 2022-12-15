import { ChannelIcon } from 'app/assets/icons/menuicon/newmenuicon/channel-icon'
import { CommunityHelpIcon } from 'app/assets/icons/menuicon/newmenuicon/community-help-icon'
import { EventsIcon } from 'app/assets/icons/menuicon/newmenuicon/events-icon'
import { FriendsIcon } from 'app/assets/icons/menuicon/newmenuicon/friends-icon'
import { GamingIcon } from 'app/assets/icons/menuicon/newmenuicon/gaming-icon'
import { GroupIcon } from 'app/assets/icons/menuicon/newmenuicon/group-icon'
import { LiveIcon } from 'app/assets/icons/menuicon/newmenuicon/live-icon'
import { PagesIcon } from 'app/assets/icons/menuicon/newmenuicon/page-icon'
import { PokerCourseIcon } from 'app/assets/icons/menuicon/newmenuicon/poker-course-icon'
import { TournamentIcon } from 'app/assets/icons/menuicon/newmenuicon/tournament-icon'
import { Column, Row } from 'native-base'
import MenuCard from './card'

function MenuContent() {
  return (
    <Column
      alignItems="center"
      bgColor="#0A0E15"
      borderBottomColor="gray.800"
      borderWidth={1}
    >
      <Row space={20}>
        <MenuCard icon={<GroupIcon />} />
        <MenuCard icon={<FriendsIcon />} />
      </Row>
      <Row space={20}>
        <MenuCard icon={<PokerCourseIcon />} />
        <MenuCard icon={<ChannelIcon />} />
      </Row>
      <Row space={20}>
        <MenuCard icon={<PagesIcon />} />
        <MenuCard icon={<EventsIcon />} />
      </Row>
      <Row space={20}>
        <MenuCard icon={<GamingIcon />} />
        <MenuCard icon={<LiveIcon />} />
      </Row>
      <Row space={20}>
        <MenuCard icon={<TournamentIcon />} />
        <MenuCard icon={<CommunityHelpIcon />} />
      </Row>
    </Column>
  )
}

export default MenuContent
