import Post from './Post';
import './posts.scss'

const Posts = () => {
  const posts=[
    {
      id:1,
      name:'tom',
      userId:1,
      profilePic:'https://images.pexels.com/photos/7042231/pexels-photo-7042231.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      desc:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit ullam dolores nobis sequi nam ',
      img:'https://images.pexels.com/photos/15186505/pexels-photo-15186505.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',

    },
    {
      id:3,
      name:'tom',
      userId:3,
      profilePic:'https://images.pexels.com/photos/7042231/pexels-photo-7042231.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      desc:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit ullam dolores nobis sequi nam ',
      img:'https://images.pexels.com/photos/5957094/pexels-photo-5957094.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',

    },
    {
      id:2,
      name:'tom',
      userId:2,
      profilePic:'https://images.pexels.com/photos/7042231/pexels-photo-7042231.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      desc:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit ullam dolores nobis sequi nam ',
      img:'https://images.pexels.com/photos/1740896/pexels-photo-1740896.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',

    },
  ];
  return (
    <div className='posts'>
      {posts.map(post=>(
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Posts