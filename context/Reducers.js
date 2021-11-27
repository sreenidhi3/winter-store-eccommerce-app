const Reducer = (state, action )=>{
    const { cart, wishlist } = state;
    switch(action.type){
        case "ADD_TO_CART":
            console.log(HI);
            return {
                ...state,
                cart : [...cart, {...action.payload}]
            };
        case "REMOVE_ITEM":
                return {
                    ...state,
                    cart: cart.filter((c)=> c.id !== action.payload.id)
            };
        default:
            return {...state};
    }
}

export default Reducer;