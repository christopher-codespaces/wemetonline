import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <>
        <Hero/>
        <CTA/>
        <Stats/>
        <Footer/>
      </>
  );
}
