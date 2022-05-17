import React from 'react';
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function Post() {
    return (
        <div className='post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='postTopLeft'>
                        <img className='postProfilImg' src='./assets/users/pexels-mayim-luna-10883680.jpg' alt=''></img>
                        <span className='postUserName'>Emily</span>
                        <span className='postDate'>il y a 5 minutes</span>
                    </div>
                    <div className='postTopRight'>
                        <MoreVertIcon className="postPoints"/>
                    </div>
                </div>
                <div className='postCenter'>
                    <span className='postText'>De nouveau en vadrouille</span>
                    <img className='postImg' src="./assets/posts/pexels-dominika-roseclay-1252500(1).jpg" alt=""></img>
                </div>
                <div className='postBottom'>
                    <div className='postBottomLeft'>
                    <FavoriteIcon className="likeIcon" />
                    <ThumbUpIcon className="likeIcon" />
                    <span className='postLikeCounter'>72 personnes ont liké</span>
                    </div>
                    <div className='postBottomRight'>
                        <span className='postCommentLike'>23 commentaires</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post