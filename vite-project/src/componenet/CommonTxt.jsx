import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

function CommonTxt(props) {
  return (
    <>
      <div className="col-6 text-center">
            <span className='unbrew' style={{color:"black"}}>{props.s}</span>
            <div className='explore'>
            <p className='para5'> <i className='text-start'><IoIosArrowRoundForward/></i> {props.p1}</p>
            <p className='para5'> <i className='text-start'><IoIosArrowRoundForward/></i>{props.p2}</p>
            <p className='para5'> <i className='text-start'><IoIosArrowRoundForward/></i>{props.p3}</p>
            <p className='para5'> <i className='text-start'><IoIosArrowRoundForward/></i>{props.p4}</p>
            <p className='para5'> <i className='text-start'><IoIosArrowRoundForward/></i>{props.p5} </p>
            </div>
            </div>
    </>
  )
}

export default CommonTxt
