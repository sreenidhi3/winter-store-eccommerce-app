import { useContext } from "react";
import Link from 'next/link'
import {ProductCard} from '../components/ProductCard'
import { Context, ContextProvider } from "../context/Context";
import styles from '../styles/Home.module.css'

export default function WishlistPage(){
    const {cart, wishlist, dispatch} = useContext(Context);
    console.log(wishlist);
    const calculateTotal=()=>{
        let amt = 0;
        wishlist.map((item)=>{
            amt=amt+item.price;
        })
        // console.log(amt)
        return amt;
    }
    return(
        <div style={{minHeight: "75vh", textAlign: "center", color: "#994758"}}>
            <div className={styles.bill}>
                <h2 style={{textAlign:"center", color:"#994758"}}>
                    Total Amount : Rs. {calculateTotal()}
                </h2>
            </div>
            <div className={styles.cardContainer}>
            { 
                wishlist.length ? wishlist.map((item)=>{
                    return(
                        <ProductCard key={item.id} item={item}/>
                    )
                }) 
                : <div className={styles.container}> 
                   <h2> Oops! Your Wishlist is empty.</h2>
                   <h3>Go to <Link href="/shop"><a style={{color: "#d3901d", textTransform:"uppercase"}}>Shop</a></Link> and start window shopping</h3>
                </div>
            } 
            </div>  
        </div>
            
    )
}
