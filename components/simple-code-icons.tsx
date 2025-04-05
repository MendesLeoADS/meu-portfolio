"use client"

import { useEffect, useRef } from "react"

export default function SimpleCodeIcons() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Lista de símbolos de código
  const codeSymbols = [
    { text: "</>", color: "#E34F26" },
    { text: "{ }", color: "#F0DB4F" },
    { text: "JS", color: "#F0DB4F" },
    { text: "CSS", color: "#264DE4" },
    { text: "HTML", color: "#E34F26" },
    { text: "React", color: "#61DAFB" },
    { text: "Node", color: "#339933" },
    { text: "SQL", color: "#00758F" },
    { text: "API", color: "#FF5733" },
    { text: "Git", color: "#F05032" },
    { text: "TS", color: "#3178C6" },
    { text: "DB", color: "#4DB33D" },
    { text: "npm", color: "#CB3837" },
    { text: "//", color: "#FFFFFF" },
    { text: "=>", color: "#F0DB4F" },
    { text: "&&", color: "#F0DB4F" },
    { text: "||", color: "#F0DB4F" },
    { text: "function()", color: "#F0DB4F" },
    { text: "import", color: "#3178C6" },
    { text: "export", color: "#3178C6" },
    { text: "class", color: "#3178C6" },
    { text: "const", color: "#F0DB4F" },
    { text: "let", color: "#F0DB4F" },
    { text: "return", color: "#F0DB4F" },
    { text: "async", color: "#3178C6" },
    { text: "await", color: "#3178C6" },
    { text: "try{}", color: "#F0DB4F" },
    { text: "if()", color: "#F0DB4F" },
    { text: "for()", color: "#F0DB4F" },
    { text: "while()", color: "#F0DB4F" },
    { text: ".then()", color: "#F0DB4F" },
    { text: "useState", color: "#61DAFB" },
    { text: "useEffect", color: "#61DAFB" },
    { text: "DB", color: "#4DB33D" },
    { text: "npm", color: "#CB3837" },
    { text: "//", color: "#FFFFFF" },
    { text: "=>", color: "#F0DB4F" },
    { text: "&&", color: "#F0DB4F" },
    { text: "||", color: "#F0DB4F" },
    { text: "function()", color: "#F0DB4F" },
    { text: "import", color: "#3178C6" },
    { text: "export", color: "#3178C6" },
    { text: "class", color: "#3178C6" },
    { text: "const", color: "#F0DB4F" },
    { text: "let", color: "#F0DB4F" },
    { text: "return", color: "#F0DB4F" },
    { text: "async", color: "#3178C6" },
    { text: "await", color: "#3178C6" },
    { text: "try{}", color: "#F0DB4F" },
    { text: "if()", color: "#F0DB4F" },
    { text: "for()", color: "#F0DB4F" },
    { text: "while()", color: "#F0DB4F" },
    { text: ".then()", color: "#F0DB4F" },
    { text: "useState", color: "#61DAFB" },
    { text: "useEffect", color: "#61DAFB" },
  ]

  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current

    // Limpar quaisquer ícones existentes
    container.innerHTML = ""

    // Determinar o número de ícones com base no tamanho da tela
    const iconCount = Math.min(Math.floor(window.innerWidth / 60), 35)

    // Criar ícones
    for (let i = 0; i < iconCount; i++) {
      const symbol = codeSymbols[Math.floor(Math.random() * codeSymbols.length)]
      const iconElement = document.createElement("div")

      // Configurar posição e estilo
      const x = Math.random() * 100 // posição x em porcentagem
      const y = Math.random() * 100 // posição y em porcentagem
      const size = Math.random() * 15 + 15 // tamanho entre 15 e 30px
      const opacity = Math.random() * 0.3 + 0.2 // opacidade entre 0.2 e 0.5
      const delay = Math.random() * 5 // atraso na animação
      const duration = Math.random() * 10 + 10 // duração da animação entre 10 e 20s

      // Aplicar estilos
      iconElement.textContent = symbol.text
      iconElement.className = "absolute font-mono font-bold"
      iconElement.style.left = `${x}%`
      iconElement.style.top = `${y}%`
      iconElement.style.fontSize = `${size}px`
      iconElement.style.opacity = `${opacity}`
      iconElement.style.color = symbol.color
      iconElement.style.textShadow = "0 0 5px rgba(0, 0, 0, 0.5)"
      iconElement.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`
      iconElement.style.zIndex = "-10"

      // Adicionar ao container
      container.appendChild(iconElement)
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none" />
}

