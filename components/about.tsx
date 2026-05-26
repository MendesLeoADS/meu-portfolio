"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Code, Download, LineChart, TrendingUp } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/lib/translations"

export default function About() {
  const { language } = useLanguage()
  const t = translations[language].about

  return (
    <section id="about" className="py-20 bg-blue-950/30 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in show">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {t.title} <span className="gradient-text">{t.subtitle}</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-in show">
            <p className="text-lg">
              {t.paragraph1}
            </p>

            <p className="text-lg">
              {t.paragraph2}
            </p>

            <p>
              {t.paragraph3}
            </p>

            <p>
              {t.paragraph4}
            </p>

            <div className="flex gap-4 pt-4">
              <Button className="glow-effect" asChild>
                <a href="#contact">{t.button1}</a>
              </Button>
              <Button variant="outline" className="gap-2">
                <Download size={16} />
                <a href="\documents\CV LEONARDO MENDES.pdf" download>
                  {t.button2}
                </a>
              </Button>
            </div>
            </div>

          <div className="grid grid-cols-2 gap-6 animate-in show">
            <motion.div whileHover={{ y: -10 }} className="col-span-2">
              <Card className="p-6 about-card-es bg-primary/10 border-primary/20 glow-effect">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/20">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t.card1Title}</h3>
                    <p className="text-muted-foreground">
                      {t.card1Desc}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div whileHover={{ y: -10 }}>
              <Card className="h-full p-6 about-card-es bg-secondary glow-effect">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 rounded-full bg-primary/20">
                    <LineChart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{t.card2Title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t.card2Desc}
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div whileHover={{ y: -10 }}>
              <Card className="h-full p-6 about-card-es bg-secondary glow-effect">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 rounded-full bg-primary/20">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{t.card3Title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t.card3Desc}
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

