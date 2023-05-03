import React from "react";
import Image from "next/image";
import Link from "next/link";
import useWindowSize from "@/hooks/useWindowSize";

import infoImg1 from "../public/images/infoimg1.png";
import infoImg2 from "../public/images/infoimg2.png";
import infoImg3 from "../public/images/infoimg3.png";

export default function InfoNavSection() {
  const { width } = useWindowSize();
  return (
    <section
    id={"infoNav"}
      className="bg-white pt-20  pb-5 drop-shadow flex flex-col items-center"
      style={
        width > 768
          ? { height: "60vh" }
          : width > 1280
          ? { height: "50vh" }
          : { height: "80vh" }
      }
    >
      <div className="mb-10 px-5 w-full md:w-4/5 xl:w-3/5">
        <h2 className="text-theblack md:text-xl">COMPANY INFO</h2>
      </div>
      <div
        className="bg-theblue/60 flex flex-row w-full md:w-3/4  xl:w-3/5 "
        style={
          width > 768
            ? { height: "40vh" }
            : width > 1280
            ? { height: "30vh" }
            : { height: "65vh" }
        }
      >
        <Link href="/contact" 
          className="relative flex flex-col-reverse items-center py-8"
          style={{ flex: 1}}
        >
          <Image
            src={infoImg1}
            fill
            style={{ objectFit: "cover", mixBlendMode: "multiply" }}
          />
          <h1 className="text-lg text-neutral-300 tracking-wider z-10">
            VISION
          </h1>
        </Link>
        <Link href="/contact" 
          className="relative flex flex-col-reverse items-center py-8"
          style={{ flex: 1 }}
        >
          <Image
            src={infoImg2}
            fill
            style={{ objectFit: "cover", mixBlendMode: "multiply" }}
          />
          <h1 className="text-lg text-neutral-300 tracking-wider z-10">
            WORKS
          </h1>
        </Link>
        <Link href="/contact" 
          className="relative flex flex-col-reverse items-center py-8"
          style={{ flex: 1 }}
        >
          <Image
            src={infoImg3}
            fill
            style={{ objectFit: "cover", mixBlendMode: "multiply" }}
          />
          <h1 className="text-lg text-neutral-300 tracking-wider z-10">
            CONTACT
          </h1>
        </Link>
      </div>
    </section>
  );
}
