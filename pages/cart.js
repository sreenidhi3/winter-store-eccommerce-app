import { useContext } from "react";
import Link from 'next/link'
import Image from "next/image";
import {ProductCard} from '../components/ProductCard'
import { Context, ContextProvider } from "../context/Context";
import styles from '../styles/Home.module.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function CartPage(){
    const {cart, wishlist, dispatch} = useContext(Context);
    console.log(cart);
    const calculateTotal=()=>{
        let amt = 0;
        cart.map((item)=>{
            amt=amt+item.price;
        })
        // console.log(amt)
        return amt;
    }
    return(
        <div style={{minHeight: "75vh", textAlign: "center"}}>
            <div className={styles.cardContainer}>
            { 
                cart.length ? cart.map((item)=>{
                    return(
                        <ProductCard key={item.id} item={item}/>
                        )
                    }) 
                    : <div className={styles.container}> 
                    <div style={{margin: "2rem"}}><Image  src="/undraw_empty_cart_co35.svg" width={200} height={200}/></div>
                   <h2> Oops! Your Cart is empty.</h2>
                   <h3>Go to <Link href="/shop"><a style={{color: "#810081", textTransform:"uppercase"}}>Shop</a></Link> and start shopping</h3>
                </div>
            } 
            </div>  
            <div className={styles.bill}>
                <h2 style={{textAlign:"center"}}>
                    Total Amount : Rs. {calculateTotal()}
                </h2>
            </div>
            { 
            !cart.length 
            ? "" :
            <div className={styles.cardContainer} style={{padding: "2rem"}}>
                <Link 
                href="/success"
                    >
                <a className={styles.buttonSecondary} style={{textTransform: "uppercase", fontWeight:"bold"}}>Place Order <FontAwesomeIcon icon={faArrowRight}/></a>
                </Link>
            </div>

            }
        </div>
            
    )
}
