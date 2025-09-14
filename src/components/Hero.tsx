"use client";
import Image from "next/image";
import Link from "next/link";

import { Play } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    if (!isLoading) {
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
    }
  }, [isLoading]);

  return (
    <>
      <Loading />
      {!isLoading && (
        <main className="flex md:max-h-[1000px] flex-col items-center gap-[50px] md:gap-[5%] md:flex-row lg:justify-around mt-7">
          <div className="flex-1 w-full min-h-[500px] max-h-[1000px] md:h-[85vh] bg-[url('/images/banner-2.jpg')] bg-cover bg-no-repeat bg-bottom"></div>

          <div className="titles h-max flex-1 w-full flex flex-col gap-4">
            <h1 className=" text-3xl md:text-7xl overflow-hidden">
              Hahu Dance. Body speak art Talk
            </h1>
            <p>
              Our bodies speak what words cannot. Through dance, art begins to
              talk bold, rhythmic, and alive.
            </p>
            <Link href={"#videoSection"} className="btn btn-neutral w-max">
              Watch video <Play />
            </Link>
            <div className="max-w-[650px]">
              <SliderInstructor />
            </div>
          </div>
        </main>
      )}
    </>
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
        {images.map(({ img, alt, name }, index) => (
          <SwiperSlide key={index} className="shadow-xl h-[200px]">
            <Image
              className="rounded-[7px]"
              src={`/${img}`}
              alt={alt}
              width={200}
              height={300}
              loading="lazy"
            />
            <h2 className="absolute bottom-6 left-1.5 text-amber-50 text-[15px] font-bold">
              {name}
            </h2>
            <h2 className="absolute bottom-1 left-1.5 text-amber-50 text-[13px]">
              Dance
            </h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export const images = [
  {
    img: "dance_genre/hip-pop.jpg",
    alt: "concert photo people dancing",
    name: "Hip pop",
  },
  {
    img: "dance_genre/locking.webp",
    alt: "concert photo people dancing",
    name: "locking",
  },
  {
    img: "dance_genre/popping.png",
    alt: "concert photo people dancing",
    name: "popping",
  },
  {
    img: "dance_genre/Chifera.jpg",
    alt: "concert photo people dancing",
    name: "Chifera",
  },
  {
    img: "dance_genre/TheCrampsLogo.jpg",
    alt: "concert photo people dancing",
    name: "Cramps",
  },
];
