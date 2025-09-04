"use client";
import Image from "next/image";
import { Play } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <main className="mx-[2%] mt-5 flex flex-col lg:flex-row lg:justify-around items-center">
      <div className="min-w-[200px] h-[88vh]">
        <Image
          className="w-full h-full "
          src={"/banner-2.jpg"}
          alt="hawi dancing, hawi is the founder of hahu dance and expert in his feild"
          width={"450"}
          height={"300"}
        />
      </div>
      <div className=" flex-1 max-w-[50vw] min-w-[450px] flex flex-col gap-6">
        <h1 className="text-7xl">Hahu Dance. Dance with Passion</h1>
        <p>
          Ignite your passion for dance and experience the transformative power
          of movement at our thriving academy.
        </p>
        <button className="btn btn-neutral w-max">
          Watch video <Play />
        </button>
        <SliderInstructor />
      </div>
    </main>
  );
};

export default Hero;

export const SliderInstructor = () => {
  return (
    <div className="w-full">
      <h2 className="mb-3">Instructors</h2>
      <Swiper
        slidesPerView={4.3}
        spaceBetween={20}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide className="h-[200px] my-auto ">
          <h2 className="absolute top-0.5 left-1.5 text-amber-50 text-[12px]">
            HIP-HOP
          </h2>
          <Image
            className="rounded-[7px]"
            src={"/instructors/hawi.jpg"}
            alt="hawi dancing, hawi is the founder of hahu dance and expert in his feild"
            width={200}
            height={200}
          />
          <h2 className="absolute bottom-6 left-1.5 text-amber-50 text-[15px] font-bold">
            Hawi
          </h2>
          <h2 className="absolute bottom-1 left-1.5 text-amber-50 text-[13px]">
            Founder Instructor
          </h2>
        </SwiperSlide>
        <SwiperSlide className="shadow-xl h-[200px]">
          <h2 className="absolute top-0.5 left-1.5 text-amber-50 text-[12px]">
            HIP-HOP
          </h2>
          <Image
            className="rounded-[7px]"
            src={"/banner.jpg"}
            alt="hawi dancing, hawi is the founder of hahu dance and expert in his feild"
            width={150}
            height={200}
          />
          <h2 className="absolute bottom-6 left-1.5 text-amber-50 text-[15px] font-bold">
            Hawi
          </h2>
          <h2 className="absolute bottom-1 left-1.5 text-amber-50 text-[13px]">
            Founder Instructor
          </h2>
        </SwiperSlide>
        <SwiperSlide className="h-[200px] my-auto">
          <h2 className="absolute top-0.5 left-1.5 text-amber-50 text-[12px]">
            HIP-HOP
          </h2>
          <Image
            className="rounded-[7px]"
            src={"/instructors/hawi.jpg"}
            alt="hawi dancing, hawi is the founder of hahu dance and expert in his feild"
            width={200}
            height={200}
          />
          <h2 className="absolute bottom-6 left-1.5 text-amber-50 text-[15px] font-bold">
            Hawi
          </h2>
          <h2 className="absolute bottom-1 left-1.5 text-amber-50 text-[13px]">
            Founder Instructor
          </h2>
        </SwiperSlide>{" "}
        <SwiperSlide className="h-[200px] my-auto">
          <h2 className="absolute top-0.5 left-1.5 text-amber-50 text-[12px]">
            HIP-HOP
          </h2>
          <Image
            className="rounded-[7px]"
            src={"/instructors/hawi.jpg"}
            alt="hawi dancing, hawi is the founder of hahu dance and expert in his feild"
            width={200}
            height={200}
          />
          <h2 className="absolute bottom-6 left-1.5 text-amber-50 text-[15px] font-bold">
            Hawi
          </h2>
          <h2 className="absolute bottom-1 left-1.5 text-amber-50 text-[13px]">
            Founder Instructor
          </h2>
        </SwiperSlide>
        <SwiperSlide className="h-[200px] my-auto">
          <h2 className="absolute top-0.5 left-1.5 text-amber-50 text-[12px]">
            HIP-HOP
          </h2>
          <Image
            className="rounded-[7px]"
            src={"/instructors/hawi.jpg"}
            alt="hawi dancing, hawi is the founder of hahu dance and expert in his feild"
            width={200}
            height={200}
          />
          <h2 className="absolute bottom-6 left-1.5 text-amber-50 text-[15px] font-bold">
            Hawi
          </h2>
          <h2 className="absolute bottom-1 left-1.5 text-amber-50 text-[13px]">
            Founder Instructor
          </h2>
        </SwiperSlide>
        <SwiperSlide className="h-[200px] my-auto">
          <h2 className="absolute top-0.5 left-1.5 text-amber-50 text-[12px]">
            HIP-HOP
          </h2>
          <Image
            className="rounded-[7px]"
            src={"/instructors/hawi.jpg"}
            alt="hawi dancing, hawi is the founder of hahu dance and expert in his feild"
            width={200}
            height={200}
          />
          <h2 className="absolute bottom-6 left-1.5 text-amber-50 text-[15px] font-bold">
            Hawi
          </h2>
          <h2 className="absolute bottom-1 left-1.5 text-amber-50 text-[13px]">
            Founder Instructor
          </h2>
        </SwiperSlide>
        <SwiperSlide className="h-[200px] my-auto">
          <h2 className="absolute top-0.5 left-1.5 text-amber-50 text-[12px]">
            HIP-HOP
          </h2>
          <Image
            className="rounded-[7px]"
            src={"/instructors/hawi.jpg"}
            alt="hawi dancing, hawi is the founder of hahu dance and expert in his feild"
            width={200}
            height={200}
          />
          <h2 className="absolute bottom-6 left-1.5 text-amber-50 text-[15px] font-bold">
            Hawi
          </h2>
          <h2 className="absolute bottom-1 left-1.5 text-amber-50 text-[13px]">
            Founder Instructor
          </h2>
        </SwiperSlide>
        <SwiperSlide className="h-[200px] my-auto">
          <h2 className="absolute top-0.5 left-1.5 text-amber-50 text-[12px]">
            HIP-HOP
          </h2>
          <Image
            className="rounded-[7px]"
            src={"/instructors/hawi.jpg"}
            alt="hawi dancing, hawi is the founder of hahu dance and expert in his feild"
            width={200}
            height={200}
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
  );
};
