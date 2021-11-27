import { useContext } from "react";
import Link from 'next/link'
import {ProductCard} from '../components/ProductCard'
import { Context, ContextProvider } from "../context/Context";
import styles from '../styles/Home.module.css'

export default function CartPage(){
    const {cart, wishlist, dispatch} = useContext(Context);
    console.log(cart);
    return(
        <div style={{minHeight: "75vh", textAlign: "center", color: "#994758"}}>
            { 
                cart.length ? cart.map((item)=>{
                    return(
                        <ProductCard key={item.id} item={item}/>
                    )
                }) 
                : <div className={styles.container}> 
                   <h2> Oops! Your cart is empty.</h2>
                   <h3>Go to <Link href="/shop">Shop</Link> and start shopping</h3>
                </div>
            }   
        </div>
            
    )
}
