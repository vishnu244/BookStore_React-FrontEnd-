import React from 'react'
import './ForgotPassword.css'
import education from '../../Assets/education.png'
import { TextField } from '@mui/material'


function ForgotPassword() {

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
                    <input style={{ width: "87%", height: "12%" }} />
                    <button>Reset Password</button>
                </div>
                <div className='t2'>
                    <button>CREATE ACCOUNT</button>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword