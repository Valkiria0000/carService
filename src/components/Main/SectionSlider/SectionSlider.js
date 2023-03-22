import classes from "./SectionSlider.module.css"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow"
const SectionSlider =()=> {
    return (

        <div className={classes.section}>
        <Swiper 
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={50}
       slidesPerView={3}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className="coverflow"><div><h2>Ремонт ГБЦ без снятия ГБЦ (притирка клапанов + замена прокладок + замена маслосъемных колпачков)</h2>
      <p>Цена: 4000р</p></div></SwiperSlide>
      <SwiperSlide><div><h2>Замена ГРМ (рядный ДВС одновальный SOHC)</h2>
      <p>Цена: 4500р</p></div></SwiperSlide>
      <SwiperSlide><div><h2>Замена ГРМ (рядный ДВС двухвальный DOHC)</h2>
      <p>Цена: 6500р</p></div></SwiperSlide>
      <SwiperSlide><div><h2>Замена ГРМ (V-образный ДВС одновальный SOHC)</h2>
      <p>Цена: 8000р</p></div></SwiperSlide>
      <SwiperSlide><div><h2>Замена ГРМ (V-образный ДВС двухвальный DOHC)</h2>
      <p>Цена: 9000р</p></div></SwiperSlide>
    </Swiper></div>
    )
}

export default SectionSlider