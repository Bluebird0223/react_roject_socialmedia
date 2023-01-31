import React from 'react'
import Stories from '../components/Stories'
import Posts from '../components/Posts'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Stories/>
      <Posts/>
      </div>
  )
}

export default Home