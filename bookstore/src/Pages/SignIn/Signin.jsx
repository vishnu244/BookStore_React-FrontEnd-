import React from 'react'
import onlineShopping from '../../Assets/OnlineShpping.png'
import './Signin.css'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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

                            <button style={{ backgroundColor: "white", border: "none", fontWeight:"bold" }}>LOGIN</button>
                            <button style={{ backgroundColor: "white", border: "none", color:"grey" }}>SIGNUP</button>
                        </div>
                        <div className="Data">
                            <div className="inputdetails">
                                <label className="emailid">Email Id</label>
                                <TextField id="outlined-basic" className="emailinput" variant="outlined" size="small" placeholder=" Email Id " style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start",height:"50px" }} />
                                <label className="emailid">Password</label>
                                <TextField id="outlined-basic" className="emailinput" variant="outlined" size="small" placeholder=" Password " style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start",height:"50px"  }} />
                                <label className="forgotpass" >Forgot Password?</label>
                                <button style={{ borderRadius: "5px", color:"white"}}>Login</button>
                                <text>OR</text>
                            </div>
                            <div className="FBGgl" >
                                <button style={{ backgroundColor: "#4266B2", border: "grey", borderRadius:"5px", color:"white" }}>FaceBook</button>
                                <button style={{ backgroundColor: "#F5F5F5", border: "grey", borderRadius:"5px" }}>Google</button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Signin