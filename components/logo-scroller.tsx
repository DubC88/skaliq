"use client"

import Image from "next/image"
import { ScrollVelocity } from "@/components/ui/scroll-velocity"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function LogoScroller() {
  const { language } = useLanguage()
  const t = translations[language]
  
  // Define logos with their paths
  const logos = [
    { src: "/logos/highlevel- logo.png", alt: "HighLevel" },
    { src: "/logos/hubspot-logo.png", alt: "HubSpot" },
    { src: "/logos/n8n-logo.new.png", alt: "n8n" },
    { src: "/logos/open ai new logo.PNG", alt: "OpenAI" },
    { src: "/logos/perplexiti ai - logo.png", alt: "Perplexiti AI" },
    { src: "/logos/pipredrive-logo.png", alt: "Pipedrive" },
    { src: "/logos/lovable logo reshape-logo.png", alt: "Lovable" },
    { src: "/logos/supabase new.png", alt: "Supabase" },
    { src: "/logos/claude ai-logo.png", alt: "Claude AI" },
    { src: "/logos/airtable- new.png", alt: "Airtable" },
    { src: "/logos/salsforce new.PNG", alt: "Salesforce" },
    { src: "/logos/monday.com logo.png", alt: "Monday.com" },
  ]
  
  // Use different velocities for alternating directions
  const velocities = [3, -3]

  return (
    <div className="w-full py-24 pb-32 bg-transparent border-y border-[#ffffff10]">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-xl md:text-2xl lg:text-[1.5rem] font-semibold mb-16 mt-6 text-purple-400">{t.logoScroller.title}</h3>
        <div className="flex flex-col space-y-10">
          {velocities.map((velocity, index) => (
            <ScrollVelocity key={index} velocity={velocity} movable={true}>
              {logos.map((logo, logoIndex) => (
                <div
                  key={`${logo.alt}-${logoIndex}`}
                  className="flex items-center justify-center mx-6 md:mx-10"
                >
                  {/* Standard image tag instead of Next.js Image for better compatibility */}
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-10 md:h-12 w-auto max-w-[150px] object-contain"
                  />
                </div>
              ))}
            </ScrollVelocity>
          ))}
        </div>
        
        {/* Add the same logos again in the same ScrollVelocity components to ensure continuous loop */}
        <div className="hidden">
          {velocities.map((velocity, index) => (
            <ScrollVelocity key={`duplicate-${index}`} velocity={velocity} movable={true}>
              {logos.map((logo, logoIndex) => (
                <div
                  key={`duplicate-${logo.alt}-${logoIndex}`}
                  className="flex items-center justify-center mx-6 md:mx-10"
                >
                  <img
                    src={logo.src}
                    alt={`${logo.alt}-duplicate`}
                    className="h-10 md:h-12 w-auto max-w-[150px] object-contain"
                  />
                </div>
              ))}
            </ScrollVelocity>
          ))}
        </div>
      </div>
    </div>
  )
}
