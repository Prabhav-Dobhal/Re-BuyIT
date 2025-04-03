import styles from  './footer.module.css';
import darkstyles from './footerdark.module.css';
import { useTheme } from "../../hooks/useTheme";
 const  Footer : React.FC =()=> {

  const { theme } = useTheme();

  return (
    <footer>
      <div className={ theme==='light' ?styles.footer2container : darkstyles.footer2container  }>
        <img src={`/Footerimg/left-hand.png`} alt="Left Hand" className={theme==='light' ?styles.imgsizeleft : darkstyles.imgsizeleft} />

        <div className={theme==='light' ?styles.footermidcontainer : darkstyles.footermidcontainer}>
          <h1>Do you prefer to earn ? </h1>
          <p>Sell electronic devices 100% without risk </p>
          <button className={theme==='light'?styles.sellbtn : darkstyles.sellbtn}>Sell now</button>
          
            <p>✔️ Free shipping and insured   ✔️ Over 75 million product sold  ✔️ Quick and easy sales method</p>
       
        </div>
        <img src={`/Footerimg/right-hand.png`} alt="Left Hand" className={theme==='light'?styles.imgsizeright : darkstyles.imgsizeright} />
      </div>
      <div className={theme==='light'?styles.footer1container : darkstyles.footer1container}>
        <p>© 2009 - 2025 rebuy recommerce GmbH. VAT no.: DE237458635</p>
        <p>Buying and selling used items</p>
        <p>All rights reserved.</p>
        <p>Legal Notice &nbsp; &nbsp;&nbsp;  | &nbsp; &nbsp;&nbsp;  Privacy Policy &nbsp; &nbsp;&nbsp;  | &nbsp; &nbsp;&nbsp;  Terms and Conditions </p>
      </div>
    </footer>
  )
}
export default Footer ;