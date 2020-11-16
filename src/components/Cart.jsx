import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Navbar from './Navbar';
import '../css/cart.css';
import delIcon from '../assets/images/delete.png';

export default function Cart() {

    const store = useSelector(state => state);
    let itemCart = store.cart;
    console.log(itemCart)
    return (
        <>
            <Navbar />
            <div className="breadcrumbs">
                <span className="breadcrumbs__content">Home / Cart</span>
            </div>


            <div className="cart">
                <div className="cart__items_list">
                    {
                        itemCart.map(prods => {
                            return(
                                <div className="cart__single">
                                    <img src={prods.image_src[0]} className="cart__image" alt="cart image"></img>
                                    <div className="cart_products">
                                        <p>{prods.vendor}</p>
                                        <p>{prods.name}</p>
                                    </div>
                                    <div className="cart__item_count">
                                        <button className="cart__count_plus">+</button>
                                        <span className="cart__item_value">1</span>
                                        <button className="cart__count_minus">-</button>
                                    </div>
                                    <div className="cart__prices">
                                        <span className="cart__price">${prods.price}</span>
                                    </div>
                                    <div>
                                        <img src={delIcon} className="cart__delete" alt="delete from cart"></img>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="cart__payment">
                    <input type="text" className="cart__payment_name" placeholder="Enter name"></input>
                    <input type="text" className="cart__payment_phone" placeholder="Enter phone"></input>
                    <button>PROCEED</button>
                </div>
            </div>
        </>
    )
}