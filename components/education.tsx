"use client"

import type React from "react"

import { motion } from "framer-motion"
import { GraduationCap, BookOpen, Calendar, MapPin, Code } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface EducationProps {
  period: string
  degree: string
  institution: string
  location: string
  description?: string
  icon: React.ReactNode
}

const educationItems: EducationProps[] = [
  {
    period: "02/2025 - 12/2026",
    degree: "Tecnólogo - Análise e Desenvolvimento de Sistemas",
    institution: "UNICSUL (Universidade Cruzeiro do Sul)",
    location: "São Paulo, SP",
    description: "Graduando 2º Semestre - NOTURNO",
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
  },
  {
    period: "07/2024 - 12/2024",
    degree: "Tecnólogo - Análise e Desenvolvimento de Sistemas",
    institution: "USJT (Universidade São Judas Tadeu)",
    location: "São Paulo, SP",
    description: "Graduado 1º Semestre - NOTURNO",
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
  },
  {
    period: "04/2021 - 09/2022",
    degree: "Ensino Técnico em Administração",
    institution: "SENAC (Serviço Nacional de Aprendizagem Comercial)",
    location: "São Paulo, SP",
    description: "Concluído",
    icon: <BookOpen className="h-6 w-6 text-primary" />,
  },
  {
    period: "02/2016 - 12/2019",
    degree: "Ensino Médio Completo",
    institution: "E.E. ASCENDINO REIS PROFESSOR",
    location: "São Paulo, SP",
    icon: <BookOpen className="h-6 w-6 text-primary" />,
  },
]

interface CourseProps {
  institution: string
  courses: string[]
}

const courses: CourseProps[] = [
  {
    institution: "INSTITUTO PROA",
    courses: [
      "Curso PROPROFISSÃO em Administração – Carga horária total: 400h",
      "Conteúdo Técnico em Administração/ Empregabilidade com Certificação Senac",
    ],
  },
  {
    institution: "ALURA",
    courses: [
      "LÓGICA DE PROGRAMAÇÃO COM JAVASCRIPT",
      "IMERSÃO BACKEND COM JAVASCRIPT, NODE E EXPRESS.JS",
      "HTML e CSS - AMBIENTES DE DESENVOLVIMENTO, ESTRUTURA DE ARQUIVOS E TAGS",
      "IMERSÃO FRONTEND COM HTML, CSS, JAVASCRIPT E REACT",
    ],
  },
  {
    institution: "DIO",
    courses: [
      "BOOTCAMP GITHUB E MICROSOFT COPILOT",
      "VERSIONAMENTO DE CÓDIGO COM GIT E GITHUB",
      "CONTRIBUINDO EM UM PROJETO OPEN SOURCE NO GITHUB",
    ],
  },
  {
    institution: "ADA TECH",
    courses: ["INTRODUÇÃO AO HTML", "INTRODUÇÃO AO CSS"],
  },
  {
    institution: "OUTRAS FORMAÇÕES",
    courses: [
      "LÓGICA DE PROGRAMAÇÃO E ALGORITMOS - USJT",
      "JAVASCRIPT / HTML/ CSS - Básico - FUNDAÇÃO BRADESCO",
      "LGPD - LEI GERAL DE PROTEÇÃO DE DADOS - Básico",
      "MICROSOFT SHARE POINT - Básico",
    ],
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Minha <span className="gradient-text">Formação</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Educação formal e cursos complementares para meu desenvolvimento profissional
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary" />
              Educação Formal
            </h3>

            <div className="space-y-6">
              {educationItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-secondary/50 p-6 rounded-lg animate-in"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/20">{item.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold">{item.degree}</h4>
                      <p className="text-primary font-medium">{item.institution}</p>
                      <div className="flex flex-wrap items-center gap-x-4 text-sm text-muted-foreground mt-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                      {item.description && <p className="mt-2 text-sm">{item.description}</p>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Code className="h-6 w-6 text-primary" />
              Cursos Complementares
            </h3>

            <div className="space-y-8">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  className="animate-in"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold mb-4 text-primary">{course.institution}</h4>
                      <ul className="space-y-2">
                        {course.courses.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-xl animate-in">
          <h3 className="text-xl font-bold mb-4">Atividades Extracurriculares</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Viagens intermunicipais e interestaduais a trabalho",
              "Feira de Profissões",
              "Visitas Culturais",
              "Visitas Técnicas",
              "Workshops",
              "Visita ao Centro Histórico",
              "Oficina Cultural",
              "FAAP",
            ].map((activity, index) => (
              <motion.div
                key={index}
                className="bg-secondary/50 p-4 rounded-lg text-center text-sm"
                whileHover={{ y: -5 }}
              >
                {activity}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

