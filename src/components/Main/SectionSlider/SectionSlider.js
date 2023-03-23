import classes from "./SectionSlider.module.css";
import { Navigation, Pagination,  A11y, EffectCoverflow} from "swiper";

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
        spaceBetween={10}
       
        navigation
        pagination={{ clickable: true }}
       effect={"coverflow"}
       grabCursor={true}
       centeredSlides={true}
       loop={true}
       slidesPerView={3}
       coverflowEffect = {{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier:2.5,
       }

       }
       className
      >
        <SwiperSlide>
          <div className={classes.card}>
            <h2>
              Ремонт ГБЦ без снятия ГБЦ (притирка клапанов + замена прокладок +
              замена маслосъемных колпачков)
            </h2>
            <p>Цена: 4000р</p>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className={classes.card}>
            <h2>Замена ГРМ (рядный ДВС одновальный SOHC)</h2>
            <p>Цена: 4500р</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.card}>
            <h2>Замена ГРМ (рядный ДВС двухвальный DOHC)</h2>
            <p>Цена: 6500р</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.card}>
            <h2>Замена ГРМ (V-образный ДВС одновальный SOHC)</h2>
            <p>Цена: 8000р</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.card}>
            <h2>Замена ГРМ (V-образный ДВС двухвальный DOHC)</h2>
            <p>Цена: 9000р</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SectionSlider;
