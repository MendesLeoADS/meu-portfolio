"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare, Phone, Mail, Github, Linkedin, Instagram } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  const socialLinks = [
    {
      icon: <MessageSquare className="h-4 w-4" />,
      href: "https://wa.me/5511970233251",
      label: "WhatsApp",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: <Phone className="h-4 w-4" />,
      href: "tel:+5511970233251",
      label: "Telefone",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      icon: <Mail className="h-4 w-4" />,
      href: "mailto:contato.leonardomendesgomes@gmail.com",
      label: "Email",
      color: "bg-red-500 hover:bg-red-600",
    },
    {
      icon: <Github className="h-4 w-4" />,
      href: "https://github.com/MendesLeoADS",
      label: "GitHub",
      color: "bg-gray-700 hover:bg-gray-800",
    },
    {
      icon: <Linkedin className="h-4 w-4" />,
      href: "https://www.linkedin.com/in/leonardo-mendes-942927192/",
      label: "LinkedIn",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: <Instagram className="h-4 w-4" />,
      href: "https://www.instagram.com/mleonardoo_/",
      label: "Instagram",
      color: "bg-pink-500 hover:bg-pink-600",
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col items-center gap-3 mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Button size="icon" className={`${link.color} w-10 h-10 rounded-full shadow-lg`} asChild>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                    {link.icon}
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          size="icon"
          className="w-14 h-14 rounded-full shadow-lg bg-primary hover:bg-primary/90"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </motion.div>
    </div>
  )
}

