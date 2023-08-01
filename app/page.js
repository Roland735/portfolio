import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#fff] min-h-screen overflow-x-hidden">
      <div className="">
        <Navbar />
      </div>

      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
