import React from 'react'
import Feed from '../../components/feed/Feed'
import NavBar from '../../components/navbar/NavBar'
import RightBar from '../../components/rightbar/RightBar'
import SideBar from '../../components/sidebar/SideBar'
import './index.css';

function Home() {
  return (
    <>
      <NavBar />
      <div className='homeContainer'>
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </>
  )
}

export default Home