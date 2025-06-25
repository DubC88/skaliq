"use client"

import { motion } from "framer-motion"
import { TrendingUp } from "lucide-react"

export function BetaMetricBadge() {
  return (
    <motion.div
      className="inline-flex items-center gap-3 bg-[#0A0A18] border border-[#9F6BFF40] rounded-full px-4 py-2 text-sm"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-[#9F6BFF] rounded-full animate-pulse"></div>
        <TrendingUp className="w-4 h-4 text-[#9F6BFF]" />
      </div>
      <span className="text-gray-300">
        Beta clients: <span className="text-[#9F6BFF] font-bold">20% reply rate</span> (3-5 meetings)
      </span>
    </motion.div>
  )
}
