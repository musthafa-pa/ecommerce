import React from 'react';
import Navbar from './Navbar';
import Cart from './Cart';
import Products from './Products';
import '../css/dashboard.css';

//Main dashboard component (components bundled here)
export default function Dashboard() {
    return (
        <>
            <Navbar />

            {/* banner content */}
            <div className="banner">
                <p className="banner__text">Invite friends to Big Fashion Festival & get up to $150 MynCash for every person who visits</p>
                <button type="button" className="banner__btn">Invite Now</button>
            </div>

            {/* Breadcrumb title and filters */}
            <div className="wrapper">
                <div className="breadcrumbs">
                    <span className="breadcrumbs__content">Home / Clothing / Mens Clothing / All Mens Clothing</span>
                </div>
                <div className="total__products">
                    <h3 className="total__products__content">All Products (25 Products)</h3>
                </div>
                <div className="filters">
                    <div className="filters__btns">
                        <h3 className="filters__content">FILTERS:</h3>
                        <button type="button" className="filters__btn_all filter_btn">All Products</button>
                        <button type="button" className="filters__btn_tshirts filter_btn">T shirts</button>
                        <button type="button" className="filters__btn_denim filter_btn">Denim</button>
                        <button type="button" className="filters__btn_sweats filter_btn">Sweatshirts</button>
                        <button type="button" className="filters__btn_polo filter_btn">Polo T shirts</button>
                        <button type="button" className="filters__btn_shirts filter_btn">Shirt</button>
                    </div>

                    <div>
                        <select className="filters__sort_select">
                            <option value="Price low to high">Sort by: Price low to high</option>
                            <option value="Price high to low">Sort by: Price high to low</option>
                        </select>
                    </div>
                </div>
                <div>
                    <hr />
                </div>
            </div>
        </>
    )
}