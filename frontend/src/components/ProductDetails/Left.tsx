import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import img1 from './sampleimg/img1.png';
import img2 from './sampleimg/img2.png';
import img3 from './sampleimg/img3.png';

import styles from './left.module.css';

const Left: React.FC = () => {
    const images = [img1, img2, img3];

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
                    {images.map((src, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={src}
                                alt={`Slide ${index + 1}`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
             <div className={styles.propertyDetails}>
            <div className={styles.propertyDetailsinside}>
                <h2>Details</h2>
            <div className={styles.detailsGrid}>
                <div><strong>Type:</strong> House & Villa</div>
                <div><strong>Bedrooms:</strong> 3</div>
                <div><strong>Super Built-up area:</strong> 1550 sqft</div>
                <div><strong>Bathrooms:</strong> 3</div>
                <div><strong>Furnishing:</strong> Semi-Furnished</div>
                <div><strong>Project Status:</strong> Ready to Move</div>
                <div><strong>Listed By:</strong> Owner</div>
                <div><strong>Facing:</strong> East</div>
                <div><strong>Carpet area:</strong> 1170 sqft</div>
                <div><strong>Car Parking:</strong> 2</div>
                <div><strong>Maintenance (Monthly):</strong> ₹0</div>
                <div><strong>Total Floors:</strong> 2</div>
                <div><strong>Project Name:</strong> Fortune Designer Villas</div>
                
            </div>
            <hr />
            <h2>Description</h2>
            <p>
                3 BHK Double storey Villas at sector 123, Airport Road, New Sunny Enclave, MOHALI:
            </p>
            <ul>
                <li>Villa built-up: 1550 sqft, plot size: 130 sq. yd.</li>
                <li>3 Bedrooms, 3 Bathrooms, 2 Halls, 2 Kitchens, Washing Area</li>
                <li>Double Storey building</li>
                <li>Parking: 1 SUV, 1 MUV, plus bike/scooter space</li>
                <li>Gated Society, 200ft wide Airport road</li>
                <li>Italian washrooms with vanities, modular kitchen, wooden fittings</li>
                <li>All branded fittings (Jaquar, Dorset, Finolex, Asian Paints, etc.)</li>
            </ul>

            <p><strong>Brokers please excuse. Only direct customers.</strong></p>
            <p><strong>Negotiable, but only in white money.</strong></p>
            </div>
            
        </div>
        </div>
    );
};

export default Left;
