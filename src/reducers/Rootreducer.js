
//Global store for redux
const globalStore = {
    products: [],
    cart:[],
    prodTag: "AllProducts"
}

//Main reducer function for redux operations
export default function rootReducer(state = globalStore, action){
    switch(action.type){
        case 'ADD_PRODUCTS':
            state.products = [...action.payload];
            return {...state};
        case 'ADD_TO_CART':
            state.cart = [...state.cart,...action.payload];
            return {...state};
        case 'REMOVE_FROM_CART':
            state.cart = state.cart.filter(product => {
                return product !== action.payload;
            });
            return {...state};
        case 'ADD_ITEMS':
            state.cart = state.cart.map(prod => {
                if(prod.id == action.payload){
                    prod.quantity += 1;
                }
            });
            return {...state};
        case 'REMOVE_ITEMS':
            state.cart = state.cart.map(prod => {
                if(prod.id == action.payload){
                    prod.quantity -= 1;
                }
            });
            return {...state};
        case 'UPDATE_PROD_TAG':
            state.prodTag = action.payload;
            return {...state};
        default:
            return {...state};
    }
}