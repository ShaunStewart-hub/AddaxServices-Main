"use client";
import { Elsie } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Section0() {
  let [background, setBackground] = useState("");
  const imgLoadOut = imgSection;
  let slideCount = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (imgLoadOut !== undefined) {
        if (imgLoadOut.images !== undefined) {
          if (slideCount < 0) {
            slideCount = imgLoadOut.images.length - 1;
          } else if (slideCount == imgLoadOut.images.length) {
            slideCount = 0;
          }
          setBackground((count) => (count = r));
          let r = imgLoadOut.images[slideCount];
          console.log(r);
        } else {
          console.log("error getting .images does not exist");
        }
      } else {
        console.log("error getting imgLoadOut does not exist");
      }

      slideCount++;
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen w-full bg-gradient-to-r from-slate-400 via-slate-700 to-black text-[#ffe9e9]">
      <img
        className="absolute w-full opacity-20 h-full"
        src={background}
        alt=""
      />
      <div className="h-full w-full grid grid-cols-2 relative z-20">
        <section className=" h-[50%] w-[90%] m-auto ">
          <h2 className="text-3xl pb-5 pt-10 font-semibold">
            Elevate Your IT Infrastructure with Addax's Engineering Expertise!
          </h2>
          <p className="pb-5 text-lg font-medium">
            In today's dynamic digital landscape, IT infrastructure is the
            heartbeat of business success. At Addax, we're committed to not just
            keeping your systems operational but ensuring they thrive. Our IT
            Engineering services are designed to supercharge your IT environment
            and drive your business to new heights.
          </p>
          <button className="button-89 font-bold" role="button">
            Learn More
          </button>
        </section>
        <section className=" h-[80%] w-[90%] m-auto relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 480 480"
            className="z-10 relative"
          >
            <defs>
              <pattern
                id="img1"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <image
                  href={background}
                  x="0"
                  y="0"
                  width="1"
                  height="1"
                  preserveAspectRatio="xMidYMid slice"
                  opacity={0.9}
                />
              </pattern>
            </defs>
            <path
              d="M459.5 283q2.5 43-37.5 64.5t-70 39Q322 404 291.5 438t-67 9q-36.5-25-68-39.5t-71-31Q46 360 53 317t-13-80.5Q20 199 47 168t38-75q11-44 58.5-35T226 39q35-28 76-16.5T356.5 78q13.5 44 57 61t43.5 59q0 42 2.5 85Z"
              fill="url(#img1)"
            ></path>
          </svg>
          <svg viewBox="-5 -15 500 500" className="rotate-180 absolute top-0 ">
            <path
              fill="#5c6879"
              d="M459.5 283q2.5 43-37.5 64.5t-70 39Q322 404 291.5 438t-67 9q-36.5-25-68-39.5t-71-31Q46 360 53 317t-13-80.5Q20 199 47 168t38-75q11-44 58.5-35T226 39q35-28 76-16.5T356.5 78q13.5 44 57 61t43.5 59q0 42 2.5 85Z"
            ></path>
          </svg>
        </section>
      </div>
    </section>
  );
}
// ----------------------------------------------------------------

// ----------------------------------------------------------------
const imgSection = {
  images: [
    "/img/woman-smiling-texting-smart-phone-generated-by-ai.jpg",
    "/img/using-digital-tablet-generative-ai-two-inventive-businesspeople.jpg",
    "/img/kids-with-vr-glasses-abstract-futuristic-school-classroom.jpg",
  ],
};
