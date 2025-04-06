import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import styles from './left.module.css';
import { useTheme } from "../../hooks/useTheme";
import { ProductData } from './productTypes';

const Left: React.FC = () => {
    const { theme } = useTheme();
    const [product, setProduct] = useState<ProductData>({
        details: [],
        image:[],
        description: ''
    });

    return (
        <div className={styles.container_left}>
            <div className={styles.carousel}>
                <Swiper
                    pagination={{ clickable: true }}
                    navigation
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop
                    modules={[Pagination, Navigation, Autoplay]}
                >
                    {product.image.map((src, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={src.img}
                                alt={`Slide ${index + 1}`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={`${styles.propertyDetails} ${styles[theme]}`}>
                <div className={styles.propertyDetailsinside}>
                    <h2>Details</h2>
                    <div className={styles.detailsGrid}>
                        {product.details.map((item, index) => (
                            <div key={index}>
                                <strong>{item.label}:</strong> {item.value}
                            </div>
                        ))}
                    </div>
                    <hr />
                    <h2>Description</h2>
                    <pre className={`${styles.description} ${styles[theme]}`}>
                        {product.description}
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default Left;