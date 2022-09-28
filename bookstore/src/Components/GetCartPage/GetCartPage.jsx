import React from 'react'
import './GetCartPage.css'
// import './Cart.css'
import AddressDetails from '../AddressDetails/AddressDetails';
import { updateQuantityInCart } from '../../services/dataService';
import { removeBookFromCart } from '../../services/dataService';


function GetCartPage(props) {

    const [view, setView] = React.useState(true);
    const [quantity, setQuantity] = React.useState([])
    const cartObj = { id: Number(props.item.id) }
    // const bookqtyobj = {id: , book_id: , book_quantity:}
    // const onAddressClick = () => {
    //     setView(false)
    // }

    const addbook = () => {
        updateQuantityInCart(cartObj)

        // setQuantity(quantity + 1)
        console.log("Book Added to Cart")
    }

    const removebook = () => {
        // setQuantity(quantity - 1)
        removeBookFromCart(cartObj)
        console.log("Book removed from Cart")

    }

    return (
        // <h1> hai</h1>
        <div>

            <div className="cartlist">
                <div className="getcartpage">
                    <div className="aboutbookrow">
                        <div className="cartbookimg">
                            <img src="dontmakemethink.jpg" alt="" />
                        </div>
                        <div className="aboutbook">
                            <h3 className="abookname">{props.item.name}{/* BookName */}</h3>
                            <p className="abkauthor">{props.item.author}{/* author */}</p>
                            <div className="abookprice">
                                <h2 className="price">Rs.{props.item.price}{/* Rs. 500 */}</h2>
                                <p className="discountprice">{/* {props.item.price} */}Rs.1000</p>
                            </div>
                            <div className="aincrement">
                                <div className="aminus" onClick={removebook}>-</div>
                                <div className="aitemss"> {props.item.book_quantity}</div>
                                <div className="aplus" onClick={addbook}>+</div>
                                <button className="aremove" onClick={removebook} >Remove</button>
                            </div>
                        </div>
                        {/* <div className='PlaceOrderDiv'>
                            <button className="PlaceOrder" onClick={onAddressClick}>Place Order</button>
                        </div> */}
                    </div>
                </div>
                


                {/* <div className="aboutbookrow">
                <div className="cartbookimg">
                    <img src="image1.png" alt="" />
                </div>
                <div className="aboutbook">
                    <h3 className="abookname"> {props.item.product_id.bookName} BookName</h3>
                    <p className="abkauthor"> {props.item.product_id.author} author</p>
                    <div className="abookprice">
                        <h2 className="price">Rs. {props.item.product_id.discountPrice} ori</h2>
                        <p className="discountprice">Rs. {props.item.product_id.originalPrice} 1000</p>
                    </div>
                    !props.switchordersum && 
                    <div className="aincrement">
                        <div className="aminus" id={props.item._id} onClick={decrement} >-</div>
                        <div className="aitemss">{quantity} {props.item.book_quantity}</div>
                        <div className="aplus"  id={props.item._id} onClick={increment} >+</div>
                        <button className="aremove"  id={props.item._id} onClick={remove} >Remove</button>
                    </div>
                       }

                </div>
                <div className='PlaceOrderDiv'>
                    <button className="PlaceOrder" onClick={onAddressClick}>Place Order</button>
                </div>
            </div> */}
            </div>
            
        
        {/* {view ?
            <div className="Addressdetais">
                <p className="add" > Address Details </p>
            </div>
            : <div>
                <p className="add" >Address Details</p>
                <AddressDetails />
            </div>} */}
            </div>
    )
}

export default GetCartPage