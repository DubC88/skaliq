"use client"
import { Button } from "@/components/ui/button"
import {
  Shield,
  ArrowRight,
  ChevronRight,
  BarChart,
  Target,
  Users,
  Clock,
  Rocket,
  Percent,
  Phone,
  Star,
  FileText,
  AlertTriangle,
  CheckCircle,
} from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import { HeroBackground } from "@/components/hero-background"
import { EnhancedProcessStep } from "@/components/enhanced-process-step"
import { LanguageSwitcher } from "@/components/language-switcher"
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { FaqSection } from "@/components/ui/faq-section"
import { translations } from "@/lib/translations"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import Image from "next/image"
import { CookieConsent } from "@/components/cookie-consent"
import { LogoScroller } from "@/components/logo-scroller"
import { RoiCard } from "@/components/roi-card"
import { SolutionStatsCard } from "@/components/solution-stats-card"
import { ProblemStatsCard } from "@/components/problem-stats-card"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [currentProcessStep, setCurrentProcessStep] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  const t = translations[language]

  const foundingFeatures = [
    {
      Icon: Percent,
      name: t.founding.feature1Title,
      description: t.founding.feature1Desc,
      href: "/booking",
      cta: t.founding.learnMore,
      background: <div className="absolute inset-0 bg-gradient-to-br from-[#9F6BFF20] to-[#6B48FF20] opacity-50" />,
      className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
    },
    {
      Icon: Shield,
      name: t.founding.feature2Title,
      description: t.founding.feature2Desc,
      href: "/booking",
      cta: t.founding.learnMore,
      background: <div className="absolute inset-0 bg-gradient-to-br from-[#9F6BFF15] to-[#6B48FF15] opacity-50" />,
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: Phone,
      name: t.founding.feature3Title,
      description: t.founding.feature3Desc,
      href: "/booking",
      cta: t.founding.learnMore,
      background: <div className="absolute inset-0 bg-gradient-to-br from-[#9F6BFF15] to-[#6B48FF15] opacity-50" />,
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
    },
    {
      Icon: Star,
      name: t.founding.feature4Title,
      description: t.founding.feature4Desc,
      href: "/booking",
      cta: t.founding.learnMore,
      background: <div className="absolute inset-0 bg-gradient-to-br from-[#9F6BFF15] to-[#6B48FF15] opacity-50" />,
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: FileText,
      name: t.founding.feature5Title,
      description: t.founding.feature5Desc,
      href: "/booking",
      cta: t.founding.learnMore,
      background: <div className="absolute inset-0 bg-gradient-to-br from-[#9F6BFF15] to-[#6B48FF15] opacity-50" />,
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [problemRef, problemInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [solutionRef, solutionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [offerRef, offerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [roiRef, roiInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [processRef, processInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [whyUsRef, whyUsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleProcessStepInView = (step: number) => {
    setCurrentProcessStep(step)
  }

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage as "en" | "fr")
  }

  return (
    <main className="min-h-screen bg-[#050509] text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="fixed inset-0 z-0">
        <HeroBackground />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-[#05050980] border-b border-[#ffffff10]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
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
              <div className="hidden md:flex items-center space-x-8">
                <a href="#process" className="text-gray-300 hover:text-white transition-colors">
                  {t.nav.process}
                </a>
                <a href="#problem" className="text-gray-300 hover:text-white transition-colors">
                  {t.nav.problem}
                </a>
                <a href="#solution" className="text-gray-300 hover:text-white transition-colors">
                  {t.nav.solution}
                </a>
                <a href="#results" className="text-gray-300 hover:text-white transition-colors">
                  {t.nav.results}
                </a>
                <LanguageSwitcher currentLanguage={language} onLanguageChange={handleLanguageChange} />
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] rounded-md blur-md opacity-80"></div>
                  <Button
                    asChild
                    className="relative bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] hover:opacity-90 text-white px-4 py-2 rounded-md transition-all duration-300 shadow-[0_0_20px_rgba(159,107,255,0.7)]"
                  >
                    <Link href="/booking">
                      {t.nav.bookCall}
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="md:hidden flex items-center gap-3">
                <LanguageSwitcher currentLanguage={language} onLanguageChange={handleLanguageChange} />
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    {mobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-[#050509] border-t border-[#ffffff10] py-4 px-4">
              <div className="flex flex-col space-y-4">
                <a 
                  href="#process" 
                  className="text-gray-300 hover:text-white transition-colors py-2" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.process}
                </a>
                <a 
                  href="#problem" 
                  className="text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.problem}
                </a>
                <a 
                  href="#solution" 
                  className="text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.solution}
                </a>
                <a 
                  href="#results" 
                  className="text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.results}
                </a>
                <div className="pt-2">
                  <Link 
                    href="/booking"
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-block w-full text-center bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] hover:opacity-90 text-white px-4 py-2 rounded-md"
                  >
                    {t.nav.bookCall}
                    <ChevronRight className="ml-2 w-4 h-4 inline" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section
          ref={heroRef}
          className="pt-32 pb-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto min-h-[90vh] flex items-center"
        >
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <div className="space-y-8">
              <motion.div
                variants={fadeIn}
                className="inline-block px-4 py-1 rounded-full bg-[#9F6BFF20] border border-[#9F6BFF40] text-sm text-[#9F6BFF]"
              >
                {t.hero.badge}
              </motion.div>
              <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {t.hero.title}{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF]">
                  {t.hero.titleHighlight}
                </span>{" "}
                {t.hero.titleEnd}
              </motion.h1>
              <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-300">
                {t.hero.subtitle}
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                <div className="relative max-w-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] rounded-md blur-md opacity-80"></div>
                  <Button
                    asChild
                    className="relative bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] hover:opacity-90 text-white px-4 py-2 rounded-md transition-all duration-300 shadow-[0_0_20px_rgba(159,107,255,0.7)] w-full sm:w-auto"
                  >
                    <Link href="/booking">
                      {t.hero.primaryCta}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>

            </div>
            <motion.div variants={fadeIn} className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] rounded-2xl blur-xl opacity-20 animate-pulse"></div>
              <div className="relative bg-[#0A0A18] border border-[#ffffff10] rounded-2xl overflow-hidden p-1">
                <div className="bg-[#050509] rounded-xl p-6 relative">
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-radial from-[#9F6BFF20] to-transparent opacity-30"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-[#9F6BFF]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffffff20]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffffff20]"></div>
                      </div>
                      <div className="text-xs text-gray-400">{t.hero.dashboardTitle}</div>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="text-sm text-gray-400">{t.hero.campaignProgress}</div>
                        <div className="text-3xl font-bold">
                          Day <span className="text-[#9F6BFF]">44</span>
                        </div>
                        <div className="w-full bg-[#ffffff10] rounded-full h-2">
                          <div className="bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] h-2 rounded-full w-full"></div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="text-sm font-medium">{t.hero.recentMeetings}</div>
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between p-3 bg-[#ffffff08] rounded-lg border border-[#ffffff10]"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 rounded-full bg-[#9F6BFF30] flex items-center justify-center">
                                <Users className="w-4 h-4 text-[#9F6BFF]" />
                              </div>
                              <div>
                                <div className="text-sm font-medium">
                                  {t.hero.meetingTitle} #{i}
                                </div>
                                <div className="text-xs text-gray-400">{t.hero.enterpriseClient}</div>
                              </div>
                            </div>
                            <div className="text-xs text-[#9F6BFF]">{t.hero.booked}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Logo Scroller Section */}
        <LogoScroller />

        {/* How It Works Section */}
        <section id="process" ref={processRef} className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeIn}
              className="inline-block px-4 py-1 rounded-full bg-[#9F6BFF20] border border-[#9F6BFF40] text-sm text-[#9F6BFF] mb-4"
            >
              {t.process.badge}
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.process.title}
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gray-300 max-w-3xl mx-auto">
              {t.process.subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <div className="space-y-0">
              <EnhancedProcessStep
                number={1}
                title={t.process.step1Title}
                description={t.process.step1Desc}
                icon={<Target className="w-6 h-6" />}
              />
              <EnhancedProcessStep
                number={2}
                title={t.process.step2Title}
                description={t.process.step2Desc}
                icon={<Rocket className="w-6 h-6" />}
              />
              <EnhancedProcessStep
                number={3}
                title={t.process.step3Title}
                description={t.process.step3Desc}
                icon={<Users className="w-6 h-6" />}
                isLast={true}
              />
            </div>
          </motion.div>
        </section>

        {/* Problem Section */}
        <section id="problem" ref={problemRef} className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto mb-36">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={problemInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeIn}
              className="inline-block px-4 py-1 rounded-full bg-[#9F6BFF20] border border-[#9F6BFF40] text-sm text-[#9F6BFF] mb-4"
            >
              {t.problem.badge}
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.problem.title} <span className="text-red-400">{t.problem.titleHighlight}</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
              {t.problem.subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
            initial="hidden"
            animate={problemInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {/* Problems List */}
            <motion.div variants={fadeIn} className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-3 flex-shrink-0 ml-1"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t.problem.problem1Title}</h3>
                    <p className="text-gray-300">{t.problem.problem1Desc}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-3 flex-shrink-0 ml-1"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t.problem.problem2Title}</h3>
                    <p className="text-gray-300">{t.problem.problem2Desc}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-3 flex-shrink-0 ml-1"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t.problem.problem3Title}</h3>
                    <p className="text-gray-300">{t.problem.problem3Desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Statistics */}
            <motion.div variants={fadeIn} className="text-center">
              <ProblemStatsCard
                icon={<AlertTriangle className="w-12 h-12 text-red-400" />}
                percentage="1%"
                title={t.problem.statTitle}
                quote={t.problem.statQuote}
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Solution Section */}
        <section id="solution" ref={solutionRef} className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={solutionInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeIn}
              className="inline-block px-4 py-1 rounded-full bg-[#9F6BFF20] border border-[#9F6BFF40] text-sm text-[#9F6BFF] mb-4"
            >
              {t.solution.badge}
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.solution.title}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF]">
                {t.solution.titleHighlight}
              </span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
              {t.solution.subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
            initial="hidden"
            animate={solutionInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {/* Statistics */}
            <motion.div variants={fadeIn} className="text-center">
              <SolutionStatsCard
                icon={<CheckCircle className="w-12 h-12 text-[#9F6BFF]" />}
                percentage="20%"
                title={t.solution.statTitle}
                quote={t.solution.statQuote}
              />
            </motion.div>

            {/* Solutions List */}
            <motion.div variants={fadeIn} className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#9F6BFF] mt-3 flex-shrink-0 ml-1"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t.solution.solution1Title}</h3>
                    <p className="text-gray-300">{t.solution.solution1Desc}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#9F6BFF] mt-3 flex-shrink-0 ml-1"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t.solution.solution2Title}</h3>
                    <p className="text-gray-300">{t.solution.solution2Desc}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#9F6BFF] mt-3 flex-shrink-0 ml-1"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t.solution.solution3Title}</h3>
                    <p className="text-gray-300">{t.solution.solution3Desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Solution CTA */}
        <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto -mt-8 mb-36">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] rounded-md blur-md opacity-80"></div>
              <Button
                asChild
                className="relative bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] hover:opacity-90 text-white px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 text-base sm:text-md md:text-lg rounded-md transition-all duration-300 shadow-[0_0_20px_rgba(159,107,255,0.7)]"
              >
                <Link href="/booking">
                  {t.hero.primaryCta}
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Spacer */}
        <div className="h-20"></div>

        {/* ROI Guarantee Section */}
        <section id="results" ref={roiRef} className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            className="text-center"
            initial="hidden"
            animate={roiInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="max-w-3xl mx-auto">
              <RoiCard 
                title={t.roi.title}
                titleHighlight={t.roi.titleHighlight}
                titleEnd={t.roi.titleEnd}
                subtitle={t.roi.subtitle}
              />
            </motion.div>
          </motion.div>
        </section>

        {/* ROI CTA */}
        <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto -mt-8 mb-36">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] rounded-md blur-md opacity-80"></div>
              <Button
                asChild
                className="relative bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] hover:opacity-90 text-white px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 text-base sm:text-md md:text-lg rounded-md transition-all duration-300 shadow-[0_0_20px_rgba(159,107,255,0.7)]"
              >
                <Link href="/booking">
                  {t.hero.primaryCta}
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Spacer */}
        <div className="h-20"></div>

        {/* Founding Clients Program Section with Bento Grid */}
        <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#9F6BFF20] px-4 py-2 rounded-full border border-[#9F6BFF40] text-[#9F6BFF] font-bold mb-6">
              <span>🚀</span>
              <span>{t.founding.badge.replace("🚀 ", "")}</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.founding.title} <span className="text-[#9F6BFF]">{t.founding.titleHighlight}</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">{t.founding.subtitle}</p>

            <div className="bg-[#0A0A18] border border-[#ffffff10] rounded-xl p-4 md:p-6 max-w-3xl mx-auto mb-8">
              <div className="flex items-center justify-center gap-3">
                <div className="text-[#9F6BFF]">
                  <Clock className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <p className="text-base md:text-lg font-medium">
                  {t.founding.slotsRemaining} <span className="text-[#9F6BFF] font-bold">{t.founding.slotsCount}</span>{" "}
                  {t.founding.slotsText}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <BentoGrid className="lg:grid-rows-2 max-w-6xl mx-auto">
              {foundingFeatures.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
              ))}
            </BentoGrid>
          </motion.div>

          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] rounded-md blur-md opacity-80"></div>
              <Button
                asChild
                className="relative bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] hover:opacity-90 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-md transition-all duration-300 shadow-[0_0_20px_rgba(159,107,255,0.7)]"
              >
                <Link href="/booking">
                  {t.hero.primaryCta}
                  <ChevronRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </section>
        
        {/* Additional spacing */}
        <div className="h-36"></div>

        {/* What You Get Section */}
        <section id="offer" ref={offerRef} className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={offerInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeIn}
              className="inline-block px-4 py-1 rounded-full bg-[#9F6BFF20] border border-[#9F6BFF40] text-sm text-[#9F6BFF] mb-4"
            >
              {t.offer.badge}
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.offer.title}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF]">
                {t.offer.titleHighlight}
              </span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gray-300 max-w-3xl mx-auto">
              {t.offer.subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            animate={offerInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              <div className="relative bg-[#0A0A18] border border-[#ffffff10] rounded-2xl overflow-hidden h-full">
                <div className="bg-[#050509] rounded-xl p-8 h-full">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] p-4 rounded-xl shadow-[0_0_15px_rgba(159,107,255,0.3)]">
                      <Shield className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold">{t.offer.feature1Title}</h3>
                    <p className="text-gray-400">{t.offer.feature1Desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              <div className="relative bg-[#0A0A18] border border-[#ffffff10] rounded-2xl overflow-hidden h-full">
                <div className="bg-[#050509] rounded-xl p-8 h-full">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] p-4 rounded-xl shadow-[0_0_15px_rgba(159,107,255,0.3)]">
                      <Target className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold">{t.offer.feature2Title}</h3>
                    <p className="text-gray-400">{t.offer.feature2Desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              <div className="relative bg-[#0A0A18] border border-[#ffffff10] rounded-2xl overflow-hidden h-full">
                <div className="bg-[#050509] rounded-xl p-8 h-full">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] p-4 rounded-xl shadow-[0_0_15px_rgba(159,107,255,0.3)]">
                      <BarChart className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold">{t.offer.feature3Title}</h3>
                    <p className="text-gray-400">{t.offer.feature3Desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Guarantee badge removed */}
        </section>
        
        {/* Additional spacing */}
        <div className="h-36"></div>

        {/* Final CTA Section */}
        <section id="cta" ref={ctaRef} className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div 
              variants={fadeIn} 
              className="inline-flex items-center justify-center bg-[#FF3A2D20] px-4 py-2 rounded-full border border-[#FF3A2D40] text-[#FF3A2D] font-bold mb-4 mx-auto"
            >
              <span className="mr-1">🔥</span>
              <span>{t.finalCta.urgency}</span>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.finalCta.title}
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gray-300 max-w-3xl mx-auto">
              {t.finalCta.subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <div className="bg-[#0A0A18] border border-[#ffffff10] rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-radial from-[#9F6BFF20] to-transparent opacity-30"></div>
              <div className="relative z-10">
                <motion.div variants={fadeIn} className="flex justify-center">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] rounded-md blur-md opacity-80"></div>
                    <Button
                      asChild
                      className="relative bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] hover:opacity-90 text-white px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 text-base sm:text-md md:text-lg rounded-md transition-all duration-300 shadow-[0_0_20px_rgba(159,107,255,0.7)]"
                    >
                      <Link href="/booking">
                        {t.finalCta.cta}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="mt-8 text-center">
                  <p className="italic text-gray-300 max-w-2xl mx-auto">{t.finalCta.testimonial}</p>
                  <p className="text-sm text-[#9F6BFF] mt-2">{t.finalCta.testimonialAuthor}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <FaqSection
            language={language}
            title={language === "en" ? "Frequently Asked Questions" : undefined}
            description={language === "en" ? "Find answers to common questions about our outbound lead generation services" : undefined}
            items={language === "en" ? [
              {
                question: "What exactly does your service include?",
                answer: "Our service includes email authentication & warm-up, hyper-personalized outreach campaigns, targeted prospect list building, and weekly performance reports. We handle everything from technical setup to messaging strategy, with the goal of booking 3-5 qualified meetings with decision-makers by day 44."
              },
              {
                question: "How long until I see results?",
                answer: "Most clients start seeing initial results within 30-45 days. Our process includes a 14-day email warm-up period, followed by strategic outreach campaigns. We guarantee 3-5 qualified meetings by day 44, or we continue working for free until we deliver."
              },
              {
                question: "Do I need to provide my own prospect list?",
                answer: "No, we build your targeted prospect list as part of our service. We'll work with you to define your ideal customer profile, then our team will research and compile a list of high-quality prospects that match your criteria."
              },
              {
                question: "What makes your approach different from other agencies?",
                answer: "Unlike traditional agencies, we focus on hyper-personalization at scale. We use AI-powered research to identify your prospects' pain points and craft messages that resonate. Our approach combines technology with human expertise, resulting in significantly higher response rates than generic outreach."
              },
              {
                question: "What happens after the initial 44 days?",
                answer: "After the initial period, most clients continue with our service to maintain a steady flow of qualified meetings. We offer flexible monthly plans with no long-term contracts. As a founding client, you'll receive a permanent 20% discount on our regular rates."
              },
              {
                question: "How do you measure success?",
                answer: "Our primary metric is the number of qualified meetings booked with decision-makers. We also track email deliverability, open rates, reply rates, and meeting show-up rates. You'll receive weekly reports with full transparency into these metrics."
              }
            ] : undefined}
            className="bg-transparent"
          />
        </section>

        {/* Footer */}
        <footer className="py-6 px-4 md:px-8 lg:px-16 border-t border-[#ffffff10]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Left side - Contact */}
              <div>
                <a href="mailto:info@skaliq.ai" className="text-gray-400 hover:text-white transition-colors">
                  info@skaliq.com
                </a>
              </div>
              
              {/* Right side - Links */}
              <div className="flex gap-6 mt-4 md:mt-0">
                <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                  {t.footer.termsOfService}
                </Link>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  {t.footer.privacyPolicy}
                </Link>
              </div>
            </div>
          </div>
        </footer>

        {/* Sticky CTA Button */}
        <div
          className={`fixed bottom-4 right-4 z-50 md:hidden transition-opacity duration-300 ${
            scrollY > 300 ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button
            asChild
            className="bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] hover:opacity-90 text-white px-4 py-2 rounded-md transition-all duration-300 shadow-[0_0_15px_rgba(159,107,255,0.5)]"
          >
            <Link href="/booking">{t.common.bookStrategyCall}</Link>
          </Button>
        </div>

        {/* Cookie Consent */}
        <CookieConsent language={language} />
      </div>
    </main>
  )
}
