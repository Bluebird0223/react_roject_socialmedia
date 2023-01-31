import React from 'react'
import './profile.scss'
// import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { Pinterest } from '@mui/icons-material';
import Posts from  '../components/Posts';

const Profile = () => {
  return (
    <div className='profile'>
      <div className='images'>
        <img src="https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg" alt="" className='cover'/>
        <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className='profilePic'/>
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href='facebook.com'>
              <FacebookIcon fontSize='medium'/>
            </a>

            <a href='instagram.com'>
              <InstagramIcon fontSize='medium'/>
            </a>

            <a href='twitter.com'>
              <TwitterIcon fontSize='medium'/>
            </a>

            <a href='Linkedin.com'>
              <LinkedInIcon fontSize='medium'/>
            </a>

            <a href='pintrest.com'>
              <Pinterest fontSize='medium'/>
            </a>

          </div>
          <div className="center">
            <span>Sachine</span>
            <div className="info">
              <div className="item">
                <PlaceIcon  fontSize='small'/>
                <span>India</span>
              </div>
              <div className="item">
                <LanguageIcon fontSize='small'/>
                <span>Baboon</span>
              </div>
            </div>
              <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon fontSize='small'/>
            <MoreVertOutlinedIcon fontSize='small'/>
          </div>
        </div>
      <Posts/>
      </div>

    </div>
  )
}

export default Profile