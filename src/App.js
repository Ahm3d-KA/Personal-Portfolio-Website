import React from 'react';
// import { BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./Home";
import {HashRouter, Route, Routes} from "react-router-dom";
import {Project1bounce} from "./Project1bounce";
import {Project2mentalmaths} from "./Project2mentalmaths";
import {Project3archive} from "./Project3archive";

// import {Project1bounce} from "./Project1bounce";
// import {Project2mentalmaths} from "./Project2mentalmaths";
// import {Project3archive} from "./Project3archive";

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
          <HashRouter>
          <Routes>
              <Route path={"/"} element={<Home />} />
                  <Route path={"/bounce"} element={<Project1bounce />} />
                  <Route path={"/mentalmaths"} element={<Project2mentalmaths />} />
                  <Route path={"/archive"} element={<Project3archive />} />
          </Routes>
      {/*<Home /> */}
          </HashRouter>
      </>
  );
         
  
}

export default App;
