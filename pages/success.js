import styles from '../styles/Home.module.css';

export default function Success(){
    return(
        <div style={{minHeight: "90vh"}}>
            <div className={styles.success}>
                <h1>Order Placed Successfully!</h1>
                <p>Thank you for shopping with</p>
                <h2>WinterStore</h2>
            </div>
        </div>
    )
}