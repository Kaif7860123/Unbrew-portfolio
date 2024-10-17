import React from 'react'
import '../componenet/Manage.css'
function ManageCard(props) {
  return (
    <div className='container ManageImg'>
    <div className='imgCont'>
    <img src={props.s} alt='logo'></img>
    </div>
    <div className='textCont'>
      <h2>{props.heading} </h2>
      <p>{props.p} </p>
    </div>
  </div>
  )
}

export default ManageCard
