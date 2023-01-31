
import './leftbar.scss'
import Friends from '@mui/icons-material/People';
import Groups from '@mui/icons-material/Groups';
import Market from '@mui/icons-material/Storefront';
import Watch from '@mui/icons-material/Movie';
import Memories from '@mui/icons-material/Memory';
import Events from '@mui/icons-material/EmojiEvents';
import Gaming from '@mui/icons-material/SportsEsports';
import Gallery from '@mui/icons-material/Collections';
import Video from '@mui/icons-material/MusicVideo';
import Messages from '@mui/icons-material/Mail';
import Tutorial from '@mui/icons-material/OndemandVideo';
import Courses from '@mui/icons-material/AutoStories';
import Fund from '@mui/icons-material/Paid';
import { AuthContext } from '../context/authContext';
import { useContext } from 'react';



const Leftbar = () => {
  const {currentUser} = useContext (AuthContext)
  return (
    <div className='leftbar'>
      <div className='container'>
        <div className='menu'>
          <div className="user">
            {/* <img src={currentUser.profilePic} alt=''/> */}
            {/* <span>{currentUser.name}</span> */}
          </div>

          <div className="item">
            <Friends />
            <span>Friends</span>
          </div>
          <div className="item">
            <Groups />
            <span>Groups</span>
          </div>
          <div className="item">
            <Market />
            <span>Market</span>
          </div>

          <div className="item">
            <Watch />
            <span>Watch</span>
          </div>
          <div className="item">
            <Memories />
            <span>Memories</span>
          </div>
         

          

        </div>
        <hr/>
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <Events />
            <span>Events</span>
          </div>
          <div className="item">
            <Gaming />
            <span>Gaming</span>
          </div>
          <div className="item">
            <Gallery />
            <span>Gallery</span>
          </div>
          <div className="item">
            <Video />
            <span>Video</span>
          </div>
          <div className="item">
            <Messages />
            <span>Messages</span>
          </div>
         
        </div>
        <hr/>
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <Tutorial />
            <span>Tutorial</span>
          </div>
          <div className="item">
            <Courses />
            <span>Courses</span>
          </div>
          <div className="item">
            <Fund />
            <span>Fund</span>
          </div>
         

        </div>


      </div>
    </div>
  )
}

export default Leftbar