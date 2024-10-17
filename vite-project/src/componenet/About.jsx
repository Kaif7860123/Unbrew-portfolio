import React from "react";
import Navbar from "./navbar";
import Content from "./Content";
function About() {
  return (
    <>
      <div className='container-fluid main'>
      <Navbar/>
      <Content heading="About us" para="home about"></Content>
      </div>
    </>
  );
}

export default About;
