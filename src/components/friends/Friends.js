import React from 'react';
import './index.css';

function Friends({user}) {
    return (
        <li className='sidebarFriend'>
            <img className="sidebarFriendImg" src={user.profilePicture} alt=''></img>
            <span className='sidebarFriendName'>{user.username}</span>
        </li>
    )
}

export default Friends