import React from 'react'
import { FaCheck } from 'react-icons/fa'
import ComButton from './src/componenet/ComButton'

function GetStarted(props) {
  return (
    <>
      <div className="col-lg-3 col-md-6 iconcol"> 
       
      <h1 className='n1'> <sup style={{color:' #9190a8'}}>$</sup>{props.number}</h1>
      <h6>{props.heading}</h6>
       <div className='row textdiv'> 
         <div className="col-lg-12">
       <span style={{color: '#9190a8'}} className=''><i className='' style={{ color: '#1fb6fc'}}> <FaCheck/></i>Strategic Alliance</span>
       </div>
       <div className="col-lg-12">
       <span style={{color: '#9190a8'}} className=''><i className='' style={{ color: '#1fb6fc'}}> <FaCheck/></i>Growth Expansion</span>
       </div>
       <div className="col-lg-12">
       <span style={{color: '#9190a8'}} className=''><i className='' style={{ color: '#1fb6fc'}}> <FaCheck/></i>Business Planning</span>
       </div>
       <div className="col-lg-12">
       <span style={{color: '#9190a8'}} className=''><i className='' style={{ color: '#1fb6fc'}}> <FaCheck/></i> Contact Negotiation</span>
       </div>
       <div className="col-lg-12">
       <span style={{color: '#9190a8'}} className=''><i className='' style={{ color: '#1fb6fc'}}> <FaCheck/></i>  Market Positioning</span>
       </div>
 
       </div>
       <div className='mt-5'>
       <ComButton value="Get Started"></ComButton>
       </div>
     </div>
    </>
  )
}

export default GetStarted
