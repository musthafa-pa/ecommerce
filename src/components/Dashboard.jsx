import React from 'react';
import Cart from './Cart';
import Products from './Products';
import '../css/dashboard.css';

//Main dashboard component to display products
export default function Dashboard(){
    return(
        <div>
            <h3>Welcome to shop</h3>
            <Products />
            <Cart />
        </div>
    )
}