import React from 'react';
import './sidebar.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpIcon from '@mui/icons-material/Help';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';

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
            <SettingsBackupRestoreIcon className="sidebarIcon"/>
            <span className='sidebarListItemText'>Historique</span>
          </li>
          <li className='sidebarListItem'>
            <HelpIcon className="sidebarIcon"/>
            <span className='sidebarListItemText'>Aide</span>
          </li>
        </ul>
        <button className='sidebarBtn'>Menu</button>
        <hr className='sidebarHr'></hr>
        <ul className='sidebarFriendList'>
          <li className='sidebarFriend'>
            <img className="sidebarFriendImg" src='./assets/users/pexels-allan-mas-5368986.jpg' alt=''></img>
            <span className='sidebarFriendName'>Jean93</span>
          </li>
          <li className='sidebarFriend'>
            <img className="sidebarFriendImg" src='./assets/users/pexels-dillon-kydd-5794559.jpg' alt=''></img>
            <span className='sidebarFriendName'>Margot</span>
          </li>
          <li className='sidebarFriend'>
            <img className="sidebarFriendImg" src='./assets/users/pexels-linkedin-sales-navigator-2182970.jpg' alt=''></img>
            <span className='sidebarFriendName'>Pascal</span>
          </li>
          <li className='sidebarFriend'>
            <img className="sidebarFriendImg" src='./assets/users/pexels-andrea-piacquadio-774909.jpg' alt=''></img>
            <span className='sidebarFriendName'>Andrea</span>
          </li>
          <li className='sidebarFriend'>
            <img className="sidebarFriendImg" src='./assets/users/pexels-andrea-piacquadio-3769021.jpg' alt=''></img>
            <span className='sidebarFriendName'>Marie</span>
          </li>
          <li className='sidebarFriend'>
            <img className="sidebarFriendImg" src='./assets/users/pexels-ekaterina-belinskaya-4923104.jpg' alt=''></img>
            <span className='sidebarFriendName'>Jack</span>
          </li>
          <li className='sidebarFriend'>
            <img className="sidebarFriendImg" src='./assets/users/pexels-kampus-production-6670986.jpg' alt=''></img>
            <span className='sidebarFriendName'>Nicolas</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar