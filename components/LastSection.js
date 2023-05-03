import React from "react";
import Image from "next/image";


import iconImg from "../public/icons/companyIcon.png";
import { MdVerticalAlignTop } from "react-icons/md";

export default function LastSection() {
  return (
    <div>
      <section
        className="flex flex-col bg-natrual-300 h-48 md:h-52 px-5 py-10 md:items-center "
        style={{}}
      >

        <div className=" w-full md:w-4/5 xl:w-3/5">
          <div className="h-11 relative w-28 md:w-40 md:h-14 mb-8 md:mb-12">
            <Image src={iconImg} fill style={{ objectFit: "contain" }} />
          </div>
          <nav className="flex flex-row justify-between md:w-80 md:justify-start md:space-x-4 ">
            <div className="border-b-2 border-neutral-400 pr-3 ">
              <h1 className="text-theblue mb-2 text-xs ">OUR PURPOSE</h1>
            </div>
            <div className="border-b-2 border-neutral-400 pr-3">
              <h1 className="text-theblue mb-2 text-xs ">PRODUCTS</h1>
            </div>
            <div className="border-b-2 border-neutral-400 pr-3">
              <h1 className="text-theblue mb-2 text-xs ">COMPANY INFO</h1>
            </div>
          </nav>
        </div>
      </section>
      <div className=" bg-theblue flex items-center justify-center py-2 md:fixed md:rounded-sm md:right-0 md:bottom-0 md:h-24 md:w-24 ">
        <button
          onClick={() =>
            setTimeout(
              () => window.scrollTo({ top: 0, behavior: "smooth" }),
              600
            )
          }
        >
          <MdVerticalAlignTop size={32} color={"#ffff"} />
        </button>
      </div>
      <footer className="bg-theblack pl-5 h-24 flex flex-col justify-center ">
        <div className="flex flex-row space-x-4 mb-3">
          <h3 className=" text-white tracking-wide" style={{ fontSize: 10 }}>
            Term of use
          </h3>
          <h3 className=" text-white tracking-wide" style={{ fontSize: 10 }}>
            Site map
          </h3>
        </div>
        <div>
          <h3 className=" text-white tracking-wide" style={{ fontSize: 10 }}>
            Copyright © WARNER GLOBAL TECH. All Rights Reserved.
          </h3>
        </div>
      </footer>
    </div>
  );
}
