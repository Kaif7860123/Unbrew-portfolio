import React from 'react'
function Ourservices(props) {
  return (
    <>
      <div className='col-lg-4 col-md-6 col1 align-items-center justify-content-between align-items-stretch'> 
          <p className='subheading'> {props.p}</p>
          <h1 className='heading'> {props.h1}</h1>
          <p className='para'> {props.para4}</p>
          <button className="btn3">Our Services
      </button>
      
        </div>
    </>
  )
}

export default Ourservices
