"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { Language } from "@/lib/translations"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {}
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)
  
  // Only run on client-side
  useEffect(() => {
    setMounted(true)
    
    // Load language preference from localStorage
    try {
      const savedLanguage = localStorage.getItem("language") as Language
      if (savedLanguage && (savedLanguage === "en" || savedLanguage === "fr")) {
        setLanguage(savedLanguage)
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error)
    }
  }, [])
  
  // Save language preference to localStorage whenever it changes
  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("language", newLanguage)
      } catch (error) {
        console.error("Error writing to localStorage:", error)
      }
    }
  }
  
  // During SSR, provide default values to prevent hydration mismatch
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ language: "en", setLanguage: () => {} }}>
        {children}
      </LanguageContext.Provider>
    )
  }
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  return context
}
