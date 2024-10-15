import axios from 'axios'
import React, { useEffect, useState , useLocation} from 'react'
import { Link } from 'react-router-dom' 


const  Home = () => {
  const [posts, setPosts] = useState([])

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () =>{
      try{
        const res = await axios.get(`/posts${cat}`)
        setPosts(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchData()
  },[])
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
                     </div>  
            ))}
       </div> 
    </div>
  )
}

export default  Home;