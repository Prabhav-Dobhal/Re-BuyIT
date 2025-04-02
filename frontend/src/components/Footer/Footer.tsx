
import styles from  './footer.module.css';

export default function Footer() {
  return (
    <footer>
      <div className={ styles.footer2container }>
        <img src={`${import.meta.env.BASE_URL}Footerimg2/left-hand.png`} alt="Left Hand" className={styles.imgsize} />

        <div className={styles.footermidcontainer}>
          <h1>Do you prefer to earn ? </h1>
          <p>Sell electronic devices 100% without risk </p>
          <button className={styles.sellbtn}>Sell now</button>
          
            <p>✔️ Free shipping and insured   ✔️ Over 75 million product sold  ✔️ Quick and easy sales method</p>
       
        </div>
        <img src={`${import.meta.env.BASE_URL}Footerimg2/right-hand.png`} alt="Left Hand" className={styles.imgsize} />
      </div>
      <div className={styles.footer1container}>
        <p>© 2009 - 2025 rebuy recommerce GmbH. VAT no.: DE237458635</p>
        <p>Buying and selling used items</p>
        <p>All rights reserved.</p>
        <p>Legal Notice &nbsp; &nbsp;&nbsp;  | &nbsp; &nbsp;&nbsp;  Privacy Policy &nbsp; &nbsp;&nbsp;  | &nbsp; &nbsp;&nbsp;  Terms and Conditions &nbsp; &nbsp;&nbsp;  | &nbsp; &nbsp;&nbsp;  Cookie Policy &nbsp; &nbsp;&nbsp;  | &nbsp; &nbsp;&nbsp;  Manage cookie settings</p>
      </div>
    </footer>
  )
}
