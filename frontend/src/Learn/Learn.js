import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

function Learn() {
  return (
    <div className='main'>
      <div className='second-nav'>
      <ul>
    <li> <NavLink to="/learn">ALL</NavLink></li>
    <li> <NavLink to="Article/all">Articles</NavLink></li>
    <li> <NavLink to="Question/all">Questions</NavLink></li>
   </ul>
      </div>
  

    <Outlet/>
    </div>

  )
}

export default Learn