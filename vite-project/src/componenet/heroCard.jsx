import React from 'react'
import hero from '../images/man5.jfif'
import quate from '../images/quate1.png'
function HeroCard() {
  return (
    <>
      <div className='row cardrow '>
    <div className='col-4 cardcol7 '>
      <div className='d-flex quote' >
      <img src={quate} className='quateimg  '/> 
      </div>

<p className='textpara'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
<div className='row'>
  
  <div className='col-5'>
<img src={hero} className='heroImg'/>
</div>
<div className="col-7">
  <h6 className='mt-4'>Rogger Scott</h6>
  <p className='textmarketting'>Marketting Manager</p>
</div>
</div>
    </div>
   </div>
    </>
  )
}

export default HeroCard
