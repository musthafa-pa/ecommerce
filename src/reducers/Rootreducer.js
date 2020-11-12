
//Global store for redux
const globalStore = {
    products: [],
    cart:[],
}

//Main reducer function for redux operations
export default function rootReducer(state = globalStore, action){
    switch(action.type){
        case 'ADD_PRODUCTS':
            state.products = [...state.products,...action.payload];
            return {...state};
        case 'ADD_TO_CART':
            state.cart = [...state.cart,...action.payload];
            return {...state};
        case 'REMOVE_FROM_CART':
            state.cart = state.cart.filter(product => {
                return product !== action.payload;
            });
            return {...state};
        default:
            return {...state};
    }
}