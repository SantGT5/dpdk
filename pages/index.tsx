import { SliceZone } from "@prismicio/react";
import { createClient } from "../prismicio";
import { components } from "../slices";

import { Slice } from "@prismicio/types";

type PageType = {
  page: {
    data: {
      slices?: Slice<string>[];
    };
  };
};

const Page = ({ page }: PageType) => {
  return <SliceZone slices={page.data.slices} components={components} />;
};

export default Page;

export async function getStaticProps({ previewData }: any) {
  const client = createClient({ previewData });
  const page = await client.getSingle("articles");
  return {
    props: {
      page,
    },
  };
}
