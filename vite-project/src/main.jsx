import React from 'react'
import ReactDOM from 'react-dom/client'
import Unbrew from './Unbrew.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Services from './componenet/Services.jsx'
import Pricing from './componenet/Pricing.jsx'
import Work from './componenet/Work.jsx'
import Blog from './componenet/Blog.jsx'
import Contactus from './componenet/Contactus.jsx'
import Home from './componenet/Home.jsx'
import About from './componenet/About.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>

     <Route path='/unbrew' element={<Unbrew/>}></Route>

     <Route path='/home' element={<Home/>}></Route>

      <Route path='/about' element={<About/>}></Route>
      <Route path='/service' element={<Services/>}></Route>
      <Route path='/price' element={<Pricing/>}></Route>
      <Route path='/work' element={<Work/>}></Route>
      <Route path='/blog' element={<Blog/>}></Route>
      <Route path='/contactus' element={<Contactus/>}></Route>
     </Routes>
    </BrowserRouter>
{/* // <BrowserRouter>
// <Routes>
//   <Route exact path='/unbrew' element={<Unbrew/>}></Route>
//   <Route exact path='/services' element={<Services/>}></Route>
// </Routes>
// </BrowserRouter> */}
  </React.StrictMode>,
)
