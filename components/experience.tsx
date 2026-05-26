"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Code, HelpCircle, LineChart, ListChecks, Terminal } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"

interface ExperienceProps {
  year: string
  title: string
  titleES?: string
  company: string
  companyES?: string
  description: string[]
  descriptionES?: string[]
  technologies: string[]
  icon: React.ReactNode
  logo: string
}

const experiences: ExperienceProps[] = [
        {
    year: "01/2026 - até o momento",
    title: "Data Analyst",
    titleES: "Analista de Datos",
    company: "GRUPO CAOA",
    companyES: "GRUPO CAOA",
  description: [
    "Apoio estratégico às áreas de FP&A por meio de inteligência de dados, transformando grandes volumes de informação em insights acionáveis para o planejamento financeiro.",
    "Desenvolvimento de dashboards executivos em Power BI, criando visões de alto impacto para suporte direto à tomada de decisão da diretoria e CFO.",
    "Engenharia de Dados e estruturação de fluxos ETL complexos, realizando a integração e manipulação de bases oriundas de sistemas como SAP, IBM Cognos e Protheus.",
    "Garantia da integridade e assertividade dos dados financeiros através de processos rigorosos de validação e tratamento de dados em ambientes multinacionais.",
    "Implementação de soluções de RPA e automação de processos com Python e VBA, visando a otimização de rotinas críticas e a eliminação de tarefas manuais complexas.",
  ],
  descriptionES: [
    "Apoyo estratégico a las áreas de FP&A mediante inteligencia de datos, transformando grandes volúmenes de información en insights accionables para la planificación financiera.",
    "Desarrollo de dashboards ejecutivos en Power BI, creando vistas de alto impacto para soporte directo en la toma de decisiones de la dirección y CFO.",
    "Ingeniería de Datos y estructuración de flujos ETL complejos, realizando la integración y manipulación de bases de sistemas como SAP, IBM Cognos y Protheus.",
    "Garantía de la integridad y asertividad de los datos financieros a través de procesos rigurosos de validación y tratamiento de datos en ambientes multinacionales.",
    "Implementación de soluciones de RPA y automatización de procesos con Python y VBA, buscando la optimización de rutinas críticas y la eliminación de tareas manuales complejas.",
  ],
  technologies: ["Python", "SQL (Oracle DB)", "Power BI", "SAP", "IBM Cognos", "TOTVS Protheus", "Excel Avançado", "VBA", "Power Automate", "ETL / Engenharia de Dados"
],
    icon: <Code className="h-6 w-6 text-primary" />,
    logo: "images/caoa_logo.png",
  },
      {
    year: "05/2025 - 12/2025",
    title: "Planejamento e Performance de Dados (Estagiário)",
    titleES: "Planificación y Desempeño de Datos (Aprendiz)",
    company: "GRUPO PETZ",
    companyES: "GRUPO PETZ",
    description: [
      "Automação de rotinas complexas com Python (Pandas, Selenium, PyAutoGUI), VBA e Office Scripts, eliminando gargalos e reduzindo drasticamente o esforço manual em processos críticos de negócio.",
      "Manutenção e otimização do Data Mart de FP&A, aplicando modelagem multidimensional avançada diretamente no Data Warehouse Snowflake.",
      "Desenvolvimento de pipelines de ETL robustos utilizando Python, Power Query e Power Automate para a integração, limpeza e carga automatizada de dados.",
      "Construção de dashboards analíticos em Power BI, com foco em modelagem de dados eficiente, lógica DAX de alta performance e conectividade com múltiplas fontes de dados.",
      "Elaboração de documentações técnicas rigorosas, como PDS e STD, garantindo a governança, a escalabilidade e a continuidade dos projetos desenvolvidos.",
    ],
    descriptionES: [
      "Automatización de rutinas complejas con Python (Pandas, Selenium, PyAutoGUI), VBA y Office Scripts, eliminando cuellos de botella y reduciendo drásticamente el esfuerzo manual en procesos críticos de negocio.",
      "Mantenimiento y optimización del Data Mart de FP&A, aplicando modelado multidimensional avanzado directamente en Data Warehouse Snowflake.",
      "Desarrollo de pipelines ETL robustos utilizando Python, Power Query y Power Automate para la integración, limpieza y carga automatizada de datos.",
      "Construcción de dashboards analíticos en Power BI, enfocado en modelado de datos eficiente, lógica DAX de alto rendimiento y conectividad con múltiples fuentes de datos.",
      "Elaboración de documentaciones técnicas rigurosas, como PDS y STD, garantizando la gobernanza, escalabilidad y continuidad de los proyectos desarrollados.",
    ],
    technologies: [  "Python", "SQL", "Power BI", "Snowflake", "DBeaver", "Excel", "BotCity", "Fivetran",  "QlikSense", "QlikView", "Qlik Cloud", "Power Automate", "TOTVS Protheus"],
    icon: <Code className="h-6 w-6 text-primary" />,
    logo: "images/petz_logo.png",
  },
    {
    year: "05/2025 - 09/2025",
    title: "Consultor de Desenvolvimento de Software",
    titleES: "Consultor de Desarrollo de Software",
    company: "PORTOREAL ALIMENTOS",
    companyES: "PORTOREAL ALIMENTOS",
    description: [
      "Atuação como Consultor em Desenvolvimento de Software, oferecendo apoio técnico à equipe interna, propondo melhorias em sistemas existentes e auxiliando na implementação de novas soluções.",
      "Responsável por resolver demandas específicas, otimizar processos, criar e desenvolver novos módulos, além de garantir a continuidade de projetos iniciados anteriormente.",
      "Foco constante em automação de processos e integração de dados de alta performance.",
    ],
    descriptionES: [
      "Actuación como Consultor en Desarrollo de Software, ofreciendo apoyo técnico al equipo interno, proponiendo mejoras en sistemas existentes y asistiendo en la implementación de nuevas soluciones.",
      "Responsable de resolver demandas específicas, optimizar procesos, crear y desarrollar nuevos módulos, además de garantizar la continuidad de proyectos iniciados anteriormente.",
      "Enfoque constante en automatización de procesos e integración de datos de alto rendimiento.",
    ],
    technologies: ["Node.js", "Apps Script", "APIs REST", "App Sheet", "Google Workspace", "Git/GitHub"],
    icon: <Code className="h-6 w-6 text-primary" />,
    logo: "images/portoreal.jpg",
  },
  {
    year: "12/2024 - 05/2025",
    title: "Desenvolvedor de Software (Estagiário)",
    titleES: "Desarrollador de Software (Aprendiz)",
    company: "PORTOREAL ALIMENTOS",
    companyES: "PORTOREAL ALIMENTOS",
    description: [
      "Desenvolvimento de funcionalidades em Node.js junto ao Apps Script e consumo de APIs JSON e XML para manipulação de dados seguindo os conceitos de ETL.",
      "Integração de sistemas ERP's e criação de Middlewares e Webhooks para melhor gestão e apoio a tomada de decisão.",
      "Criação de aplicativos e automação de fluxos de trabalho utilizando App Sheet e Google Planilhas, otimizando processos e entregando soluções eficientes. Proficiente em Google Workspace.",
      "Aplicação de metodologias ágeis como Kanban junto ao Trello para gerenciamento de projetos.",
      "Uso de Git/GitHub para controle de versão e colaboração em projetos, além de ferramentas como Postman, Swagger e Thunder Client para testes de API.",
    ],
    descriptionES: [
      "Desarrollo de funcionalidades en Node.js junto con Apps Script y consumo de APIs JSON y XML para manipulación de datos siguiendo conceptos de ETL.",
      "Integración de sistemas ERP y creación de Middlewares y Webhooks para mejor gestión y apoyo a la toma de decisiones.",
      "Creación de aplicaciones y automatización de flujos de trabajo utilizando App Sheet y Google Sheets, optimizando procesos y entregando soluciones eficientes. Proficiente en Google Workspace.",
      "Aplicación de metodologías ágiles como Kanban junto con Trello para gestión de proyectos.",
      "Uso de Git/GitHub para control de versiones y colaboración en proyectos, además de herramientas como Postman, Swagger y Thunder Client para pruebas de API.",
    ],
    technologies: ["Node.js", "Apps Script", "APIs REST", "App Sheet", "Google Workspace", "Git/GitHub"],
    icon: <Code className="h-6 w-6 text-primary" />,
    logo: "images/portoreal.jpg",
  },
  {
    year: "12/2021 - 02/2024",
    title: "Assistente Fiscal",
    titleES: "Asistente Fiscal",
    company: "LATICÍNIOS TIROLEZ",
    companyES: "LÁCTEOS TIROLEZ",
    description: [
      "Suporte e HelpDesk a usuários de sistemas fiscais e ERPs (TOTVS Logix, TAF, BI), auxiliando na resolução de chamados e na automação de processos.",
      "Atuação como Key User em sistemas de gestão fiscal e automação, realizando parametrizações, testes, análise de performance e suporte a usuários.",
      "Desenvolvimento e manutenção de dashboards para indicadores fiscais, utilizando ferramentas de BI e análise de dados para monitoramento de riscos.",
      "Automação de rotinas fiscais, otimizando processos de escrituração, digitalização e conferência (análise) de documentos.",
    ],
    descriptionES: [
      "Soporte y HelpDesk a usuarios de sistemas fiscales y ERP (TOTVS Logix, TAF, BI), asistiendo en la resolución de llamadas y automatización de procesos.",
      "Actuación como Key User en sistemas de gestión fiscal y automatización, realizando parametrizaciones, pruebas, análisis de rendimiento y soporte a usuarios.",
      "Desarrollo y mantenimiento de dashboards para indicadores fiscales, utilizando herramientas de BI y análisis de datos para monitoreo de riesgos.",
      "Automatización de rutinas fiscales, optimizando procesos de escrituración, digitalización y verificación (análisis) de documentos.",
    ],
    technologies: ["TOTVS Logix/TAF/BI", "ANF-e", "Automação de Processos", "QlikSense"],
    icon: <HelpCircle className="h-6 w-6 text-primary" />,
    logo: "images/tirolez.jpg",
  },
  {
    year: "09/2020 - 12/2021",
    title: "Auxiliar Fiscal",
    titleES: "Auxiliar Fiscal",
    company: "LATICÍNIOS TIROLEZ",
    companyES: "LÁCTEOS TIROLEZ",
    description: [
      "Apoio na gestão e manutenção de sistemas fiscais, auxiliando na análise e parametrização de ERPs.",
      "Escrituração e análise de documentos fiscais, otimizando fluxos e integrações de dados dentro do ERP.",
      "Suporte na automação de cálculos e apuração de impostos (ISS, IRRF, CSRF, INSS).",
      "Vivência com transmissão de arquivos digitais (SPED, PERDCOMP, E-CAC).",
    ],
    descriptionES: [
      "Apoyo en la gestión y mantenimiento de sistemas fiscales, asistiendo en el análisis y parametrización de ERP.",
      "Escrituración y análisis de documentos fiscales, optimizando flujos e integraciones de datos dentro del ERP.",
      "Soporte en automatización de cálculos y liquidación de impuestos (ISS, IRRF, CSRF, INSS).",
      "Experiencia con transmisión de archivos digitales (SPED, PERDCOMP, E-CAC).",
    ],
    technologies: ["TOTVS Logix/TAF/BI", "ANF-e", "Automação de Processos", "QlikSense"],
    icon: <Terminal className="h-6 w-6 text-primary" />,
    logo: "images/tirolez.jpg",
  },
  {
    year: "12/2019 - 09/2020",
    title: "Aprendiz Fiscal",
    titleES: "Aprendiz Fiscal",
    company: "LATICÍNIOS TIROLEZ",
    companyES: "LÁCTEOS TIROLEZ",
    description: [
      "Suporte na administração de documentos fiscais e devoluções de mercadorias, analisando dados e movimentações dentro do ERP.",
      "Auxílio na escrituração de notas fiscais e conferência automatizada de documentos, garantindo integridade dos registros.",
      "Experiência com ferramentas de gestão empresarial e automação de processos fiscais.",
    ],
    descriptionES: [
      "Soporte en la administración de documentos fiscales y devoluciones de mercancías, analizando datos y movimientos dentro del ERP.",
      "Asistencia en la escrituración de facturas y verificación automatizada de documentos, garantizando integridad de los registros.",
      "Experiencia con herramientas de gestión empresarial y automatización de procesos fiscales.",
    ],
    technologies: ["TOTVS Logix/TAF", "ANF-e", "Automação de Documentos"],
    icon: <LineChart className="h-6 w-6 text-primary" />,
    logo: "images/tirolez.jpg",
  },
]

export default function Experience() {
  const { language } = useLanguage()
  const t = translations[language].experience

  return (
    <section id="experience" className="py-20 bg-blue-950/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {t.title} <span className="gradient-text">{t.subtitle}</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.intro}
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
                      <h3 className="text-xl font-bold mb-1">{language === 'es' ? (exp.titleES || exp.title) : exp.title}</h3>
                      <p className="text-muted-foreground">{language === 'es' ? (exp.companyES || exp.company) : exp.company}</p>
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
                    {(language === 'es' ? (exp.descriptionES || exp.description) : exp.description).map((item, idx) => (
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

