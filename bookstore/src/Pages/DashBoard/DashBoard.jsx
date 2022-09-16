import React from "react";
import Signin from "../SignIn/Signin";
import Signup from "../SignUp/Signup";



function DashBoard() {

    const [switchloginsignup, setswitchloginsignup] = React.useState(false)

    const ListenToSignup = (data) => {
        if (data == true) {
            setswitchloginsignup(true)
        } else if (data == false) {
            setswitchloginsignup(false)
        }
    }
    return (
        <div className="main-container">
            {
                switchloginsignup ? <Signup ListenToSignup={ListenToSignup} /> : <Signin ListenToSignup={ListenToSignup} />
            }
        </div>
    )
}

export default DashBoard