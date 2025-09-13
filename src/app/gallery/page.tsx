import Image from "next/image";
const images = [
  {
    id: "1",
    img: "banner-2.jpg",
    url: "https://example.com/one",
    height: 400,
  },
  {
    id: "2",
    img: "banner-2.jpg",
    url: "https://example.com/two",
    height: 250,
  },
  {
    id: "3",
    img: "banner-2.jpg",
    url: "https://example.com/three",
    height: 600,
  },
  {
    id: "4",
    img: "banner-2.jpg",
    url: "https://example.com/one",
    height: 400,
  },
  {
    id: "5",
    img: "banner-2.jpg",
    url: "https://example.com/two",
    height: 250,
  },
  {
    id: "6",
    img: "banner-2.jpg",
    url: "https://example.com/three",
    height: 600,
  },
  {
    id: "77",
    img: "banner-2.jpg",
    url: "https://example.com/three",
    height: 600,
  },
  {
    id: "68",
    img: "banner-2.jpg",
    url: "https://example.com/three",
    height: 600,
  },
  {
    id: "168",
    img: "banner-2.jpg",
    url: "https://example.com/three",
    height: 600,
  },
  {
    id: "628",
    img: "banner-2.jpg",
    url: "https://example.com/three",
    height: 600,
  },
  {
    id: "683e",
    img: "banner-2.jpg",
    url: "https://example.com/three",
    height: 600,
  },
  {
    id: "68w3",
    img: "banner-2.jpg",
    url: "https://example.com/three",
    height: 600,
  },
  {
    id: "681w3",
    img: "banner-2.jpg",
    url: "https://example.com/three",
    height: 600,
  },
  {
    id: "68232",
    img: "banner-2.jpg",
    url: "https://example.com/three",
    height: 600,
  },

  {
    id: "6822232",
    img: "banner-2.jpg",
    url: "https://example.com/three",
    height: 600,
  },
];

function page() {
  return (
    <section className="w-[90%] py-7 m-auto ">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.map(({ img, id }, index) => (
          <div key={index}>
            <Image
              src={`/${img}`}
              alt={id}
              width={800}
              height={320}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default page;
