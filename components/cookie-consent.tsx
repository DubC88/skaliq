"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Cookie, Settings, X, Check, Shield, BarChart3, Target } from "lucide-react"
import { translations, type Language } from "@/lib/translations"
import Link from "next/link"

interface CookieConsentProps {
  language: Language
}

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

const COOKIE_CONSENT_KEY = "skaliq-cookie-consent"
const COOKIE_PREFERENCES_KEY = "skaliq-cookie-preferences"

export function CookieConsent({ language }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showCustomize, setShowCustomize] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
  })

  const t = translations[language]

  useEffect(() => {
    // Mark component as mounted
    setMounted(true)
    
    // Check if user has already made a choice
    try {
      const hasConsent = localStorage.getItem(COOKIE_CONSENT_KEY)
      if (!hasConsent) {
        // Show banner after a short delay
        const timer = setTimeout(() => {
          setIsVisible(true)
        }, 1000)
        return () => clearTimeout(timer)
      } else {
        // Load saved preferences
        const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY)
        if (savedPreferences) {
          setPreferences(JSON.parse(savedPreferences))
        }
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error)
    }
  }, [])

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    }
    setPreferences(allAccepted)
    setIsVisible(false)
    
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, "accepted")
      localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(allAccepted))
      
      // Initialize analytics/marketing scripts here if needed
      if (typeof window !== "undefined") {
        // Example: Initialize Google Analytics
        // gtag('consent', 'update', { analytics_storage: 'granted', ad_storage: 'granted' })
      }
    } catch (error) {
      console.error("Error saving cookie preferences:", error)
    }
  }

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
    }
    setPreferences(onlyNecessary)
    setIsVisible(false)
    
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, "rejected")
      localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(onlyNecessary))
    } catch (error) {
      console.error("Error saving cookie preferences:", error)
    }
  }

  const handleSavePreferences = () => {
    setIsVisible(false)
    
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, "customized")
      localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(preferences))

      // Update consent based on preferences
      if (typeof window !== "undefined") {
        // Example: Update Google Analytics consent
        // gtag('consent', 'update', {
        //   analytics_storage: preferences.analytics ? 'granted' : 'denied',
        //   ad_storage: preferences.marketing ? 'granted' : 'denied'
        // })
      }
    } catch (error) {
      console.error("Error saving cookie preferences:", error)
    }
  }

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "necessary") return // Can't disable necessary cookies
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  // Don't render anything during SSR or if banner shouldn't be visible
  if (!mounted || !isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] rounded-2xl blur-xl opacity-20"></div>
            <div className="relative bg-[#0A0A18] border border-[#ffffff20] rounded-2xl overflow-hidden backdrop-blur-lg">
              <div className="bg-[#050509]/95 rounded-xl p-6 md:p-8">
                {!showCustomize ? (
                  // Main consent banner
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] p-3 rounded-xl flex-shrink-0">
                        <Cookie className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-bold text-white mb-2">{t.cookies.title}</h3>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                          {t.cookies.description}
                        </p>
                        <p className="text-xs text-gray-400">
                          {t.cookies.learnMore}{" "}
                          <Link href="/cookies" className="text-[#9F6BFF] hover:underline">
                            {t.cookies.privacyPolicy}
                          </Link>
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                      <Button
                        onClick={() => setShowCustomize(true)}
                        variant="outline"
                        className="border-[#ffffff20] text-gray-300 hover:bg-[#ffffff10] hover:text-white"
                      >
                        <Settings className="w-4 h-4 mr-2" />
                        {t.cookies.customize}
                      </Button>
                      <Button
                        onClick={handleRejectAll}
                        variant="outline"
                        className="border-[#ffffff20] text-gray-300 hover:bg-[#ffffff10] hover:text-white"
                      >
                        {t.cookies.rejectAll}
                      </Button>
                      <Button
                        onClick={handleAcceptAll}
                        className="bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] hover:opacity-90 text-white"
                      >
                        <Check className="w-4 h-4 mr-2" />
                        {t.cookies.acceptAll}
                      </Button>
                    </div>
                  </div>
                ) : (
                  // Customization panel
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-white">{t.cookies.customize}</h3>
                      <Button
                        onClick={() => setShowCustomize(false)}
                        variant="ghost"
                        size="icon"
                        className="text-gray-400 hover:text-white"
                      >
                        <X className="w-5 h-5" />
                      </Button>
                    </div>

                    <div className="space-y-6 mb-8">
                      {/* Necessary Cookies */}
                      <div className="flex items-start gap-4 p-4 bg-[#ffffff05] rounded-xl border border-[#ffffff10]">
                        <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
                          <Shield className="w-5 h-5 text-green-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-white">{t.cookies.necessary}</h4>
                            <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                              {t.cookies.acceptAll}
                            </div>
                          </div>
                          <p className="text-sm text-gray-400">{t.cookies.necessaryDesc}</p>
                        </div>
                      </div>

                      {/* Analytics Cookies */}
                      <div className="flex items-start gap-4 p-4 bg-[#ffffff05] rounded-xl border border-[#ffffff10]">
                        <div className="bg-blue-500/20 p-2 rounded-lg flex-shrink-0">
                          <BarChart3 className="w-5 h-5 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-white">{t.cookies.analytics}</h4>
                            <button
                              onClick={() => togglePreference("analytics")}
                              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                preferences.analytics ? "bg-[#9F6BFF]" : "bg-gray-600"
                              }`}
                            >
                              <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                  preferences.analytics ? "translate-x-6" : "translate-x-1"
                                }`}
                              />
                            </button>
                          </div>
                          <p className="text-sm text-gray-400">{t.cookies.analyticsDesc}</p>
                        </div>
                      </div>

                      {/* Marketing Cookies */}
                      <div className="flex items-start gap-4 p-4 bg-[#ffffff05] rounded-xl border border-[#ffffff10]">
                        <div className="bg-purple-500/20 p-2 rounded-lg flex-shrink-0">
                          <Target className="w-5 h-5 text-purple-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-white">{t.cookies.marketing}</h4>
                            <button
                              onClick={() => togglePreference("marketing")}
                              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                preferences.marketing ? "bg-[#9F6BFF]" : "bg-gray-600"
                              }`}
                            >
                              <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                  preferences.marketing ? "translate-x-6" : "translate-x-1"
                                }`}
                              />
                            </button>
                          </div>
                          <p className="text-sm text-gray-400">{t.cookies.marketingDesc}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-end">
                      <Button
                        onClick={handleRejectAll}
                        variant="outline"
                        className="border-[#ffffff20] text-gray-300 hover:bg-[#ffffff10] hover:text-white"
                      >
                        {t.cookies.rejectAll}
                      </Button>
                      <Button
                        onClick={handleSavePreferences}
                        className="bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] hover:opacity-90 text-white"
                      >
                        <Check className="w-4 h-4 mr-2" />
                        {t.cookies.save}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
