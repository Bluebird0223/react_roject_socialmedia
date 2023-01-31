import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import './comments.scss'

const Comments = () => {
    const {currentUser} =useContext(AuthContext)
    const comments=[
        {
            id:1,
            name:'sachine',
            userId:1,
            profilePic:'https://images.pexels.com/photos/7042231/pexels-photo-7042231.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            desc:' Lorem ipsum dolor ',
      
        },
        {
            id:1,
            name:'sachine',
            userId:1,
            profilePic:'https://images.pexels.com/photos/7042231/pexels-photo-7042231.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            desc:' cool',
      
        },
        {
            id:1,
            name:'sachine',
            userId:1,
            profilePic:'https://images.pexels.com/photos/7042231/pexels-photo-7042231.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            desc:' hello ',
      
        },
    ];
  return (
    <div className='comments'>
        <div className="write">
        {/* <img src={currentUser.profilePic} alt="" /> */}
        <input type="text"placeholder='Comments' />
        <button>send</button>

        </div>
        {
            comments.map(comment=>(
                <div className="comment">
                    <img src={comment.profilePic} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <spam className='date'>hour ago</spam>
                </div>
            ))
        }
    </div>
  )
}

export default Comments