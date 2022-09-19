import React from 'react'
import Header from '../Header/Header'
import './BookView.css'

function BookView(props) {
    
    return (
        <div className="BookViewContainer">
            <Header />
            <div className='MiddleOfBookView'>
                <div className="ImageCoumn">
                    <div className="imgborder">
                        <div className="bkimg">
                            <img src="dontmakemethink.jpg" />
                        </div>
                    </div>
                    <div className="CartWishlist">
                        <button className="addtobag" >ADD TO BAG</button>
                        <button className="wishlist" >WISHLIST</button>
                    </div>
                </div>
                <div className="bkname">
                    <h2 className="bknme"> {/* {props.book.name} */}Don't Make Me Think</h2>
                    <p className="athrname">by{/* {props.book.author} */} Steve Krug</p>
                    <div className="rtng">
                        <button className="rtngbtn">{/* {props.book.rating} */}4.5*</button>
                        <p className="qnty">{/* {props.book.quantity} */}(20)</p>
                    </div>
                    <div className="prcediv">
                        <h3 className="prce">{/* {props.book.price} */}Rs.1500</h3>
                        <p className="dscntprce">{/* {props.book.discountPrice} */}Rs.dis</p>
                    </div>
                    <hr />
                    <h4 className="bookdetails">{/* {props.book.description} */}Book Details</h4>
                    <p className="para">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially.
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
                        <input type="text" className="reviewinput" placeholder="write your revie" />
                        <button className="submits">SUBMIT</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default BookView