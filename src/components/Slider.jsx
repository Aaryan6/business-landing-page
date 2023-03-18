"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/swiper-element-bundle.min.css";

// import required modules
import { Pagination } from "swiper";
import Image from "next/image";

export default function Slider() {
  return (
    <Swiper
      slidesPerView={7}
      spaceBetween={0}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mx-auto"
    >
      <SwiperSlide className="m-10">
        <Image src="/apple.webp" alt="" width={100} height={100} />
      </SwiperSlide>
      <SwiperSlide className="m-10">
        <Image src="/atom.webp" alt="" width={100} height={100} />
      </SwiperSlide>
      <SwiperSlide className="m-10">
        <Image src="/magento.webp" alt="" width={100} height={100} />
      </SwiperSlide>
      <SwiperSlide className="m-10">
        <Image src="/dropbox.webp" alt="" width={100} height={100} />
      </SwiperSlide>
      <SwiperSlide className="m-10">
        <Image src="/envato.webp" alt="" width={100} height={100} />
      </SwiperSlide>
      <SwiperSlide className="m-10">
        <Image src="/firefox.webp" alt="" width={100} height={100} />
      </SwiperSlide>
      <SwiperSlide className="m-10">
        <Image src="/joomla.webp" alt="" width={100} height={100} />
      </SwiperSlide>
      <SwiperSlide className="m-10">
        <Image src="/blackberry.webp" alt="" width={100} height={100} />
      </SwiperSlide>
    </Swiper>
  );
}
