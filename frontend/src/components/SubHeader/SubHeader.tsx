import styles from "./SubHeader.module.css";
import { useTheme } from '../../hooks/useTheme';
const categories : string[] = ["Motorcycles", "Phones", "Houses", "Laptops", "Scooters", "Cameras", "Cars"];
const SubHeader = () => {
  const { theme } = useTheme();

  

  return (
    <div className={`${styles.subheaderbox} ${styles[theme]}`}>
      {categories.map((item, index) => (
        <span key={index} className={`${styles.subheadingtext} ${styles[theme]}`}>
          {item}
        </span>
      ))}
    </div>
  );
};

export default SubHeader;
