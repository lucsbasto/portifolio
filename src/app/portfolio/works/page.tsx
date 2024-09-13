import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Dog Food App",
    desc: ` 
    Através de um mapa interativo, os usuários podem visualizar onde estão os comedouros disponíveis e 
    colaborar marcando quando um deles foi reabastecido ou reportando problemas no local, como avarias ou falta de manutenção.
    A iniciativa busca promover o bem-estar dos animais, incentivando a participação da comunidade no cuidado e monitoramento dos comedouros,
    garantindo que os cães de rua tenham acesso contínuo à alimentação.
    `,
    img: "/dog-food.jpg",
    link: "#",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Survey Api",
    desc: `
    O objetivo do treinamento é mostrar como criar uma API com uma arquitetura bem definida e desacoplada, 
    utilizando TDD (programação orientada a testes) como metodologia de trabalho, 
    Clean Architecture para fazer a distribuição de responsabilidades em camadas, 
    sempre seguindo os princípios do SOLID e aplicando Design Patterns para resolver alguns problemas comuns.
    `,
    img: "/survey.png",
    link: "#",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Whatsapp Sticker App",
    desc: `
    O projeto permite a conversão de imagens e vídeos enviados em mensagens por meio de comandos simples. 
    Com o comando !sticker, uma imagem enviada é transformada automaticamente em um sticker, 
    enquanto o comando !gif converte vídeos em formato GIF, proporcionando uma maneira fácil 
    e interativa de criar conteúdos visuais diretamente nas conversas.
    `,
    img: "/wpp-sticker.jpg",
    link: "#",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Alumni",
    desc: `
    O projeto Alumni Network visa conectar ex-alunos de uma instituição em uma plataforma que promove o engajamento contínuo 
    oferece oportunidades para networking, mentoria e desenvolvimento profissional. 
    A plataforma permite que ex-alunos se mantenham atualizados sobre eventos, 
    oportunidades de carreira, bem como participar de atividades colaborativas como grupos de interesse e webinars.
    `,
    img: "/alumni.jpg",
    link: "#",
  },
];

function Works({ x}: {x: any}) {
  return (
    <>
        <motion.div initial={{y: 1}} 
      animate={{y:0}} 
      transition={{ duration: 1}} 
      className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </motion.div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white justify-center items-center p-10 ring-2 ring-white rounded">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative rounded w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill className="rounded-3xl object-contain" />
                  </div>
                  <div className="flex flex-row justify-center items-center font-semibold">
                    <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                      {item.desc}
                    </p>
                    <Link href={item.link} className="flex justify-end">
                      <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded-md">See Demo</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-red-300 to-blue-300" />

          </motion.div>
        </div>
    </>
  )
}

export default Works
