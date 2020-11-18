import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../assets/images/Logo.svg';
import Search from '../assets/images/search.png';
import CartIcon from '../assets/images/shopping.png';
import Account from '../assets/images/account.png';
import '../css/navbar.css';

//main navbar component
export default function Navbar() {
    const history = useHistory();
    const store = useSelector(state => state);
    const cart = store.cart;

    
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src={Logo} onClick={() => history.push("/dashboard")} className="logo" alt="logo" loading="lazy" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* navigation links */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Shop
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Stores</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => history.push("/about")} href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => history.push("/stores")} href="#">Our Stores</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => history.push("/contact")} href="#">Contact Us</a>
                        </li>
                    </ul>
                    {/* Icons */}
                    <div className="my-account">
                        <span>Search</span>
                        <img src={Search} className="search-icon" alt="search"></img>
                        <img src={Account} className="account-icon" alt="search"></img>
                        <img src={CartIcon} onClick={() => history.push("/cart")} className="cart-icon" alt="search">
                        </img>
                        <div className="cart-items">{cart.length}</div>
                    </div>
                </div>
            </nav>
        </>
    )
}