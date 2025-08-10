import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Cog, Shield, Leaf, Award } from "lucide-react"
import companyData from "@/data/company-data.json"

export default function TechnologyPage() {
  const { company } = companyData

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Advanced German Technology</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">{company.technology.description}</p>
        </div>

        {/* Technology Overview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">State-of-the-Art Manufacturing</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Our manufacturing facility is equipped with cutting-edge German technology that ensures consistent
              quality, optimal performance, and environmental sustainability. Every aspect of our production process is
              designed to deliver superior cement products that meet international standards.
            </p>

            <div className="space-y-3">
              {company.technology.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Learn More About Our Process</Link>
            </Button>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-8">
              <div className="text-center space-y-4">
                <Cog className="h-24 w-24 text-blue-600 mx-auto" />
                <h3 className="text-2xl font-bold text-slate-900">German Engineering Excellence</h3>
                <p className="text-slate-600">Precision manufacturing with world-class technology standards</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Technology Advantages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Cog className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Automated Systems</h3>
                <p className="text-sm text-slate-600">
                  Fully automated production lines ensuring consistent quality and minimal human error
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Quality Control</h3>
                <p className="text-sm text-slate-600">
                  Advanced testing and monitoring systems at every stage of production
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Eco-Friendly</h3>
                <p className="text-sm text-slate-600">
                  Environmentally responsible processes with reduced carbon footprint
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">Certified Quality</h3>
                <p className="text-sm text-slate-600">
                  International standards compliance with rigorous quality certifications
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Manufacturing Process */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Manufacturing Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Raw Material Processing</h3>
              <p className="text-slate-600">
                High-quality limestone, clay, and other raw materials are carefully selected and processed using
                advanced crushing and grinding technology.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Clinker Production</h3>
              <p className="text-slate-600">
                Raw materials are heated in state-of-the-art kilns at precisely controlled temperatures to produce
                high-quality clinker.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Final Grinding & Packaging</h3>
              <p className="text-slate-600">
                Clinker is ground with gypsum and other additives using advanced grinding technology, then packaged with
                automated systems.
              </p>
            </div>
          </div>
        </div>

        {/* Quality Standards */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Quality Standards & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-yellow-600" />
                  <span>Nepal Standards Authority</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  All our cement products are approved and certified by the Nepal Standards Authority, ensuring
                  compliance with national quality standards.
                </p>
                <Badge variant="secondary">NS 385:2049 Certified</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span>ISO 9001:2015</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Our quality management system is certified to ISO 9001:2015 standards, demonstrating our commitment to
                  consistent quality delivery.
                </p>
                <Badge variant="secondary">Quality Management System</Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testing & Quality Assurance */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Rigorous Testing Procedures</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">🔬</span>
              </div>
              <h3 className="font-semibold text-slate-900">Chemical Analysis</h3>
              <p className="text-sm text-slate-600">Comprehensive chemical composition testing</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">💪</span>
              </div>
              <h3 className="font-semibold text-slate-900">Strength Testing</h3>
              <p className="text-sm text-slate-600">Compressive strength verification at multiple stages</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">⏱️</span>
              </div>
              <h3 className="font-semibold text-slate-900">Setting Time</h3>
              <p className="text-sm text-slate-600">Initial and final setting time evaluation</p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold">📏</span>
              </div>
              <h3 className="font-semibold text-slate-900">Fineness Test</h3>
              <p className="text-sm text-slate-600">Particle size distribution analysis</p>
            </div>
          </div>
        </div>

        {/* Environmental Commitment */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Environmental Responsibility</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Our commitment to environmental sustainability is reflected in every aspect of our manufacturing process.
              We employ advanced technologies that minimize environmental impact while maximizing efficiency.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Leaf className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900">Reduced Carbon Footprint</h3>
                  <p className="text-slate-600">Energy-efficient processes that minimize CO2 emissions</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Leaf className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900">Waste Minimization</h3>
                  <p className="text-slate-600">Advanced recycling systems for industrial waste</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Leaf className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900">Water Conservation</h3>
                  <p className="text-slate-600">Efficient water management and recycling systems</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-8">
              <div className="text-center space-y-4">
                <Leaf className="h-24 w-24 text-green-600 mx-auto" />
                <h3 className="text-2xl font-bold text-slate-900">Sustainable Manufacturing</h3>
                <p className="text-slate-600">Committed to environmental stewardship and sustainable practices</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Experience German Technology Excellence</h2>
          <p className="text-xl text-blue-100 mb-6">
            Discover how our advanced manufacturing technology delivers superior cement quality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900">
              <Link href="/contact">Schedule Factory Visit</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/products">View Our Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
