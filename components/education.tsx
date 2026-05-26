"use client"

import type React from "react"

import { motion } from "framer-motion"
import { GraduationCap, BookOpen, Calendar, MapPin, Code } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"

interface EducationProps {
  period: string
  degree: string
  degreeES?: string
  institution: string
  institutionES?: string
  location: string
  description?: string
  descriptionES?: string
  icon: React.ReactNode
}

const educationItems: EducationProps[] = [
  {
    period: "02/2025 - 12/2026",
    degree: "Tecnólogo - Análise e Desenvolvimento de Sistemas",
    degreeES: "Tecnólogo - Análisis y Desarrollo de Sistemas",
    institution: "UNICSUL (Universidade Cruzeiro do Sul)",
    institutionES: "UNICSUL (Universidad Cruzeiro do Sul)",
    location: "São Paulo, SP",
    description: "Graduando 4º Semestre - NOTURNO",
    descriptionES: "Graduando 4º Semestre - NOCTURNO",
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
  },
  {
    period: "07/2024 - 12/2024",
    degree: "Tecnólogo - Análise e Desenvolvimento de Sistemas",
    degreeES: "Tecnólogo - Análisis y Desarrollo de Sistemas",
    institution: "USJT (Universidade São Judas Tadeu)",
    institutionES: "USJT (Universidad São Judas Tadeu)",
    location: "São Paulo, SP",
    description: "Graduado 1º Semestre - NOTURNO",
    descriptionES: "Graduado 1º Semestre - NOCTURNO",
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
  },
  {
    period: "04/2021 - 09/2022",
    degree: "Técnico em Administração",
    degreeES: "Técnico en Administración",
    institution: "SENAC (Serviço Nacional de Aprendizagem Comercial)",
    institutionES: "SENAC (Servicio Nacional de Aprendizaje Comercial)",
    location: "São Paulo, SP",
    description: "Concluído",
    descriptionES: "Completado",
    icon: <BookOpen className="h-6 w-6 text-primary" />,
  },
  {
    period: "02/2016 - 12/2019",
    degree: "Ensino Médio Completo",
    degreeES: "Educación Secundaria Completa",
    institution: "E.E. ASCENDINO REIS PROFESSOR",
    institutionES: "E.E. ASCENDINO REIS PROFESSOR",
    location: "São Paulo, SP",
    icon: <BookOpen className="h-6 w-6 text-primary" />,
  },
]

interface CourseProps {
  institution: string
  courses: string[]
  coursesES?: string[]
}

const courses: CourseProps[] = [
  {
    institution: "UDEMY",
    courses: [
      "MODELAGEM DE DADOS PARA DATA WAREHOUSE",
      "DATA STORYTELLING",
      "INTRODUÇÃO AOS LARGE LANGUAGE MODELS (LLMs)",
      "IA PARA ANÁLISE DE DADOS - CHATGPT, GEMINI E COPILOT"
    ],
    coursesES: [
      "MODELADO DE DATOS PARA DATA WAREHOUSE",
      "NARRATIVE DE DATOS",
      "INTRODUCCIÓN A MODELOS DE LENGUAJE GRANDES (LLMs)",
      "IA PARA ANÁLISIS DE DATOS - CHATGPT, GEMINI Y COPILOT"
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
    coursesES: [
      "LÓGICA DE PROGRAMACIÓN CON JAVASCRIPT",
      "INMERSIÓN BACKEND CON JAVASCRIPT, NODE Y EXPRESS.JS",
      "HTML y CSS - ENTORNOS DE DESARROLLO, ESTRUCTURA DE ARCHIVOS Y ETIQUETAS",
      "INMERSIÓN FRONTEND CON HTML, CSS, JAVASCRIPT Y REACT",
    ],
  },
  {
    institution: "DIO",
    courses: [
      "BOOTCAMP GITHUB E MICROSOFT COPILOT",
      "VERSIONAMENTO DE CÓDIGO COM GIT E GITHUB",
      "CONTRIBUINDO EM UM PROJETO OPEN SOURCE NO GITHUB",
    ],
    coursesES: [
      "BOOTCAMP GITHUB Y MICROSOFT COPILOT",
      "CONTROL DE VERSIONES CON GIT Y GITHUB",
      "CONTRIBUYENDO EN UN PROYECTO OPEN SOURCE EN GITHUB",
    ],
  },
]

export default function Education() {
  const { language } = useLanguage()
  const t = translations[language].education

  return (
    <section id="education" className="py-20 backdrop-blur-sm">
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

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary" />
              {t.formal}
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
                      <h4 className="text-lg font-bold">{language === 'es' ? (item.degreeES || item.degree) : item.degree}</h4>
                      <p className="text-primary font-medium">{language === 'es' ? (item.institutionES || item.institution) : item.institution}</p>
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
                      {item.description && <p className="mt-2 text-sm">{language === 'es' ? (item.descriptionES || item.description) : item.description}</p>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Code className="h-6 w-6 text-primary" />
              {t.complementary}
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
                        {(language === 'es' ? (course.coursesES || course.courses) : course.courses).map((item, idx) => (
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
          <h3 className="text-xl font-bold mb-4">{t.extracurricular}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Viagens intermunicipais e interestaduais a trabalho",
              "Eventos de Lançamentos automobílisticos",
              "Eventos privados com Representantes do Governo Brasileiro (Presidente, Ministros, etc.)",
              "Visitas Culturais",
              "Visitas Técnicas",
              "Workshops"
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

