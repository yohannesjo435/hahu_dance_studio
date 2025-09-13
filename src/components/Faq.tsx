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
    title: "What if I’ve never danced before?",
    text: "No worries at all! Our classes are designed for all levels, including complete beginners. Our instructors will guide you step-by-step, and you’ll be surprised how quickly you gain confidence and rhythm",
    open: true,
  },
  {
    title: "What styles of dance do you teach?",
    text: "We offer a wide range: ballroom (Waltz, Tango, Foxtrot), Latin (Cha Cha, Salsa, Rumba), swing, hip hop, contemporary, and more. Whether you're looking for social dancing or competitive training, we’ve got you covered.",
  },
  {
    title: " Scheduling & Enrollmen",
    text: "No worries at all! Our classes are designed for all levels, including complete beginners. Our instructors will guide you step-by-step, and you’ll be surprised how quickly you gain confidence and rhythm",
  },
  {
    title: "Do you offer classes for children?",
    text: "Yes, we have observation windows and designated viewing days. We also host seasonal showcases so families can see their dancers shine on stage.",
  },
  {
    title: "What if I’ve never danced before?",
    text: "No worries at all! Our classes are designed for all levels, including complete beginners. Our instructors will guide you step-by-step, and you’ll be surprised how quickly you gain confidence and rhythm",
  },
];
