// pages/index.js
import React from "react";

import Layout from "../components/Layout";

import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import TopCollect from "@/components/Home/TopCollect";
import NftsSearch from "@/components/Home/NftsSearch";

export default function functionHome  ()  {
  return (
    <Layout>
      {/* hero */}
      <Hero />
      {/* about */}
      <About />
      {/* top collection */}
      <TopCollect />
      {/* nfts search  */}
      <NftsSearch />
    </Layout>
  );
};
