import React, { useContext } from 'react'
import './stories.scss'
import { AuthContext } from '../context/authContext'

const Stories = () => {
    const {currentUser}= useContext(AuthContext)

    const stories=[
        {
            id:1,
            name:'sachine',
            img:'https://images.pexels.com/photos/15171470/pexels-photo-15171470.jpeg'
        },
        {
            id:2,
            name:'tomharry',
            img:'https://images.pexels.com/photos/15171470/pexels-photo-15171470.jpeg'
        },
        {
            id:3,
            name:'guddy',
            img:'https://images.pexels.com/photos/15171470/pexels-photo-15171470.jpeg'
        },
        {
            id:4,
            name:'yourname',
            img:'https://images.pexels.com/photos/15171470/pexels-photo-15171470.jpeg'
        }
    ]
  return (
    <div className='stories'>
        <div className='story'>
                {/* <img src={currentUser.profilePic} alt=''/> */}
                {/* <span>{currentUser.name}</span> */}
                <button>+</button>
            </div>
        {stories.map(story=>(
            <div className='story' key={story.id}>
                <img src={story.img} alt=''/>
                <span>{story.name}</span>

            </div>
        ))}
    </div>
  )
}

export default Stories