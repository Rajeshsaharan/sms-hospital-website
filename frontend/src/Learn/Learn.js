import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

function Learn() {
  return (
    <div className='main'>
   <ul className='second-nav'>
    <li> <NavLink to="/learn">ALL</NavLink></li>
    <li> <NavLink to="Article/all">Articles</NavLink></li>
    <li> <NavLink to="Question/all">Questions</NavLink></li>
   </ul>

    <Outlet/>
    </div>

  )
}

export default Learn