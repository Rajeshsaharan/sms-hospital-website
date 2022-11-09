import React from 'react'
import {Link} from "react-router-dom"


function WardOne(props) {
    const {ward} = props
  return (
    <div className='card'>
       <Link to = {`/wards/${ward._id}`}>{ward.ward_name}</Link>
    </div>
  )
}

export default WardOne