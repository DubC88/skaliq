"use client"

import { motion } from "framer-motion"

interface ProcessStepProps {
  number: number
  title: string
  description: string
}

export function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-start gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] rounded-full blur-sm opacity-70"></div>
        <div className="relative bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] rounded-full p-4 flex-shrink-0 w-12 h-12 flex items-center justify-center">
          <span className="text-xl font-bold">{number}</span>
        </div>
        {number < 3 && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-[#9F6BFF] to-transparent"></div>
        )}
      </div>
      <div className="md:pt-2">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  )
}
