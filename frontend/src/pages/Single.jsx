import React from 'react'
import Edit from '../images/edit.png'
import Delete from '../images/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src=""/>
      <div className="user">
          <img src=""/>
       <div className="info">
          <span>John</span>
          <p>Posted 2 days ago</p>
        </div>  
        <div className="edit">
          <Link to={`/write?edit=2`}>
          <img src={Edit} alt="" />
          </Link>
         
          <img src={Delete} alt="" />
        </div> 
        
      </div>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis!</h1>
      <p></p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single