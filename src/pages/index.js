// pages/index.js
import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";

import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import TopCollect from "@/components/Home/TopCollect";
import NftsSearch from "@/components/Home/NftsSearch";
import Collection from "@/components/Home/Collection";
import Signup from "@/components/Home/Signup";

export default function functionHome() {
  return (
    <Layout>
      {/* hero */}
      <Hero />
      {/* about */}
      <About />
      {/* top collection */}
      <TopCollect />

      {/* collection */}
      {/* <Collection /> */}
      {/* signup */}
      <Signup />
      {/* nfts search  */}
      <NftsSearch />
    </Layout>
  );
}
