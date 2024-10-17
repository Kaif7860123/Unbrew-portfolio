import React from "react";
import Navbar from "./navbar";
import Logo from '../images/bg.svg'
import ComButton from "./ComButton";
function Home() {
  return (
    <>
      <div className='container-fluid main'>
      <Navbar/>
      <div className="row homerow align-items-center justify-content-between align-itemss-stretch">
      <div className="col-md-6 col-lg-5  boostcol"><h1 className="boost">Boost Personal Productivity</h1>
      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
      {/* <button  className="btn1">Start A Project</button> */}
      <ComButton value="Start A Project"></ComButton>
      &nbsp;&nbsp;
      <button className="btn2">Call us for any enquiry
        9721836262
      </button>
      <ul>
        <li className="fontawesome">
          <span className="fa fa-twitter icon"></span>
          <span className="fa fa-facebook icon"></span>
          <span className="fa fa-instagram icon"></span>
          <span className="fa fa-google-plus icon"></span>
        </li>
      </ul>
      </div>
      <div className="col-md-6 col-lg-7">
        <img src={Logo} alt="img" className="img1"/>
      </div>
      </div>
       
    
      </div>
    </>
  );
}

export default Home;
