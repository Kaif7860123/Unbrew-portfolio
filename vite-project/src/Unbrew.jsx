import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './unbrew.css'
import Home from './componenet/Home'
import About from './images/about.svg'
import Img from './Img'
import Bussiness from './images/business.png'
import Ui from './images/uiux.jpg'
import Marketing from './images/marketting.png'
import Optimization from './images/optimization.png'
import Creative from './images/creativity.png'
import SEO from './images/seo.png'
import Ourservices from './componenet/Ourservices'
import Girl from './images/girl.jfif'
import Man3 from './images/man3.jfif'
import Man4 from './images/man4.jfif'
import Man6 from './images/man6.jfif'
import Man5 from './images/man5.jfif'
import Pic from './componenet/Pic'
import ComText from './componenet/comText'
import HeroCard from './componenet/heroCard'
import Textcom from './componenet/Textcom'
import ManageCard from './componenet/ManageCard'
import management from './images/management.png'
import protect from './images/protect.png'
import privates from './images/private.png'
import help from './images/protect.png'
import AwesomeImg from './componenet/AwesomeImg'
import awesomeimg from './images/man3.jfif'
import awesomeimg1 from './images/man2.jfif'
import awesomeimg2 from './images/man4.jfif'
import awesomeimg3 from './images/man5.jfif'
import GetStarted from '../GetStarted'
import pic3 from './images/man3.jfif'
import { IoIosSend } from "react-icons/io";
import RecentCard from './componenet/RecentCard'
import pic1 from './images/man2.jfif'
import pic2 from './images/man4.jfif'
import pic4 from './images/man6.jfif'
import { CiTwitter } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { PiInstagramLogoLight } from "react-icons/pi";

