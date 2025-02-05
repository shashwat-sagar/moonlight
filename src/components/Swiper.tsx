
import { Swiper,  SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
    Autoplay,
    EffectFade,
} from "swiper/modules";
import "swiper/swiper-bundle.css";
import { images } from "../assets/images2";

const SwiperModule = () => {
  return (
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    
    modules={[Autoplay, Pagination, Navigation, EffectFade]}
    className="mySwiper"
    effect="fade"
      
    >
      {images.map((src, index) => (
        <SwiperSlide key={index} className="slides">
          <img className="images" src={src} alt={`Slide ${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperModule;
