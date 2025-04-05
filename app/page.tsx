"use client"

import { useState, useEffect } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import FloatingContact from "@/components/floating-contact"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import SimpleCodeIcons from "@/components/simple-code-icons"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Animation for sections - melhorado para garantir que funcione
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show")
            console.log(`Section ${entry.target.id || "unknown"} is now visible`)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    )

    // Pequeno atraso para garantir que os elementos estejam renderizados
    setTimeout(() => {
      document.querySelectorAll(".animate-in").forEach((el) => {
        observer.observe(el)
      })

      // Verificar especificamente a seção About
      const aboutSection = document.getElementById("about")
      if (aboutSection) {
        console.log("About section found in DOM")
      } else {
        console.warn("About section not found in DOM")
      }
    }, 500)

    return () => {
      observer.disconnect()
    }
  }, [])

  // Renderizar imediatamente sem esperar pelo estado mounted
  return (
    <main className="min-h-screen">
      <AnimatedBackground />
      <SimpleCodeIcons />
      <Navbar />
      <FloatingContact />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

