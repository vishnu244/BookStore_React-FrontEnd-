import React from 'react'
import './wishlistmain.css'
import { removeBookFromWishlists } from '../../services/dataService'

function WishListMain(props) {

    const obj = { id: Number(props.item.id) }

    const removebook = () => {
        removeBookFromWishlists(obj).then((response) => { console.log(response) }).catch((error) => { console.log(error) })
        console.log("Book Removed From WishList")
        // removeBookFromWishlists()
    }

    return (
        <div>
            <div className="wishrow" >
                <div className="wishimg">
                    <img src={props.item.image} /* "dontmakemethink.jpg" */ alt="notfound" />
                </div>
                <div className="wishdetails">
                    <h4 className="wishbook"> {props.item.name}{/* Don't Make Me Think */}</h4>
                    <p className="wishauthor">by {props.item.author} {/* Steve Krug */}</p>
                    <div className="wishprice">
                        <h3 className="wprice">{props.item.price}{/* Rs.1500 */}</h3>
                        <p className="disprice">Rs.2000</p>
                    </div>
                </div>
                <div className="remove">
                    <button onClick={removebook}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default WishListMain