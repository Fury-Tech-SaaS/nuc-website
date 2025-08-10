import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import companyData from "@/data/company-data.json"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Nepal Ultratech Cement Ltd. - Build Legacies With Us",
    template: "%s | Nepal Ultratech Cement",
  },
  description:
    "Leading manufacturer of premium cement products in Nepal. Bandhan Cement and L&T Cement - Quality, Innovation, and Sustainability for all construction needs.",
  keywords: ["cement", "Nepal", "construction", "Bandhan", "L&T", "OPC", "PPC", "building materials"],
  authors: [{ name: "Nepal Ultratech Cement Ltd." }],
  creator: "Nepal Ultratech Cement Ltd.",
  publisher: "Nepal Ultratech Cement Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nepalultratechcement.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nepalultratechcement.com",
    siteName: "Nepal Ultratech Cement Ltd.",
    title: "Nepal Ultratech Cement Ltd. - Build Legacies With Us",
    description:
      "Leading manufacturer of premium cement products in Nepal. Quality cement solutions for all construction needs.",
    images: [
      {
        url: "/images/nepal-ultratech-logo.png",
        width: 1200,
        height: 630,
        alt: "Nepal Ultratech Cement Ltd.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nepal Ultratech Cement Ltd. - Build Legacies With Us",
    description:
      "Leading manufacturer of premium cement products in Nepal. Quality cement solutions for all construction needs.",
    images: ["/images/nepal-ultratech-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: companyData.company.name,
              description: companyData.company.description,
              url: "https://nepalultratechcement.com",
              logo: "https://nepalultratechcement.com/images/nepal-ultratech-logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: companyData.company.contact.phone,
                contactType: "customer service",
                email: companyData.company.contact.email,
                areaServed: "NP",
                availableLanguage: ["en", "ne"],
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Biratnagar",
                addressRegion: "Morang",
                addressCountry: "NP",
              },
              sameAs: [
                companyData.company.social.facebook,
                companyData.company.social.instagram,
                companyData.company.social.linkedin,
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
