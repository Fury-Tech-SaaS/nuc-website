import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import companyData from "@/data/company-data.json"

export default function AboutPage() {
  const { company } = companyData
  const { team } = company

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About Nepal Ultratech Cement</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">{company.description}</p>
        </div>

        {/* Chairman's Message */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Image src="/images/chairman-manish-kumar-maru.jpg" alt="Chairman Manish Kumar Maru" width={500} height={600} className="rounded-xl" />
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Chairman’s Message</h2>
              <p className="text-slate-700 italic leading-relaxed">"Nepal Ultratech Cement is more than just a manufacturer — we are builders of progress. Our focus is on quality, sustainability, and fostering a nation built on strong foundations. I thank our stakeholders and customers for their continued trust."</p>
              <p className="mt-4 text-slate-900 font-semibold">– Manish Kumar Maru, Chairman</p>
            </div>
          </div>
        </section>

        {/* Board of Director's Thought */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Image src="/images/rajnish-karnani.jpg" alt="Rajnish Karnani" width={500} height={600} className="rounded-xl order-2 lg:order-1" />
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Director's Perspective</h2>
              <p className="text-slate-700 italic leading-relaxed">"With a vision to be Nepal’s most respected brand, we’ve made innovation, quality, and integrity our identity. As we expand, we remain committed to responsible practices and impactful partnerships."</p>
              <p className="mt-4 text-slate-900 font-semibold">– Rajnish Karnani, Board of Director</p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>Established in {company.established}, Nepal Ultratech Cement Ltd. has rapidly emerged as a leading name in Nepal’s cement industry.</p>
                <p>We began with a vision to introduce modern manufacturing technologies to Nepal, and today we are equipped with cutting-edge German machinery and a strong, eco-conscious production philosophy.</p>
                <p>Through sustained excellence, we continue to build the foundations of national infrastructure while respecting the environment and empowering communities.</p>
              </div>
            </div>
            <Image src="/images/nepal-ultratech-logo.png" alt="Nepal Ultratech Cement" width={500} height={300} className="w-full h-auto" />
          </div>
        </section>

        {/* Objective */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Our Objective</h2>
          <p className="text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto text-center">
            To provide superior quality cement products and services that exceed customer expectations, enhance infrastructural growth, and support sustainable development across Nepal.
          </p>
        </section>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
              <p className="text-slate-700 leading-relaxed">
                To deliver high-quality cement with a focus on sustainability, innovation, and nation-building, while maintaining ethical and transparent practices.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-yellow-800 mb-4">Our Vision</h3>
              <p className="text-slate-700 leading-relaxed">
                To be Nepal’s most trusted and respected cement brand by driving growth, setting industry benchmarks, and positively impacting society.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Commitment */}
        <section className="mb-16 bg-slate-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Our Commitment</h2>
          <ul className="text-slate-700 space-y-4 list-disc list-inside max-w-3xl mx-auto">
            <li>Adherence to the highest quality standards</li>
            <li>Eco-friendly and sustainable production</li>
            <li>Customer-centric and transparent operations</li>
            <li>Upliftment of local communities</li>
          </ul>
        </section>

        {/* Core Values */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🏗️", title: "Excellence", desc: "Uncompromised quality in all products and operations." },
              { icon: "🌱", title: "Sustainability", desc: "Eco-conscious processes that preserve nature." },
              { icon: "🤝", title: "Integrity", desc: "Honesty and transparency in every relationship." },
              { icon: "🚀", title: "Innovation", desc: "Adopting new tech to improve efficiency and value." },
              { icon: "📈", title: "Growth", desc: "Empowering people and the nation through development." },
              { icon: "🛡️", title: "Responsibility", desc: "Accountable governance and community commitment." },
            ].map((value, index) => (
              <div key={index} className="space-y-4">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{value.title}</h3>
                <p className="text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Management Philosophy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Our Management Philosophy</h2>
          <p className="text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto text-center">
            We believe in collaborative leadership, continuous innovation, and ethical practices. Our team culture is built on trust, performance, and passion to drive long-term value for our customers and stakeholders.
          </p>
        </section>

        {/* Certifications */}
        <section className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Certifications & Standards</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {company.certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{cert.name}</h3>
                  <p className="text-slate-600">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
          {team.map((member: { name: string; role: string; image: string }, index: number) => (
  <div key={index} className="space-y-4">
    <Image src={member.image} alt={member.name} width={150} height={150} className="rounded-full mx-auto" />
    <h3 className="text-xl font-semibold text-slate-900">{member.name}</h3>
    <p className="text-slate-600">{member.role}</p>
  </div>
))}


          </div>
        </section>

        {/* Operational Footprint */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Our Operational Footprint</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Image src="/images/factory-map.jpg" alt="Factory Map" width={600} height={400} className="rounded-lg" />
            <div className="space-y-4 text-slate-700">
              <p>Our plant is located in Dhading district, with proximity to the Prithvi Highway for optimal logistics and supply chain management. This ensures efficient distribution across Nepal.</p>
              <p>We employ world-class German technology and maintain strict quality control at every step of production, ensuring reliability and consistency in every batch of cement.</p>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}
