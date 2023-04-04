import { PrismicLink } from "@prismicio/react";

import { CustomLinkType } from "./type";

const CustomLink = ({ field, label, className }: CustomLinkType) => {
  return (
    <PrismicLink field={field}>
      <div className={className}>{label}</div>
    </PrismicLink>
  );
};

export default CustomLink;
