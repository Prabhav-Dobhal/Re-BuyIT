import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css';

interface CarouselProps {
  images: {
    id: string;
    src: string;
    alt: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    cssEase: 'ease-in-out',
    adaptiveHeight: false // Set to false for consistent height
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className={styles.slide}>
            <img 
              src={image.src} 
              alt={image.alt}
              className={styles.image}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.style.backgroundColor = '#f5f5f5';
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;