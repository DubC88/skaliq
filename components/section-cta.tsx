"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

interface SectionCTAProps {
  variant?: "primary" | "secondary" | "minimal"
  text?: string
  subtext?: string
}

export function SectionCTA({
  variant = "primary",
  text = "Book My Intro Call",
  subtext = "Get 5 qualified meetings in 30 days",
}: SectionCTAProps) {
  return (
    <motion.div
      className="mt-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {variant === "primary" && (
        <div className="relative inline-block">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] rounded-md blur-md opacity-80"></div>
          <Button className="relative bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] hover:opacity-90 text-white px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 text-base sm:text-md md:text-lg rounded-md transition-all duration-300 shadow-[0_0_20px_rgba(159,107,255,0.7)]">
            {text}
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      )}

      {variant === "secondary" && (
        <div className="space-y-4">
          <p className="text-gray-300">{subtext}</p>
          <Button className="bg-[#0A0A18] border border-[#9F6BFF] hover:bg-[#9F6BFF20] text-white px-6 py-2 rounded-md transition-all duration-300">
            {text}
            <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      )}

      {variant === "minimal" && (
        <div className="inline-block bg-[#9F6BFF20] px-6 py-3 rounded-full border border-[#9F6BFF40] text-[#9F6BFF] font-bold hover:bg-[#9F6BFF30] transition-colors cursor-pointer">
          {text}
        </div>
      )}
    </motion.div>
  )
}
