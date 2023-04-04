import React from "react";
import { PrismicRichText } from "@prismicio/react";

import { RichText } from "../../components";

/**
 * @typedef {import("@prismicio/client").Content.FooterSlice} FooterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterSlice>} FooterProps
 * @param { FooterProps }
 */
const Footer = ({ slice }) => (
  <section>
    <div className="flex justify-center px-4 py-8 md:py-10 md:px-6 lg:py-12 ">
      <div className="flex-col text-center">
        <RichText className="text-4xl" field={slice.primary.title} />
        <RichText
          className="italic text-gray-600 py-5"
          field={slice.primary.description}
        />
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full block p-2.5 "
          type="text"
          id="roll"
          name="roll"
          required
        />
      </div>
    </div>
  </section>
);

export default Footer;
