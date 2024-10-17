import React from "react";
import Navbar from "./navbar";
import Content from "./Content";
function Contactus() {
  return (
    <>
      <div className='container-fluid main'>
      <Navbar/>
      <Content heading="contact us for explore" para="home contact us"></Content>
      </div>
    </>
  );
}

export default Contactus;
