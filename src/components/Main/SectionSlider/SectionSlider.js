import classes from "./SectionSlider.module.css";
import { Navigation, Pagination,  A11y, EffectCoverflow} from "swiper";
import "../../../App.css"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow"

const SectionSlider = () => {
  return (
    <div className={classes.section}>
      
      <Swiper 
        modules={[Navigation, Pagination, A11y, EffectCoverflow]}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
       effect={"coverflow"}
       grabCursor={true}
       centeredSlides={true}
       loop={true}
       slidesPerView={3}
       coverflowEffect = {{
        rotate:0,
        stretch: 0,
        depth: 100,
        modifier:2.5,
       }

       }
     
      >
        <SwiperSlide >
        <img src="./assets/img/slider/foto1.jpg" alt="slideImg1"/></SwiperSlide>
        <SwiperSlide ><img src="./assets/img/slider/foto2.jpg" alt="slideImg2"/></SwiperSlide>
        <SwiperSlide > <img src="./assets/img/slider/foto3.jpg" alt="slideImg3"/></SwiperSlide>
        <SwiperSlide > <img src="./assets/img/slider/foto4.jpg" alt="slideImg4"/></SwiperSlide>
        <SwiperSlide ><img src="./assets/img/slider/foto5.jpg" alt="slideImg5"/></SwiperSlide>
        <SwiperSlide ><img src="./assets/img/slider/foto6.jpg" alt="slideImg6"/></SwiperSlide>
        <SwiperSlide ><img src="./assets/img/slider/foto7.jpg" alt="slideImg7"/></SwiperSlide>
        <SwiperSlide ><img src="./assets/img/slider/foto8.jpg" alt="slideImg8"/></SwiperSlide>
        
      </Swiper>
    

    </div>
  );
};

export default SectionSlider;
