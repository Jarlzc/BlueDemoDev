import React from "react";
import ProductCard from "./ProductCard";
import Image from "next/image";

import productBg from "../public/images/productBg.jpg";

import useWindowSize from "@/hooks/useWindowSize";

export default function ProductSection({ data }) {
  const { width } = useWindowSize();
  return (
    <article
      id={"product"}
      className="relative flex flex-col px-5 py-20 bg-theblue md:items-center"
      style={
        width > 768
          ? { minHeight: "40vh" }
          : width > 1280
          ? { height: "30vh" }
          : { minHeight: "100vh" }
      }
    >
      <Image
        src={productBg}
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
          mixBlendMode: "multiply",
        }}
      />
      <div className="mb-10 z-10 md:w-4/5 xl:w-3/5">
        <h1 className="text-white tracking-wide w-full md:text-xl">PRODUCT</h1>
      </div>
      <div className="z-10 md:w-4/5 xl:w-3/5 ">
        <div className="flex flex-row flex-wrap justify-center md:mx-5">
          {data.map((item, i) => {
            return (
              <ProductCard
                key={i}
                imgsrc={item.imgsrc}
                name={item.name}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </article>
  );
}
