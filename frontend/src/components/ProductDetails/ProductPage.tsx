import styles from './ProductPage.module.css';
import Right from './Right';
import Left from './Left';

const ProductPage: React.FC = () => {
    return (
        <div className={styles.container_left_right}>
            <div className={styles.left_section}>
                <Left />
            </div>
             <div className={styles.right_section}>
                <Right />
            </div>
        </div>
    );
};

export default ProductPage;
