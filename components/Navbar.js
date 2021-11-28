import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useContext } from 'react';
import { Context, ContextProvider } from "../context/Context";

export const Navbar =()=>{
    const {cart, wishlist, dispatch} = useContext(Context);
    return(
        <nav className={styles.navbar}>
            <Link href='/'><a className={styles.brand}>WinterStore</a></Link>
            <div className={styles.navLink}>
                <Link href="/shop"><a className={styles.p} > Shop</a></Link>
                <Link href="/cart"><a className={styles.p}> Cart [{cart.length}]</a></Link>
                <Link href="/wishlist"><a className={styles.p}>Wishlist [{wishlist.length}]</a></Link>
            </div>
        </nav>
    )
}