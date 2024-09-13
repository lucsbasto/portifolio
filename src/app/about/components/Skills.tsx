import ScrollSvg from "@/components/ScrollSvg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillList = [
  "JavaScript",
  "TypeScript",
  "MongoDB",
  "PostgreSQL",
  "Node.js",
  "Nest.js",
  "Express.js",
  "GraphQL",
  "Apollo",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Redux",
  "Framer Motion",
  "Docker",
  "AWS",
  "Git",
  "Python",
  "Django"
]

function Skills() {
  const skillRef = useRef(null);
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  return (
    <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
    <motion.h1
      initial={{ x: "-300px" }}
      animate={isSkillRefInView ? { x: 0 } : {}}
      transition={{ delay: 0.2 }}
      className="font-bold text-2xl"
    >
      SKILLS
    </motion.h1>
    <motion.div
      initial={{ x: "-300px" }}
      animate={isSkillRefInView ? { x: 0 } : {}}
      className="flex gap-4 flex-wrap"
    >
      {
        skillList.map((skill, index) => (
        <div key={index} className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
          {skill}
        </div>
        ))
      }
    </motion.div>
    {/* SKILL SCROLL SVG */}
    <ScrollSvg/>
  </div>
  )
}

export default Skills
