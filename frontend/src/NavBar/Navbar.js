import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import logo from '../asset/logo.gif'
function Navbar() {
  const user = useSelector(state => state.user.user)

  useEffect(() => {
    console.log(user)
  })
  return (
    <div className='navbar'>
      <div className='items1'>
        <img className='logo' src = {logo} alt = "logo"></img>
        <h2>Sawai Man Singh Hospital , Jaipur</h2>
      </div>

      <div className='items2'>
        <div>
          <img className='profile' src={user.profilePicUrl} alt={user.username}/> 
        </div>
<div>
     <h2>{user.username}</h2>
</div>

<div>
<h2><i class="fa-solid fa-ellipsis-vertical"></i></h2>
</div>




      </div>
    </div>
  )
}

export default Navbar