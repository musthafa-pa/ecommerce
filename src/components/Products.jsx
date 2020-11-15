import React from 'react';
import { useSelector } from 'react-redux';
import '../css/products.css';


export default function Products(props) {

    const store = useSelector(state => state);
    console.log(store)

    let results = store.products;
    let finalArr = [], columns = [];

    results.forEach((result, i) => {

        // prepare the array
        columns.push(
            <div key={result.id} className="col-md-2">
                <img src={result.image_src[0]} className="products__image"></img>
                <h5 className="products__vendor">{result.vendor}</h5>
                <span className="products__name">{result.name}</span>

                <div className="products__options">
                    {
                        result.options.map(option => {
                            let texts = {
                                xs: "XS",
                                small: "S",
                                medium: "M",
                                large: "L",
                                xl: "XL"
                            }
                            
                            if(option in texts){
                                size = texts[option];
                            }else{
                                size = option;
                            }
                            return (
                                <div><p className="products__option_value">{size}</p></div>
                            )
                        })
                    }
                </div>


                <div className="products__prices">
                    <p className="products__price">${result.price}</p>
                    <span className="products__comp_price">${result.compare_at_price}
                        <span className="products__disount">(50% OFF)</span>
                    </span>
                </div>
            </div>
        );

        // after three items add a new row 
        if ((i + 1) % 5 === 0) {
            finalArr.push(<div className="row mt-4">{columns}</div>);
            columns = [];
        }
    });


    return (
        <>
            <div className="products" >
                {
                    // allProducts
                    finalArr
                }
            </div>

        </>
    )
}