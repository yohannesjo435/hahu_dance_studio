import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import Company from "@/components/Company";
import Faq from "@/components/Faq";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import Drawer from "@/components/Drawer";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div id="main" className="max-w-[1500px] m-auto relative">
      <div className="mx-[2%] lg:mx-[5%]">
        <Header />
        <Hero />
        <Company />
        <div className="fixed top-1/2 left-0 z-50">
          <Drawer />
        </div>
        <AboutSection />
        <GallerySection />
        <Faq />
      </div>
      <div className="fab">
        <Link href="#main" className="btn btn-lg btn-circle ">
          <ArrowUp />
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default page;
