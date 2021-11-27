import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { Context } from '../context/Context';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import {
   config
} from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

export default function Home() {
  const {cart, wishlist, dispatch} = useContext(Context);
  console.log(cart, dispatch);
  return (
    <div className={styles.container} style={{color: "#b74960", backgroundColor: "#F2F0F0"}}>
      <Head>
        <title>Ecommerce Store</title>
        <meta name="description" content="Created by Sreenidhi Bendre" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.h}>
        <div className={styles.hero}>
          <div className={styles.heroText}>
            <h3>Check out the new</h3>
              <h1 className={styles.heroTitle}>Winter'21</h1>
              <h3> collection by <span style={{color: "#551825"}}>WinterStore</span></h3>
          </div>
          <div className={styles.heroImage}> <Image src='/winter_collection.png' width={450} height={400}/></div>
       </div>
       <div className={styles.cardContainer} style={{padding: "2rem"}}>
         <Link 
         href="/shop"
            >
           <a className={styles.buttonSecondary} style={{textTransform: "uppercase", fontWeight:"bold"}}>Start Shopping   <FontAwesomeIcon icon={faArrowRight}/></a>
         </Link>
       </div>
      </main>
    </div>
  )
}
