import React from "react";
import Navbar from "./navbar";
import Content from "./Content";
function Services() {
  return (
    <>
      <div className='container-fluid main'>
      <Navbar/>
      <Content heading="Services" para="Home About Services"></Content>
      </div>
    </>
  );
}

export default Services;
