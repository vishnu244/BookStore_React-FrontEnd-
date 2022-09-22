import React from 'react'
import './OrderSummary.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


function OrderSummary() {

    const Navigate = useNavigate()

    const onCheckout = () => {
        Navigate('/OrderSuccessfull')
      }

  return (
    <div className='orderSummery-container'>
        <div className="orderSummery-text">
            Order Summery
        </div>
        <div className="orderSummery-orderData">
            <div className="orderItem-image">
                <img src="dontmakemethink.jpg" alt="" className='orderItem-image-img' />
            </div>
            <div className="orderData">
                <div className="cartItems-title"> BookName
                </div>
                <div className="cartItems-author"> Author
                    by 
                </div>
                <div className="cartItems-price">
                    Rs. 1500
                </div>
            </div>
        </div>
        <div className="checkout-btn">
            <Button variant="contained" className='checkout' onClick={onCheckout}>checkout</Button>
        </div>
    </div>
  )
}

export default OrderSummary