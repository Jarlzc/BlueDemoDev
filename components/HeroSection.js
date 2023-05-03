import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link'

import { motion } from "framer-motion";

import { AiOutlineRight } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";
import heroImg from "../public/images/heroImg.jpg";
import heroImg2 from "../public/images/heroImg2.jpg";

import useWindowSize from "@/hooks/useWindowSize";

export default function HeroSection() {
  const { width } = useWindowSize();
  const [heroOrder, setHeroOrder] = useState(1);

  const heroVariants = {
    show: { opacity: 1, transition: { ease: "easeOut", duration: 2 } },
    hide: { opacity: 0, transition: { ease: "easeOut", duration: 2 } },
  };

  useEffect(() => {
    heroOrder < 2
      ? setTimeout(() => {
          setHeroOrder(heroOrder + 1);
        }, 7000)
      : setTimeout(() => {
          setHeroOrder(1);
        }, 7000);
  }, [heroOrder]);

  return (
    <>
      <div id={"hero"} >
        <motion.article
          variants={heroVariants}
          animate={heroOrder == 1 ? "show" : "hidden"}
          initial={{ opacity: 0 }}
          className="mt-12 relative flex flex-col justify-center px-5 md:items-center "
          style={
            width > 768
              ? { height: "55vh" }
              : width > 1280
              ? { height: "70vh" }
              : { height: "83vh" }
          }
        >
          <Image
            src={heroImg}
            alt="hero image"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
              zIndex: "-20",
            }}
          />
          <header className="mb-10 md:mt-32  md:w-4/5 xl:w-3/5 ">
            <p className="text-white text-base font-sans font-medium mb-3 antialiased">
              OUR PURPOSE
            </p>
            <h1
              className="text-white text-4xl md:text-5xl italic tracking-wider font-light subpixel-antialiased "
              style={{ width: "80%", lineHeight: 1.3 }}
            >
              Help pioneering the future
            </h1>
          </header>
          <div
            className=" absolute md:relative bottom-0 left-0 w-full px-5 md:px-0 md:w-4/5 xl:w-3/5 "
            style={width > 768 ? { height: "30%" } : { height: "25%" }}
          >
            {/* the button---------------------------------------------------------------------------------- */}
            <Link href="/contact" className="border border-w h-14 flex justify-center items-center relative w-80 ">
              <p className="text-white font-oswald text-xl tracking-wider ">
                Our advantages
              </p>
              <div className=" absolute right-4">
                <AiOutlineRight size={30} color={"#ffffff"} />
              </div>
            </Link>
          </div>
        </motion.article>
      </div>
      <div className="absolute top-0 left-0 w-full ">
        <motion.article
          variants={heroVariants}
          animate={heroOrder == 2 ? "show" : "hidden"}
          initial={{ opacity: 0 }}
          className="mt-12  relative flex flex-col justify-center px-5 md:items-center "
          style={
            width > 768
              ? { height: "55vh" }
              : width > 1280
              ? { height: "70vh" }
              : { height: "83vh" }
          }
        >
          <div className="bg-theblue/50 absolute top-0 right-0 z-10 h-full w-full">
            <Image
              src={heroImg2}
              alt="hero image"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
                zIndex: "1",
                mixBlendMode: "multiply",
              }}
            />
          </div>
          <header className="mb-10 md:mt-32  md:w-4/5 xl:w-3/5 z-10 ">
            <p className="text-white text-base font-sans font-medium mb-3 antialiased">
              OUR PURPOSE
            </p>
            <h1
              className="text-white text-4xl md:text-5xl italic tracking-wider font-light subpixel-antialiased "
              style={{ width: "80%", lineHeight: 1.3 }}
            >
              Empowering Innovation
            </h1>
          </header>
          <div
            className=" absolute md:relative bottom-0 left-0 w-full px-5 md:px-0 md:w-4/5 xl:w-3/5 z-10 "
            style={width > 768 ? { height: "30%" } : { height: "25%" }}
          >
            {/* the button---------------------------------------------------------------------------------- */}
            <Link href="/contact" className="border border-w h-14 flex justify-center items-center relative w-80 ">
              <p className="text-white font-oswald text-xl tracking-wider ">
                Our advantages
              </p>
              <div className=" absolute right-4">
                <AiOutlineRight size={30} color={"#ffffff"} />
              </div>
            </Link>
          </div>
        </motion.article>
      </div>
      <section className="bg-white py-6 px-5 flex flex-col md:items-center">
        <div className="border-b-2 h-20 flex items-center md:w-4/5 xl:w-3/5 ">
          <button onClick={() => setHeroOrder(1)}>
            {heroOrder == 1 ? (
              <RxDotFilled size={24} color={"#0367A5"} />
            ) : (
              <RxDotFilled size={24} color={"#D9D9D9"} />
            )}
          </button>
          <button onClick={() => setHeroOrder(2)}>
            {heroOrder == 2 ? (
              <RxDotFilled size={24} color={"#0367A5"} />
            ) : (
              <RxDotFilled size={24} color={"#D9D9D9"} />
            )}
          </button>
        </div>
      </section>
    </>
  );
}
