import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ArrowRight } from "lucide-react"
import companyData from "@/data/company-data.json"

export default function ProductsPage() {
  const { company } = companyData

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Premium Cement Products</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive range of high-quality cement products designed to meet diverse construction requirements with
            superior strength and durability.
          </p>
        </div>

        {/* Product Categories */}
        <Tabs defaultValue="all" className="mb-16">
          <TabsList className="grid w-full grid-cols-4 max-w-25 mx-auto">
            <TabsTrigger value="all">All Products</TabsTrigger>
            <TabsTrigger value="bandhan">Bandhan Cement</TabsTrigger>
            <TabsTrigger value="lt">L&T Cement</TabsTrigger>
            <TabsTrigger value="lt-gold">L&T Gold Cement</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {company.brands
                .filter((brand) => ["bandhan", "lt","ltgold"].includes(brand.id)) // ✅ Filter by brand ID
                .flatMap((brand) =>
                  Object.entries(brand.products).map(([productName, details]) => (
                    <Card key={`${brand.id}-${productName}`} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <Badge style={{ backgroundColor: brand.colors.primary, color: "white" }}>
                            {brand.name}
                          </Badge>
                          <span className="text-2xl font-bold text-green-600">₹{details.price_npr}</span>
                        </div>
                        <CardTitle className="text-lg">{productName}</CardTitle>
                        <Badge variant="outline" className="w-fit">
                          Strength: {details.strength}
                        </Badge>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-slate-600">{details.description}</p>
                        <Button asChild className="w-full" style={{ backgroundColor: brand.colors.primary }}>
                          <Link href={`/brands/${brand.id}`}>View Details</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))
                )}
            </div>
          </TabsContent>

          <TabsContent value="bandhan" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {company.brands
                .filter((brand) => ["bandhan"].includes(brand.id)) // ✅ Filter by brand ID
                .flatMap((brand) =>
                  Object.entries(brand.products).map(([productName, details]) => (
                    <Card key={`${brand.id}-${productName}`} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <Badge style={{ backgroundColor: brand.colors.primary, color: "white" }}>
                            {brand.name}
                          </Badge>
                          <span className="text-2xl font-bold text-green-600">₹{details.price_npr}</span>
                        </div>
                        <CardTitle className="text-lg">{productName}</CardTitle>
                        <Badge variant="outline" className="w-fit">
                          Strength: {details.strength}
                        </Badge>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-slate-600">{details.description}</p>
                        <Button asChild className="w-full" style={{ backgroundColor: brand.colors.primary }}>
                          <Link href={`/brands/${brand.id}`}>View Details</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))
                )}
            </div>

          </TabsContent>

          <TabsContent value="lt" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {company.brands
                .filter((brand) => ["lt"].includes(brand.id)) // ✅ Filter by brand ID
                .flatMap((brand) =>
                  Object.entries(brand.products).map(([productName, details]) => (
                    <Card key={`${brand.id}-${productName}`} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <Badge style={{ backgroundColor: brand.colors.primary, color: "white" }}>
                            {brand.name}
                          </Badge>
                          <span className="text-2xl font-bold text-green-600">₹{details.price_npr}</span>
                        </div>
                        <CardTitle className="text-lg">{productName}</CardTitle>
                        <Badge variant="outline" className="w-fit">
                          Strength: {details.strength}
                        </Badge>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-slate-600">{details.description}</p>
                        <Button asChild className="w-full" style={{ backgroundColor: brand.colors.primary }}>
                          <Link href={`/brands/${brand.id}`}>View Details</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))
                )}
            </div>
          </TabsContent>
          <TabsContent value="lt-gold" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {company.brands
                .filter((brand) => ["ltgold"].includes(brand.id)) // ✅ Filter by brand ID
                .flatMap((brand) =>
                  Object.entries(brand.products).map(([productName, details]) => (
                    <Card key={`${brand.id}-${productName}`} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <Badge style={{ backgroundColor: brand.colors.primary, color: "white" }}>
                            {brand.name}
                          </Badge>
                          <span className="text-2xl font-bold text-green-600">₹{details.price_npr}</span>
                        </div>
                        <CardTitle className="text-lg">{productName}</CardTitle>
                        <Badge variant="outline" className="w-fit">
                          Strength: {details.strength}
                        </Badge>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-slate-600">{details.description}</p>
                        <Button asChild className="w-full" style={{ backgroundColor: brand.colors.primary }}>
                          <Link href={`/brands/${brand.id}`}>View Details</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))
                )}
            </div>
          </TabsContent>
        </Tabs>

        {/* Product Comparison */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Product Comparison Guide</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left p-4 font-semibold">Product Type</th>
                  <th className="text-left p-4 font-semibold">Strength</th>
                  <th className="text-left p-4 font-semibold">Best For</th>
                  <th className="text-left p-4 font-semibold">Key Features</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">OPC 43 Grade</td>
                  <td className="p-4">43 MPa</td>
                  <td className="p-4">General construction, residential buildings</td>
                  <td className="p-4">Fast setting, high early strength</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">OPC 53 Grade</td>
                  <td className="p-4">53 MPa</td>
                  <td className="p-4">High-rise buildings, infrastructure</td>
                  <td className="p-4">Superior strength, premium quality</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-medium">PPC 43 Grade</td>
                  <td className="p-4">43 MPa</td>
                  <td className="p-4">Mass concrete, marine structures</td>
                  <td className="p-4">Eco-friendly, enhanced durability</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">PPC 53 Grade</td>
                  <td className="p-4">53 MPa</td>
                  <td className="p-4">Premium construction, architectural works</td>
                  <td className="p-4">High performance, sustainable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing the Right Product?</h2>
          <p className="text-xl text-blue-100 mb-6">
            Our technical experts are ready to help you select the perfect cement for your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900">
              <Link href="/contact">Get Technical Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="tel:+977-21-465269">Call: +977-21-465269</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
