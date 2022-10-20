import React from 'react'
import SidebarRow from './SidebarRow'

import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    EnvelopeIcon,
    UserIcon,
    HomeIcon,
    ListBulletIcon,
    EllipsisHorizontalCircleIcon

} from '@heroicons/react/24/outline'


{/* <a href="https://www.flaticon.com/free-icons/twitter" title="twitter icons">Twitter icons created by Md Tanvirul Haque - Flaticon</a> */}

const Sidebar = () => {
  return (
    <div className='mr-auto '>
      <img className='w-7 h-7'   src="https://img.icons8.com/color/48/000000/twitter--v1.png" alt="" />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={EnvelopeIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={UserIcon} title="User" />
      <SidebarRow Icon={ListBulletIcon} title="Lists" />
      <SidebarRow Icon={EllipsisHorizontalCircleIcon} title="More" />

    </div>
  )
}

export default Sidebar