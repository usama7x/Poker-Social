import { parseImageAsset } from 'app/utils/parse-image-assset'
import SiteLogoImage from './ps-logo-full.png'
import BackgroundImage from './bgmain.png'
import BlankAvatarImage from './blank-avatar.png'
import BlankCoverImage from './blank-cover.jpg'

export const IMAGES = {
  SiteLogoImage: parseImageAsset(SiteLogoImage),
  BackgroundImage: parseImageAsset(BackgroundImage),
  BlankAvatarImage: parseImageAsset(BlankAvatarImage),
  BlankCoverImage: parseImageAsset(BlankCoverImage),
}
