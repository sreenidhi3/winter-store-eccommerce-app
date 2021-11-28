import { useContext } from "react";
import Link from 'next/link'
import Image from 'next/image'
import {ListCard} from '../components/ListCard'
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
        <div style={{minHeight: "75vh", textAlign: "center"}}>
            <div className={styles.cardContainer}>
            { 
                wishlist.length ? wishlist.map((item)=>{
                    return(
                        <ListCard key={item.id} item={item}/>
                    )
                }) 
                : <div className={styles.container}> 
                    <div style={{margin: "2rem"}}><Image  src="/undraw_wishlist_re_m7tv.svg" width={200} height={200}/></div>
                   <h2> Oops! Your Wishlist is empty.</h2>
                   <h3>Go to <Link href="/shop"><a style={{color: "#810081", textTransform:"uppercase"}}>Shop</a></Link> and start window shopping</h3>
                </div>
            } 
            </div>  
            {/* <div className={styles.bill}>
                <h2 style={{textAlign:"center"}}>
                    Total Amount : Rs. {calculateTotal()}
                </h2>
            </div> */}
        </div>
            
    )
}
