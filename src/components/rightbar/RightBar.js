import React from 'react'
import './index.css'
import CakeIcon from '@mui/icons-material/Cake';
import { Users } from "../../dummyData";
import Online from '../online/Online';

function RightBar({ profile }) {

  const HomeRightBar = () => {
    return (
      <>
        <div className='birthdayContainer'>
          <CakeIcon className='birthdayImg' />
          <span className='birthdayText'>C'est l'anniversaire d'<b className='birthdayFriend'>Andrea</b>.</span>
        </div>
        <h4 className='rightBarTitle'>Amis en ligne</h4>
        <ul className='rightBarFriendList'>
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>Informations Personnelles</h4>
        <div className='rightbarInfoItem'>
          <span className='rightbarInfoKey'>Ville:</span>
          <span className='rightbarInfoValue'>Nîmes</span>
        </div>
        <div className='rightbarInfoItem'>
          <span className='rightbarInfoKey'>Née:</span>
          <span className='rightbarInfoValue'>Orléans</span>
        </div>
        <div className='rightbarInfoItem'>
          <span className='rightbarInfoKey'>Situation:</span>
          <span className='rightbarInfoValue'>En couple</span>
        </div>
        <h4 className='rightbarTitle'>Amis</h4>
        <div className='rightbarFollowings'>
          <div className='rightBarFollowing'>
            <img className='rightbarFollowingImg' src="./assets/users/pexels-andrea-piacquadio-3769021.jpg" alt="">

            </img><span className='rightbarFollowingName'>Marie</span>
          </div>
          <div className='rightBarFollowing'>
            <img className='rightbarFollowingImg' src="./assets/users/pexels-linkedin-sales-navigator-2182970.jpg" alt="">

            </img><span className='rightbarFollowingName'>Pascal</span>
          </div>
          <div className='rightBarFollowing'>
            <img className='rightbarFollowingImg' src="./assets/users/pexels-dillon-kydd-5794559.jpg" alt="">

            </img><span className='rightbarFollowingName'>Margot</span>
          </div>
          <div className='rightBarFollowing'>
            <img className='rightbarFollowingImg' src="./assets/users/pexels-andrea-piacquadio-774909.jpg" alt="">

            </img><span className='rightbarFollowingName'>Andrea</span>
          </div>
          <div className='rightBarFollowing'>
            <img className='rightbarFollowingImg' src="./assets/users/pexels-ekaterina-belinskaya-4923104.jpg" alt="">

            </img><span className='rightbarFollowingName'>Jack</span>
          </div>
          <div className='rightBarFollowing'>
            <img className='rightbarFollowingImg' src="./assets/users/pexels-kampus-production-6670986.jpg" alt="">

            </img><span className='rightbarFollowingName'>Nicolas</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className='right-bar'>
      <div className='rightBarWrapper'>
        {profile ? <ProfileRightbar /> : <HomeRightBar />}
      </div>
    </div>
  )
}

export default RightBar;