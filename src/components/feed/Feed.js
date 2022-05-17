import React from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './index.css';
// import the data 
import { Posts } from "../../dummyData"

function Feed() {
  return (
    <div className='feed'>
      <div className='feedWrapper'>
        <Share />
        {/* for each post i want to return something -> the post*/}
        {Posts.map((p) => (
          < Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  )
}

export default Feed