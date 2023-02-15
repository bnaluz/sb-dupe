import MiniNav from "@/components/Nav/MiniNav";
import Navbar from "@/components/Nav/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
