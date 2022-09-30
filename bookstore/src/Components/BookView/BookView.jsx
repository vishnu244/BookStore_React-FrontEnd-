import React, { useState } from 'react'
import Header from '../Header/Header'
import './BookView.css'

import { addBookTocart } from '../../services/dataService'
import { addBookToWishlist } from '../../services/dataService'

function BookView(props) {
    const [view, setview] = useState(true)

    const addedToBag = () => {
        const cartObj = {
            book_id: Number(props.selecbook.id),
            book_quantity: Number(props.selecbook.quantity)
        }
        addBookTocart(cartObj)
        setview(false)
        console.log("book added to cart")

    }
    const addedToWishList = () => {
        
        const wishlistobj = {
            cart_id:Number(props.selecbook.id),
            book_id:Number(props.selecbook.id),

        }
        addBookToWishlist(wishlistobj)
        console.log("book added to WishList")
    }

    return (
        <div className="BookViewContainer">
            <Header />
            <div className='MiddleOfBookView'>
                <div className="ImageColumn">
                    <div className="imgborder">
                        <div className="bkimg">
                            <img src={props.selecbook.image} />
                        </div>
                    </div>
                    {view ?
                        <div className="CartWishlist">
                            <button className="addtobag" onClick={addedToBag}>ADD TO BAG</button>
                            <button className="wishlist" onClick={addedToWishList}>WISHLIST</button>
                        </div> : <button className="added" >Added To Bag</button>}
                </div>
                <div className="bkname">
                    <h2 className="bknme"> {props.selecbook.name}{/* Don't Make Me Think */}</h2>
                    <p className="athrname">by{props.selecbook.author} {/* Steve Krug */}</p>
                    <div className="rtng">
                        <button className="rtngbtn">{/* {props.selecbook.rating} */}4.5*</button>
                        <p className="qnty">({props.selecbook.quantity}){/* (20) */}</p>
                    </div>
                    <div className="prcediv">
                        <h3 className="prce">{props.selecbook.price}{/* Rs.1500 */}</h3>
                        <p className="dscntprce">{/* {props.selecbook.discountPrice} */}Rs.1000</p>
                    </div>
                    <hr />
                    <h4 className="bookdetails">Book Details</h4>
                    <p className="para">
                        {props.selecbook.description}
                    </p>
                    <hr />
                    <h4 className="customerfeedback">Customer Feedback</h4>
                    <div className="overallrating">
                        <p className="overallratingpara">overallrating</p>
                        <div className="star">
                            <span style={{ fontSize: "20px", marginRight: "15px" }}>&#9734;</span>
                            <span style={{ fontSize: "20px", marginRight: "15px" }}>&#9734;</span>
                            <span style={{ fontSize: "20px", marginRight: "15px" }}>&#9734;</span>
                            <span style={{ fontSize: "20px", marginRight: "15px" }}>&#9734;</span>
                            <span style={{ fontSize: "20px", marginRight: "15px" }}>&#9734;</span>
                        </div>
                        <input type="text" className="reviewinput" placeholder="write your review" />
                        <button className="submits">SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookView