"use client"

import { ArrowLeft, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { useState } from "react"

export default function BookingPage() {
  const { language } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = translations[language]
  return (
    <main className="min-h-screen bg-[#050509] text-white">
      {/* Navigation */}
      <nav className="border-b border-[#ffffff10] bg-[#05050980] backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-3">
              <Link href="/" className="hidden md:flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span>{t.booking.backToHome}</span>
              </Link>
              <button 
                className="md:hidden text-gray-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
            <div className="flex items-center">
              <Image 
                src="/assets/logo-official-skaliq.png" 
                alt="SkalIQ Logo" 
                width={140} 
                height={40}
                priority
                className="h-8 w-auto"
              />
            </div>
          </div>
          
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-[#050509] border-t border-[#ffffff10] py-4 px-4">
              <div className="flex flex-col space-y-4">
                <Link 
                  href="/" 
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{t.booking.backToHome}</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="py-8 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1 rounded-full bg-[#9F6BFF20] border border-[#9F6BFF40] text-sm text-[#9F6BFF] mb-4">
              {t.booking.badge}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.booking.title}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF]">
                {t.booking.titleHighlight}
              </span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {t.booking.subtitle}
            </p>
          </div>

          {/* What We'll Cover - Compact Version */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] rounded-2xl blur-xl opacity-20"></div>
              <div className="relative bg-[#0A0A18] border border-[#ffffff10] rounded-2xl overflow-hidden">
                <div className="bg-[#050509] rounded-xl p-6">
                  <h2 className="text-xl font-bold mb-4 text-center">{t.booking.coverTitle}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="w-8 h-8 rounded-full bg-[#9F6BFF] flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-sm font-bold">1</span>
                      </div>
                      <h3 className="font-bold text-sm mb-1">{t.booking.step1}</h3>
                      <p className="text-gray-300 text-xs">{t.booking.step1Desc}</p>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 rounded-full bg-[#9F6BFF] flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-sm font-bold">2</span>
                      </div>
                      <h3 className="font-bold text-sm mb-1">{t.booking.step2}</h3>
                      <p className="text-gray-300 text-xs">{t.booking.step2Desc}</p>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 rounded-full bg-[#9F6BFF] flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-sm font-bold">3</span>
                      </div>
                      <h3 className="font-bold text-sm mb-1">{t.booking.step3}</h3>
                      <p className="text-gray-300 text-xs">{t.booking.step3Desc}</p>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 rounded-full bg-[#9F6BFF] flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-sm font-bold">4</span>
                      </div>
                      <h3 className="font-bold text-sm mb-1">{t.booking.step4}</h3>
                      <p className="text-gray-300 text-xs">{t.booking.step4Desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Widget - Full Width */}
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] rounded-2xl blur-xl opacity-20"></div>
              <div className="relative bg-[#0A0A18] border border-[#ffffff10] rounded-2xl overflow-hidden">
                <div className="bg-[#050509] rounded-xl p-2">
                  <div className="bg-white rounded-lg overflow-hidden" style={{ minHeight: "700px" }}>
                    <iframe
                      src="https://api.leadconnectorhq.com/widget/booking/56Wfa6skVx5c6npZEENu"
                      style={{
                        width: "100%",
                        border: "none",
                        overflow: "hidden",
                        height: "700px",
                      }}
                      scrolling="no"
                      id="56Wfa6skVx5c6npZEENu_1750179393254"
                      title={t.common.bookStrategyCall}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Benefits & Testimonial */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] rounded-2xl blur-xl opacity-15"></div>
              <div className="relative bg-[#0A0A18] border border-[#ffffff10] rounded-2xl overflow-hidden">
                <div className="bg-[#050509] rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-3">{t.booking.benefitsTitle}</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-[#9F6BFF]">✓</span>
                      <span>{t.booking.benefit1}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#9F6BFF]">✓</span>
                      <span>{t.booking.benefit2}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#9F6BFF]">✓</span>
                      <span>{t.booking.benefit3}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#9F6BFF]">✓</span>
                      <span>{t.booking.benefit4}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] rounded-2xl blur-xl opacity-15"></div>
              <div className="relative bg-[#0A0A18] border border-[#ffffff10] rounded-2xl overflow-hidden">
                <div className="bg-[#050509] rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-4">{t.booking.bestBetTitle}</h3>
                  <ul className="space-y-2">
                    {t.booking.bestBetPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <span className="text-[#9F6BFF] mt-0.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Script for booking widget */}
      <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript" async />
    </main>
  )
}
