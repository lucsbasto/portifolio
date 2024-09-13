"use client"
import { motion } from 'framer-motion';
import Image from "next/image";

export default function Home() {
  return (
    <motion.div 
      className='h-full' 
      initial={{y: "-200vh"}} 
      animate={{y:0}} 
      transition={{ duration: 1}}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
            <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Construindo Soluções Escaláveis. Moldando o Futuro.
          </h1>
          <p className="md:text-lg">
          Bem-vindo ao meu espaço tecnológico, onde código limpo e arquitetura robusta se unem. 
          Com paixão por desempenho e inovação, meu trabalho abrange projetos de grande impacto, sempre com o objetivo de entregar excelência
          </p>
          <div className=" w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">Conheça meu Trabalho</button>
            <button className="p-4 rounded-lg ring-1 ring-black">Entre em Contato</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
