import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react';
import styles from '../styles/Home.module.css'
import { Context } from '../context/Context';

export default function Home() {
  const {cart, wishlist, dispatch} = useContext(Context);
  console.log(cart, dispatch);
  return (
    <div className={styles.container} style={{color: "#b74960", backgroundColor: "#F2F0F0"}}>
      <Head>
        <title>Ecommerce Store</title>
        <meta name="description" content="Created by Sreenidhi Bendre" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
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
      </main>
    </div>
  )
}
