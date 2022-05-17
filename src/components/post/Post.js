import React from 'react';
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Users } from "../../dummyData";

function Post({post}) {

    return (
        <div className='post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='postTopLeft'>
                        <img className='postProfilImg' src={Users.filter(u=>u.id === post.userId)[0].profilePicture} alt=''></img>
                        <span className='postUserName'>{Users.filter(u=>u.id === post.userId)[0].username}</span>
                        <span className='postDate'>{post.date}</span>
                    </div>
                    <div className='postTopRight'>
                        <MoreVertIcon className="postPoints"/>
                    </div>
                </div>
                <div className='postCenter'>
                    <span className='postText'>{post.desc}</span>
                    <img className='postImg' src={post.photo} alt=""></img>
                </div>
                <div className='postBottom'>
                    <div className='postBottomLeft'>
                    <FavoriteIcon className="likeIcon" />
                    <ThumbUpIcon className="likeIcon" />
                    <span className='postLikeCounter'>{post.like}</span>
                    </div>
                    <div className='postBottomRight'>
                        <span className='postCommentLike'>{post.comment}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post