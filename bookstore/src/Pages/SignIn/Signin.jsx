import React from 'react'
import onlineShopping from '../../Assets/OnlineShpping.png'
import './Signin.css'

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
                            <button style={{ backgroundColor: "white", border:"none"}}>LOGIN</button>
                            <button style={{ backgroundColor: "white", border:"none"}}>SIGNUP</button>
                        </div>
                        <div className="Data">
                            <div className="inputdetails">
                                
                                <input type="email" placeholder=" Email Id " />
                                <input type="Password" placeholder=" Password " />
                                <button>Login</button>
                                <text>OR</text>
                            </div>
                            <div className="FBGgl" >
                                <button style={{ backgroundColor: "#4266B2", border: "grey" }}>FaceBook</button>
                                <button style={{ backgroundColor: "#F5F5F5", border: "grey" }}>Google</button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Signin