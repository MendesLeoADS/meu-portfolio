"use client"

import { Github, Linkedin, Mail, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#hero" className="text-2xl font-bold gradient-text">
              Leonardo Mendes
            </a>
            <p className="text-muted-foreground mt-2 max-w-md">
              Desenvolvedor Full Stack apaixonado por criar soluções tecnológicas que transformam ideias em realidade.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/MendesLeoADS"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/leonardo-mendes-942927192/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:contato.leonardomendesgomes@gmail.com" className="hover-lift" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/mleonardoo_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-muted pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {currentYear} Leonardo Mendes. Todos os direitos reservados.
          </p>

          <div className="flex gap-4">
            <Button variant="link" size="sm" asChild>
              <a href="#about">Sobre</a>
            </Button>
            <Button variant="link" size="sm" asChild>
              <a href="#projects">Projetos</a>
            </Button>
            <Button variant="link" size="sm" asChild>
              <a href="#contact">Contato</a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

