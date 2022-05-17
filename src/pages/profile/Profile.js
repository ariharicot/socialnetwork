import React from 'react';
import Feed from '../../components/feed/Feed'
import NavBar from '../../components/navbar/NavBar'
import RightBar from '../../components/rightbar/RightBar'
import SideBar from '../../components/sidebar/SideBar'
import './index.css';

function Profile() {
    return (
        <>
            <NavBar />
            <div className='profile'>
                <SideBar />
                <div className="profileRight">
                    <div className='profileRightTop'></div>
                    <div className='profileCover'>
                        <img className='profileCoverImg' src='./assets/posts/pexels-vincent-gerbouin-1174732.jpg' alt=""></img>
                        <img className='profileUserImg' src='./assets/users/pexels-mayim-luna-10883680.jpg' alt=""></img>
                    </div>
                    <div className='profileInfo'>
                        <h4 className='profileInfoName'>Emily</h4>
                        <span className='profileInfoDesc'>Une tortue de mer</span>
                    </div>
                    <div className='profileRightBottom'>
                        <Feed />
                        <RightBar profile />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;