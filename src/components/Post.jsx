import './post.scss'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Link } from 'react-router-dom';
import Comments from './Comments';
import { useState } from 'react';

const Post = ({post}) => {
    const [commentOpen, setCommentOpen]= useState(false)
    const liked=false;
  return (
    <div className='post'>
        <div className="container">

        <div className='user'>
            <div className="userinfo">
                <img src={post.profilePic} alt="" />
                <div className="details">
                    <Link to={`/profile/${post.userID}`} style={{textDecoration:'none',color:'inherit'}}>
                        <span className='name'>{post.name}</span>

                    </Link>
                        <span className='date'>2 min ago</span>
                </div>
            </div>
            <MoreHorizOutlinedIcon/>

        </div>
        <div className='content'>
            <p>{post.desc}</p>
            <img src={post.img} alt="" />
        </div>
        <div className='info'>
            <div className="item">
                {liked ? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon/>}
                12 Likes
            </div>
            <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
                <TextsmsOutlinedIcon/>
                Comments
            </div>
            <div className="item">
                <ShareOutlinedIcon/>
                Share
            </div>
        </div>
        {commentOpen && <Comments/>}
        </div>
    </div>
  )
}

export default Post