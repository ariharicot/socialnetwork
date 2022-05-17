import React from 'react'
import './index.css'
import CakeIcon from '@mui/icons-material/Cake';

function RightBar() {
  return (
    <div className='right-bar'>
      <div className='rightBarWrapper'>
        <div className='birthdayContainer'>
          <CakeIcon className='birthdayImg' />
          <span className='birthdayText'>C'est l'anniversaire d'<b className='birthdayFriend'>Andrea</b>.</span>
        </div>
        <h4 className='rightBarTitle'>Amis en ligne</h4>
        <ul className='rightBarFriendList'>
          <li className='rightBarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightBarFriendProfileImg' src="./assets/users/pexels-allan-mas-5368986.jpg" alt=""></img>
              <span className='rightBarOnline'></span>
            </div>
            <span className='rightBarUserName'>Jean93</span>
          </li>
          <li className='rightBarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightBarFriendProfileImg' src="./assets/users/pexels-kampus-production-6670986.jpg" alt=""></img>
              <span className='rightBarOnline'></span>
            </div>
            <span className='rightBarUserName'>Nicolas</span>
          </li>
          <li className='rightBarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightBarFriendProfileImg' src="./assets/users/pexels-dillon-kydd-5794559.jpg" alt=""></img>
              <span className='rightBarOnline'></span>
            </div>
            <span className='rightBarUserName'>Margot</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default RightBar