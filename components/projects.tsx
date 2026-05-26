"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { ExternalLink, FolderGit2, Github } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"

// Este componente permitirá que o Leonardo adicione seus projetos depois
const projectCategories = ["Todos", "Web", "Apps", "Automação", "Dashboard"]
const projectCategoriesES = ["Todos", "Web", "Apps", "Automatización", "Dashboard"]

// Projetos placeholder que podem ser substituídos com projetos reais
const projectsData = [
  {
    id: 1,
    title: "Maquininha de Pagamentos",
    description: "Aplicação que simula uma maquininha de cartão para pagamentos em Débito, Crédito ou até QRCode.",
    image: "imgProjects/appMaquinaCartao.png",
    technologies: ["Java", "Maven", "Scanner", "UUID"],
    github: "https://github.com/MendesLeoADS/maquininhaDeCartao",
    live: "https://drive.google.com/file/d/199y2vmhkYo7WMaln69AZxrprFyciv8Vu/view?usp=sharing",
    category: "Apps",
  },
  {
    id: 2,
    title: "Site Institucional Academia Artes Marciais",
    description:
      "Site Institucional da Academia Artes Marciais Black Lotus Vila Formosa, focado em atrair novos alunos e fornecer informações sobre os serviços oferecidos pela academia. Sou o responsável pelo desenvolvimento, manutenção e hospedagem do site, garantindo que ele esteja sempre atualizado e funcionando corretamente para atender às necessidades da academia e de seus clientes.",
    image: "imgProjects/siteBlackLotus.png",
    technologies: [ "JavaScript", "Vercel", "WhatsApp" ],
    github: "https://github.com/MendesLeoADS/siteBlackLotusVilaFormosaV2",
    live: "https://www.blacklotusvilaformosa.com.br/",
    category: "Web",
  },
  {
    id: 3,
    title: "Centenas de Automações para diferentes Cases",
    description:
      "Já atuei no desenvolvimento de centenas de automações como Business Partner de Empresas do Varejo, grandes Indústrias, Atacado, enfim. Em áreas: Contábil, Fiscal, Financeira, FP&A, Segurança de Frotas, entre outras. Lhe convido a uma conversa, para eu explanar melhor esses projetos, uma vez que sob contrato, não podem ser expostos.",
    image: "imgProjects/automacoes.png",
    technologies: ["App Sheet", "Google Workspace", "REST APIs"],
    github: "#",
    live: "#",
    category: "Automação",
  },
  {
    id: 4,
    title: "BI e Análise de Dados",
    description: "Atuei no desenvolvimento de Dashboards, utilizando Power BI/ Qlik Sense, para análise de indicadores de vendas e desempenho, DRE´s, Apurações Fiscais, pagamentos, gestão de frotas, em grandes empresas de varejo, indústria de Latícinios, Tempero e Automobilística, entre outros. Lhe convido a uma conversa, para eu explanar melhor esses projetos, uma vez que sob contrato, não podem ser expostos.",
    image: "imgProjects/bi_dados.png",
    technologies: ["Power BI", "Tableau", "Qlik", "SQL", "Excel"],
    github: "#",
    live: "#",
    category: "Dashboard",
  },
]

export default function Projects() {
  const { language } = useLanguage()
  const t = translations[language].projects
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredProjects =
    activeCategory === "Todos" ? projectsData : projectsData.filter((project) => project.category === activeCategory)

  const categories = language === 'es' ? projectCategoriesES : projectCategories

  return (
    <section id="projects" className="py-20 bg-blue-950/30 backdrop-blur-sm">
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

        <Tabs defaultValue="Todos" className="w-full mb-12">
          <div className="flex justify-center mb-8">
            <TabsList>
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} onClick={() => setActiveCategory(category)}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="animate-in"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="project-card-es overflow-hidden h-full flex flex-col bg-secondary/50 hover:shadow-lg hover:shadow-primary/20 transition-all">
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div className="flex gap-2">
                          {project.github !== "#" && (
                            <Button size="icon" variant="secondary" asChild>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                          {project.live !== "#" && (
                            <Button size="icon" variant="secondary" asChild>
                              <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                    <CardContent className="py-6 flex-grow">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <FolderGit2 className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button variant="outline" className="w-full" asChild>
                        <a
                          href={project.github !== "#" ? project.github : project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Ver Detalhes
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center animate-in">
          <p className="text-muted-foreground mb-6">{t.more}</p>
          <Button size="lg" variant="default" asChild>
            <a
              href="https://github.com/MendesLeoADS"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              {t.visitGithub}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

