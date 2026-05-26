'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'pt' | 'es'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pt')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Carregar idioma salvo do localStorage
    const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') as Language | null : null
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'es')) {
      setLanguageState(savedLanguage)
    }
    setMounted(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang)
    }
    // Aplicar classe ao documento para mudar tema
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('lang-pt', 'lang-es')
      document.documentElement.classList.add(`lang-${lang}`)
    }
  }

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
