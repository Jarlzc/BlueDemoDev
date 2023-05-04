import React from "react";
import Image from "next/image";
import Link from "next/link";

import useWindowSize from "@/hooks/useWindowSize";

import NavBar from "@/components/NavBar";
import LastSection from "@/components/LastSection";
import contactImg from "../public/images/contactimg.jpg";
import lastHeroImg from "../public/images/lastHeroImg.jpg";

export default function Contact() {
  const { width, height } = useWindowSize();
  return (
    <div className="">
      <NavBar />
      <section
        className="bg-white mt-12 py-12 px-5 flex flex-col md:items-center"
        style={null}
      >
        <div className="border-b-2 h-16 flex items-end pb-5 px-2 md:w-4/5 xl:w-3/5">
          <h2 className="text-theblack text-lg leading-5 md:text-xl">
            Welcome to our demo site
          </h2>
        </div>
        <div className="mt-6  md:w-4/5 xl:w-3/5">
          <p className="text-theblack text-base">
            This website has been created for demonstration purposes to showcase
            some of the features and capabilities of our platform. Please feel
            free to explore the different pages and features of the site. You
            can find information about our company, our services, and our team.
            We hope you find this demo site informative and helpful in your
            decision-making process. If you have any questions or feedback,
            please don't hesitate to contact us. Thank you for visiting!
          </p>
        </div>
        <div
          className="relative h-64 my-12 md:w-4/5 xl:w-3/5  "
          style={
            width > 768
              ? { minHeight: "30vh" }
              : width > 1280
              ? { height: "10vh" }
              : { minHeight: "20vh" }
          }
        >
          <Image src={contactImg} alt={"contactphonephoto"} fill style={{ objectFit: "contain" }} />
        </div>
        <div className="md:w-4/5 xl:w-3/5">
          <p className="text-theblack text-base">
            Please check back later for updates on the demo site. If you have
            any questions or feedback, please don't hesitate to contact us at{" "}
            <Link
              href="#"
              className="text-theblue underline"
              onClick={(e) => {
                window.location.href = "mailto:adim@otechku.com";
                e.preventDefault();
              }}
            >
              admin@otechku.com
            </Link>
            . Thank you for visiting! .
          </p>
        </div>
      </section>
      <section></section>
      <LastSection />
    </div>
  );
}
