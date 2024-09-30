import React from 'react'
import { Link } from 'react-router-dom' 

const posts = []

const  Home = () => {
  return (
    <div className='home'>
       <div className="posts">
            {posts.map((post) => (
                <div className='post' key={post.id}>
                    <div className='img'>
                        <img src={post.img} alt="" />
                     </div> 
                     <div className="content">
                        <Link className="Link" to={`/posts/${post.id}`}>
                            <h1>{post.title}</h1>
                            <p>{post.description}</p>
                            <button>Read Description</button>
                        </Link>
                     </div>    
            ))}
       </div> 
    </div>
  )
}

export default  Home;