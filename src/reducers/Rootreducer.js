
//Global store for redux
const globalStore = {
    products: [],
    cart:[],
    prodTag: "AllProducts",
    total_cart_price : 0,
    total_items: 0
}

//Main reducer function for redux operations
export default function rootReducer(state = globalStore, action){
    let prices = [];
    let quantity = [];

    //Get total price of items in cart and count
    function getPriceCount(){

        //Price
        prices = state.cart.map(item => {
            return item.price * item.quantity;
        });
        state.total_cart_price = prices.reduce((curr,prev) => {
            return curr + prev;
        },0);

        //Count
        quantity = state.cart.map(item => {
            return item.quantity;
        });
        state.total_items = quantity.length;
    }

    //Redux operations
    switch(action.type){
        case 'ADD_PRODUCTS':
            state.products = [...action.payload];
            return {...state};

        case 'ADD_TO_CART':
            state.cart = [...state.cart,...action.payload];
            getPriceCount();
            return {...state};

        case 'REMOVE_FROM_CART':
            state.cart = state.cart.filter(product => {
                return product !== action.payload;
            });
            getPriceCount();
            return {...state};

        case 'ADD_ITEMS': //Increase count
            state.cart = state.cart.filter(prod => {
                if(prod == action.payload){
                    if(prod.quantity >= 1){
                        prod.quantity += 1;
                    }
                }
                return prod;
            });
            getPriceCount();
            return {...state};

        case 'REMOVE_ITEMS': //Decrease count
            state.cart = state.cart.filter(prod => {
                if(prod == action.payload){
                    if(prod.quantity >= 1){
                        prod.quantity -= 1;
                    }
                }
                return prod;
            });
            getPriceCount();
            return {...state};

        case 'UPDATE_PROD_TAG':
            state.prodTag = action.payload;
            return {...state};
        default:
            return {...state};
    }
}