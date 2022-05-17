import React from 'react'
import './online.css';

function Online({user}) {
  return (
  <li className='rightBarFriend'>
    <div className='rightbarProfileImgContainer'>
      <img className='rightBarFriendProfileImg' src={user.profilePicture} alt=""></img>
      <span className='rightBarOnline'></span>
    </div>
    <span className='rightBarUserName'>{user.username}</span>
  </li>
  )
}

export default Online