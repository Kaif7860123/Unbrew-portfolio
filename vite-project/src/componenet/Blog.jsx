import React from "react";
import Navbar from "./navbar";
import Content from "./Content";
function Blog() {
  return (
    <>
      <div className='container-fluid main'>
      <Navbar/>
      <Content heading="our Blogs" para="home work Blogs"></Content>
      </div>
    </>
  );
}

export default Blog;
