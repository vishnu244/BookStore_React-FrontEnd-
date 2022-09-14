import React from "react";
import Signin from "../Pages/SignIn/Signin";
import Signup from "../Pages/SignUp/Signup";

function OrderLogin() {

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

export default OrderLogin