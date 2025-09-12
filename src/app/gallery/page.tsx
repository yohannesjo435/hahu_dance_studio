import Masonry from "@/components/Masonry";

const items = [
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
    <section className="w-[90%] py-20 m-auto ">
      <Masonry
      items={items}
      ease="power3.out"
      duration={0.6}
      stagger={0.05}
      animateFrom="bottom"
      scaleOnHover={true}
      hoverScale={0.95}
      blurToFocus={true}
      colorShiftOnHover={false}
      />
    </section>
  )
}

export default page