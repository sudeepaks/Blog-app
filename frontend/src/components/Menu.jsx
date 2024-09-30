import React from 'react'

const Menu = () => {
const posts = {}

  return (
    <div className='menu'>
        <h1>Other posts you like</h1>
        {posts.map(post =>(
            <div className='post' key={post.id}>
                <img src={post.image} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>    
        ))}
    </div>
  )
}

export default Menu