"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-cards";

function GallerySection() {
  return (
    <div className="flex items-center justify-center flex-col lg:flex-row w-[90%] md:w-[85%] gap-10 lg:gap-[5%] m-auto mt-40">
      <div className="flex-1 w-[59%]">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper max-w-[430px] h-[370px]"
        >
          {images.map(({ img, alt }, index) => (
            <SwiperSlide key={index}>
              <h2 className="absolute top-0.5 left-1.5 text-amber-50 text-[12px]">
                HIP-HOP
              </h2>
              <Image
                className="rounded-[7px] object-bottom"
                src={`/${img}`}
                alt={alt}
                fill
                loading="lazy"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <h2 className="absolute bottom-6 left-1.5 text-amber-50 text-[15px] font-bold">
                Hawi
              </h2>
              <h2 className="absolute bottom-1 left-1.5 text-amber-50 text-[13px]">
                Founder Instructor
              </h2>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex flex-1 items-center justify-center max-w-[500px] m-auto text-[18px] leading-8 [word-spacing:5px]">
        Our goal is to support dancers and teachers in reaching their goals, in
        a healthy and safe way. You get access to the newest training techniques
        and methods, with new classes added every month
      </div>
    </div>
  );
}

export default GallerySection;

export const images = [
  {
    img: "images/img1.jpg",
    height: 400,
    alt: "concert photo people dancing",
  },
  {
    img: "images/img64.jpg",
    height: 400,
    alt: "concert photo people dancing",
  },
  {
    img: "images/img9.jpg",
    height: 400,
    alt: "concert photo people dancing",
  },
  {
    img: "images/img10.jpg",
    height: 250,
    alt: "concert photo people dancing",
  },
  {
    img: "images/img11.jpg",
    height: 400,
    alt: "concert photo people dancing",
  },
  {
    img: "images/img12.jpg",
    height: 250,
    alt: "concert photo people dancing",
  },
];
