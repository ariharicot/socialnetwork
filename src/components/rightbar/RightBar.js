import React from 'react'
import './index.css'
import CakeIcon from '@mui/icons-material/Cake';
import {Users} from "../../dummyData";
import Online from '../online/Online';

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
          {Users.map(u=>(
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default RightBar