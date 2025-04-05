"use client"

import { useEffect, useRef } from "react"

interface TechIcon {
  name: string
  x: number
  y: number
  size: number
  opacity: number
  rotation: number
  speedX: number
  speedY: number
}

export default function TechParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const iconsRef = useRef<TechIcon[]>([])
  const animationRef = useRef<number>(0)

  // Lista de ícones de tecnologias de programação
  const techIcons = [
    { name: "html5", color: "#E34F26" },
    { name: "css3", color: "#1572B6" },
    { name: "javascript", color: "#F7DF1E" },
    { name: "react", color: "#61DAFB" },
    { name: "nodejs", color: "#339933" },
    { name: "python", color: "#3776AB" },
    { name: "git", color: "#F05032" },
    { name: "github", color: "#ffffff" },
    { name: "mongodb", color: "#47A248" },
    { name: "mysql", color: "#4479A1" },
    { name: "typescript", color: "#3178C6" },
    { name: "vscode", color: "#007ACC" },
    { name: "npm", color: "#CB3837" },
    { name: "docker", color: "#2496ED" },
    { name: "tailwindcss", color: "#06B6D4" },
    { name: "express", color: "#ffffff" },
    { name: "firebase", color: "#FFCA28" },
    { name: "java", color: "#007396" },
    { name: "php", color: "#777BB4" },
    { name: "bootstrap", color: "#7952B3" },
  ]

  // Função para desenhar ícones de tecnologia
  const drawIcon = (ctx: CanvasRenderingContext2D, icon: TechIcon) => {
    const text = getIconText(icon.name)
    ctx.save()
    ctx.translate(icon.x, icon.y)
    ctx.rotate((icon.rotation * Math.PI) / 180)
    ctx.font = `${icon.size}px 'Font Awesome 5 Brands', 'Font Awesome 5 Free'`
    ctx.fillStyle = `rgba(255, 255, 255, ${icon.opacity})`
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(text, 0, 0)
    ctx.restore()
  }

  // Função para obter o caractere Unicode do ícone
  const getIconText = (iconName: string): string => {
    // Mapeamento simplificado de alguns ícones para caracteres Unicode
    // Em uma implementação real, você usaria uma biblioteca como Font Awesome ou Devicon
    const iconMap: { [key: string]: string } = {
      html5: "</> ",
      css3: "# ",
      javascript: "JS ",
      react: "⚛️ ",
      nodejs: "Node ",
      python: "Py ",
      git: "Git ",
      github: "GH ",
      mongodb: "DB ",
      mysql: "SQL ",
      typescript: "TS ",
      vscode: "VS ",
      npm: "npm ",
      docker: "🐳 ",
      tailwindcss: "TW ",
      express: "Ex ",
      firebase: "🔥 ",
      java: "☕ ",
      php: "PHP ",
      bootstrap: "B ",
    }

    return iconMap[iconName] || "{ }"
  }

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Ajustar o tamanho do canvas para preencher a tela
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Reinicializar os ícones quando o tamanho da tela mudar
      initIcons()
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Inicializar ícones
    function initIcons() {
      const iconCount = Math.min(Math.floor(window.innerWidth / 100), 25) // Limitar o número de ícones
      const icons: TechIcon[] = []

      for (let i = 0; i < iconCount; i++) {
        const tech = techIcons[Math.floor(Math.random() * techIcons.length)]
        icons.push({
          name: tech.name,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 10 + 15, // Tamanho entre 15 e 25px
          opacity: Math.random() * 0.15 + 0.05, // Opacidade entre 0.05 e 0.2
          rotation: Math.random() * 360,
          speedX: (Math.random() - 0.5) * 0.3, // Velocidade horizontal
          speedY: (Math.random() - 0.5) * 0.3, // Velocidade vertical
        })
      }

      iconsRef.current = icons
    }

    // Função de animação
    const animate = () => {
      if (!ctx || !canvas) return

      // Limpar o canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Atualizar e desenhar cada ícone
      iconsRef.current.forEach((icon) => {
        // Mover o ícone
        icon.x += icon.speedX
        icon.y += icon.speedY
        icon.rotation += 0.05

        // Verificar limites da tela e fazer o ícone "quicar" nas bordas
        if (icon.x < 0 || icon.x > canvas.width) {
          icon.speedX *= -1
        }
        if (icon.y < 0 || icon.y > canvas.height) {
          icon.speedY *= -1
        }

        // Desenhar o ícone
        drawIcon(ctx, icon)
      })

      // Continuar a animação
      animationRef.current = requestAnimationFrame(animate)
    }

    // Iniciar a animação
    animate()

    // Limpar ao desmontar
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" />
}

