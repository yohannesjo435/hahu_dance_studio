"use client";
import Image from "next/image";
import { Play } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useGSAP(() => {
    const splitText = SplitText.create(".titles h1", {
      type: "lines",
    });
    const splitTextPara = SplitText.create(".titles p", {
      type: "lines",
    });
    gsap.from(splitText.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power1.inOut",
    });

    gsap.from(splitTextPara.lines, {
      opacity: 0,
      stagger: 0.1,
      duration: 2,
      yPercent: 100,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <main className="flex md:max-h-[1000px] flex-col items-center gap-[50px] md:gap-[5%] md:flex-row lg:justify-around mt-7">
      <div className="flex-1 w-full min-h-[500px] max-h-[1000px] md:h-[85vh] bg-[url('/banner-2.jpg')] bg-cover bg-no-repeat bg-bottom"></div>

      <div className="titles h-max flex-1 w-full flex flex-col gap-4">
        <h1 className=" text-3xl md:text-7xl overflow-hidden">
          Hahu Dance. Dance with Passion
        </h1>
        <p>
          Ignite your passion for dance and experience the transformative power
          of movement at our thriving academy.
        </p>
        <button className="btn btn-neutral w-max">
          Watch video <Play />
        </button>
        <div className="max-w-[650px]">
          <SliderInstructor />
        </div>
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
          <h2 className="absolute bottom-6 left-1.5 text-amber-50  text-[15px] font-bold">
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
