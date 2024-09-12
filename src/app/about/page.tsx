"use client";
import Brain from "@/components/Brain";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Biography from "./components/biography";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

const AboutPage = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({ container: containerRef })


  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          <Biography/>
          <Skills/>
          <Experience/>
        </div>
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;