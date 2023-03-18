"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Slider from "./Slider";

const Testimonials = () => {
  return (
    <div className="bg-slate-200 py-20">
      <div className="">
        <h4>OUR CLIENTS</h4>
        <h1>Glint has been honored to partner up with these clients</h1>
      </div>
      <div className="max-w-5xl">
        <Slider />
      </div>
    </div>
  );
};

export default Testimonials;
