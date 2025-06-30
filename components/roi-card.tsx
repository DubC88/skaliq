"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

interface RoiCardProps {
  title: string
  titleHighlight: string
  titleEnd: string
  subtitle: string
}

export function RoiCard({ title, titleHighlight, titleEnd, subtitle }: RoiCardProps) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] rounded-2xl blur-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative bg-[#0A0A18] border border-[#ffffff10] rounded-2xl overflow-hidden">
        <div className="bg-[#050509] rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {title}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF]">
              {titleHighlight}
            </span>{" "}
            {titleEnd}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">{subtitle}</p>
        </div>
      </div>
    </motion.div>
  )
}
