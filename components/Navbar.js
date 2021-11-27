import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useContext } from 'react';
import { Context, ContextProvider } from "../context/Context";

export const Navbar =()=>{
    const {cart, wishlist, dispatch} = useContext(Context);
    return(
        <nav className={styles.navbar} style={{color: "#551825"}}>
            <Link href='/'><a className={styles.brand} style={{color: "#551825"}}>WinterStore</a></Link>
            <div className={styles.navLink}>
                <Link href="/shop"><a className={styles.p} style={{color: "#551825"}}> Shop</a></Link>
                <Link href="/cart"><a className={styles.p}style={{color: "#551825"}}> Cart [{cart.length}]</a></Link>
                <Link href="/wishlist"><a className={styles.p} style={{color: "#551825"}}>Wishlist [{wishlist.length}]</a></Link>
            </div>
        </nav>
    )
}