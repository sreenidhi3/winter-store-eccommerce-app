import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react';
import { Context } from '../context/Context';

export const ProductCard=({item})=>{
    const {cart, wishlist, dispatch} = useContext(Context);
    
    const checkItem=(array, id)=>{
        let item = array.find(it=> it.id === id);
        return item ? true : false
    }
    const clickHandler=(array, item)=>{
        if (checkItem(array, item.id)){
            dispatch({type: "ADD_TO_CART", payload: item});
        }else{
            dispatch({type: "REMOVE_ITEM", payload: item});
        }
    }
    
    return(
        <div className={styles.card}>
            <Image src={item.url} width={250} height={300} layout={"intrinsic"}/>
            <div className={styles.prodDetails}>
                <h2 className={styles.prodTitle}>{item.productName}</h2>
                <p className={styles.prodDesc}>{item.description}</p>
                <h3>Rs. {item.price}</h3>
                <div className={styles.buttonGrp}>
                      <button 
                        className={styles.buttonPrimary} 
                        onClick ={()=>clickHandler(cart, item)}
                        >
                            {checkItem(cart, item.id) ? "Remove from Cart" : "Add To Cart"} 
                    </button>
                    <button 
                        className={styles.buttonSecondary} 
                        >
                            {checkItem(wishlist, item.id) ? <FontAwesomeIcon icon={faHeart} /> : <FontAwesomeIcon icon={farHeart} />}
                    </button>
                </div>
            </div>
        
        </div>
    )
}

