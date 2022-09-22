import React from 'react'
import './ForgotPassword.css'
import education from '../../Assets/education.png'
import { TextField } from '@mui/material'

import { useNavigate } from 'react-router-dom'
import { ForgotPass } from '../../services/userService'

function ForgotPassword() {


    const navigate = useNavigate()
    const [emailobj, setEmailObj] = React.useState({email:""})

    const takeEmail = (event) => {
        setEmailObj((prevState) => ({...prevState, email:event.target.value}));
    }

    const OnReset = () => {
        navigate('/ResetPassword')
        ForgotPass(emailobj).then((response) => { console.log(response); navigate('/ResetPassword')}).catch((error) => {console.log(error)});
    }

    return (
        <div>
            <div className='ForgotPasswordContainer'>
                <div className='imagetext'>
                    <img className='edcimg' src={education} alt="" />
                    <div className='BS'>Bookstore</div>
                </div>
            </div>
            <div className='FPass'>
                <h2>Forgot your Password?</h2>
            </div>
            <div className='userDetails'>
                <div className='t1'>
                    <div className='t1text'>
                        <p>Enter your email address and we'll send you a link to reset your password.</p>
                    </div>
                    <label style={{ width: "30%", height: "12%", marginRight: "71%", fontSize: 'medium' }}>Email Id</label>
                    <input onChange={takeEmail} style={{ width: "87%", height: "12%" }} />
                    <button onClick={OnReset}>Reset Password</button>
                </div>
                <div className='t2'>
                    <button>CREATE ACCOUNT</button>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword