import Image from "next/image";
import React from "react";

function Company() {
  return (
    <div className="flex h-12 my-20 mt-32 gap-7 max-w-[850px] mx-auto ">
      {images.map((img, i) => (
        <div key={i} className="flex-1 relative h-full">
          <Image src={img.src} alt={img.alt} fill className="object-contain" />
        </div>
      ))}
    </div>
  );
}

export default Company;

const images = [
  {
    src: "/company/aau-logo.jpg",
    alt: "image",
  },
  {
    src: "/company/awash bank.png",
    alt: "image",
  },
  {
    src: "/company/ebs.png",
    alt: "image",
  },
  {
    src: "/company/ethio-airlines.png",
    alt: "image",
  },
  {
    src: "/company/ethio-telecome-logo.png",
    alt: "image",
  },
  {
    src: "/company/tikur-ambesa.png",
    alt: "image",
  },
];
