import { HeroSection } from "@/components/ui/hero-section"
import { BrandShowcase } from "@/components/ui/brand-showcase"
import { USPSection } from "@/components/ui/usp-section"
import companyData from "@/data/company-data.json"

export default function HomePage() {
  const { company } = companyData

  return (
    <main>
      <HeroSection brands={company.brands} />
      <USPSection usps={company.usps} />
      <BrandShowcase brands={company.brands} />

      {/* Call to Action Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Build with Quality?</h2>
            <p className="text-xl text-blue-100">
              Contact us today for the best cement solutions for your construction projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold rounded-lg transition-colors"
              >
                Get Quote Now
              </a>
              <a
                href="tel:+977-21-5465269"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-lg transition-colors"
              >
                Call: +977-21-465269
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
