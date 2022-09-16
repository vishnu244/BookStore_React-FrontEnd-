import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from '../Components/Home/Home';
import DashBoard from '../Pages/DashBoard/DashBoard';
import ForgotPassword from '../Pages/ForgotPassword/ForgotPassword';


function RouterComponent() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route  path="/" element={ <DashBoard/>}/> 
              <Route  path="Home" element={ <Home/>}/>
              <Route path = "ForgotPassword" element={<ForgotPassword/>} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouterComponent