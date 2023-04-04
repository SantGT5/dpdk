import { PrismicRichText } from "@prismicio/react";
import type { RichTextType } from "./type";

const RichText = ({ field, className }: RichTextType) => {
  if (!field) return <></>;

  return (
    <div className={className}>
      <PrismicRichText field={field} />
    </div>
  );
};

export default RichText;
