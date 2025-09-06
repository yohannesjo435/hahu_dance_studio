"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-cards";

function GallerySection() {
  return (
    <div className="flex items-center justify-center flex-col lg:flex-row w-[59%] md-[85%] gap-10 lg:gap-[5%] m-auto mt-52">
      <div className="flex-1 w-full">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper max-w-[430px] h-[370px]"
        >
          <SwiperSlide>
            <h2 className="absolute top-0.5 left-1.5 text-amber-50 text-[12px]">
              HIP-HOP
            </h2>
            <Image
              className="rounded-[7px] object-bottom"
              src={"/instructors/hawi.jpg"}
              alt="hawi dancing, hawi is the founder of hahu dance and expert in his feild"
              fill
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
          <SwiperSlide>
            <h2 className="absolute top-0.5 left-1.5 text-amber-50 text-[12px]">
              HIP-HOP
            </h2>
            <Image
              className="rounded-[7px] object-bottom"
              src={"/instructors/hawi.jpg"}
              alt="hawi dancing, hawi is the founder of hahu dance and expert in his feild"
              fill
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
          <SwiperSlide>
            <h2 className="absolute top-0.5 left-1.5 text-amber-50 text-[12px]">
              HIP-HOP
            </h2>
            <Image
              className="rounded-[7px] object-bottom"
              src={"/instructors/hawi.jpg"}
              alt="hawi dancing, hawi is the founder of hahu dance and expert in his feild"
              fill
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
          <SwiperSlide>
            <h2 className="absolute top-0.5 left-1.5 text-amber-50 text-[12px]">
              HIP-HOP
            </h2>
            <Image
              className="rounded-[7px] object-bottom"
              src={"/instructors/hawi.jpg"}
              alt="hawi dancing, hawi is the founder of hahu dance and expert in his feild"
              fill
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
          <SwiperSlide>
            <h2 className="absolute top-0.5 left-1.5 text-amber-50 text-[12px]">
              HIP-HOP
            </h2>
            <Image
              className="rounded-[7px] object-bottom"
              src={"/instructors/hawi.jpg"}
              alt="hawi dancing, hawi is the founder of hahu dance and expert in his feild"
              fill
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
        </Swiper>
      </div>

      <div className="flex flex-1 items-center justify-center max-w-[500px] m-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
        quam facere. Expedita quasi ipsum earum ducimus voluptates laborum,
        temporibus fugit modi pariatur accusamus illum rem nostrum debitis
        aliquam qui deleniti.
      </div>
    </div>
  );
}

export default GallerySection;
