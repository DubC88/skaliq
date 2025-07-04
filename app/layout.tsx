import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/lib/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SkalIQ | B2B Sales Pipeline Growth | AI Sales System Agency",
  description: "SkalIQ helps B2B companies get - qualified meetings in 30–45 days, guaranteed. 5–10× ROI on your outbound spend or we work for free.",
  openGraph: {
    title: "SkalIQ - B2B Sales Pipeline Growth",
    description: "SkalIQ helps B2B companies get 5-10 qualified meetings in 30–45 days, guaranteed. 5–10× ROI on your outbound spend or we work for free.",
    url: "https://skaliq.com",
    siteName: "SkalIQ",
    images: [
      {
        url: "https://skaliq.com/assets/logo-skaliq-1200x630.png", // updated with actual logo
        width: 1200,
        height: 630,
        alt: "SkalIQ Logo",
      },
    ],
    type: "website",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/assets/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/favicon-48x48.png', sizes: '48x48', type: 'image/png' }
    ],
    apple: [
      { url: '/assets/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/assets/safari-pinned-tab.svg',
        color: '#5bbad5'
      }
    ]
  },
  manifest: '/manifest.json'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SkalIQ",
              "url": "https://skaliq.com",
              "logo": "https://skaliq.com/assets/logo-skaliq-1200x630.png",
              "description": "SkalIQ helps B2B companies get 5-10 qualified meetings in 30–45 days, guaranteed. 5–10× ROI on your outbound spend or we work for free."
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "SkalIQ",
              "url": "https://skaliq.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://skaliq.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-D8DMPPCWL5"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-D8DMPPCWL5');
            `
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
