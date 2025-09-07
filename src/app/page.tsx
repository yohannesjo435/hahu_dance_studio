import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import Company from "@/components/Company";
import Faq from "@/components/Faq";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div id="main" className="mb-36 max-w-[1500px] m-auto">
      <div className="mx-[2%] lg:mx-[5%]">
        <Header></Header>
        <Hero></Hero>
        <Company></Company>
        <AboutSection></AboutSection>
        <GallerySection></GallerySection>
        <Faq></Faq>
      </div>
      <div className="fab">
        <Link href="#main" className="btn btn-lg btn-circle ">
          <ArrowUp />
        </Link>
      </div>
    </div>
  );
};

export default page;
