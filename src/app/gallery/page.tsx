import Image from "next/image";
import { images } from "@/lib/images";

function page() {
  return (
    <section className="w-[90%] py-7 m-auto ">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.map(({ img, alt }, index) => (
          <div key={index}>
            <Image src={`/${img}`} alt={alt} width={800} height={320} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default page;
