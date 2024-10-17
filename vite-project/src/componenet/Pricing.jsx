import React from "react";
import Navbar from "./navbar";
import Content from "./Content";
function Pricing() {
  return (
    <>
      <div className='container-fluid main'>
      <Navbar/>
      <Content heading="our prices" para="service prices"></Content>
      </div>
    </>
  );
}

export default Pricing;
