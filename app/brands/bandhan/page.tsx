import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle } from "lucide-react"
import companyData from "@/data/company-data.json"

export default function BandhanPage() {
  const brand = companyData.company.brands.find((b) => b.id === "bandhan")!

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
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                width={300}
                height={150}
                className="h-20 w-auto"
              />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">{brand.name}</h1>
                <p className="text-2xl font-medium mb-2" style={{ color: brand.colors.secondary }}>
                  {brand.tagline}
                </p>
                <p className="text-lg text-slate-600">{brand.taglineEn}</p>
              </div>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed">{brand.description}</p>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">German Technology</Badge>
              <Badge variant="secondary">Nepal Standards Certified</Badge>
              <Badge variant="secondary">Premium Quality</Badge>
            </div>

            <Button asChild size="lg" style={{ backgroundColor: brand.colors.primary }}>
              <Link href="/contact">Get Quote for Bandhan Cement</Link>
            </Button>
          </div>

          <div className="relative">
            <Image
              src="/images/bandhan-cement-sack.jpeg"
              alt="Bandhan Cement Product"
              width={500}
              height={600}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Products Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Bandhan Cement Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Choose Bandhan Cement?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Superior Strength</h3>
              <p className="text-slate-600">
                High compressive strength ensuring durable and long-lasting construction projects
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Advanced Technology</h3>
              <p className="text-slate-600">
                Manufactured using state-of-the-art German technology for consistent quality
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Eco-Friendly</h3>
              <p className="text-slate-600">
                Environmentally responsible production processes with minimal ecological impact
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Build with Bandhan Cement?</h2>
          <p className="text-xl text-blue-100 mb-6">Contact us today for competitive pricing and technical support</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900">
              <Link href="/contact">Get Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="tel:+977-21-525555">Call: +977-21-525555</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
