import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const page = () => {
  return (
    <div className="mb-60  mt-14 flex flex-col gap-20  items-center text-center justify-center min-h-[600px] max-w-[1500px] m-auto relative mx-[4%] lg:mx-[5%]">
      <div className="grid gap-2">
        <h6 className="">Get in Touch</h6>
        <h1 className="text-4xl font-bold">
          We’re Here to <br /> Support You
        </h1>
        <h3 className="max-w-96 mt-2">
          Whether you have questions, need help getting started, or want to
          learn more — reach out anytime.
        </h3>
      </div>

      <div className="flex flex-col gap-9 md:gap-0 md:flex-row justify-between text-left w-full max-w-[950px]">
        <div className="flex flex-1 flex-col gap-4 items-center md:items-start">
          <h3 className="text-2xl mb-5">Contact Details:</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <span className="font-semibold">Email</span>: hahu@gmail.com
            </li>
            <li>
              <span className="font-semibold">Phone</span>:+2519016488726
            </li>
            <li>
              <span className="font-semibold">Address</span>: Ethiopia
              addisAbaba
            </li>
          </ul>
          <ul className="flex gap-2 mb-16">
            <li>
              <FaTelegramPlane />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaYoutube />
            </li>
          </ul>
          <p>We typically respond within 12 hours.</p>
        </div>
        <div className="flex flex-1 flex-col max-w-[700px] m-auto">
          <h1 className="text-left text-2xl  mb-10">Send Us a Message</h1>
          <form className="flex flex-col gap-5 bg-[#fcf7f1] rounded-3xl w-full py-16 px-14">
            <div className="flex gap-12">
              <label htmlFor="email" className="text-[18px] mb-">
                Email:
              </label>
              <input
                type="text"
                name="Email"
                className="border-b-[1px] focus:outline-0 bg-gray-100 rounded-t-sm"
              />
            </div>
            <div className="flex gap-7">
              <label htmlFor="message" className="text-[18px]">
                Message:
              </label>
              <textarea
                name="message"
                className="border-b-[1px] focus:outline-0 bg-gray-100 rounded-t-sm"
                rows={4}
              />
            </div>
            <button className="btn btn-neutral w-full mt-7 ">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
