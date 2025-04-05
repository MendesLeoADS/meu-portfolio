"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Code, HelpCircle, LineChart, ListChecks, Terminal } from "lucide-react"

interface ExperienceProps {
  year: string
  title: string
  company: string
  description: string[]
  technologies: string[]
  icon: React.ReactNode
  logo: string
}

const experiences: ExperienceProps[] = [
  {
    year: "12/2024 - Atual",
    title: "Desenvolvedor de Software (Estagiário)",
    company: "PORTOREAL ALIMENTOS",
    description: [
      "Desenvolvimento de funcionalidades em Node.js junto ao Apps Script e consumo de APIs JSON e XML para manipulação de dados seguindo os conceitos de ETL.",
      "Integração de sistemas ERP's e criação de Middlewares e Webhooks para melhor gestão e apoio a tomada de decisão.",
      "Criação de aplicativos e automação de fluxos de trabalho utilizando App Sheet e Google Planilhas, otimizando processos e entregando soluções eficientes. Proficiente em Google Workspace.",
      "Aplicação de metodologias ágeis como Kanban junto ao Trello para gerenciamento de projetos.",
      "Uso de Git/GitHub para controle de versão e colaboração em projetos, além de ferramentas como Postman, Swagger e Thunder Client para testes de API.",
    ],
    technologies: ["Node.js", "Apps Script", "APIs REST", "App Sheet", "Google Workspace", "Git/GitHub"],
    icon: <Code className="h-6 w-6 text-primary" />,
    logo: "images/portoreal.jpg",
  },
  {
    year: "12/2021 - 02/2024",
    title: "Assistente Fiscal",
    company: "LATICÍNIOS TIROLEZ",
    description: [
      "Suporte e HelpDesk a usuários de sistemas fiscais e ERPs (TOTVS Logix, TAF, BI), auxiliando na resolução de chamados e na automação de processos.",
      "Atuação como Key User em sistemas de gestão fiscal e automação, realizando parametrizações, testes, análise de performance e suporte a usuários.",
      "Desenvolvimento e manutenção de dashboards para indicadores fiscais, utilizando ferramentas de BI e análise de dados para monitoramento de riscos.",
      "Automação de rotinas fiscais, otimizando processos de escrituração, digitalização e conferência (análise) de documentos.",
    ],
    technologies: ["TOTVS Logix/TAF/BI", "ANF-e", "Automação de Processos", "QlikSense"],
    icon: <HelpCircle className="h-6 w-6 text-primary" />,
    logo: "images/tirolez.jpg",
  },
  {
    year: "09/2020 - 12/2021",
    title: "Auxiliar Fiscal",
    company: "LATICÍNIOS TIROLEZ",
    description: [
      "Apoio na gestão e manutenção de sistemas fiscais, auxiliando na análise e parametrização de ERPs.",
      "Escrituração e análise de documentos fiscais, otimizando fluxos e integrações de dados dentro do ERP.",
      "Suporte na automação de cálculos e apuração de impostos (ISS, IRRF, CSRF, INSS).",
      "Vivência com transmissão de arquivos digitais (SPED, PERDCOMP, E-CAC).",
    ],
    technologies: ["TOTVS Logix/TAF/BI", "ANF-e", "Automação de Processos", "QlikSense"],
    icon: <Terminal className="h-6 w-6 text-primary" />,
    logo: "images/tirolez.jpg",
  },
  {
    year: "12/2019 - 09/2020",
    title: "Aprendiz Fiscal",
    company: "LATICÍNIOS TIROLEZ",
    description: [
      "Suporte na administração de documentos fiscais e devoluções de mercadorias, analisando dados e movimentações dentro do ERP.",
      "Auxílio na escrituração de notas fiscais e conferência automatizada de documentos, garantindo integridade dos registros.",
      "Experiência com ferramentas de gestão empresarial e automação de processos fiscais.",
    ],
    technologies: ["TOTVS Logix/TAF", "ANF-e", "Automação de Documentos"],
    icon: <LineChart className="h-6 w-6 text-primary" />,
    logo: "images/tirolez.jpg",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-blue-950/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Minhas <span className="gradient-text">Experiências</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Minha jornada profissional e transição para a área da Tecnologia da Informação
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-primary/20 transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-12 animate-in"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
              >
                <div className="hidden md:block md:w-1/2"></div>
                <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-background border-4 border-primary rounded-full transform -translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center">
                  {exp.icon}
                </div>
                <div className="w-full md:w-1/2 bg-secondary/50 p-6 rounded-lg shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm text-primary font-medium mb-2">{exp.year}</div>
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    {/* Logo da empresa */}
                    <div className="flex-shrink-0 ml-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-white/10 p-2 flex items-center justify-center">
                        <img
                          src={exp.logo || "/placeholder.svg"}
                          alt={`${exp.company} logo`}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <ListChecks className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

