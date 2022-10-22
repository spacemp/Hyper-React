import React from 'react';
import './Header.css';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import {useStateValue} from '../store/StateProvider';

function Header() {

    const [{basket}, dispatch]=useStateValue()

    const numberOfCart = basket.length

    
   

    return (
        <div className='header'>
            <Link to='/' style={{ textDecoration: 'none' }} >
                <div className="header__logo">
                    <StoreIcon className='header__logoImage' fontSize='large' />
                    <h2 className="header__logoTitle">هایپر ری اکت</h2>
                </div>
            </Link>


            <div className="header__search">
                <input type='text' className="header__searchInput" />
                <SearchIcon className='header__searchIcon' />
            </div>

            <div className="header__nav">
                <Link to='/login'>
                <div className="nav__item">
                    <span className="nav__itemLineOne">درود مهمان</span>
                    <span className="nav__itemLineTwo">ورود</span>
                </div>
                </Link>
                <div className="nav__item">
                    <span className="nav__itemLineOne">َشما</span>
                    <span className="nav__itemLineTwo">سبد خرید</span>
                </div>
                <Link to='/checkout' style={{ textDecoration: 'none' }} >
                    <div className="nav__itemBasket">
                        <ShoppingBasketIcon />
                        <span className="nav__itemLineTwo nav__basketCount">{numberOfCart}</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}


export default Header;

