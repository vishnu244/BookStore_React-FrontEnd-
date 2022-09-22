import React from 'react'
import './OrderSuccessfull.css'
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function OrderSuccessfull() {

    const Navigate = useNavigate()

    const onContinueShopping = () => {
        Navigate('/Home')
    }

    return (
        <div className="Home">
            <div>
            <Header/>
            </div>
            <div className="ordersuccess">
                <div className="orderplaced">
                    <img src="Orderplacedsuccessfully.png" alt="not found" />

                </div>
                <p className="orderpara">
                    hurray!!! your order is confirmed the order id is #123456 save the order id for further communication..
                </p>
            </div>
            <div className="tabledata">
                <table>
                    <tbody>
                        <tr>
                            <th colSpan="1">Email Us</th>
                            <th colSpan="1">Contact Us</th>
                            <th colSpan="3">Address</th>
                        </tr>
                        <tr>
                            <td>admin@bookstore.com</td>
                            <td>+91 8163475881</td>
                            <td>42, 14th Main, 15th Cross,Bangalore 560034</td>
                        </tr>
                    </tbody>
                </table>
                <button className="checkout"  onClick={onContinueShopping} >Continue Shopping</button>
            </div>
            <Footer/>
        </div>
    )
}

export default OrderSuccessfull