import CommonTxt from './componenet/CommonTxt'
import pic6 from './images/man6.jfif'
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { FaMap } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
function Unbrew() {
  return (
    <>
    <div>
       <div className='container-fluid main'>
       <Home></Home>   
       </div> 
       <div className='container-fluid main2 '>
       <div className='row '>
        
        <Ourservices p="Our Services" h1="We Provide A Lot of Cool Services" para4="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."></Ourservices>
        
        <div className='col-lg-8 mt-5 '>
          <div className='row'>
            <div className='col-lg-4 col-md-4'>
          <Img heading="Marketing" p="Even the all-powerful Pointing has no control about the blind texts" s={Marketing} ></Img>
          </div>
          <div className='col-lg-4'>
          <Img heading="SEO" p="Even the all-powerful Pointing has no control about the blind texts" s={SEO}></Img>
          </div>
          <div className='col-lg-4'>
          <Img heading="UI/UX Design" p="Even the all-powerful Pointing has no control about the blind texts" s={Ui}></Img>
          </div>
          </div>

          <div className='row'>
            <div className='col-lg-4 col-md-4'>
          <Img heading="Creative" p="Even the all-powerful Pointing has no control about the blind texts" s={Creative}></Img>
          </div>
          <div className='col-lg-4'>
          <Img heading="Optimization" p="Even the all-powerful Pointing has no control about the blind texts" s={Optimization}></Img>
          </div>
          <div className='col-lg-4'>
          <Img heading=" Business Strategy" p="Even the all-powerful Pointing has no control about the blind texts" s={Bussiness}></Img>
          </div>
          </div>
        </div>
       </div> 
       </div>
       {/* new div start */}
       <div className='container-fluid main3'>
        <div className='row girlrow'>
<div className='col-3'>
  <img src={Girl} className='girlimg'/>
</div>
<div className='col-9 col3'>
  <div className='row countrow'>
    <div className='col-lg-3 num'>900+
      <p>PROJECT DONE</p>
    </div>
    <div className='col-lg-3 num'>500+
    <p>OPTIMIZE SITES</p>

    </div>
    <div className='col-lg-3 num'>770+
    <p>COFFEE  CUPS</p>

    </div>
    <div className='col-lg-3 num'>1000+
    <p> HAPPY PEOPLES</p>

    </div>
  </div>
</div>
{/* div end */}

        </div>
       </div>

{/* new div start */}

<div className='container-fluid main4 '>
  <div className='row '>

    <div className='col-6'> 
  <img src={About} className='aboutimg'/>

    </div>
    <div className='col-6 align-items-center justify-content-between align-items-stretch aboutCol'>
      <p className='p'>About us</p>
      <h1 className='head'>Unbrew A Digital Agency Company</h1>
     <p className='para'> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
     </p>
     <p className='para'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
     <button className='servicebtn'>More About us</button>
    </div>
  </div>
</div>
 {/* div end */}
 {/* new div start */}
 <div className='container main5'>
  <div className='row '>
    <ComText p="TEAM" d='OUR DIGITAL EXPERTS TEAM' paragraph='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.'></ComText>
  </div>
  <div className='row'>
     
    <div className='col-lg-3  '><Pic p="CEO Founder & Developer" heading="Mark Andren" s={Man3}></Pic></div>
    <div className='col-lg-3'><Pic  p="CEO Founder & Developer" heading=" Andrenson"  s={Man4}></Pic></div>
    <div className='col-lg-3'><Pic  p="CEO Founder & Developer" heading="Marko polo" s={Man5}></Pic></div>
    <div className='col-lg-3'><Pic  p="CEO Founder & Developer" heading="Mark Zukerberg" s={Man6}></Pic></div>
  </div>
 </div>

 {/* div end */}
 {/* div start */}
<div className='container'>
  <div className='row'>
    <ComText p="TESTIMONIAL" d="Happy Customer" paragraph='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.'></ComText>
  </div>
   
</div>

 {/* div end */}
 <div className='container d-flex ps-5'>
  <HeroCard></HeroCard>
  <HeroCard></HeroCard>
  <HeroCard></HeroCard>
 </div>

{/* div start */}

<div className='container-fluid main8'>
 <div className='row '>
  <div className='textChoose'>
 <Textcom  span1="why choose us" d
 h3="Easy management For Your Bussiness" para1='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.'></Textcom>
 </div>
  </div>
  <div className='container'>
    <div className="row">
      <div className="col-lg-3">
       <ManageCard s={management} heading="Easy Management" p="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."></ManageCard>
      </div>
      <div className="col-lg-3">
       <ManageCard s={protect} heading="Protect Your Profile" p="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."></ManageCard>
      </div>
      <div className="col-lg-3">
       <ManageCard s={privates}heading=" Private Community" p="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."></ManageCard>
      </div>
      <div className="col-lg-3">
       <ManageCard s={help} heading=" 24/7 Help Support" p="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."></ManageCard>
      </div>
    </div>
  </div>
</div>

{/* div end */}
{/* div start */}
<div className='container-fluid main9'>
<div className='row'>
  <div className='col-md-8'>
    <p className='p4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
  </div>
</div>
</div>
 {/* div end */}
 {/* div start */}
<div className='container main10'>
<div className='row'>

<ComText p="OUR PORTFOLIO" d='Our Awesome Work' paragraph='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.'></ComText>

</div>
<div className='container-fluid'>
<div className='row awesomePicCol align-items-center justify-content-between align-items-stretch'>
  
<div className='col-lg-3 col-md-6'>
 <AwesomeImg s={awesomeimg} b1="Branding Printing" h4="High Quality Design Concept"></AwesomeImg>
 </div>
 <div className='col-lg-3 col-md-6 '>
 <AwesomeImg s={awesomeimg1} b1="Graphic Design" h4="High Quality Design Concept"></AwesomeImg>
 </div>
 <div className='col-lg-3 col-md-6 '>
 <AwesomeImg s={awesomeimg2} b1=" Web Development" h4="High Quality Design Concept"></AwesomeImg>
 </div>
 <div className='col-lg-3 col-md-6 '>
 <AwesomeImg s={awesomeimg3} b1=" Software" h4="High Quality Design Concept"></AwesomeImg>   
 </div>
 <div className='mt-5'>
 <ComText p="View More Portfolio"></ComText>
 </div>
</div>
</div>
</div>
 {/* div end */}
 {/* div start */}

 <div className='container-fluid'>
  <div className='row'>
    <ComText p='PRICING' d="Choose Your Pricing Plan" paragraph="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove." ></ComText>
  </div>
  <div className="container">
    <div className='row main11'>
      <GetStarted number="49" heading="PRESONAL"></GetStarted>
      <GetStarted number="109" heading="PROFESSIONAL"></GetStarted>
      <GetStarted number="79" heading="MEDIUM BUSSINESS"></GetStarted>
      <GetStarted number="149" heading=" GIGANTIC BUSSINESS"></GetStarted>
  </div>
  </div>
 </div>
 {/* div end */}
 {/* div start */}

 <div className='container-fluid'>
  <div className='container'>
    <div className='row main12'>
      <ComText p="OUR BLOG" d="Recent Blog" paragraph="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove."></ComText>
    </div>
  </div>
  <div className="container">
    <div className='row'>
       
<RecentCard s={pic3}></RecentCard>
<RecentCard s={pic1}></RecentCard>
<RecentCard s={pic2}></RecentCard>
<RecentCard s={pic4}></RecentCard>       
    </div>
  </div>
 </div>
 {/* div start */}

 <div className='container-fluid main14'>
  <div className='container'>
    <div className='row'>
    <div className="col-lg-6 col-md-12 sletterCol">
      <h3 style={{color:"white", fontSize:"25px", fontWeight:"400"}}>New Sletter-Stay tune and get latest update</h3>
      <span style={{color: '#dbdae6', fontWeight:"400", fontSize:"18px"}}>For far away behind the scan</span>
    </div>
    <div className="col-lg-6 col-md-12 inputCol"> 
      <input type='text'  placeholder='Enter email address' className='inputType'/>
  <i className='sendIcon'><IoIosSend/></i>
    </div>
    </div>
  </div>
 </div>
 {/* div end */}
 {/* div start */}
 
    <div className="container main13">
      <div className='row'>
      <div className='col-lg-3 col-md-3 col10'> 
        <span className='unbrew' style={{color:' #1fb6fc'}} >Unbrew</span>
        <p className='para4'>A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
       <div className='icon3'> 
       <i className='icon4'><CiTwitter/></i>
        <i className='icon4'><SlSocialFacebook/></i>
        <i className='icon4'><PiInstagramLogoLight/></i>
        </div>
      </div>
      <div className='col-lg-4 col-md-3'> 
         <div className="container-fluid">
          <div className="row">       
<CommonTxt s="Explore" p1="About us" p2="Services" p3="Works" p4="Blogs" p5="Contact"></CommonTxt>
<CommonTxt s="Quick Links" p1="Contact us" p2=" pricing" p3=" Terms & Condition" p4=" Privacy" p5=" Feedback"></CommonTxt>
          </div>
         </div>
      </div>
      <div className='col-lg-3 col-md-3' style={{position:"relative"}}> 
         <div> 
        <span className='unbrew'>Recent Post</span>
         <br/>

        <img src={pic6} style={{width:"70px", height:"80px"}} className='mt-4'/>
        <i  style={{paddingLeft:"10px ", color:'#1fb6fc'}}><FaRegCalendarAlt/></i>
        <span style={{fontSize:"12px",  color: '#9190a8'
}}>DEC 12.2020</span>
        <i  style={{color:'#1fb6fc'}}><CiUser/></i>
        <span style={{color: '#9190a8', fontSize:"12px"}}>ADMIN</span>
        <p className='p9'>Creativity and <br/> Inspiration</p>
    </div>
    <div> 
        <img src={pic6} style={{width:"70px", height:"80px"}} className='mt-4'/>
        <i  style={{paddingLeft:"10px ", color:'#1fb6fc'}}><FaRegCalendarAlt/></i>
        <span style={{fontSize:"12px",  color: '#9190a8'
}}>DEC 12.2020</span>
        <i  style={{color:'#1fb6fc'}}><CiUser/></i>
        <span style={{color: '#9190a8', fontSize:"12px"}}>ADMIN</span>
        <p className='p10'>Creative and <br/> Inspiration</p>
     </div>


     <div> 
        <img src={pic6} style={{width:"70px", height:"80px"}} className='mt-4'/>
        <i  style={{paddingLeft:"10px ", color:'#1fb6fc'}}><FaRegCalendarAlt/></i>
         
        <span style={{fontSize:"12px",  color: '#9190a8'
}}>DEC 12.2020</span>
       <i  style={{color:'#1fb6fc'}}><CiUser/></i>
        <span style={{color: '#9190a8', fontSize:"12px"}}>ADMIN</span>
        <p className='p11'>Creative and <br/> Inspiration</p>
     </div>
      </div>
      <div className='col-lg-2 col-md-3 '>
        <span className='head1'>Have a Question</span>
        <div className='para4' style={{fontSize:"15px", lineHeight:"1.4rem"}} >
        <div className='mt-2'>
        <i style={{color:'#1fb6fc',}}><FaMap/></i>
         <span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span> 
         {/* <br/> */}
         </div>
         <div className='mt-3'>
         <i style={{color:'#1fb6fc',}}><IoMdCall/> </i>
         <span style={{color: 'rgb(132, 128, 128)'}}>+919856788</span>
         </div>

         <div className='mt-4'>
         <i style={{color:'#1fb6fc',}}><IoIosSend/> </i>
         <span style={{color: 'rgb(132, 128, 128)'}}>info@yourdomain.com</span>
         </div>
        </div>
      </div>
       
  </div>
</div>
 {/* div end */}
 {/* div start */}
<div className='container-fluid main14'>
  <div className='row'>
    <div className="col-lg-12 col-md-6">
      <p className='footertext'>Copyright ©2024 All rights reserved | This template is made with <i  ><CiHeart/></i> by <span style={{color:"#1fb6fc"}}>Colorlib</span></p>
    </div>
  </div>
</div>
 {/* div end */}
 {/* div end */}
 </div>
 
 
    </>
  )
}

export default Unbrew
