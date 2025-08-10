import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle } from "lucide-react"
import companyData from "@/data/company-data.json"

export default function LTGoldPage() {
  const brand = companyData.company.brands.find((b) => b.id === "ltgold")!

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        {/* Back Navigation */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/brands">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Brands
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="p-4 rounded-lg inline-block">
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={brand.name}
                  width={300}
                  height={150}
                  className="h-20 w-auto"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">{brand.name}</h1>
                <p className="text-2xl font-medium mb-2" style={{ color: brand.colors.primary }}>
                  {brand.tagline}
                </p>
                <p className="text-lg text-slate-600">{brand.taglineEn}</p>
              </div>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed">{brand.description}</p>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Premium Gold Standard</Badge>
              <Badge variant="secondary">Superior Strength</Badge>
              <Badge variant="secondary">Luxury Construction</Badge>
            </div>

            <Button asChild size="lg" style={{ backgroundColor: brand.colors.primary, color: "black" }}>
              <Link href="/contact">Get Quote for L&T Gold Cement</Link>
            </Button>
          </div>

          <div className="relative">
            <Image
              src="/images/lt-gold-opc.png"
              alt="L&T Gold Cement Product"
              width={500}
              height={600}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Products Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">L&T Gold Cement Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(brand.products).map(([productName, details]) => (
              <Card key={productName} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{productName}</CardTitle>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline">Strength: {details.strength}</Badge>
                    <span className="text-2xl font-bold text-green-600">₹{details.price_npr}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-600">{details.description}</p>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Applications:</h4>
                    <ul className="space-y-1">
                      {details.applications.map((app, index) => (
                        <li key={index} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-yellow-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Choose L&T Gold Cement?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Gold Standard Quality</h3>
              <p className="text-slate-600">
                Crafted for premium projects demanding excellence and unmatched quality
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">⚒️</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Ultimate Strength</h3>
              <p className="text-slate-600">
                High compressive strength to ensure long-lasting and resilient structures
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Luxury Construction</h3>
              <p className="text-slate-600">
                Ideal choice for high-end residential and commercial developments
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-lg p-12 text-black">
          <h2 className="text-3xl font-bold mb-4">Build with the Gold Standard</h2>
          <p className="text-xl text-yellow-100 mb-6">
            Choose L&T Gold Cement for unmatched elegance, durability, and performance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-black hover:bg-slate-900 text-white">
              <Link href="/contact">Get Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-black text-black hover:bg-black hover:text-white bg-transparent"
            >
              <Link href="tel:+977-21-525555">Call: +977-21-525555</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
