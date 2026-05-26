"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import LanguageSelector from "./language-selector"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"

const getNavItems = (lang: 'pt' | 'es') => [
  { name: translations[lang].nav.inicio, href: "#hero" },
  { name: translations[lang].nav.sobre, href: "#about" },
  { name: translations[lang].nav.habilidades, href: "#skills" },
  { name: translations[lang].nav.experiencia, href: "#experience" },
  { name: translations[lang].nav.formacao, href: "#education" },
  { name: translations[lang].nav.projetos, href: "#projects" },
  { name: translations[lang].nav.contato, href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language } = useLanguage()
  const navItems = getNavItems(language)

  // Função para verificar se a seção existe
  const checkSectionExists = () => {
    navItems.forEach((item) => {
      const section = document.querySelector(item.href)
      console.log(`Section ${item.href} exists:`, !!section)
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    // Verificar se as seções existem após o carregamento da página
    setTimeout(checkSectionExists, 1000)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)

    // Adicionar um pequeno atraso para garantir que a navegação funcione
    setTimeout(() => {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      } else {
        console.error(`Element with selector ${href} not found`)
      }
    }, 100)
  }

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "glass-effect py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold gradient-text">
          Léo Mendes
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.href)
              }}
            >
              {item.name}
            </a>
          ))}
          <Button className="ml-4" asChild>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("#contact")
              }}
            >
              {translations[language].nav.entreEmContato}
            </a>
          </Button>
          <LanguageSelector />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSelector />
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background pt-20 z-40 transform transition-transform duration-300 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col gap-4 p-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg py-2 border-b border-muted hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.href)
              }}
            >
              {item.name}
            </a>
          ))}
          <Button className="mt-6" onClick={() => handleNavClick("#contact")} asChild>
            <a href="#contact">{translations[language].nav.entreEmContato}</a>
          </Button>
        </div>
      </div>
    </nav>
  )
}

