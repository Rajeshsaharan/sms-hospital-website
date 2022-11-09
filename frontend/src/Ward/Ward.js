import React, { useEffect, useRef, useState } from 'react'
import { FetchWard } from '../Redux/Ward/WardActions';
import WardOne from './WardOne';
import { connect } from "react-redux"
import { Link, useNavigate } from 'react-router-dom'

function Ward(props) {
  const naviagte = useNavigate()
  const [ward, setWard] = useState("")
  const { wards, FetchWard } = props
  
  useEffect(()=>{
    FetchWard()
  }, [])



  const handleSubmit = e =>{
    const selectedward = wards.find((item)=> { return item.ward_name === ward})
    naviagte(`/wards/${selectedward._id}`)
  }

 




const wardslist = wards.map((ward) => {
  //each child must have a key unique 
  return <WardOne key={ward._id} ward={ward}></WardOne>
})


return (

  <div className='main'>
    <form className='search' onSubmit={handleSubmit}>
    <input list= "data" type="text" placeholder='Type any Search Ward Name , ICU Name, etc.' onChange={e=>setWard(e.target.value)} />
    
    <datalist id= "data" >
      {wards.map((item) =>
        <option key={item._id} value={item.ward_name} />
      )}
    </datalist>
    <button className='button-blue-light' type='submit'>Go</button>
    </form>


      <Link to = '/wards/add'>Add new ward</Link>
    <div className='ward'>
     
      {wardslist}
    </div>
  </div>
)

      }

const mapStateToProps = state => ({
  wards: state.wards.wards
});

const mapDispacthToProps = dispatch => {
  return {
    FetchWard: () => {
      dispatch(FetchWard())
    }
  };
};



export default connect(
  mapStateToProps,
  mapDispacthToProps
)(Ward);



