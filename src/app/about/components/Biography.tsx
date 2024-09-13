import ScrollSvg from "@/components/ScrollSvg"

function Biography() {
  return (
    <div className="flex flex-col gap-12 justify-center">
    {/* BIOGRAPHY TITLE */}
    <h1 className="font-bold text-2xl">Bio</h1>
    <p className="text-lg">
     
    Lucas Bastos é um Engenheiro de Software especializado em backend, 
    com experiência em diversas tecnologias, incluindo JavaScript, Python, Go e Java. 
    Ele tem um histórico comprovado de trabalho em plataformas de pagamento digital, 
    sistemas bancários online e aplicações financeiras avançadas, 
    impactando milhões de usuários em escala global. 
    Lucas entrega soluções de alto desempenho, confiáveis e adaptadas às necessidades de negócio.
    </p>
    {/* BIOGRAPHY QUOTE */}
    <span className="italic">
      "Os problemas são o combustível para o progresso, convertendo dificuldades em oportunidades de crescimento."
    </span>
    {/* BIOGRAPHY SCROLL SVG */}
    <ScrollSvg/>
  </div>
  )
}

export default Biography
