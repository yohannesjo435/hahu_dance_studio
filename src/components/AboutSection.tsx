"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);

const AboutSection = () => {
  useGSAP(() => {
    const splitText = SplitText.create(".split", {
      type: "lines",
      linesClass: "line",
      autoSplit: true,
      mask: "lines",
    });
    gsap.set(".split", { opacity: 1 });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#aboutSection",
        start: "top center",
        end: "bottom center",
        scrub: true,
        once: false,
        toggleActions: "play none none reverse",
      },
    });
    scrollTimeline.from(splitText.lines, {
      duration: 0.8,
      yPercent: 100,
      opacity: 0,
      stagger: 0.1,
      ease: "expo.out",
    });
  }, []);

  return (
    <section
      id="aboutSection"
      className="md:w-[90%] mx-auto flex gap-3.5 flex-col md:flex-row-reverse md:gap-14 md:h-96 h-[730px] mt-40"
    >
      <div className="relative flex-1 w-full">
        <Image
          src={"/images/img (54).jpg"}
          alt="hawi dancing, hawi is the founder of hahu dance and expert in his field"
          fill
          className="rounded-4xl object-cover object-center"
        />
      </div>

      <div className="split flex-1 text-[18px] h-max m-auto leading-8 [word-spacing:5px]">
        Hahu Dance Studio is a vibrant cultural hub in Addis Ababa, known for
        celebrating Ethiopia’s rich diversity through movement and music.
        Founded by the acclaimed Hahu Dance Crew—winners of Ethiopian Idol in
        2011—the studio brings together dancers from various ethnic backgrounds
        to create performances that reflect unity and tradition. With a focus on
        community and creativity, Hahu Dance Studio offers a space where
        traditional rhythms meet contemporary expression, inspiring dancers of
        all levels to move with purpose and pride.
      </div>
    </section>
  );
};

export default AboutSection;
