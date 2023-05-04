import React from "react";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";

import useWindowSize from "@/hooks/useWindowSize";

export default function ProductCard({ imgsrc, name, description }) {
  const { width } = useWindowSize();
  return (
    <article
      className="bg-white flex flex-col basis-full md:basis-1/2 md:w-64 py-6 px-8 relative border-b border-zinc-300"
      style={{ aspectRatio: 335 / 330, maxHeight: "50vh" }}
    >
      <Link href="/contact"  className="absolute bottom-0 right-0 flex items-center justify-center p-3">
        <AiOutlineRight size={24} className="text-theblue" />
      </Link>
      <Link href="/contact"  className="flex flex-col" style={{ flex: 1 }}>
        <div className="mb-7 relative" style={{ flex: 0.8 }}>
          <Image src={imgsrc} alt={"product"} fill style={{ objectFit: "scale-down" }} />
        </div>
        <div style={{ flex: 0.2 }}>
          <h3 className="text-theblue text-lg tracking-wider mb-4 ">{name}</h3>
          <p className="text-theblack text-sm">{description}</p>
        </div>
      </Link>
    </article>
  );
}
