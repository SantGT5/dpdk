import React from "react";
import { RichText, Input } from "../../components";

import { HiOutlineArrowRight } from "react-icons/hi";

/**
 * @typedef {import("@prismicio/client").Content.FooterSlice} FooterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterSlice>} FooterProps
 * @param { FooterProps }
 */
const Footer = ({ slice }) => (
  <section>
    <div className="container">
      <div className="text-center flex flex-col gap-4 width-full max-w-xl">
        <RichText className="text-4xl font-bold" field={slice.primary.title} />
        <RichText
          className="italic text-gray-600 py-5"
          field={slice.primary.description}
        />
        <div className="flex justify-end items-center relative">
          <div className="w-full">
            <Input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full block p-3"
              placeholder="jane.doe@example.com"
              name="roll"
              required
            />
          </div>
          <HiOutlineArrowRight className="absolute mr-2 w-10" />
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
