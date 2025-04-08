import styles from './ProductPage.module.css';
import Right from './Right';
import PoductDetailsLeftSection from './ProductDetailsLeftSection';

const ProductPage: React.FC = () => {
    return (
        <div className={styles.container_left_right}>
            <div className={styles.left_section}>
                <PoductDetailsLeftSection />
            </div>
             <div className={styles.right_section}>
                <Right />
            </div>
        </div>
    );
};

export default ProductPage;
