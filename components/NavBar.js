import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import useWindowSize from "@/hooks/useWindowSize";
import {
  AiOutlineSearch,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { FiMail } from "react-icons/Fi";
import companyIcon from "../public/icons/companyIcon.png";

export default function NavBar() {
  const { height } = useWindowSize();

  const scrollTo = (id) => {
    if (typeof document !== "undefined") {
      const element = document.getElementById(id);
      element && element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="h-16 md:h-20 lg:h-24 xl:h-28 bg-white fixed top-0 left-0 w-full flex flex-row items-center z-30">
        <div className="flex flex-row justify-between basis-full">
          <Link
            href={"/"}
            className="ml-5 md:ml-7 relative h-10 md:h-11 lg:h-12 xl:h-16 justify-center items-center "
            style={{ aspectRatio: 2.77 }}
          >
            <Image src={companyIcon} fill style={{ objectFit: "contain" }} />
          </Link>
          <div className="justify-center items-center flex flex-row">
            <nav className=" hidden justify-center items-center md:flex flex-row md:space-x-9 mr-6">
              <button onClick={() => scrollTo("hero")}>
                <h3 className="text-theblack text-sm md:text-lg  ">
                  Our strenght
                </h3>
              </button>
              <button onClick={() => scrollTo("product")}>
                <h3 className="text-theblack text-sm md:text-lg ">Product</h3>
              </button>
              <button onClick={() => scrollTo("infoNav")}>
                <h3 className="text-theblack text-sm md:text-lg ">
                  Company info
                </h3>
              </button>
            </nav>
            {!menuOpen && (
              <div className="mr-2 md:mr-5 items-center justify-center flex w-10">
                <AiOutlineSearch className="text-theblue" size={24} />
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-row justify-end h-full shrink">
          {!menuOpen && (
            <button
              onClick={() => {
                console.log("mailbutton");
              }}
              className="bg-theblack flex justify-center items-center"
              style={{ aspectRatio: 1, height: "100%" }}
            >
              <AiOutlineMail size={24} className="text-white" />
            </button>
          )}
          {!menuOpen ? (
            <motion.button
              layout
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
              className="bg-theblue flex justify-center items-center md:hidden"
              style={{ aspectRatio: 1, height: "100%" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0 }}
            >
              <AiOutlineMenu size={24} className="text-white" />
            </motion.button>
          ) : (
            <motion.button
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
              className="bg-theblue flex justify-center items-center md:hidden"
              style={{ aspectRatio: 1, height: "100%" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0 }}
            >
              <AiOutlineClose size={24} className="text-white" />
            </motion.button>
          )}
        </div>
      </nav>
      <motion.div
        initial={false}
        animate={menuOpen ? "open" : "close"}
        className="fixed top-0 left-0 h-full w-full bg-white z-20 flex flex-col  border-t mt-16 md:hidden"
        variants={{
          open: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", duration: 0.7 },
          },
          close: {
            y: -height,
            opacity: 0,
            transition: { type: "spring", duration: 0.7 },
          },
        }}
      >
        <div className="h-3/5 px-6 py-10 border-b-2 ">
          <nav className="flex flex-col space-y-12">
            <div>
              <h3 className="text-theblack text-lg  ">Our strenght</h3>
            </div>
            <div>
              <h3 className="text-theblack text-lg ">Product</h3>
            </div>
            <div>
              <h3 className="text-theblack text-lg ">Company info</h3>
            </div>
          </nav>
        </div>
        <div className="px-6 py-10">
          <div className="h-14 flex justify-center items-center relative bg-theblack mb-5 md:w-60 space-x-2">
            <div>
              <FiMail size={24} className="text-white" />
            </div>
            <p className="text-white text-xl ">Contact Us</p>
          </div>
        </div>
        <div className="px-6 space-y-2">
          <p className="text-sm text-theblack">Term of use</p>
          <p className="text-sm text-theblack"> Site map</p>
        </div>
      </motion.div>
    </>
  );
}
