import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import companyData from "@/data/company-data.json"

export default function BrandsPage() {
  const { company } = companyData
  const brandImages = {
    bandhan: "/images/bandhan-opc.png",
    lt: "/images/lt-opc.png",
    ltgold: "/images/lt-gold-opc.png" // new brand
  };

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Premium Brands</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Three exceptional cement brands designed to meet diverse construction needs with uncompromising quality and
            performance standards.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="space-y-16">
          {company.brands.map((brand, index) => (
            <div
              key={brand.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              {/* Brand Info */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="space-y-4">
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    width={250}
                    height={120}
                    className="h-16 w-auto"
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">{brand.name}</h2>
                    <p className="text-xl font-medium mb-1" style={{ color: brand.colors.secondary }}>
                      {brand.tagline}
                    </p>
                    <p className="text-slate-600">{brand.taglineEn}</p>
                  </div>
                </div>

                <p className="text-lg text-slate-700 leading-relaxed">{brand.description}</p>

                {/* Product Overview */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900">Available Products:</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.keys(brand.products).map((product) => (
                      <div key={product} className="bg-gray-50 rounded-lg p-3 text-center">
                        <span className="text-sm font-medium text-slate-700">{product}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button asChild size="lg" style={{ backgroundColor: brand.colors.primary }}>
                  <Link href={`/brands/${brand.id}`}>Explore {brand.name} Products</Link>
                </Button>
              </div>

              {/* Brand Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src={brandImages[brand.id as keyof typeof brandImages] || "/images/default-cement-sack.jpeg"}
                      alt={`${brand.name} Product`}
                      width={500}
                      height={600}
                      className="w-full h-auto"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing the Right Brand?</h2>
          <p className="text-xl text-blue-100 mb-6">
            Our experts are here to help you select the perfect cement for your project
          </p>
          <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-slate-900">
            <Link href="/contact">Contact Our Experts</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
