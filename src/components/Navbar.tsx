"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import NavLink from "./NavLink"
const links = [
  {url: '/', title: 'Home'},
  {url: '/about', title: 'Sobre'},
  {url: '/portfolio', title: 'Portifolio'},
  {url: '/contact', title: 'Contato'},
]

const socialMedias = [
  {
    icon: "/github.png",
    url: "https://www.github.com/lucsbasto",
    alt: "github",
  },
  {
    icon: "/linkedin.png",
    url: "https://www.linkedin.com/in/lucsbasto/",
    alt: "linkedin",
  },
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
      <div className="md:hidden lg:flex xl:justify-center">
      <Link href='/' className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
        <span className="text-white mr-1">Lucs</span>
        <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">Basto</span>
      </Link>
      </div>
      {/* SOCIAL */}
      <div className="hidden md:flex gap-4  w-1/3">
      {
        socialMedias.map((media, index) => (
        <Link target="blank"  key={index} href={media.url}>
          <Image src={media.icon} alt={media.alt} width={24} height={24}/>
        </Link>
        ))
      } 
      </div>
      <div className="md:hidden">
          <button className="w-10 h-8 flex flex-col justify-between z-50 relative"
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
