import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Cart from '../Components/Cart/Cart';
import Home from '../Components/Home/Home';
import OrderSuccessfull from '../Components/OrderSuccessfull/OrderSuccessfull';
import DashBoard from '../Pages/DashBoard/DashBoard';
import ForgotPassword from '../Pages/ForgotPassword/ForgotPassword';
import ResetPassword from '../Pages/ResetPassword/ResetPassword';


function RouterComponent() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route  path="/" element={ <DashBoard/>}/> 
              <Route  path="Home" element={ <Home/>}/>
              <Route  path = "ForgotPassword" element={<ForgotPassword/>} />
              <Route  path = "ResetPassword" element={<ResetPassword/>} />
              <Route  path = "cart" element={<Cart/>} />  
              <Route  path = "OrderSuccessfull" element={<OrderSuccessfull/>} />  
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouterComponent