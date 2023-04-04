import React from "react";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

/**
 * @typedef {import("@prismicio/client").Content.StoriesListSlice} StoriesListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<StoriesListSlice>} StoriesListProps
 * @param { StoriesListProps }
 */
const StoriesList = ({ slice }) => (
  <section>
    <div className="px-4 py-8 md:py-10 md:px-6 lg:py-12">

      <ul className="grid grid-cols-1 gap-16">
        {slice?.items?.map((item, i) => {
          return (
            <li key={i} className="grid grid-cols-1 items-start gap-6 md:grid-cols-3 md:gap-8">
              <Image
                width={500}
                height={500}
                src={item.storyimg.url}
                alt="Story img"
              />
              <div className="grid grid-cols-1 gap-3 md:col-span-2">
                <h1 className="text-4xl font-bold">{item.title}</h1>
                <p className="italic text-gray-600">{item.date}</p>
                <p className="md:text-lg md:leading-relaxed text-gray-600">{item.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

export default StoriesList;
