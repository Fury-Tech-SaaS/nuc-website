import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, ExternalLink } from "lucide-react"

export default function GalleryPage() {
  const productImages = [
    {
      src: "/images/bandhan-cement-sack.jpeg",
      alt: "Bandhan Cement OPC 43 Grade",
      title: "Bandhan Cement OPC 43 Grade",
      category: "products",
      brand: "Bandhan",
    },
    {
      src: "/images/lt-cement-sack.jpeg",
      alt: "L&T Cement OPC 43 Grade",
      title: "L&T Cement OPC 43 Grade",
      category: "products",
      brand: "L&T",
    },
  ]

  const brandImages = [
    {
      src: "/images/nepal-ultratech-logo.png",
      alt: "Nepal Ultratech Cement Logo",
      title: "Nepal Ultratech Cement",
      category: "branding",
      brand: "Company",
    },
    {
      src: "/images/bandhan-logo.png",
      alt: "Bandhan Cement Logo",
      title: "Bandhan Cement Brand",
      category: "branding",
      brand: "Bandhan",
    },
    {
      src: "/images/lt-logo.png",
      alt: "L&T Cement Logo",
      title: "L&T Cement Brand",
      category: "branding",
      brand: "L&T",
    },
  ]

  const allImages = [...productImages, ...brandImages]

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Media Gallery</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive collection of product images, brand assets, factory visuals, and downloadable
            resources for Nepal Ultratech Cement.
          </p>
        </div>

        {/* Gallery Tabs */}
        <Tabs defaultValue="all" className="mb-16">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
            <TabsTrigger value="all">All Media</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="branding">Branding</TabsTrigger>
            <TabsTrigger value="downloads">Downloads</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allImages.map((image, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative group">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                        <Button
                          variant="secondary"
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Full Size
                        </Button>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-slate-900">{image.title}</h3>
                        <Badge variant="outline">{image.brand}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="products" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Product Gallery</h2>
              <p className="text-lg text-slate-600">High-quality images of our cement products and packaging</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productImages.map((image, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative group">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                        <Button
                          variant="secondary"
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-slate-900">{image.title}</h3>
                        <Badge variant="outline">{image.brand}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="branding" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Brand Assets</h2>
              <p className="text-lg text-slate-600">
                Official logos and brand materials for Nepal Ultratech Cement and our product brands
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brandImages.map((image, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative group bg-gray-50">
                      <div className={`p-8 ${image.brand === "L&T" ? "bg-white" : ""}`}>
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          width={400}
                          height={200}
                          className="w-full h-32 object-contain"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                        <Button
                          variant="secondary"
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-slate-900">{image.title}</h3>
                        <Badge variant="outline">{image.brand}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="downloads" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Downloadable Resources</h2>
              <p className="text-lg text-slate-600">
                Technical specifications, brochures, and other important documents
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <Download className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Bandhan Cement Brochure</h3>
                  <p className="text-sm text-slate-600">
                    Complete product specifications and technical details for Bandhan Cement
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <Download className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">L&T Cement Brochure</h3>
                  <p className="text-sm text-slate-600">Comprehensive guide to L&T Cement products and applications</p>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Download className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Technical Specifications</h3>
                  <p className="text-sm text-slate-600">Detailed technical data sheets for all cement grades</p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                    <Download className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Company Profile</h3>
                  <p className="text-sm text-slate-600">Complete company overview and corporate information</p>
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                    <Download className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Quality Certificates</h3>
                  <p className="text-sm text-slate-600">ISO certifications and quality assurance documents</p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                    <Download className="h-8 w-8 text-gray-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">Brand Guidelines</h3>
                  <p className="text-sm text-slate-600">Logo usage guidelines and brand asset specifications</p>
                  <Button className="w-full bg-gray-600 hover:bg-gray-700">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Factory & Process Images Placeholder */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Manufacturing Excellence</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-lg">Factory Exterior</span>
              </div>
              <h3 className="font-semibold text-slate-900">Modern Manufacturing Facility</h3>
              <p className="text-sm text-slate-600 mt-2">State-of-the-art production facility in Biratnagar, Nepal</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-lg">Production Line</span>
              </div>
              <h3 className="font-semibold text-slate-900">Advanced Production Technology</h3>
              <p className="text-sm text-slate-600 mt-2">
                German technology ensuring consistent quality and efficiency
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-lg">Quality Lab</span>
              </div>
              <h3 className="font-semibold text-slate-900">Quality Testing Laboratory</h3>
              <p className="text-sm text-slate-600 mt-2">
                Rigorous testing ensures every batch meets quality standards
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Need High-Resolution Images?</h2>
          <p className="text-xl text-blue-100 mb-6">
            Contact us for press kits, high-resolution product images, or custom photography
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900">
              <Link href="/contact">Request Media Kit</Link>
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
