import styles from "./SubHeader.module.css";

const SubHeader = () => {
  return (
    <>
      <div className={styles.subheaderbox}>
        <span className={styles.subheadingtext}>Cars</span>
        <span className={styles.subheadingtext}>Motorcycles</span>
        <span className={styles.subheadingtext}>Phones</span>
        <span className={styles.subheadingtext}>Houses</span>
        <span className={styles.subheadingtext}>Laptops</span>
        <span className={styles.subheadingtext}>Scooters</span>
        <span className={styles.subheadingtext}>Cameras</span>
      </div>
    </>
  );
};

export default SubHeader;
