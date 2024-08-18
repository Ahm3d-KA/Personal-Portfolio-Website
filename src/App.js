import React from 'react';
// import {Routes, Route} from "react-router-dom";
import {Home} from "./Home";
// import {Project1bounce} from "./Project1bounce";
// import {Project2mentalmaths} from "./Project2mentalmaths";
// import {Project3archive} from "./Project3archive";
// import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import {Project1bounce} from "./Project1bounce";
import Layout from "./Layout";
import {Project2mentalmaths} from "./Project2mentalmaths";
import {Project3archive} from "./Project3archive";

// Cool project picture animations
// Cool animations
// add smooth scroll using copilot
// check for contrast
// add all the logos
// color scheme
// cool images

function App() {
  return (
      <>
         
              <Routes>
                  <Route path="/" element={<Layout />}>
                  <Route path="/" element={<Home />} />
                      <Route index element={<Home />} />
                      <Route path="archive" element={<Project3archive />} />
                      <Route path="bounce" element={<Project1bounce />} />
                      <Route path="mentalmaths" element={<Project2mentalmaths />} />
                      {/*<Route path="contact" element={<Contact />} />*/}
                      {/*<Route path="*" element={<NoPage />} />*/}
                  </Route>
              </Routes>
   
          {/*<BrowserRouter basename="/Personal-Portfolio-Website">*/}
          
              {/*<Routes>*/}
              {/*    <Route index element={<Home />} />*/}
              {/*    <Route path="/" element={<Home />} />*/}
              {/*    <Route path={"/home"} element={<Home />} />*/}
              {/*    <Route path={"/bounce"} element={<Project1bounce />} />*/}
              {/*    <Route path={"/mentalmaths"} element={<Project2mentalmaths />} />*/}
              {/*    <Route path={"/archive"} element={<Project3archive />} />*/}
              {/*</Routes>*/}
          {/*</BrowserRouter>*/}
          
          {/*<Project link={"localhost:3000"} pictureLink={portfoliopic} title={"Clothing Website"} timePeriod={"May 23 - Jan 24"} technologiesUsed={["helo", "me"]}  about={"This project is an e-commerce shopping platform designed to provide users with a seamless online shopping experience. The website features a clean and modern user interface, allowing users to browse, search, and purchase products easily. The site includes a robust backend for handling inventory management, user authentication, and secure payment processing."} />*/}
          {/*<Project />*/}
          {/*<Navbar />*/}
          {/*<Hero />*/}
          {/*<Technlogies />*/}
          {/*<About />*/}
          {/*<Work />*/}
          {/*<Experience />*/}
          {/*<Contact  />*/}
          {/*<Footer />*/}
      </>
  );
}

export default App;
