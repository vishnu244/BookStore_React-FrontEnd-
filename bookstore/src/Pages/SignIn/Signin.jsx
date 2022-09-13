import React from 'react'
import onlineShopping from '../../Assets/OnlineShpping.png'
import './Signin.css'

import TextField from '@mui/material/TextField';

function Signin() {
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
                            <button >SIGNUP</button>
                        </div>
                        <div className="Data">
                            <div className="inputdetails">
                                <label className="emailid">Email Id</label>
                                <TextField id="outlined-basic" variant="outlined" size="small" placeholder=" Email Id " style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", height: "50px" }} />
                                <label className="emailid">Password</label>
                                <TextField id="outlined-basic" variant="outlined" size="small" placeholder=" Password " style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", height: "50px" }} />
                                <label className="forgotpass" >Forgot Password?</label>
                                <button >Login</button>
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