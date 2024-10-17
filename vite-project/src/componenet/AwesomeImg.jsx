import React from 'react'
import '../componenet/Awesome.css'
function AwesomeImg(props) {
  return (
    <div className= 'card carddiv  '>
      <div className="row">
   <img className='card-img-top' style={{width:"100%", height:"300px"}} src={props.s} />

      </div>
   <div  className= 'card-body'>
   <span className='card-title titlediv'> {props.b1}</span>
   <p className='card-text textdiv '  style={{whiteSpace:"nowrap"}}> {props.h4} </p>
   </div>
  </div>
  )
}

export default AwesomeImg
