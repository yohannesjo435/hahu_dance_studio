import React from "react";

const Faq = () => {
  return (
    <section id="faq" className="w-[80%] m-auto my-32">
      <h2 className="text-3xl py-8 pl-1">Freqently asked Questions. </h2>

      {accordion.map((item, i) => (
        <div key={i} className="collapse bg-base-100 border border-base-300">
          <input
            type="radio"
            name="my-accordion-1"
            defaultChecked={item.open}
          />
          <div className="collapse-title font-semibold">{item.title}</div>
          <div className="collapse-content text-sm">{item.text}</div>
        </div>
      ))}
    </section>
  );
};

export default Faq;

const accordion = [
  {
    title: "Who are you?",
    text: "We’re a contemporary Ethiopian dance group blending traditional styles with modern choreography to celebrate culture and community.",
    open: true,
  },
  {
    title: "Where are you based?",
    text: "Addis Ababa, Ethiopia — available for local and international bookings.",
  },
  {
    title: " What events do you perform at?",
    text: "Festivals, corporate events, workshops, private celebrations, and cultural showcases.",
  },
  {
    title: "Do you travel internationally?",
    text: "Yes, We’re based in Addis Ababa but available for global bookings with advance notice.",
  },
  {
    title: "How can I book you?",
    text: "Email: hahudance@gmail.com Phone: +251-913581869",
  },
];
