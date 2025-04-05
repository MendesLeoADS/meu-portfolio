"use client"

import { useEffect, useRef } from "react"

interface CodeIcon {
  icon: string
  x: number
  y: number
  size: number
  opacity: number
  speedX: number
  speedY: number
  rotation: number
  rotationSpeed: number
  color: string
}

export default function CodeIcons() {
  const containerRef = useRef<HTMLDivElement>(null)
  const iconsRef = useRef<CodeIcon[]>([])
  const animationRef = useRef<number>(0)

  // Lista de ícones de tecnologias com suas classes CSS da biblioteca Devicon
  const techIcons = [
    { name: "devicon-html5-plain", color: "#E34F26" },
    { name: "devicon-css3-plain", color: "#1572B6" },
    { name: "devicon-javascript-plain", color: "#F7DF1E" },
    { name: "devicon-react-original", color: "#61DAFB" },
    { name: "devicon-nodejs-plain", color: "#339933" },
    { name: "devicon-python-plain", color: "#3776AB" },
    { name: "devicon-git-plain", color: "#F05032" },
    { name: "devicon-github-original", color: "#FFFFFF" },
    { name: "devicon-mongodb-plain", color: "#47A248" },
    { name: "devicon-mysql-plain", color: "#4479A1" },
    { name: "devicon-typescript-plain", color: "#3178C6" },
    { name: "devicon-vscode-plain", color: "#007ACC" },
    { name: "devicon-npm-original-wordmark", color: "#CB3837" },
    { name: "devicon-docker-plain", color: "#2496ED" },
    { name: "devicon-tailwindcss-plain", color: "#06B6D4" },
  ]

  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current

    // Função para criar elementos de ícone
    const createIconElements = () => {
      // Limpar ícones existentes
      container.innerHTML = ""

      // Determinar o número de ícones com base no tamanho da tela
      const iconCount = Math.min(Math.floor(window.innerWidth / 80), 25)

      // Criar novos ícones
      const icons: CodeIcon[] = []
      for (let i = 0; i < iconCount; i++) {
        const iconData = techIcons[Math.floor(Math.random() * techIcons.length)]
        const icon = document.createElement("i")

        // Configurar o ícone
        const codeIcon: CodeIcon = {
          icon: iconData.name,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 20 + 25, // Tamanho entre 25 e 45px
          opacity: Math.random() * 0.2 + 0.2, // Opacidade entre 0.2 e 0.4
          speedX: (Math.random() - 0.5) * 0.4, // Velocidade horizontal
          speedY: (Math.random() - 0.5) * 0.4, // Velocidade vertical
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 0.5,
          color: iconData.color,
        }

        // Aplicar classes e estilos
        icon.className = `${codeIcon.icon} absolute floating-icon`
        icon.style.left = `${codeIcon.x}px`
        icon.style.top = `${codeIcon.y}px`
        icon.style.fontSize = `${codeIcon.size}px`
        icon.style.opacity = `${codeIcon.opacity}`
        icon.style.transform = `rotate(${codeIcon.rotation}deg)`
        icon.style.color = codeIcon.color
        icon.style.filter = "drop-shadow(0 0 3px rgba(0, 0, 0, 0.5))"

        // Adicionar ao DOM
        container.appendChild(icon)
        icons.push(codeIcon)
      }

      iconsRef.current = icons
    }

    // Função para animar os ícones
    const animateIcons = () => {
      const icons = Array.from(container.children) as HTMLElement[]

      iconsRef.current.forEach((icon, index) => {
        if (!icons[index]) return

        // Atualizar posição
        icon.x += icon.speedX
        icon.y += icon.speedY
        icon.rotation += icon.rotationSpeed

        // Verificar limites da tela
        if (icon.x < 0 || icon.x > window.innerWidth) {
          icon.speedX *= -1
        }
        if (icon.y < 0 || icon.y > window.innerHeight) {
          icon.speedY *= -1
        }

        // Aplicar nova posição
        icons[index].style.left = `${icon.x}px`
        icons[index].style.top = `${icon.y}px`
        icons[index].style.transform = `rotate(${icon.rotation}deg)`
      })

      animationRef.current = requestAnimationFrame(animateIcons)
    }

    // Função para lidar com redimensionamento da janela
    const handleResize = () => {
      createIconElements()
    }

    // Configurar evento de redimensionamento
    window.addEventListener("resize", handleResize)

    // Inicializar
    createIconElements()
    animateIcons()

    // Limpar ao desmontar
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none -z-10" />
}

