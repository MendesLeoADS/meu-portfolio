"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const textToType = "Seja Bem Vindo(a) ao meu Portfolio..."
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    if (textIndex < textToType.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + textToType[textIndex])
        setTextIndex(textIndex + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [textIndex])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    } else {
      console.error("About section not found")
    }
  }

  return (
    <section id="hero" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 animate-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="block">Olá, eu sou</span>
              <span className="gradient-text text-5xl md:text-7xl text-glow">Leonardo Mendes</span>
            </h1>
            <div className="h-12 my-4">
              <h2 className="text-2xl md:text-3xl font-medium">
                {typedText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl">
              Curioso ao extremo e apaixonado em soluções tecnológicas com experiência em desenvolvimento full stack e automação de
              processos.
            </p>

            <div className="flex items-center gap-6 mt-8">
              <a
                href="https://github.com/MendesLeoADS"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/leonardo-mendes-942927192/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:contato.leonardomendesgomes@gmail.com" className="hover-lift">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/50 mx-auto glow-effect">
              {/* Placeholder para imagem de perfil */}
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Leonardo Mendes"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center hidden md:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          onClick={scrollToAbout}
          style={{ cursor: "pointer" }}
        >
          <div className="text-sm text-muted-foreground mb-2">Role para baixo</div>
          <ArrowDown className="mx-auto h-5 w-5 text-primary" />
        </motion.div>
      </div>
    </section>
  )
}

