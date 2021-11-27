const Reducer = (state, action )=>{
    // const { cart, wishlist } = state;
    console.log(state);
    console.log(action)
    switch(action.type){
        case "ADD_TO_CART":
            let newCart = [...state.cart, action.payload];
            return {
                ...state,
                cart : newCart,
            };
        case "REMOVE_ITEM":
            newCart = state.cart.filter((c)=> c.id !== action.payload.id)
                return {
                    ...state,
                    cart: newCart,
            };
        case "ADD_TO_WISHLIST":
        let newWishlist = [...state.wishlist, action.payload];
        return {
            ...state,
            wishlist : newWishlist,
        };
        case "REMOVE_FROM_WISHLIST":
            newWishlist = state.wishlist.filter((c)=> c.id !== action.payload.id)
                return {
                    ...state,
                    wishlist: newWishlist,
            };
        default:
            return {...state};
    }
}

export default Reducer;