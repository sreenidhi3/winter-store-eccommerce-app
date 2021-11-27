import Link from 'next/link';
import styles from '../styles/Home.module.css';

export const Navbar =()=>{
    return(
        <nav className={styles.navbar} style={{color: "#551825"}}>
            <Link href='/'><a className={styles.brand} style={{color: "#551825"}}>WinterStore</a></Link>
            <div className={styles.navLink}>
                <Link href="/shop"><a className={styles.p} style={{color: "#551825"}}> Shop </a></Link>
                <Link href="/cart"><a className={styles.p}style={{color: "#551825"}}> Cart</a></Link>
                <Link href="/wishlist"><a className={styles.p} style={{color: "#551825"}}>Wishlist</a></Link>
            </div>
        </nav>
    )
}