import React from 'react'
import Header from '../Header/Header'
import './Cart.css'

import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';

function Cart() {

    return (
        <div className="cartContainer">
            <div className="header">
                <Header />
            </div>
            <div className='inputDetails'>
                <div className="CartDetails">
                    <div className="mycart">
                        <h3 className="mycarth3"> My Cart</h3>
                        <div className="selectLocation">
                            <img src="location.png" alt="not found" />
                        </div>
                    </div>
                    <div className='LocationandPO'>
                        <div className='locicon'>
                        <LocationOnSharpIcon style={{color:'grey',fontSize:'medium'}}/>
                        <p className="Cloc">Use Current location</p>
                        </div>
                        <button className="PlaceOrder"   >Place Order</button>
                    </div>
                </div>
                <div className="Addressdetais">
                    <p className="add">Address Details</p>
                </div>
                <div className="ordersummary">
                    <p>Order Summary </p>
                </div>
            </div>
        </div>
    )
}

export default Cart