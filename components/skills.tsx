"use client"

import { motion } from "framer-motion"
import { Cloud, Database, GitBranch, Globe, Layers, LayoutGrid, Server } from "lucide-react"


const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "JSX", "Axios", "Git"]

const backendSkills = ["Node.js", "Express.js", "RESTful APIs", "JSON/XML", "Git", "Webhooks", "Middlewares"]

const databaseSkills = ["MySQL", "MongoDB", "Supabase", "PostgreSQL", "Google Planilhas", "Excel"]

const toolsSkills = [
  "GitHub",
  "App Sheet",
  "Power Automate",
  "Power BI",
  "Clasp",
  "Postman",
  "Office Scripts",
  "Apps Script",
]

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section id="skills" className="py-20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Minhas <span className="gradient-text">Habilidades</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combinação de stacks (tecnologias) que utilizo para criar soluções reais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            className="animate-in"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-secondary/50 p-6 rounded-2xl h-full backdrop-blur-md glow-effect">
              <div className="p-4 rounded-full bg-primary/20 mb-6 w-fit">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="grid grid-cols-2 gap-3">
                {frontendSkills.map((skill, index) => (
                  <motion.div key={index} className="tech-card" variants={itemVariants}>
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="animate-in"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-secondary/50 p-6 rounded-2xl h-full backdrop-blur-md glow-effect">
              <div className="p-4 rounded-full bg-primary/20 mb-6 w-fit">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="grid grid-cols-2 gap-3">
                {backendSkills.map((skill, index) => (
                  <motion.div key={index} className="tech-card" variants={itemVariants}>
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="animate-in"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-secondary/50 p-6 rounded-2xl h-full backdrop-blur-md glow-effect">
              <div className="p-4 rounded-full bg-primary/20 mb-6 w-fit">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Banco de Dados</h3>
              <div className="grid grid-cols-2 gap-3">
                {databaseSkills.map((skill, index) => (
                  <motion.div key={index} className="tech-card" variants={itemVariants}>
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="animate-in"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-secondary/50 p-6 rounded-2xl h-full backdrop-blur-md glow-effect">
              <div className="p-4 rounded-full bg-primary/20 mb-6 w-fit">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Ferramentas</h3>
              <div className="grid grid-cols-2 gap-3">
                {toolsSkills.map((skill, index) => (
                  <motion.div key={index} className="tech-card" variants={itemVariants}>
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl animate-in backdrop-blur-md glow-effect">
            <div className="p-4 rounded-full bg-blue-500/20 mb-6 w-fit">
              <LayoutGrid className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Low-Code / No-Code</h3>
            <p className="text-muted-foreground">
              Desenvolvimento rápido com plataformas como App Sheet e Power Automate, criando soluções eficientes para
              processos de negócio.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl animate-in backdrop-blur-md glow-effect">
            <div className="p-4 rounded-full bg-purple-500/20 mb-6 w-fit">
              <Cloud className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Cloud & Deployment</h3>
            <p className="text-muted-foreground">
              Habilidade com implantação de aplicações em Google Cloud Platform (GCP), Supabase, Atlas MongoDB, garantindo escalabilidade e
              disponibilidade.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-500/10 to-blue-500/10 p-8 rounded-2xl animate-in backdrop-blur-md glow-effect">
            <div className="p-4 rounded-full bg-pink-500/20 mb-6 w-fit">
              <GitBranch className="h-6 w-6 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Controle de Versão</h3>
            <p className="text-muted-foreground">
              Gerenciamento de código com Git/GitHub, aplicando boas práticas de desenvolvimento colaborativo e
              versionamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

