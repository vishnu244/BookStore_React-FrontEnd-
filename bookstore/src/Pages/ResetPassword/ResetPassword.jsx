import React from 'react'
import './ResetPassword.css'
import TextField from '@mui/material/TextField';
import { InputLabel } from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { ResetPass } from '../../services/userService';

function ResetPassword() {
    const navigate1 = useNavigate();
    const [passwordObj, setPasswordObj] = React.useState({email:"", password: "", token: "" })

    const takeEmail = (event) => {
        setPasswordObj((prevState) => ({ ...prevState, email: event.target.value }));
      };

    const takePassword = (event) => {
        setPasswordObj((prevState) => ({ ...prevState, password: event.target.value }));
    };
    const takeConfirm = (event) => {
        setPasswordObj((prevState) => ({...prevState, token: event.target.value }));

    };

    const next = async () => {
        ResetPass(passwordObj).then((response) => {console.log(response);console.log("Password reset successfully");  navigate1('/') }).catch((error) => { console.log(error) });   
    }

    return (

        <div>
            <div className='headfp'>
                <img src="WhiteBookImage.png" style={{ width: "28px", height: "23px" }} />
                <h4 style={{ fontWeight: "500", color: "white" }}>BookStore</h4>
            </div>
            <div className='boxfp'>
                <div className='capfp'>
                    <h2 style={{ fontWeight: "500" }}>Reset Your Password</h2>
                </div>
                <div className='mainfp'>
                    <div className='passfp'>
                        <InputLabel className='inputfp' style={{ fontSize: "small" }}>Email ID</InputLabel>
                        <TextField
                            className='inputfp'
                            variant="outlined"
                            type='email'
                            size='small'
                            onChange={takeEmail}
                            fullWidth />
                    </div>
                    <div className='passfp'>
                        <InputLabel className='inputfp' style={{ fontSize: "small" }}>Password</InputLabel>
                        <TextField
                            className='inputfp'
                            variant="outlined"
                            type='password'
                            size='small'
                            onChange={takePassword}
                            fullWidth />
                    </div>
                    <div className='passfp'>
                        <InputLabel className='inputfp' style={{ fontSize: "small" }}>Token</InputLabel>
                        <TextField
                            className='inputfp'
                            variant="outlined"
                            type='password'
                            size='small'
                            onChange={takeConfirm}
                            fullWidth />
                    </div>
                    <Button variant="contained" fullWidth style={{ backgroundColor: "#A03037", width: "25vw", marginLeft: "3.4rem" }} onClick={next}>Next</Button>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword