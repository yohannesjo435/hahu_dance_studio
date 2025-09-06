import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className=" md:w-[90%] mx-auto flex gap-3.5 flex-col md:flex-row-reverse md:gap-14  md:h-96 h-[530px] mt-40">
      <div className="relative flex-1 w-full">
        <Image
          src={"/instructors/hawi.jpg"}
          alt="hawi dancing, hawi is the founder of hahu dance and expert in his feild"
          fill
          className="rounded-4xl object-cover object-center"
        />
      </div>

      <div className="flex flex-1 items-center justify-center text-[18px] leading-8 [word-spacing:5px]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
        molestiae, minus aliquam eaque, iste necessitatibus commodi facilis illo
        neque cupiditate quaerat quas impedit. Blanditiis culpa amet, dolorum
        iure nobis molestiae. Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Debitis molestiae, minus aliquam eaque, iste
        necessitatibus commodi facilis illo neque cupiditate quaerat quas
        impedit. Blanditiis culpa amet, dolorum iure nobis molestiae.
        adipisicing elit. Debitis molestiae, minus aliquam eaque, iste
        necessitatibus commodi facilis illo neque nobis molestiae.
      </div>
    </div>
  );
};

export default AboutSection;
