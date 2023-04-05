import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

/**
 * @typedef {import("@prismicio/client").Content.AboutContentSlice} AboutContentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutContentSlice>} AboutContentProps
 * @param { AboutContentProps }
 */
const AboutContent = ({ slice }) => (
  <section>
    <div className="flex justify-center">
      <div className="flex flex-col">
        <span className="text-xl text-gray-600 container">
          {slice.primary.description}
        </span>
        <div className="text-xl container">
          <figure className="grid grid-cols-1 gap-4 text-center">
            <Image
              className="mx-auto w-full max-w-6xl"
              width="1000"
              height="1000"
              src={slice.primary.aboutimg.url}
              alt={slice.primary.aboutimg.alt}
            />
            <figcaption className="italic text-gray-600">
              {slice.primary.imgdesc}
            </figcaption>
          </figure>
          <div className="container">
            <div className="mx-auto w-full max-w-5xl">
              <span className="text-4xl italic text-gray-600">
                {slice.primary.quote}
              </span>
            </div>
          </div>
          <div className="container">
            <div className="text-2xl mx-auto w-full max-w-3xl text-gray-600">
              <span>{slice.primary.text}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutContent;
