"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import NavLink from "./NavLink"
const links = [
  {url: '/', title: 'Home'},
  {url: '/about', title: 'About'},
  {url: '/portfolio', title: 'Portfolio'},
  {url: '/contact', title: 'Contact'},
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const middleVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  
  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {
          links.map(link => (
            <NavLink link={link} key={link.title}/>
          ))
        }
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
      <Link href='/' className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
        <span className="text-white mr-1">Lucs</span>
        <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">Basto</span>
      </Link>
      </div>
      {/* SOCIAL */}
      <div className="hidden md:flex gap-4  w-1/3">
        <Link href={"#"}>
          <Image src="/github.png" alt="github" width={24} height={24}/>
        </Link>
        <Link href={"#"}>
          <Image src="/dribbble.png" alt="dribbble" width={24} height={24}/>
        </Link>
        <Link href={"#"}>
          <Image src="/instagram.png" alt="instagram" width={24} height={24}/>
        </Link>
        <Link href={"#"}>
          <Image src="/facebook.png" alt="facebook" width={24} height={24}/>
        </Link>
        <Link href={"#"}>
          <Image src="/pinterest.png" alt="pinterest" width={24} height={24}/>
        </Link>
        <Link href={"#"}>
          <Image src="/linkedin.png" alt="linkedin" width={24} height={24}/>
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
          {/* MENU BUTTON */}
          <button      className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setIsOpen((prev) => !prev)}>
            <motion.div
            variants={topVariants}
            animate={isOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={middleVariants}
            animate={isOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={isOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          </button>
          {/* MENU LIST */}
          {
            isOpen && (
              <motion.div
              variants={listVariants}
              initial="closed"
              animate="opened"
              className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
              {links.map(link => (
                <motion.div key={link.url} variants={listItemVariants}>
                  <Link 
                    href={link.url} 
                    className="font-semibold text-white mr-4">
                    {link.title}
                  </Link>
                </motion.div>
              ))}
          </motion.div>
            )
          }
         
      </div>
    </div>
  )
}

export default Navbar
