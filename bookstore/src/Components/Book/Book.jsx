import React from 'react'
import './Book.css'



function Books(props) {

    return (

        // <div>
            <div className="bookContainer" >
                <div className="bookimg">
                    <div className="images">
                        <img style={{ height: '100%', width: '100%' }} src={props.book.image} alt="book" />
                    </div>
                </div>
                <div className="details">
                    <div className='BA'>
                        <p className="bookname">{props.book.name}</p>
                        <p className="author">by {props.book.author}</p>
                    </div>
                    <div className='RQ'>
                        <button className="ratingbtn">{props.book.rating}*</button>
                        <p className="quantity">({props.book.quantity})</p>
                    </div>
                    <div className='PD'>
                        <h2 className="price">Rs.{props.book.price}</h2>
                        <p className="discountprice">Rs.{props.book.discountPrice}</p>
                    </div>
                </div>
            </div>
        // </div>
    )
}

export default Books