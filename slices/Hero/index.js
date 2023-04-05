import React from "react";
import { PrismicRichText } from "@prismicio/react";

import { RichText } from "../../components";

import Image from "next/image";

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param { HeroProps }
 */
const Hero = ({ slice }) => (
  <section>
    <div className="flex justify-center container">
      <div className="text-center grid max-w-lg grid-cols-1 justify-items-center gap-5">
        <div className="h-40 w-40 overflow-hidden rounded-full">
          {slice?.items?.map((item, i) => {
            return (
              <Image
                key={i}
                style={{ objectFit: "contain" }}
                width="200"
                height="200"
                src={item.profile_img.url}
                alt="profile Img"
              />
            );
          })}
        </div>
        <RichText className="text-4xl font-bold" field={slice.primary.title} />
        <RichText
          className="text-4xl italic text-gray-600"
          field={slice.primary.description}
        />
      </div>
    </div>
  </section>
);

export default Hero;
