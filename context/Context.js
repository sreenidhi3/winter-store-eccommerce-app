import { createContext, useEffect, useReducer } from "react";
import Reducer from './Reducers'
const INITIAL_STATE = {
    cart: [],
    wishlist:[],
}

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
    return (
        <Context.Provider 
        value={{
            cart: state.cart,
            wishlist: state.wishlist,
            dispatch,
            }}
            >
            {children}
        </Context.Provider>
    )
}