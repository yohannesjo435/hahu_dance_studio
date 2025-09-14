import Hero from "@/components/Hero";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import Company from "@/components/Company";
import Faq from "@/components/Faq";
import Drawer from "@/components/Drawer";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import ScrollVelocity from "@/components/ScrollVelocity";

gsap.registerPlugin(SplitText, ScrollTrigger);

const page = () => {
  return (
    <div id="main" className="max-w-[1500px] m-auto relative">
      <div className="mx-[2%] lg:mx-[5%]">
        <Hero />
        <Company />
        <div className="fixed top-1/2 left-0 z-50">
          <Drawer />
        </div>
        <AboutSection />

        <div className="-mx-[2%] lg:-mx-[5%] my-30">
          <ScrollVelocity
            texts={["Dance Live", "Hahu Dance"]}
            velocity={100}
            className="custom-scroll-text"
          />
        </div>
        <GallerySection />

        <section
          id="videoSection"
          className="aspect-video w-full max-w-3xl mx-auto my-30"
        >
          <iframe
            className="w-full h-full border-none"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/sRj5pxG2JPk?si=idPeu16Hi-nkfOiS"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </section>
        <Faq />
      </div>
    </div>
  );
};

export default page;
