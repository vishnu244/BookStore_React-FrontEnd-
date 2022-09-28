import React from 'react'
import Header from '../Header/Header'
import './Cart.css'
// import '../AddressDetails/AddressDetails.css'

import { getAllBooksincart } from '../../services/dataService';
import AddressDetails from '../AddressDetails/AddressDetails';
import { updateQuantityInCart } from '../../services/dataService';
import { removeBookFromCart } from '../../services/dataService';
import GetCartPage from '../GetCartPage/GetCartPage';

function Cart(props) {

    const [view, setView] = React.useState(true);
    const [addCart, setAddCart] = React.useState([])
    // const [quantity, setQuantity] = React.useState("1")

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

    // const cartArray = addCart ? addCart.map((item) => (<GetCartPage item={item} />)) : " "
    const cartArray = addCart.map((item) => (<GetCartPage item={item} />)) 

    const onAddressClick = () => {
        setView(false)
    }

    // const removebook = () => {
    //     console.log("Book removed from Cart")
    //     removeBookFromCart()
    // }
    // const addbook = () => {
    //     console.log("Book Added tp Cart")
    //     updateQuantityInCart()
    // }

    // const addbook = () => {
    //     setQuantity(quantity + 1)
    //     console.log("Book Added tp Cart")
    //     updateQuantityInCart()
    //   }

    //   const removebook  = () => {
    //     setQuantity(quantity - 1)
    //     console.log("Book removed from Cart")
    //     removeBookFromCart()

    //   }

    return (
        <div>
            <Header />
            <div>

                {/* {addCart.length > 0 && addCart.map((item) =>  (<GetCartPage item={item} />)) } */}
                <div className='cartarray'>
                {cartArray}
                </div>
                {/* {addCart ? addCart.map((item) => (<GetCartPage item={item} />)) : " "} */}
                <div className='PlaceOrderDiv'>
                    <button className="PlaceOrder" onClick={onAddressClick}>Place Order</button>
                </div>
                {view ?
                    <div className="Addressdetais">
                        <p className="add" >Address Details</p>
                    </div>
                    : <AddressDetails />}
            </div>


            {/* <div className="cartlist">
                <div className="getcartpage">
                    <div className="aboutbookrow">
                        <div className="cartbookimg">
                            <img src="dontmakemethink.jpg" alt="" />
                        </div>
                        <div className="aboutbook">
                            <h3 className="abookname">BookName</h3>
                            <p className="abkauthor"> author</p>
                            <div className="abookprice">
                                <h2 className="price">Rs. 500</h2>
                                <p className="discountprice">Rs.1000</p>
                            </div>
                            <div className="aincrement">
                                <div className="aminus" onClick={removebook}>-</div>
                                <div className="aitemss"> {quantity}</div>
                                <div className="aplus" onClick={addbook}>+</div>
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
            </div> */}
        </div>
    )
}


export default Cart