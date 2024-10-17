import React from "react";
import Navbar from "./navbar";
import Content from "./Content";
function Work() {
  return (
    <>
      <div className='container-fluid main'>
      <Navbar/>
      <Content heading="our works" para="home works"></Content>
      </div>
    </>
  );
}

export default Work;
