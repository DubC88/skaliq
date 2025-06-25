"use client"

import { motion } from "framer-motion"
import { AlertTriangle, CheckCircle, Mail, Clock, Users, TrendingDown } from "lucide-react"

const problems = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Spam Traps & Deliverability Issues",
    description: "Generic templates get flagged or deleted",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Time Sinks Before ROI",
    description: "Weeks building lists = zero meetings",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Overwhelmed Buyers",
    description: "100+ messages daily means prospects ignore outreach",
  },
  {
    icon: <TrendingDown className="w-6 h-6" />,
    title: "Massive Opportunity Cost",
    description: "Bad email is time not spent closing",
  },
]

const solutions = [
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Proper Email Authentication",
    description: "SPF, DKIM, DMARC setup with 14-day warm-up",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Immediate Pipeline Results",
    description: "3-5 qualified meetings by Day 44",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Hyper-Personalized Outreach",
    description: "Custom messaging that gets responses",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Focus on Closing",
    description: "We handle outreach, you handle revenue",
  },
]

export function ProblemSolutionSplit() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Problems Side */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-red-800/5 rounded-2xl blur-xl"></div>
        <div className="relative bg-[#0A0A18] border border-[#ff000020] rounded-2xl overflow-hidden">
          <div className="bg-[#050509] rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-red-400" />
              <h3 className="text-xl font-bold text-red-400">Common Problems</h3>
            </div>
            <div className="space-y-6 grayscale">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-red-900/20 p-3 rounded-xl mt-1">
                    <div className="text-red-400">{problem.icon}</div>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-gray-300">{problem.title}</p>
                    <p className="text-gray-500 mt-1">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Solutions Side */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#9F6BFF20] to-[#6B48FF20] rounded-2xl blur-xl"></div>
        <div className="relative bg-[#0A0A18] border border-[#9F6BFF40] rounded-2xl overflow-hidden">
          <div className="bg-[#050509] rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-6 h-6 text-[#9F6BFF]" />
              <h3 className="text-xl font-bold text-[#9F6BFF]">Skaliq Solutions</h3>
            </div>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-[#9F6BFF20] p-3 rounded-xl mt-1 shadow-[0_0_15px_rgba(159,107,255,0.3)]">
                    <div className="text-[#9F6BFF]">{solution.icon}</div>
                  </div>
                  <div>
                    <p className="font-bold text-lg">{solution.title}</p>
                    <p className="text-gray-300 mt-1">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
