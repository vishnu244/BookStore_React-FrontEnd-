import React from 'react'
import './Book.css'


function Books(props) {

    const Showbookdata = (data) => {
        console.log("singlebook", data)
        props.ListenToBookList()
        props.listenToEachBook(data)
    }

    return (
        <div className="bookContainer" onClick={() => Showbookdata(props.book)} >
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
                    <button className="ratingbtn">{props.book.rating}4.5*</button>
                    <p className="quantity">({props.book.quantity})</p>
                </div>
                <div className='PD'>
                    <h2 className="price">Rs.{props.book.price}</h2>
                    <p className="discountprice">Rs.{props.book.discountPrice}1000</p>
                </div>
            </div>
        </div>
    )
}

export default Books