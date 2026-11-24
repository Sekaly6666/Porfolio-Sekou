import dynamic from "next/dynamic";
import Hero from "../components/Hero";
import About from "../components/About";
import Loader from "../components/Loader";

const Skills = dynamic(() => import("../components/Skills"));
const Projects = dynamic(() => import("../components/Projects"));
const Experience = dynamic(() => import("../components/Experience"));
const Contact = dynamic(() => import("../components/Contact"));
const Footer = dynamic(() => import("../components/Footer"));

export default function Home() {
  return (
    <>
      <Loader />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
