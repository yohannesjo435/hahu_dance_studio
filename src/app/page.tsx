import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import Company from "@/components/Company";

const page = () => {
  return (
    <div className="mb-36 max-w-[1500px] m-auto">
      <div className="mx-[2%] lg:mx-[5%]">
        <Header></Header>
        <Hero></Hero>
        <Company></Company>
        <AboutSection></AboutSection>
        <GallerySection></GallerySection>
      </div>
    </div>
  );
};

export default page;
