"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Github, Instagram, Linkedin, Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxt4GYSP9XY9Q38OXFuqGcPjuxXifKCt3AOPpfTkllOEAmD5RCDkTQOquUAoq8tyHY4/exec';
  
    try {
      const formDataObj = new FormData();
      // Mapear os nomes do estado para os nomes esperados pelo Google Sheets.
      formDataObj.append('NomeCompleto', formData.name);
      formDataObj.append('Email', formData.email);
      formDataObj.append('Assunto', formData.subject);
      formDataObj.append('Mensagem', formData.message);
  
      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataObj,
      });
  
      console.log('Form data submitted:', formData);
  
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
  
      alert('Mensagem enviada com sucesso! Entro em contato em breve.');
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Telefone",
      details: "+55 11 97023-3251",
      link: "tel:+5511970233251",
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      details: "contato.leonardomendesgomes@gmail.com",
      link: "mailto:contato.leonardomendesgomes@gmail.com",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Localização",
      details: "São Paulo - SP, Brasil",
      link: "https://maps.google.com/?q=São+Paulo,+SP",
    },
  ]

  const socialMedia = [
    {
      icon: <Github className="h-6 w-6" />,
      name: "GitHub",
      link: "https://github.com/MendesLeoADS",
      color: "hover:text-gray-100",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/leonardo-mendes-942927192/",
      color: "hover:text-blue-400",
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      name: "Instagram",
      link: "https://www.instagram.com/mleonardoo_/",
      color: "hover:text-pink-500",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      name: "WhatsApp",
      link: "https://wa.me/5511970233251",
      color: "hover:text-green-500",
    },
  ]

  return (
    <section id="contact" className="py-20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tem um projeto em mente ou deseja discutir uma oportunidade? Estou à disposição!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="animate-in"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover-lift">
                  <CardContent className="p-6">
                    <a
                      href={info.link}
                      target={info.title === "Localização" ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="flex items-start gap-4"
                    >
                      <div className="p-3 rounded-full bg-primary/20">{info.icon}</div>
                      <div>
                        <h3 className="font-bold">{info.title}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{info.details}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <motion.div
              className="animate-in mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Minhas redes sociais</h3>
              <div className="flex flex-wrap gap-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-secondary/70 rounded-full hover-lift ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="md:col-span-2 animate-in"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Envie uma mensagem</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label htmlFor="name" className="block text-sm font-medium mb-2">
        Nome completo
      </label>
      <Input
        id="name"
        name="name"
        placeholder="Seu nome"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium mb-2">
        Email
      </label>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="seu.email@exemplo.com"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>
  </div>
  <div>
    <label htmlFor="subject" className="block text-sm font-medium mb-2">
      Assunto
    </label>
    <Input
      id="subject"
      name="subject"
      placeholder="Sobre o que você quer conversar?"
      value={formData.subject}
      onChange={handleChange}
      required
    />
  </div>
  <div>
    <label htmlFor="message" className="block text-sm font-medium mb-2">
      Mensagem
    </label>
    <Textarea
      id="message"
      name="message"
      placeholder="Escreva sua mensagem aqui..."
      rows={5}
      value={formData.message}
      onChange={handleChange}
      required
    />
  </div>
  <Button type="submit" className="w-full gap-2">
    <Send className="h-4 w-4" />
    Enviar Mensagem
  </Button>
</form>

              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

