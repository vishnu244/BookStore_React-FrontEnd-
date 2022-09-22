import React from 'react'
import onlineShopping from '../../Assets/OnlineShpping.png'
import './Signin.css'

import TextField from '@mui/material/TextField';

import { login } from '../../services/userService';
import { useNavigate } from 'react-router-dom';
import { ForgotPassword } from '../../services/userService';

const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function Signin(props) {

  const Navigate = useNavigate()

  const [LoginObj, setLoginObj] = React.useState({ email: "", password: "" });
  const [regexObj, setRegExObj] = React.useState({
    emailBorder: false,
    passwordBorder: false,
    emailHelper: "",
    passwordHelper: "",
  });

  const takeEmail = (event) => {
    setLoginObj((prevState) => ({ ...prevState, email: event.target.value }));
  };
  const takePassword = (event) => {
    setLoginObj((prevState) => ({ ...prevState, password: event.target.value }));
  };

  const changeSignUp = () => {
    props.ListenToSignup(true)
  }

  const OnButton = () => {
    Navigate('/ForgotPassword')
  }

  const OnSubmit = async() => {
    let emailTest = emailRegex.test(LoginObj.email);
    let passwordTest = passwordRegex.test(LoginObj.password);

    if (emailTest === false) {
      setRegExObj((prevState) => ({
        ...prevState,
        emailBorder: true,
        emailHelper: "enter correct email",
      }));
    } else if (emailTest === true) {
      setRegExObj((prevState) => ({
        ...prevState,
        emailBorder: false,
        emailHelper: "",
      }));
    }
    if (passwordTest === false) {
      setRegExObj((prevState) => ({
        ...prevState,
        passwordBorder: true,
        passwordHelper: "enter correct password",
      }));
    } else if (passwordTest === true) {
      setRegExObj((prevState) => ({
        ...prevState,
        passwordBorder: false,
        passwordHelper: "",
      }));
    }

    if (emailTest === true && passwordTest === true) {
      // console.log("hitt the server");
      let response = await login(LoginObj);
      console.log(response)
      Navigate('/Home')
      localStorage.setItem( "token",response?.data?.token)

    }

  };

  return (
    <div>
      <div class="signinContainer">
        <div class="Block">
          <div class="box1">
            <img src={onlineShopping} style={{ width: "70%", height: "75%", borderRadius: "50%" }} />
            <h3>ONLINE BOOK SHOPPING</h3>
          </div>
          <div class="box2">
            <div className="buttons">
              <button style={{ fontWeight: "bold", color: "black" }}>LOGIN</button>
              <button onClick={changeSignUp}>SIGNUP</button>
            </div>
            <div className="Data">
              <div className="inputdetails">
                <label className="emailid">Email Id</label>
                <TextField id="outlined-basic"
                  variant="outlined"
                  size="small"
                  placeholder=" Email Id "
                  style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", height: "50px" }}
                  onChange={takeEmail}
                  error={regexObj.emailBorder}
                  helperText={regexObj.emailHelper} />

                <label className="emailid">Password</label>
                <TextField id="outlined-basic"
                  variant="outlined"
                  size="small"
                  type="password"
                  placeholder=" Password "
                  style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", height: "50px" }}
                  onChange={takePassword}
                  error={regexObj.passwordBorder}
                  helperText={regexObj.passwordHelper} />

                <label className="forgotpass" onClick={OnButton}>Forgot Password?</label>
                <button onClick={OnSubmit}>Login</button>
                <text>OR</text>
              </div>
              <div className="FBGgl" >
                <button style={{ color: "white" }}>FaceBook</button>
                <button style={{ backgroundColor: "#F5F5F5" }}>Google</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin