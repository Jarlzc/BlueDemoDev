import React from "react";
import Link from "next/link";

import { AiOutlineRight } from "react-icons/ai";

export default function NewsSection({ data }) {
  return (
    <section className="bg-white py-6 px-5 flex flex-col md:items-center">
      <div className="border-b-2 h-16 flex items-end pb-5 px-2 md:w-4/5 xl:w-3/5">
        <h2 className="text-theblack text-lg leading-5 md:text-xl  ">NEWS</h2>
      </div>
      <div className="py-10 md:w-4/5 xl:w-3/5">
        {data &&
          data.map((data, i) => {
            return (
              <article key={i} className="px-2 my-8 flex flex-col md:flex-row md:space-x-6">
                <p className="font-sans text-textgray mb-4">
                  {data.date}
                </p>
                <p className="text-theblack leading-5 text-base ">
                  {data.content}
                </p>
              </article>
            );
          })}
      </div>
      <div className="w-full md:flex md:flex-row-reverse md:w-4/5 xl:w-3/5" >
        <Link href="/contact" className="h-14 flex justify-center items-center relative bg-theblue mb-5 md:w-60">
          <p className="text-white font-oswald text-xl tracking-wider ">News</p>
          <div className="absolute right-4">
            <AiOutlineRight size={30} color={"#ffffff"} />
          </div>
        </Link>
      </div>
    </section>
  );
}
