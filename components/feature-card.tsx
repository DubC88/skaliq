"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
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
              {icon}
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-400">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
