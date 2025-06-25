"use client"

import { motion } from "framer-motion"
import { TrendingUp, Clock, Calendar, Rocket } from "lucide-react"

const benefits = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Accelerate Revenue & Momentum",
    description: "Each call isn't just a meeting—it's feedback to refine your pitch and close faster.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Save Time",
    description:
      "No manual LinkedIn searches or cold-calling grind. We handle the outreach while you focus on closing.",
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Predictable Pipeline",
    description: "Lock in 3–5 decision-maker calls per campaign—reliable forecasting for your business growth.",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Scale Without Overhead",
    description: "We're your virtual SDR team—no new hires or tools needed.",
  },
]

export function BenefitsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {benefits.map((benefit, index) => (
        <motion.div
          key={index}
          className="relative group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
          <div className="relative bg-[#0A0A18] border border-[#ffffff10] rounded-2xl overflow-hidden h-full">
            <div className="bg-[#050509] rounded-xl p-6 h-full">
              <div className="flex flex-col space-y-4">
                <div className="bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] p-3 rounded-xl w-fit shadow-[0_0_15px_rgba(159,107,255,0.3)]">
                  {benefit.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold">{benefit.title}</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
