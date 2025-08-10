import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import companyData from "@/data/company-data.json"

export default function AboutPage() {
  const { company } = companyData

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About Nepal Ultratech Cement</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">{company.description}</p>
        </div>
        
        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Established in {company.established}, Nepal Ultratech Cement Ltd. has been at the forefront of Nepal's construction industry, providing high-quality cement products that have helped build the nation's infrastructure.
              </p>
              <p>
                Our journey began with a vision to bring world-class cement manufacturing technology to Nepal. Through strategic partnerships and continuous innovation, we have established ourselves as a trusted name in the construction materials sector.
              </p>
              <p>
                Today, we operate state-of-the-art manufacturing facilities equipped with advanced German technology, ensuring that every bag of cement meets the highest quality standards while remaining environmentally responsible.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/nepal-ultratech-logo.png"
              alt="Nepal Ultratech Cement"
              width={500}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Chairman's Voice */}
        <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <Image src="/images/chairman-manish-kumar-maru.jpg" alt="Chairman Manish Kumar Maru" width={500} height={600} className="rounded-xl" />
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900 mb-4">Chairman’s Voice</h2>
                      <p className="text-slate-700 italic leading-relaxed">"Nepal Ultratech Cement is more than just a manufacturer — we are builders of progress. Our focus is on quality, sustainability, and fostering a nation built on strong foundations. I thank our stakeholders and customers for their continued trust."</p>
                      <p className="mt-4 text-slate-900 font-semibold">– Manish Kumar Maru, Chairman</p>
                    </div>
            </div>
        </section>

        {/* Board Thought */}
        <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-80 items-center">
                <Image src="/images/rajnish-karnani.png" alt="Rajnish Karnani" width={500} height={600} className="rounded-xl order-2 lg:order-2 ml-25"/>
                    <div className="order-1 lg:order-1">
                      <h2 className="text-3xl font-bold text-slate-900 mb-4">Director's Perspective</h2>
                      <p className="text-slate-700 italic leading-relaxed">"With a vision to be Nepal’s most respected brand, we’ve made innovation, quality, and integrity our identity. As we expand, we remain committed to responsible practices and impactful partnerships."</p>
                      <p className="mt-4 text-slate-900 font-semibold">– Rajnish Karnani, Board of Director</p>
                    </div>
            </div>          
        </section>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
              <p className="text-slate-700 leading-relaxed">
                To provide superior quality cement products that enable sustainable construction solutions while contributing to Nepal's economic growth and infrastructure development.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-yellow-800 mb-4">Our Vision</h3>
              <p className="text-slate-700 leading-relaxed">
                To be Nepal's most trusted cement manufacturer, recognized for innovation, quality, and commitment to sustainable construction practices.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Objective */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Objective</h2>
            <p className="text-slate-700 text-lg">
              To become Nepal’s most advanced and reliable cement manufacturer, empowering national infrastructure with uncompromised quality, innovation, and responsibility.
            </p>
          </div>
        </section>

        {/* Management Philosophy */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Management Philosophy</h2>
            <p className="text-slate-700 text-lg">
              Our leadership is driven by vision, efficiency, and responsibility. We nurture a culture of accountability and continuous improvement, empowering every department to strive for operational excellence.
            </p>
          </div>
        </section>

        {/* Core Values & Commitment */}
        <section className="py-16 bg-slate-50">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Core Values & Our Commitment</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
            {["Integrity", "Innovation", "Quality Assurance", "Sustainability", "Safety First", "Nation Building"].map((value, i) => (
              <div key={i} className="space-y-3">
                <div className="text-4xl">{["🔍", "⚙️", "📦", "♻️", "👷‍♂️", "🇳🇵"][i]}</div>
                <h3 className="text-xl font-semibold">{value}</h3>
                <p className="text-slate-600">{company.values[i]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* At a Glance */}
        <section className="py-20">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">At a Glance</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {company.glance.map((item, index) => (
              <Card key={index} className="p-6 text-center">
                <Image src={item.icon} alt={item.title} width={140} height={140} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {company.team.map((member, index) => (
              <Card key={index} className="text-center p-6">
                <Image src={member.image} alt={member.name} width={180} height={180} className="mx-auto rounded-full mb-4" />
                <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
                <p className="text-slate-600">{member.role}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <div className="bg-gray-50 rounded-lg p-8">
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
        </div>
      </div>
    </main>
  )
}
