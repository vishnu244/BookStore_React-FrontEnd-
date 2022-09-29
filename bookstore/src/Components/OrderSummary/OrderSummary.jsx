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
    <div className='orderSummerycontainer'>
        <div className="orderSummerytext">
            <p>Order Summery</p>
        </div>
        <div className="orderSummeryorderData">
            <div className="orderItemimage">
                <img src="dontmakemethink.jpg" alt="" className='orderItem-image-img' />
            </div>
            <div className="orderData">
                <div className="cartItems-title">
                    The Girl in Room 105
                </div>
                <div className="cartItems-author"> 
                    by chetan Bhagat
                </div>
                <div className="cartItems-price">
                    Rs. 495
                </div>
            </div>
        </div>
        <div className="checkoutbtn">
            <Button variant="contained" className='checkout' onClick={onCheckout}>checkout</Button>
        </div>
    </div>
  )
}

export default OrderSummary