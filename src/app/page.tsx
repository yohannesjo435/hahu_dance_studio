import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GallerySection from "@/components/GallerySection";

const page = () => {
  return (
    <div className="mb-36 max-w-[1500px] m-auto">
      <div className="mx-[2%] lg:mx-[5%">
        <Header></Header>
        <Hero></Hero>
        <GallerySection></GallerySection>
      </div>
    </div>
  );
};

export default page;
