import React from 'react'
import './Img.css'
function Img(props) {
  return (
    <div className='container contImg'>
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

export default Img
