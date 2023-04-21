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
    <section className={classes.section} id="section3"> <div className="wrapper">
     <p className="title">При обращении в наш сервис Вы получите:</p>
    
    
    <div className={classes.info}>
       
      <div className={classes.card}>
        <div className={classes.num}>01</div>
        <p>Предварительную стоимость ремонта</p>
      </div>
      <div className={classes.card}>
        <div className={classes.num}>02</div>
        <p>Возможность записи на ремонт в удобное время</p>
      </div>
      <div className={classes.card}>
        <div className={classes.num}>03</div>
        <p>Экономию времени и денег на поиск запчастей</p>
      </div>
     
    </div>

      <div className={classes.slider}> 
      <Swiper 
      breakpoints={{
        576: {
          width: 576,
          slidesPerView: 3,
        },
        370: {
          width: 360,
          slidesPerView: 3,
        },
      }}
        modules={[Navigation, Pagination, A11y, EffectCoverflow]}
        spaceBetween={30}
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
     
    </div>
    </section>
  );
};

export default SectionSlider;
