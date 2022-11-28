import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import realme from '../../assests/images/realmee.png';
import readmi from '../../assests/images/readmi.png';
import iphone from '../../assests/images/iphone.png';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import './Banner.css';
import { Autoplay,  EffectFade } from "swiper";

const Banner = () => {
    return (
        <div className='w-full  h-[300px] md:h-[400px] lg:h-[400px]'>
             <Swiper
             effect={"fade"}
             autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className='w-full' src={realme} alt="" />
        </SwiperSlide>
        {/* <SwiperSlide>
            <img src={iphone} alt="" />
        </SwiperSlide> */}
        <SwiperSlide>
            <img src={readmi} alt="" />
        </SwiperSlide>
      </Swiper>
        </div>
    );
}

export default Banner;
