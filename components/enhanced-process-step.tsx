"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

interface EnhancedProcessStepProps {
  number: number
  title: string
  description: string
  icon: React.ReactNode
  isLast?: boolean
  onInView?: (step: number) => void
}

export function EnhancedProcessStep({
  number,
  title,
  description,
  icon,
  isLast = false,
  onInView,
}: EnhancedProcessStepProps) {
  const [ref, inView] = useInView({
    threshold: 0.6,
    triggerOnce: false,
  })

  useEffect(() => {
    if (inView && onInView) {
      onInView(number - 1)
    }
  }, [inView, number, onInView])

  return (
    <motion.div
      ref={ref}
      className="relative flex items-start gap-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (number - 1) * 0.1 }}
    >
      {/* Icon and connecting line container */}
      <div className="relative flex flex-col items-center flex-shrink-0">
        {/* Step circle with icon */}
        <motion.div
          className="relative z-10"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: (number - 1) * 0.1 + 0.2 }}
        >
          <motion.div
            className="absolute -inset-2 bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] rounded-full opacity-0 blur-sm"
            animate={{ opacity: inView ? 0.7 : 0 }}
            transition={{ duration: 0.5 }}
          />
          <div
            className={`relative rounded-full p-4 w-16 h-16 flex items-center justify-center transition-all duration-500 ${
              inView
                ? "bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] shadow-[0_0_20px_rgba(159,107,255,0.5)]"
                : "bg-[#0A0A18] border border-[#ffffff20]"
            }`}
          >
            <div className="text-white">{icon}</div>
          </div>
        </motion.div>

        {/* Connecting line */}
        {!isLast && (
          <motion.div
            className="w-0.5 h-20 bg-[#ffffff10] mt-4"
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: 80, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (number - 1) * 0.1 + 0.4 }}
          >
            <motion.div
              className="w-full bg-gradient-to-b from-[#9F6BFF] to-transparent"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (number - 1) * 0.1 + 0.6 }}
            />
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-16">
        <div className="flex items-center gap-3 mb-3">
          <span
            className={`text-sm font-bold px-3 py-1 rounded-full transition-all duration-300 ${
              inView ? "bg-[#9F6BFF] text-white" : "bg-[#ffffff10] text-gray-400"
            }`}
          >
            Step {number}
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
