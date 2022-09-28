import React from 'react'
import './Wishlistpage.css'
import { removeBookFromWishlists } from '../../services/dataService'

function Wishlistpage(props) {
    const removebook = () => {
        console.log("Book Removed From WishList")
        removeBookFromWishlists()
    }
 
    return (

        <div className="wishlish">
            <div className="mywishlis">
                <h3 className="mywish">My Wishlist</h3>
                {
                    <div className="wishrow">
                        <div className="wishimg">
                            <img src="dontmakemethink.jpg" alt="notfound" />
                        </div>
                        <div className="wishdetails">
                            <h4 className="wishbook">Don't Make Me Think</h4>
                            <p className="wishauthor">by Steve Krug</p>
                            <div className="wishprice">
                                <h3 className="wprice">Rs.1500</h3>
                                <p className="disprice">Rs.2000</p>
                            </div>
                        </div>
                        <button className="removewish" onClick={removebook}>Remove</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Wishlistpage