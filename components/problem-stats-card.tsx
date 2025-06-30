"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

interface ProblemStatsCardProps {
  icon: ReactNode
  percentage: string
  title: string
  quote: string
}

export function ProblemStatsCard({ icon, percentage, title, quote }: ProblemStatsCardProps) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative bg-[#0A0A18] border border-red-400/40 rounded-2xl overflow-hidden">
        <div className="bg-[#050509] rounded-xl p-12">
          <div className="flex items-center justify-center mb-6">
            {icon}
          </div>
          <div className="text-8xl font-bold text-red-400 mb-4">{percentage}</div>
          <p className="text-xl text-gray-300">{title}</p>
          <p className="text-sm text-gray-500 mt-4 italic">{quote}</p>
        </div>
      </div>
    </motion.div>
  )
}
