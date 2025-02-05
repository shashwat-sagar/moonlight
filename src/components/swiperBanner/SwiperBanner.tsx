import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax,  Autoplay } from "swiper/modules";
import "../../styles/SwiperBan.scss";

function SwiperBanner() {
  return (
    <div className="swiper">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        parallax={true}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={false}
        modules={[Parallax, Autoplay]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>

        <SwiperSlide className="content-txt">
          <div className="content-txt">
            <div className="title" data-swiper-parallax="-300">
              Crafting Memorable Experiences
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Where Taste Meets Elegance
            </div>
            <div className="bannerText" data-swiper-parallax="-200">
              From intimate gatherings to grand celebrations, our catering
              services bring your vision to life with exquisite menus and
              impeccable presentation. Let us transform your event into an
              unforgettable experience.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="content-txt">
          <div className="content-txt">
            <div className="title" data-swiper-parallax="-300">
              Crafting Memorable Experiences
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Where Taste Meets Elegance
            </div>
            <div className="bannerText" data-swiper-parallax="-200">
              From intimate gatherings to grand celebrations, our catering
              services bring your vision to life with exquisite menus and
              impeccable presentation. Let us transform your event into an
              unforgettable experience.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="content-txt">
          <div className="content-txt">
            <div className="title" data-swiper-parallax="-300">
              Crafting Memorable Experiences
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Where Taste Meets Elegance
            </div>
            <div className="bannerText" data-swiper-parallax="-200">
              From intimate gatherings to grand celebrations, our catering
              services bring your vision to life with exquisite menus and
              impeccable presentation. Let us transform your event into an
              unforgettable experience.
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default SwiperBanner;
