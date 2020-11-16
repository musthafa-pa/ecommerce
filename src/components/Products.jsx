import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../css/products.css';


export default function Products() {
    const [prodId, setId] = useState(0);
    const [selected, setSelected] = useState({});
    const store = useSelector(state => state);
    const dispatch = useDispatch();

    let prods = store.products;
    let finalProds = [], columns = [];
    
    //Get selected products and chosen option
    const getItems = (prod_id, prod_option) => {
        let select = store.products.find(prod => prod.id == prod_id);
        select.sel_size = prod_option;
        setSelected(select);
        showAddCartBtn(prod_id);
    }

    //Display add cart button
    const showAddCartBtn = (id) => {
        setId(id);
    }

    //Add selected items to cart
    const addItemsToCart = () => {
        console.log(selected)
        dispatch({
            type:'ADD_TO_CART',
            payload: [selected]
        }); 
    }

    prods.forEach((prod, i) => {

        // prepare the array
        columns.push(
            <div key={prod.id} className="col-md-2">
                <img src={prod.image_src[0]} className="products__image"></img>

                {/* Customise sizes with new values */}
                <div className="products__options">
                    {
                        prod.options.map(option => {
                            let size;
                            let uk_sizes = {
                                xs: "XS",
                                small: "S",
                                medium: "M",
                                large: "L",
                                xl: "XL"
                            }

                            let us_sizes = {
                                "US 8": "8",
                                "US 9": "9",
                                "US 10": "10",
                                "US 11": "11",
                                "US 13": "13"
                            }

                            if (option.value in uk_sizes) {
                                size = uk_sizes[option.value];
                            } else if (option.value in us_sizes) {
                                size = us_sizes[option.value];
                            } else {
                                size = option.value;
                            }

                            return (
                                <div className="products__sizes" key={option.value} onClick={() => getItems(prod.id, option.value)}>
                                    <p className="products__option_value">{size}</p>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    prodId === prod.id ?
                        <button type="button" onClick={addItemsToCart} className="products__addcart">Add to cart</button>
                        :
                        null
                }

                <h5 className="products__vendor">{prod.vendor}</h5>
                <span className="products__name">{prod.name}</span>

                <div className="products__prices">
                    <p className="products__price">${prod.price}</p>
                    <span className="products__comp_price">${prod.compare_at_price}
                        <span className="products__disount">(50% OFF)</span>
                    </span>
                </div>
            </div>
        );

        // after five items add a new row 
        if ((i + 1) % 5 === 0) {
            finalProds.push(<div className="row mt-4" key={i}>{columns}</div>);
            columns = [];
        }
    });


    return (
        <>
            <div className="products" >
                {
                    finalProds
                }

            </div>

        </>
    )
}