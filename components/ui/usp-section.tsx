import { Card, CardContent } from "@/components/ui/card"

interface USP {
  title: string
  description: string
  icon: string
}

interface USPSectionProps {
  usps: USP[]
}

export function USPSection({ usps }: USPSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Nepal Ultratech Cement?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our commitment to excellence drives us to deliver superior cement products with unmatched quality and
            performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {usps.map((usp, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="text-4xl mb-4">{usp.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900">{usp.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{usp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
