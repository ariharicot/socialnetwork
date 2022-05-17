import React, {useState} from 'react';
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Users } from "../../dummyData";

function Post({post}) {
    {/* encrease like button on click*/}
    const [like, setLike ] = useState(post.like)
    const [isLiked, setIsLiked ] = useState(false)

        {/* decrease if it's clicked twice*/}
    const likeHandler =()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
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
                    <FavoriteIcon className="likeIcon" onClick={likeHandler} />
                    <ThumbUpIcon className="likeIcon" onClick={likeHandler} />
                    <span className='postLikeCounter'>{like}</span>
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