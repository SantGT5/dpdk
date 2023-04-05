import "../styles/globals.css";
import type { AppProps } from "next/app";

import Head from "next/head";
import Link from "next/link";

import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../prismicio";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, ...props }) => (
        <Link href={href}>
          <div {...props}></div>
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Head>
          <title>DPDK</title>
          <meta property="og:title" content="DPDK" key="title" />
        </Head>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}
