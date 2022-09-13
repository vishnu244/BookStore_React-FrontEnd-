import React from 'react'
import onlineShopping from '../../Assets/OnlineShpping.png'
import './Signup.css'

import TextField from '@mui/material/TextField';

function Signup() {
    return (
        <div>
            <div class="signupContainer">
                <div class="Box">
                    <div class="table1">
                        <img src={onlineShopping} style={{ width: "70%", height: "75%", borderRadius: "50%" }} />
                        <h3>ONLINE BOOK SHOPPING</h3>
                    </div>
                    <div class="table2">
                        <div className="buttons">
                            <button style={{ backgroundColor: "white", border: "none", color: "grey" }}>LOGIN</button>
                            <button style={{ backgroundColor: "white", border: "none", fontWeight: "bold" }}>SIGNUP</button>
                        </div>
                        <div className="inputdetails">
                            <label className="emailid">Full Name</label>
                            <TextField id="outlined-basic" className="emailinput" variant="outlined" size='small' placeholder=" Full Name " />
                            <label className="emailid">Email Id</label>
                            <TextField id="outlined-basic" className="emailinput" variant="outlined" size="small" placeholder=" Email Id " />
                            <label className="emailid">Password</label>
                            <TextField id="outlined-basic" className="emailinput" variant="outlined" size="small" placeholder=" Password " />
                            <label className="emailid">Mobile Number</label>
                            <TextField id="outlined-basic" className="emailinput" variant="outlined" size="small" placeholder=" Mobile Number " />
                            <button >Signup</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup