import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function WardDetails() {
    const wards = useSelector(state=>state.wards.wards)
    const {wardId} = useParams()
    const ward = wards.find((ward)=>{ return ward._id ===wardId})

  return (
    <div className='main'>
        {ward._id}
        {JSON.stringify(ward)}
        <h1>{ward.ward_name}</h1>
        <div className='card'>
            {ward.patients}
        </div>
    </div>
  )
}

export default WardDetails