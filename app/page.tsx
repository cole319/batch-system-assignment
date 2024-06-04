import Image from "next/image";

//internal imports
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import Advantages from "./_components/Advantages";
import Testimonials from "./_components/Testimonials";
import FAQ from "./_components/FAQ";
import DownloadApp from "./_components/DownloadApp";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="lg:px-[10rem] lg:py-[4rem] overflow-x-hidden py-[2rem] px-[4rem]">
      <Navbar />
      <Hero />
      <Features />
      <Advantages />
      <Testimonials />
      <FAQ />
      <DownloadApp />
      <Footer />
    </div>
  );
}
