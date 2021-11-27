import { data } from '../data/data';
import styles from '../styles/Home.module.css';
import {ProductCard} from '../components/ProductCard';
import { useState, useEffect, useContext } from 'react';
import { Context } from "../context/Context";


export default function Shop(){
    const {cart, wishlist, dispatch} = useContext(Context);

    const [category, setCategory] = useState("All");
    return(
        <>
        <div className={styles.container} style={{display: "flex", alignContent:"center"}}>
            <div style={{display: "flex", flexWrap: "wrap", alignContent:"center"}}>
            <strong><p className={styles.category} style={{cursor:"default"}}>Shop by cateogory: </p></strong>
            <p className={styles.category} onClick={()=>setCategory("winter")}>Winter Collection</p>
            <p className={styles.category} onClick={()=>setCategory("men")}>Men's Fashion</p>
            <p className={styles.category} onClick={()=>setCategory("women")}>Women's Fashion</p>
            <p className={styles.category} onClick={()=>setCategory("All")}>All Collection</p>
            </div>
        </div>
        <div className={styles.container} style={{margin:"auto"}}>
            {
                category!=="All" && "Showing results for "+category+"..."
            }
        </div>
        <div className={styles.cardContainer}>
            { 
            category==="All" &&
                data.map((item)=>{
                    return(
                        <ProductCard key={item.id} item={item}/>
                    )
                })
            }
            
            { 
            category!=="All" &&
                data.filter(i=>i.category.includes(category)).map((item)=>{
                    return(
                        <ProductCard key={item.id} item={item}/>
                    )
                })
            }

            {/* {data.filter(i=>i.category.includes(category)).map((item)=>console.log(item.productName))} */}
        </div>
        </>
    )
}
