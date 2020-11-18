import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Navbar from './Navbar';
import '../css/cart.css';
import delIcon from '../assets/images/delete.png';


export default function Cart() {

    const store = useSelector(state => state);
    const dispatch = useDispatch();
    let itemCart = store.cart;
    let price = store.total_cart_price;
    let count = store.total_items;

    const deleteFromCart = (prod) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: prod
        })
    }

    const addOrDelete = (prod, type) => {
        if (type == "plus") {
            dispatch({
                type: 'ADD_ITEMS',
                payload: prod
            });
        }
        else {
            dispatch({
                type: 'REMOVE_ITEMS',
                payload: prod
            });
        }
    }

    const displayCartItems = () => {
        let items = [];

        itemCart.map(prods => {
            items.push(
                <div className="cart__single">
                    <img src={prods.image_src[0]} className="cart__image" alt="cart image"></img>
                    <div className="cart_products">
                        <p>{prods.vendor}</p>
                        <p>{prods.name}</p>
                    </div>
                    <div className="cart__item_count">
                        <button className="cart__count_plus" onClick={() => addOrDelete(prods, "plus")}>+</button>
                        <span className="cart__item_value">{prods.quantity}</span>
                        <button className="cart__count_minus" onClick={() => addOrDelete(prods, "minus")}>-</button>
                    </div>
                    <div className="cart__prices">
                        <span className="cart__price">${prods.price * prods.quantity}</span>
                    </div>
                    <div>
                        <img src={delIcon} onClick={() => deleteFromCart(prods)} className="cart__delete" alt="delete from cart"></img>
                    </div>
                </div>
            )
        })
        return items;
    }

    return (
        <>
            <Navbar />
            <div className="breadcrumbs">
                <span className="breadcrumbs__content">Home / Cart</span>
            </div>

            <div className="cart">
                <div className="cart__items_list">
                    {
                        displayCartItems()
                    }
                </div>

                <div className="cart__payment">
                    <input type="text" className="cart__payment_name" placeholder="Enter name"></input>
                    <input type="text" className="cart__payment_email" placeholder="Enter email"></input>
                    <input type="text" className="cart__payment_phone" placeholder="Enter phone"></input>
                    <div className="cart__payment_info">
                        <p>Total Items: {count}</p>
                        <p>Price: ${price}</p>
                    </div>
                    <button className="cart__payment_btn">PROCEED</button>
                </div>
            </div>
        </>
    )
}