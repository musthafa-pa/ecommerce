import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import firebase from '../Database';
import Navbar from './Navbar';
import Products from './Products';
import '../css/dashboard.css';

//Main dashboard component (components bundled here)
export default function Dashboard() {

    const [products, setProducts] = useState([]);
    const store = useSelector(state => state);
    const dispatch = useDispatch();
    let prodTag = store.prodTag;

    //Run side effect only when products changes in redux
    useEffect(() => {
        fetchProducts();
        setProducts(store.products);
    },[]);

    //Fetch all products and store in redux global state
    async function fetchProducts() {
        try {
            let request = await firebase.database().ref(`/`).once('value', data => { });
            let response = await request.val();
            dispatch({
                type: 'ADD_PRODUCTS',
                payload: response
            });
            setProducts(response);
        }
        catch (err) {
            console.log(err);
        }
    }

    //Render filter buttons
    let buttons = {
        "AllProducts": "All Products",
        "Denim": "Denim",
        "T-shirt": "T-shirt",
        "AllProducts": "All Products",
        "jacket": "Jackets",
        "shirt": "Shirts"
    }
    let btnUI = [];
    Object.entries(buttons).forEach(([key, val]) => {
        if(key == prodTag){
            btnUI.push(<button type="button" onClick={() => updateProdTag(key)} className="filter_btn active__filter">{val}</button>)
        }else{
            btnUI.push(<button type="button" onClick={() => updateProdTag(key)} className="filter_btn">{val}</button>)
        }
    })

    //Update selected product tag in redux
    const updateProdTag = (tag) => {
        dispatch({
            type: 'UPDATE_PROD_TAG',
            payload: tag
        })
    }

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

                {/* Filter buttons */}
                <div className="filters">
                    <div className="filters__btns">
                        <h3 className="filters__content">FILTERS:</h3>

                        {
                            btnUI
                        }

                    </div>
                    {/* Sort */}
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
            <div className="main">
                <Products />
            </div>
        </>
    )
}