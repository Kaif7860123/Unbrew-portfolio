import React from 'react'
import '../componenet/Pic.css'
function Pic(props) {
  return (
    <div className='container colpic card'>
    <div className='picCont card-img-top'>
    <img src={props.s} alt='logo' className='pic'></img>
    </div>
    <div className='textPic car-body'>
      <h2>{props.heading} </h2>
      <p>{props.p} </p>
    </div>
  </div>
  )
}

export default Pic
