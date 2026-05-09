"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Code, Download, LineChart, TrendingUp } from "lucide-react"

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
            Prazer em lhe apresentar minha Jornada até aqui:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-in show">
            <p className="text-lg">
              Olá! Sou o <span className="text-primary font-semibold">Léo</span>, profissional de dados com background
              em Desenvolvimento de Software e BI, com experiência atuando em empresas bilionárias (Indústria e Varejo). 
              Tenho vivência na prática com a Stack: Python, SQL, Snowflake, PostgreSQL, MySQL, Power BI, QlikSense, Excel, 
              Google Sheets, Power Automate, Office Scripts e ênfase de 5 anos com VBA, além do meu lado Desenvolvedor Web/backend.
            </p>

            <p className="text-lg">
            Ao longo da minha carreira, fui reconhecido pela minha alta adaptabilidade, resiliência e pela comunicação clara e leve no dia a dia.
            </p>

            <p>
              Minha transição da área <span className="text-primary font-semibold">contábil/fiscal</span> para{" "}
              <span className="text-primary font-semibold">tecnologia</span> trouxe uma visão analítica e estratégica
              para o desenvolvimento de software. Esta combinação única me permite entender as necessidades do negócio e
              traduzi-las em soluções tecnológicas eficientes.
            </p>

            <p>
            Atuei diretamente na otimização de processos críticos, com <span className="text-primary font-semibold">grande volume de dados</span>, reduzindo fluxos Financeiros, 
            Contábeis/ Fiscais, como por exemplo: <span className="text-primary font-semibold">Modelagem de Budget, Forecast, Capex, Variações (Real x Orçado), DRE’s Gerenciais</span>, 
            pagamentos médicos e remuneração variável de <span className="text-primary font-semibold">vários dias para poucas horas</span>, DIRF, Apurações de ISS, ICMS, INSS, IRRF, PCC, 
            utilizando Python, SQL e VBA. Também <span className="text-primary font-semibold">desenvolvi integrações de sistemas (via API) com pipelines otimizados</span>, que reduziram operações 
            de coleta de dados de vários minutos para apenas 5 segundos. Esses foram <span className="text-primary font-semibold">alguns</span> dos meus feitos!               
             </p>

            <div className="flex gap-4 pt-4">
              <Button className="glow-effect" asChild>
                <a href="#contact">Entre em Contato</a>
              </Button>
              <Button variant="outline" className="gap-2">
                <Download size={16} />
                <a href="\documents\CV LEONARDO MENDES.pdf" download>
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
                      Combino conhecimento técnico com entendimento de processos de negócio, isto porque apoio os times 
                      de Planejamento, Contábil e Fiscal por onde passo e passei.
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
                    Experiência com toda prática de Dados/BI, do ETL à ferramenta de visualização, para traduzir dados em KPIs de valor para diretoria de onde passei.
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
                    Grande escopo e pude testar diversos cases com as ferramentas: Power Automate, Apps Script, Python e SQL, Office Scripts, etc.
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

