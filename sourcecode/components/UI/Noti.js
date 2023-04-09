import React from 'react'
import { useSelector } from 'react-redux'

const Noti = (props) => {
    const rdx=useSelector((state)=>state.Cart);
  return (
    <>
    <div style={{height:'31px',backgroundColor:'blue',textAlign:'center'}}>
{rdx.msg} </div>

</>
  )
}

export default Noti