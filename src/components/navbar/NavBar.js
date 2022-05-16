import React from 'react';
import './index.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

function NavBar() {
  return (
    <div className='navbar-container'>
       <div className='navbar-left'>
         <span className='logo'>Haricot Realm</span>
       </div>
       <div className='navbar-center'>
         <div className='searchbar'>
           <SearchIcon />
           <input placeholder="Rechercher" className='search-input'/>
         </div>
       </div>
       <div className='navbar-right'>
         <div className='navbar-links'>
           <span className='navbarLink'>Page d'Accueil</span>
           <span className='navbarLink'>Historique</span>
         </div>
         <div className="navbarIcons">
           <div className="navbarIconItem">
             <PersonIcon />
             <span className='navbarIconNotif'>3</span>
           </div>
         </div>
       </div>
    </div>
  )
}

export default NavBar