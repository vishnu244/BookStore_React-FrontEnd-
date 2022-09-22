import React from 'react'
import './Header.css'
import education from '../../Assets/education.png'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';

function Header() {
    const Navigate = useNavigate()

    const onCart = () => {
        Navigate('/cart')
      }
    

    return (
        <div>
            <div className='HeaderContainer'>
                <div className='imagetext'>
                    <img className='edcimg' src={education} alt="" />
                    <div className='BS'>Bookstore</div>
                </div>
                <div class='icon2'>
                    <SearchIcon style={{ cursor: "pointer", width: "10%", color: "#9D9D9D" }} />
                    <input type="text" placeholder="Search..." ></input>
                </div>
                <div className="profile">
                    <div style={{ color: 'white' }}><PersonOutlineOutlinedIcon /></div>
                    <div style={{ color: 'white', fontSize: 'small', fontWeight: 'bold' }}>PROFILE</div>
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