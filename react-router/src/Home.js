import React from 'react'
import Feed from './Feed'

const Home = ({posts}) => {
  return (
    <main className='Home'>
     {posts.length ? (
      <Feed posts= {posts} />
     ): (
      <p style={{marginTop:"2rem"}}>

        NO POSTS TO DISPlAY
      </p>
     )}
    </main>
  )
}

export default Home
