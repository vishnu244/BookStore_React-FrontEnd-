import React from 'react'
import Header from '../Header/Header'
import './Cart.css'

import { getAllBooksincart } from '../../services/dataService';
import AddressDetails from '../AddressDetails/AddressDetails';
import GetCartPage from '../GetCartPage/GetCartPage';
import OrderSummary from '../OrderSummary/OrderSummary';

function Cart(props) {

    const [view, setView] = React.useState(true);
    const [addCart, setAddCart] = React.useState([])

    const GetCartItem = () => {
        getAllBooksincart()
            .then((response) => {
                console.log(response)
                setAddCart(response.data)
                console.log("CartItems from Set Cart", addCart)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    React.useEffect(() => {
        GetCartItem()
    }, [])

    const cartArray = addCart.map((item) => (<GetCartPage item={item} />))


    const onAddressClick = () => {
        setView(false)
    }


    return (
        <div>
            <Header />
            <div className='carttext'>
                <h5>Home /</h5> <h4> My cart</h4>
            </div>
            <div>
                <div /* className='cartarray' */>
                    {cartArray}
                </div>
                <div className='PlaceOrderDiv'>
                    <button className="PlaceOrder" onClick={onAddressClick}>Place Order</button>
                </div>
                {view ?
                    <div className="Addressdetais">
                        <p className="add" >Address Details</p>
                    </div>
                    : <AddressDetails />}
            </div>
        </div>
    )
}


export default Cart