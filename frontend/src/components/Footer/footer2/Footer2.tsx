
import './footer2.css'

export default function Footer2() {
  return (
    <footer>
      <div className='footer2-container'>
        <img src={`${import.meta.env.BASE_URL}Footerimg2/left-hand.png`} alt="Left Hand" className="img-size" />



        <div className='footer-mid-container'>
          <h1>Do you prefer to earn ? </h1>
          <p>Sell electronic devices 100% without risk </p>
          <button className='sell-btn'>Sell now</button>
          
            <p>✔️ Free shipping and insured   ✔️ Over 75 million product sold  ✔️ Quick and easy sales method</p>
       
        </div>
        <img src={`${import.meta.env.BASE_URL}Footerimg2/right-hand.png`} alt="Left Hand" className="img-size" />


      </div>
    </footer>
  )
}
