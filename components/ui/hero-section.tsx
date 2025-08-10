"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface Brand {
  name: string
  tagline: string
  taglineEn: string
}

interface HeroSectionProps {
  brands: Brand[]
}

export function HeroSection({ brands }: HeroSectionProps) {
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBrandIndex((prev) => (prev + 1) % brands.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [brands.length])

  const currentBrand = brands[currentBrandIndex]

  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-blue-900 via-slate-800 to-slate-900">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/construction-pattern.svg')] bg-repeat opacity-20"></div>
      </div> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Building Nepal's
                <span className="block text-yellow-400">Future</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100">with Quality & Innovation</p>
            </div>

            {/* Dynamic Brand Tagline */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-yellow-400">{currentBrand.name}</h3>
                <p className="text-2xl font-bold">{currentBrand.tagline}</p>
                <p className="text-blue-200">{currentBrand.taglineEn}</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-blue-100 leading-relaxed">
                Leading manufacturer of premium cement products in Nepal, committed to quality, innovation, and
                sustainable construction solutions using advanced German technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold">
                  <Link href="/brands">
                    Explore Our Brands
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                >
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Product Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <Image
                  src="/images/bandhan-opc.png"
                  alt="Bandhan Cement"
                  width={300}
                  height={400}
                  className="rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
                />
              </div>
              <div className="space-y-4 mt-8">
                <Image
                  src="/images/lt-opc.png"
                  alt="L&T Cement"
                  width={300}
                  height={400}
                  className="rounded-lg shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300"
                />
              </div>              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
