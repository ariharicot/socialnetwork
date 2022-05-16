import React from 'react';
import './sidebar.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpIcon from '@mui/icons-material/Help';

function SideBar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <RssFeedIcon className="sidebarIcon"/>
            <span className='sidebarListItemText'>Nouveautés</span>
          </li>
          <li className='sidebarListItem'>
            <ChatIcon className="sidebarIcon"/>
            <span className='sidebarListItemText'>Chats</span>
          </li>
          <li className='sidebarListItem'>
            <GroupsIcon className="sidebarIcon"/>
            <span className='sidebarListItemText'>Groupes</span>
          </li>
          <li className='sidebarListItem'>
            <CalendarMonthIcon className="sidebarIcon"/>
            <span className='sidebarListItemText'>Événements</span>
          </li>
          <li className='sidebarListItem'>
            <BookmarksIcon className="sidebarIcon"/>
            <span className='sidebarListItemText'>Sauvegardes</span>
          </li>
          <li className='sidebarListItem'>
            <BookmarksIcon className="sidebarIcon"/>
            <span className='sidebarListItemText'>Sauvegardes</span>
          </li>
          <li className='sidebarListItem'>
            <HelpIcon className="sidebarIcon"/>
            <span className='sidebarListItemText'>Aide</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar