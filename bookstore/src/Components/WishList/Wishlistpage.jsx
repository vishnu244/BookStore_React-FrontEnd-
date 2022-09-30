import React, { useEffect, useState } from 'react'
import './Wishlistpage.css'
import { removeBookFromWishlists } from '../../services/dataService'
import { displayBooksFromWishlists } from '../../services/dataService'
import WishListMain from '../wishlistmain/wishlistmain'
import Header from '../Header/Header'

function Wishlistpage(props) {

    const [wish, setwish] = useState([])

    const getWishlist = () => {
        displayBooksFromWishlists().then((response) => { console.log(response); setwish(response.data) }).catch((error) => { console.log(error) })
    }
    useEffect(() => {
        getWishlist()
    }, [])

    const wisharray = wish.map((item) => (
        <WishListMain item={item} />
    ))


    return (

        <div>
            <Header />
            <div className='wishtext'>
                <h5>Home /</h5> <h4> My Wishlist</h4>
            </div>
            <div className="mywishlist">
                <div className="mywish">
                    <h3>My Wishlist</h3>
                </div>
                <div className="wisharray">
                    {wisharray}
                </div>
            </div>
        </div>
    )
}

export default Wishlistpage