
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Software Engineer",
    description: "Implementei integrações com serviços bancários e métodos de pagamento para o lançamento do cartão de débito.",
    date: "Mar 2024 - Present",
    company: "Raio Benefícios",
    position: "left"
  },
  {
    title: "Software Engineer",
    description: "Desenvolvi o backend para o sistema de cadastro de funcionários em um sistema voltado para Recursos Humanos.",
    date: "Set 2023 - Mar 2024",
    company: "4All",
    position: "left"
  },
  {
    title: "Tech Lead",
    description: "Liderei uma equipe de desenvolvedores em projetos críticos, incluindo módulos financeiros e de FAQ.",
    date: "Mar 2023 - Set 2023",
    company: "4All",
    position: "left"
  },
  {
    title: "Software Engineer",
    description: "Liderei o desenvolvimento de um sistema de agendamento utilizando Nest e PostgreSQL, criando funcionalidades para datas especiais e aumentando a receita de reservas.",
    date: "Mai 2022 - Mar 2023",
    company: "Softo - DevTeam as a Service",
    position: "left"
  },
  {
    title: "Software Engineer",
    description: "Liderei o desenvolvimento de funcionalidades críticas para um sistema de financiamento bancário. ",
    date: "Jun 2021 - Mai 2022",
    company: "Cadmus Soluções em TI",
    position: "left"
  },
  {
    title: "Software Engineer",
    description: " Liderei a criação de novos microsserviços, integrei APIs de grandes plataformas e implementei a entrega programada de e-mails com relatórios.",
    date: "Abr 2020 - Abr 2021",
    company: "Adireto Ltda",
    position: "left"
  },
  {
    title: "Software Engineer",
    description: "Liderei o desenvolvimento de soluções bancárias digitais, enfatizando o desenvolvimento orientado a testes.",
    date: "Fev 2020 - Abr 2020",
    company: "Soberano SA",
    position: "left"
  },
  {
    title: "Software Engineer",
    description: "Desenvolvi soluções para um aplicativo de pagamentos digitais, implementando testes automatizados e adicionando funcionalidades de pagamento de contas.",
    date: "Abr 2017 - Fev 2020",
    company: "Urpay SA",
    position: "left"
  }
]

function Experience() {
  const experienceRef = useRef(null);
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  return (
    <div
    className="flex flex-col gap-12 justify-center pb-48"
    ref={experienceRef}
  >
    <motion.h1
      initial={{ x: "-300px" }}
      animate={isExperienceRefInView ? { x: "0" } : {}}
      transition={{ delay: 0.2 }}
      className="font-bold text-2xl"
    >
      EXPERIÊNCIA PROFISSIONAL
    </motion.h1>
    <motion.div
      initial={{ x: "-300px" }}
      animate={isExperienceRefInView ? { x: "0" } : {}}
      className=""
    >
     {
       experiences.map((item, index) => {
        const isLeft = index % 2 === 0;
        return (
          <div className="flex justify-between h-55 relative">
            {
              isLeft ? (
              <>
                <div className="w-1/3 ">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    {item.title}
                  </div>
                  <div className="p-3 text-sm italic">
                    {item.description}{" "}
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    {item.date}
                  </div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    {item.company}
                  </div>
                </div>
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-1/3 "></div>
                </>
              ) : (
              <>
                <div className="w-1/3 "></div>
                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                <div className="w-1/3 ">
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    {item.title}
                  </div>
                  <div className="p-3 text-sm italic">
                    {item.description}{" "}
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    {item.date}
                  </div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    {item.company}
                  </div>
                </div>
              </>
              )
              
            }
        </div>
        )
       }) 
     }
    </motion.div>
  </div>
  )
}

export default Experience
