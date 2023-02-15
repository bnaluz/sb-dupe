import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import MiniNav from "@/components/Nav/MiniNav";
import MainHero from "@/components/SaleGrid/MainHero";
import MainSaleItem from "@/components/SaleGrid/MainSaleItem";
import SkiBus from "@/components/SkiBus/SkiBus";
import FieldGuides from "@/components/FieldGuide/FieldGuides";

export default function Home() {
  return (
    <>
      <Head>
        <title>SB-Dupe</title>
        <meta name="description" content="Generated by create next app" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* web start */}
      <MiniNav />
      <MainHero />
      <MainSaleItem />
      <SkiBus />
      <FieldGuides />
    </>
  );
}
