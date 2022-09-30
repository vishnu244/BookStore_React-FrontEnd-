import React from 'react'
import './GetCartPage.css'
// import './Cart.css'
import AddressDetails from '../AddressDetails/AddressDetails';
import { updateQuantityInCart } from '../../services/dataService';
import { removeBookFromCart } from '../../services/dataService';
import { increment } from '../../services/dataService';
import { decrement } from '../../services/dataService';

function GetCartPage(props) {

    const [view, setView] = React.useState(true);
    const [quantity, setQuantity] = React.useState([])
    const cartObj = { id: Number(props.item.id) }


    const bookincrement = () => {
        increment(cartObj)
        console.log("Book Qunatity increased")
    }

    const bookdecrement = () => {
        decrement(cartObj)
        console.log("Book Quantity decreased")
    }

    const removebook = () => {
        removeBookFromCart(cartObj)
        console.log("Book removed from Cart")
    }

    return (
        <div className="cartlist">
            <div className="cartbookimg">
                <img src="dontmakemethink.jpg" alt="" />
            </div>
            <div className="aboutbook">
                <div className="nameauth">
                    <h3 className="abookname">{props.item.name}{/* BookName */}</h3>
                    <p className="abkauthor">{props.item.author}{/* author */}</p>
                </div>
                <div className="abookprice">
                    <h2 className="price">Rs.{props.item.price}{/* Rs. 500 */}</h2>
                    <p className="discountprice">{/* {props.item.price} */}Rs.1000</p>
                </div>
                <div className="aincrement">
                    <div className="aminus" onClick={bookdecrement}>-</div>
                    <div className="aitemss"> {props.item.book_quantity}</div>
                    <div className="aplus" onClick={bookincrement}>+</div>
                    <button className="aremove" onClick={removebook} >Remove</button>
                </div>
            </div>
        </div>
    )
}

export default GetCartPage