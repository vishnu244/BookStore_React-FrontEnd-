import React from 'react'
import Header from '../Header/Header'
import './Cart.css'

import { displayAllBooksInCart } from '../../services/dataService';
import AddressDetails from '../AddressDetails/AddressDetails';


function Cart() {

    const [cartitems, setcartitems] = React.useState([])
    const [view, setView] = React.useState(true);
    const [view1, setView1] = React.useState(true);
    const [addCart, setAddCart] = React.useState([])

    const GetCartItem = () => {
        displayAllBooksInCart()
            .then((response) => {
                console.log(response)
                setAddCart(response.data.success)
                console.log("CartItems from Set Cart", addCart)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    React.useEffect(() => {
        GetCartItem()
    }, [])


    const onAddressClick = () => {
        setView(false)
    }

    return (
        <div>
            <Header />
            <div className="cartlist">
                <div className="getcartpage">
                    <div className="aboutbookrow">
                        <div className="cartbookimg">
                            <img src="dontmakemethink.jpg" alt="" />
                        </div>
                        <div className="aboutbook">
                            <h3 className="abookname"> BookName</h3>
                            <p className="abkauthor"> author</p>
                            <div className="abookprice">
                                <h2 className="price">Rs. 500</h2>
                                <p className="discountprice">Rs.1000</p>
                            </div>
                            <div className="aincrement">
                                <div className="aminus" >-</div>
                                <div className="aitemss"> 1</div>
                                <div className="aplus" >+</div>
                                <button className="aremove">Remove</button>
                            </div>
                        </div>
                        <div className='PlaceOrderDiv'>
                            <button className="PlaceOrder" onClick={onAddressClick}>Place Order</button>
                        </div>
                    </div>
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