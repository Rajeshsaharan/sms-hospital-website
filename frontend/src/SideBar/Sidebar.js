import React from 'react'
import { NavLink, Link } from "react-router-dom"
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-item'>

        <div className='sidebar-items'>
          <div> <Link to="/"><i className= "fa-solid fa-house-user"></i></Link></div>
          <div> <NavLink to="/learn"><i className="fa-sharp fa-solid fa-graduation-cap"></i></NavLink></div>
          <div> <NavLink to="/wards"><i className="fa-solid fa-hospital-user"></i></NavLink></div>
          <div> <NavLink to="/diagnosis"><i className="fa-sharp fa-solid fa-stethoscope"></i></NavLink></div>
          <div> <NavLink to="/about"><i className="fa-solid fa-address-card"></i></NavLink></div>
        </div>

        <div>
          <h2>username</h2>
        </div>

      </div>

    </div>
  )
}

export default Sidebar