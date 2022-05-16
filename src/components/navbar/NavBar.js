import React from 'react';
import './index.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function NavBar() {
  return (
    <div className='navbar-container'>
      <div className='navbar-left'>
        <span className='logo'>Haricot Realm</span>
      </div>
      <div className='navbar-center'>
        <div className='searchbar'>
          <SearchIcon className="searchIcon"/>
          <input placeholder="Rechercher" className='search-input' />
        </div>
      </div>
      <div className='navbar-right'>
        <div className='navbar-links'>
          <span className='navbarLink'>Accueil</span>
          <span className='navbarLink'>Historique</span>
        </div>
        <div className="navbarIcons">
          <div className="navbarIconItem">
            <PersonIcon />
            <span className='navbarIconNotif'>3</span>
          </div>
          <div className="navbarIconItem">
            <ChatIcon />
            <span className='navbarIconNotif'>2</span>
          </div>
          <div className="navbarIconItem">
            <NotificationsIcon />
            <span className='navbarIconNotif'>4</span>
          </div>
        </div>
      </div>
      <img src="assets/users/pexels-mayim-luna-10883680.jpg" alt="" className='profilPic'></img>
    </div>
  )
}

export default NavBar;