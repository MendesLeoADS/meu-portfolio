"use client"

import { useEffect, useRef } from "react"

interface Symbol {
  x: number
  y: number
  text: string
  size: number
  color: string
  opacity: number
  speed: number
}

export default function TechIcons() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const symbolsArrayRef = useRef<Symbol[]>([])

  // Lista de símbolos de programação
  const symbols = [
    "</> ",
    "{ }",
    "# ",
    "() ",
    "JS ",
    "CSS ",
    "HTML ",
    "React ",
    "Node ",
    "SQL ",
    "API ",
    "Git ",
    "TS ",
    "DB ",
    "npm ",
    "// ",
    "/* */",
    "=>",
    "&&",
    "||",
    "function()",
    "import",
    "export",
    "class",
    "const",
    "let",
    "var",
    "return",
    "async",
    "await",
    "try{}",
    "if()",
    "for()",
    "while()",
    ".then()",
    "useState",
    "useEffect",
  ]

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Ajustar tamanho do canvas
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initSymbols()
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Inicializar símbolos
    function initSymbols() {
      const newSymbolsArray: Symbol[] = []
      const symbolCount = Math.min(Math.floor(window.innerWidth / 60), 40)

      const colors = [
        "#61DAFB", // React blue
        "#F0DB4F", // JavaScript yellow
        "#E34C26", // HTML orange
        "#264DE4", // CSS blue
        "#339933", // Node.js green
        "#3178C6", // TypeScript blue
        "#F05032", // Git red
        "#CB3837", // npm red
        "#FFFFFF", // White
        "#4DB33D", // MongoDB green
        "#00758F", // MySQL blue
      ]

      for (let i = 0; i < symbolCount; i++) {
        newSymbolsArray.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          text: symbols[Math.floor(Math.random() * symbols.length)],
          size: Math.random() * 15 + 15, // 15-30px
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.3 + 0.2, // 0.2-0.5
          speed: Math.random() * 0.5 + 0.1, // 0.1-0.6
        })
      }

      symbolsArrayRef.current = newSymbolsArray
    }

    // Função de animação
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      symbolsArrayRef.current.forEach((symbol) => {
        // Mover símbolo para cima
        symbol.y -= symbol.speed

        // Resetar posição quando sair da tela
        if (symbol.y < -50) {
          symbol.y = canvas.height + 50
          symbol.x = Math.random() * canvas.width
        }

        // Desenhar símbolo
        ctx.font = `${symbol.size}px monospace`
        ctx.fillStyle = symbol.color
        ctx.globalAlpha = symbol.opacity
        ctx.fillText(symbol.text, symbol.x, symbol.y)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    // Iniciar animação
    animate()

    // Limpar ao desmontar
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10 pointer-events-none" />
}

