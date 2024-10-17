 import React from 'react'
 
 function Content(props) {
   return (
    <div className='col-12 text-center text-white  r2'>
    <h1>{props.heading}</h1>
    <p>{props.para}</p>
  </div>
   )
 }
 
 export default Content
 