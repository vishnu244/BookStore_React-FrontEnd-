import React, { useState } from 'react'
import './Header.css'
import education from '../../Assets/education.png'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';

function Header(props) {
    const Navigate = useNavigate()

    const onCart = () => {
        console.log("Moved to Cart Page")
        Navigate('/cart')
    }
    const homepage = () => {
        console.log("Initialised to Home Page")
        Navigate('/Home')
    }

    const searchBooks = (event) => {
        props.showSearchedBooks(event.target.value);
    }

    return (
        <div>
            <div className='HeaderContainer'>
                <div className='imagetext'>
                    <img className='edcimg' src={education} alt="" />
                    <div className='BS' onClick={homepage}>Bookstore</div>
                </div>
                <div class='icon2'>
                    <SearchIcon style={{ cursor: "pointer", width: "10%", color: "#9D9D9D" }} />
                    <input type="text" placeholder="Search..."  onChange={searchBooks}></input>
                </div>
                <div className="profile" /* onClick={handleButtonClick} */>
                    <div style={{ color: 'white' }}><PersonOutlineOutlinedIcon /></div>
                    <div style={{ color: 'white', fontSize: 'small', fontWeight: 'bold' }}>PROFILE</div>
                    <div className='dropdownContent'>
                        <a href="/">Logout</a>
                        <a href="/wishlist">WishList</a>
                    </div>
                </div>
                <div className="cart">
                    <div style={{ color: 'white' }} onClick={onCart}><ShoppingCartOutlinedIcon /></div>
                    <div style={{ color: 'white', fontSize: 'small', fontWeight: 'bold' }}>CART</div>
                </div>
            </div>
        </div>
    )
}

export default Header