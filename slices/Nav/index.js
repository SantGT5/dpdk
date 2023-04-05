import React from "react";
import { PrismicLink } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.NavSlice} NavSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NavSlice>} NavProps
 * @param { NavProps }
 */
const Nav = ({ slice }) => (
  <section className="container">
    <div className="flex flex-wrap justify-center gap-10  ">
      {slice?.items?.map((item, i) => (
        <PrismicLink key={i} className="font-semibold tracking-tight text-slate-800" field={item.link}>
          {item.label}
        </PrismicLink>
      ))}
    </div>
  </section>
);

export default Nav;
