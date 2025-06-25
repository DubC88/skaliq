"use client"

import { motion } from "framer-motion"

interface StatsCardProps {
  label: string
  percentage: number
  description: string
}

export function StatsCard({ label, percentage, description }: StatsCardProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-lg">{label}</span>
        <span className="text-[#9F6BFF] font-bold">{percentage}%</span>
      </div>
      <div className="w-full bg-[#ffffff10] rounded-full h-2 overflow-hidden">
        <motion.div
          className="bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.2 }}
        ></motion.div>
      </div>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  )
}
