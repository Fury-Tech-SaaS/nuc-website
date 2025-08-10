import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Brand {
  id: string
  name: string
  tagline: string
  taglineEn: string
  description: string
  logo: string
  colors: {
    primary: string
    secondary: string
  }
}

interface BrandShowcaseProps {
  brands: Brand[]
}

export function BrandShowcase({ brands }: BrandShowcaseProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Premium Brands</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Three trusted brands delivering exceptional quality and performance for all your construction needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {brands.map((brand) => (
            <Card key={brand.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="flex justify-center">
                    <div className={`${brand.id === "lt" ? "bg-white rounded-lg" : ""}`}>
                      <Image
                        src={brand.logo || "/placeholder.svg"}
                        alt={brand.name}
                        width={200}
                        height={100}
                        className="h-20 w-auto"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900">{brand.name}</h3>
                    <p className="text-lg font-medium" style={{ color: brand.colors.secondary }}>
                      {brand.tagline}
                    </p>
                    <p className="text-sm text-slate-600">{brand.taglineEn}</p>
                  </div>

                  <p className="text-slate-700 leading-relaxed">{brand.description}</p>

                  <Button asChild className="w-full" style={{ backgroundColor: brand.colors.primary }}>
                    <Link href={`/brands/${brand.id}`}>Explore {brand.name}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
