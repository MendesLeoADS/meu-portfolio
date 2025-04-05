"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Code, TrendingUp, LineChart, Download } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-blue-950/30 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in show">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Sobre <span className="gradient-text">Mim</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Minha jornada da área contábil para o desenvolvimento de software
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-in show">
            <p className="text-lg">
              Sou um <span className="text-primary font-semibold">Desenvolvedor de Software</span> com experiência em
              Code e No/Low-code, criação e consumo de APIs RESTful, e integração com diversos bancos de dados.
            </p>

            <p>
              Minha transição da área <span className="text-primary font-semibold">contábil/fiscal</span> para{" "}
              <span className="text-primary font-semibold">tecnologia</span> trouxe uma visão analítica e estratégica
              para o desenvolvimento de software. Esta combinação única me permite entender as necessidades do negócio e
              traduzi-las em soluções tecnológicas eficientes.
            </p>

            <p>
              Atualmente, trabalho com desenvolvimento em <span className="font-semibold">Node.js</span>,{" "}
              <span className="font-semibold">Express.js</span>, e frontend com
              <span className="font-semibold"> HTML</span>, <span className="font-semibold">CSS</span> e{" "}
              <span className="font-semibold">JavaScript</span>, priorizando acessibilidade e experiência do usuário.
            </p>

            <p>
              Apaixonado por <span className="text-primary font-semibold">inovação</span> e focado em criar soluções que
              geram impacto real, estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades.
            </p>

            <div className="flex gap-4 pt-4">
              <Button className="glow-effect" asChild>
                <a href="#contact">Entre em Contato</a>
              </Button>
              <Button variant="outline" className="gap-2">
                <Download size={16} />
                <a href="#" download>
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-in show">
            <motion.div whileHover={{ y: -10 }} className="col-span-2">
              <Card className="p-6 bg-primary/10 border-primary/20 glow-effect">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/20">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Visão Técnica + Negócios</h3>
                    <p className="text-muted-foreground">
                      Combino conhecimento técnico com entendimento de processos de negócio graças à minha experiência
                      anterior na área contábil/fiscal.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div whileHover={{ y: -10 }}>
              <Card className="h-full p-6 bg-secondary glow-effect">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 rounded-full bg-primary/20">
                    <LineChart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Análise de Dados</h3>
                  <p className="text-sm text-muted-foreground">
                    Experiência com análise e visualização de dados para tomada de decisões
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div whileHover={{ y: -10 }}>
              <Card className="h-full p-6 bg-secondary glow-effect">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 rounded-full bg-primary/20">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Automação</h3>
                  <p className="text-sm text-muted-foreground">
                    Tenho habilidades em automação de processos com low-code e desenvolvimento personalizado
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

