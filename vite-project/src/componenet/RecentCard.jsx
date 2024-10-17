import React from 'react'
import "./Recentcard.css"
function RecentCard(props) {
  return (
    <>
      <div className="col-lg-3 col-md-6 col8">
        <img  src={props.s} className='pic3'/> 
        <div className='textdiv2'>
        <h4  className='explore' style={{fontWeight:"500"}}>Explore The Best Restaurant in New York</h4>
        <span style={{color:'#9190a8'}}>Dec,05,2020</span> <p style={{color:"#1fb6fc"}}> By Andrey markm</p>
        </div>
      </div>
    </>
  )
}

export default RecentCard
