"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface Language {
  code: string
  name: string
  flag: string
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "fr", name: "Français", flag: "🇨🇦" },
]

interface LanguageSwitcherProps {
  currentLanguage: string
  onLanguageChange: (language: string) => void
}

export function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const currentLang = languages.find((lang) => lang.code === currentLanguage) || languages[0]

  const handleLanguageChange = (language: Language) => {
    onLanguageChange(language.code)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md bg-[#0A0A18] border border-[#ffffff20] hover:border-[#9F6BFF40] transition-all duration-200 text-sm"
      >
        <span className="text-lg">{currentLang.flag}</span>
        <span className="text-gray-300">{currentLang.code.toUpperCase()}</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 right-0 z-50 min-w-[140px] bg-[#0A0A18] border border-[#ffffff20] rounded-md shadow-lg overflow-hidden"
          >
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-[#9F6BFF20] transition-colors duration-200 ${
                  currentLanguage === language.code ? "bg-[#9F6BFF20] text-[#9F6BFF]" : "text-gray-300"
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span>{language.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop to close dropdown */}
      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}
    </div>
  )
}
