import Link from "next/link";
import Image from "next/image";
import SectionCarousel from "../components/SectionCarousel";
import ProductCarousel from "../components/ProductCarousel";
import QualitySection from "../components/QualitySection";
import FAQ from "../components/FAQ";
import GalleryCarousel from "../components/GalleryCarousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-accent shadow-md sticky top-0 z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Company Logo"
                width={180}
                height={180}
                style={{ verticalAlign: "middle", marginRight: "0px" }} // Inline styling example
              />
            </div>

            <div className="flex items-center">
              <nav className="hidden md:flex space-x-8 mr-10">
                <Link
                  href="#products"
                  className="text-gray-700 hover:text-gray-900 transition-colors font-bold"
                >
                  Products
                </Link>
                <Link
                  href="#about"
                  className="text-gray-700 hover:text-gray-900 transition-colors font-bold"
                >
                  About Us
                </Link>
                {/* <Link
                  href="#quality"
                  className="text-gray-700 hover:text-gray-900 transition-colors font-bold"
                >
                  Quality
                </Link>
                <Link
                  href="#shipping"
                  className="text-gray-700 hover:text-gray-900 transition-colors font-bold"
                >
                  Shipping
                </Link> */}
              </nav>
              <div className="flex items-center space-x-4">
                <Link href="#contact" className="btn btn-primary">
                  Contact Us!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-primary hero-pattern text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 hero-title text-hero-white font-heading">
              Sinergi Charcoal Nusantara
              <span className="text-gradient block">Charcoal & Briquettes</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200 hero-subtitle">
              Indonesia&apos;s leading world-class quality coconut shell
              charcoal, wood charcoal, and briquettes from Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              {/* <Link
                href="/Sinergi Charcoal Nusantara - PT Skala Sinergi Indonesia.pdf"
                className="btn btn-secondary text-lg px-8 py-4 bg-white text-gray-900 hover:bg-gray-100"
              >
                Product Catalogue
              </Link> */}
              <a
                href="/Sinergi Charcoal Nusantara - PT Skala Sinergi Indonesia.pdf"
                className="btn btn-secondary text-lg px-8 py-4 bg-white text-gray-900 hover:bg-gray-100"
                download
                target="_blank"
                rel="noopener noreferrer"
                >
                Product Catalogue
                </a>
              <Link
                href="#contact"
                className="btn btn-secondary text-lg px-8 py-4 bg-white text-gray-900 hover:bg-gray-100"
              >
                Company Profile
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center justify-center h-full">
                  <img
                    src="/partners/skala.webp"
                    alt="Skala Sinergi Indonesia"
                    className="h-14 w-auto mx-auto object-contain filter brightness-100 mb-3"
                  />
                  <p className="text-white text-xs text-center font-medium leading-tight">
                  PT Skala Sinergi Indonesia
                  </p>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center justify-center h-full">
                  <img
                    src="/partners/Mentri Perdagangan Republic Indonesia.webp"
                    alt="Ministry of Trade Republic Indonesia"
                    className="h-14 w-auto mx-auto object-contain filter brightness-100 mb-3"
                  />
                  <p className="text-white text-xs text-center font-medium leading-tight">
                    Ministry of Trade Republic Indonesia
                  </p>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center justify-center h-full">
                  <img
                    src="/partners/Lambang_Bea_dan_Cukai.svg.webp"
                    alt="Directorate General of Customs and Excise"
                    className="h-14 w-auto mx-auto object-contain filter brightness-100 mb-3"
                  />
                  <p className="text-white text-xs text-center font-medium leading-tight">
                    Directorate General of Customs and Excise
                  </p>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                <div className="flex flex-col items-center justify-center h-full">
                  <img
                    src="/partners/Kamar Dagang Indonesia.webp"
                    alt="Indonesian Chamber of Commerce"
                    className="h-14 w-auto mx-auto object-contain filter brightness-100 mb-3"
                  />
                  <p className="text-white text-xs text-center font-medium leading-tight">
                    Indonesian Chamber of Commerce
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10 bg-gradient-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Description */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                PT. Skala Sinergi Indonesia
              </h2>
              <p className="text-xl text-gray-50 max-w-3xl">
                With extensive experience in global trade, we deliver premium
                charcoal products worldwide. From production to packaging, we
                offer complete OEM solutions tailored to your needs.
              </p>
            </div>
            {/* Right: Carousel */}
            <div>
              <SectionCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              Our Premium Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our range of premium charcoal products, crafted to meet
              diverse needs and international standards.
            </p>
          </div>
          <ProductCarousel
            products={[
              {
                id: "coconut-shell-briquettes",
                image: "/product-selection/Coconut Briquettes.webp",
                title: "Coconut Shell Charcoal",
                description:
                  "Perfect for shisha and hookah. Clean burn, minimal ash, long-lasting heat.",
                price: "Inquiry Us!",
                features: [
                  // "2+ hours burning time",
                  // "1.6% ash content",
                  // "Odorless and smokeless",
                  // "Multiple shapes available",
                ],
              },
              {
                id: "premium-wood-charcoal",
                image: "/product-selection/Wood Charcoal Briquettes.webp",
                title: "Premium Wood Charcoal",
                description:
                  "Made from Halaban and Binchotan wood. High heat output and durability.",
                price: "Inquiry Us!",
                features: [
                  // "High calorific value",
                  // "Low moisture content",
                  // "Long burning time",
                  // "Perfect for grilling",
                ],
              },
              {
                id: "hookah-premium-cubes",
                image: "/product-selection/Cube Sisha Briquettes.webp",
                title: "Hookah Premium Cubes",
                description:
                  "Premium cube-shaped briquettes specifically designed for hookah lounges.",
                price: "Inquiry Us!",
                features: [
                  // "Perfect cube shape",
                  // "No taste interference",
                  // "Long-lasting heat",
                  // "Professional grade",
                ],
              },
              {
                id: "cylinder-briquettes",
                image: "/product-selection/Cylinder Briquettes.webp",
                title: "Cylinder Charcoal Briquettes",
                description:
                  "Uniform cylinder shape for consistent heat distribution and easy handling.",
                price: "Inquiry Us!",
                features: [
                  // "Uniform cylinder shape",
                  // "Even heat distribution",
                  // "Easy to stack and store",
                  // "Consistent burning time",
                ],
              },
              {
                id: "pillow-briquettes",
                image: "/product-selection/Pillow Briquettes.webp",
                title: "Pillow BBQ Briquettes",
                description:
                  "Classic pillow-shaped briquettes perfect for BBQ and grilling enthusiasts.",
                price: "Inquiry Us!",
                features: [
                  // "Classic pillow shape",
                  // "Ideal for BBQ grilling",
                  // "Long burning duration",
                  // "Food-safe materials",
                ],
              },
              {
                id: "wood-pellets",
                image: "/product-selection/Wood Pellets.webp",
                title: "Premium Wood Pellets",
                description:
                  "High-quality wood pellets for efficient heating and cooking applications.",
                price: "Inquiry Us!",
                features: [
                  // "100% natural wood",
                  // "Low ash content",
                  // "High energy density",
                  // "Eco-friendly fuel",
                ],
              },
            ]}
          />
        </div>
      </section>

      {/* Quality Section */}
      <QualitySection />

      {/* OEM Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              Our Services
            </h2>
            {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take your brand to the next level with our OEM services. Custom
              products, packaging, and branding solutions.
            </p> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">📦</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Packaging</h3>
              <p className="text-gray-600">
                Your brand, your design. We handle all packaging needs.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🏷️</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Private Labeling</h3>
              <p className="text-gray-600">
                Showcase your unique brand with personalized labels.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🔧</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Products</h3>
              <p className="text-gray-600">
                Tailor shapes, sizes, and compositions to your needs.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🚀</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">End-to-End Service</h3>
              <p className="text-gray-600">
                From concept to delivery, we handle every detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partnership" className="py-20 bg-gradient-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading text-white">
              Our Partners & Certifications
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Trusted by leading organizations and certified by government
              institutions
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center">
              {[
                {
                  name: "Asosiasi Logistik & Forwarding Indonesia",
                  image:
                    "/partners/Asosiasi Logistik & Forwarding Indonesia.webp",
                },
                {
                  name: "Carsurin",
                  image: "/partners/Carsurin.webp",
                },
                {
                  name: "go4WorldBusiness",
                  image: "/partners/go4WorldBusiness.webp",
                },
                {
                  name: "Indonesian Chamber of Commerce",
                  image: "/partners/Kamar Dagang Indonesia.webp",
                },
                {
                  name: "Kementerian Hukum Dan HAM",
                  image:
                    "/partners/Kementerian-Hukum-Dan-Ham-Kemenkumham-Logo-Vector-150x150.webp",
                },
                {
                  name: "Directorate General of Customs and Excise",
                  image: "/partners/Lambang_Bea_dan_Cukai.svg.webp",
                },
                {
                  name: "Anindya Certification and Testing",
                  image: "/partners/LOGO_ACT_NEW_clear-bg.webp",
                },
                {
                  name: "Direktorat Jenderal Pajak",
                  image: "/partners/Logo_djp.svg-166x300.webp",
                },
                {
                  name: "BKPM",
                  image:
                    "/partners/Logo_Kementerian_Investasi_BKPM_Warna_Square.webp",
                },
                {
                  name: "Sucofindo",
                  image: "/partners/Logo_sucofindo.webp",
                },
                {
                  name: "MSDS",
                  image: "/partners/logo-msds.webp",
                },
                {
                  name: "Maersk",
                  image: "/partners/Maersk_1-300x271.webp",
                },
                {
                  name: "Ministry of Trade Republic Indonesia",
                  image: "/partners/Mentri Perdagangan Republic Indonesia.webp",
                },
                {
                  name: "Int. Coconut Community",
                  image: "/partners/cococommunity.webp",
                },
              ].map((partner, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-between p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300 hover:scale-105 h-32 w-full"
                >
                  <div className="flex items-center justify-center h-16 w-full">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      width={120}
                      height={80}
                      className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <p className="text-white text-xs text-center font-medium leading-tight h-8 flex items-center">
                    {partner.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              Quotation & Inquiry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contact us today for quotes, samples, or any questions.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Photo Gallery */}
            <div className="lg:sticky lg:top-24">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                  Our gallery
                </h3>
                {/* <p className="text-gray-600">
                  Take a look at our modern facilities and quality processes
                </p> */}
              </div>
              <GalleryCarousel />
            </div>

            {/* Right Column - Enhanced Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-8 py-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Contact Us
                </h3>
                {/* <p className="text-gray-200">
                  Let&apos;s discuss your charcoal requirements
                </p> */}
              </div>

              {/* Contact Information */}
              <div className="px-8 py-6 bg-gray-50 border-b border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="text-lg mr-3 text-gray-600">📧</div>
                    <div>
                      <div className="font-medium text-gray-800">Email</div>
                      <div className="text-sm text-gray-600">
                        sales@skalasinergi.id
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-lg mr-3 text-gray-600">📱</div>
                    <div>
                      <div className="font-medium text-gray-800">WhatsApp</div>
                      <div className="text-sm text-gray-600">
                        +62 XXX XXX XXXX
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="px-8 py-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  {/* 
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Product Interest
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white">
                      <option>Select a product category</option>
                      <option>Coconut Shell Charcoal Briquettes</option>
                      <option>Premium Wood Charcoal</option>
                      <option>BBQ Charcoal Briquettes</option>
                      <option>Sawdust Charcoal</option>
                      <option>Hardwood Charcoal</option>
                      <option>Bamboo Charcoal</option>
                      <option>Restaurant Grade Briquettes</option>
                      <option>Hookah Premium Cubes</option>
                      <option>Custom/OEM Products</option>
                      <option>Bulk Orders</option>
                    </select>
                  </div> */}

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none"
                      placeholder="Tell us about your requirements, quantity needed, shipping destination, or any specific questions..."
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      className="flex-1 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg"
                    >
                      Send Message
                    </button>
                    <button
                      type="button"
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center"
                    >
                      <span className="mr-2">💬</span>
                      WhatsApp
                    </button>
                  </div>

                  {/* <div className="text-center pt-4">
                    <p className="text-sm text-gray-500">
                      We typically respond within 2-4 hours during business
                      hours
                    </p>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-heading">
                Sinergi Charcoal Nusantara
              </h3>
              <p className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                Puri Botanic Junction Blok I9 No. 5 Jl. Joglo Raya, RT. 007, RW.
                001. Kelurahan Joglo. Kecamatan Kembangan, Jakarta Barat.
                Provinsi DKI Jakarta, 11640.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                <span>sales@skalasinergi.id</span>
              </div>
              {/* <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </div> */}
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Head Office</h4>
              <div className="space-y-4">
                <div className="text-sm text-gray-400">
                  {/* <p className="mb-2">📍 Location:</p>
                  <p className="leading-relaxed">
                    Puri Botanic Junction Blok I9 No. 5<br/>
                    Jl. Joglo Raya, RT. 007, RW. 001<br/>
                    Kelurahan Joglo, Kecamatan Kembangan<br/>
                    Jakarta Barat, DKI Jakarta 11640
                  </p> */}
                </div>
                <div className="w-full h-48 rounded-lg overflow-hidden border border-gray-700">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d106.7!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDInMDAuMCJF!5e0!3m2!1sen!2sid!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="PT. Skala Sinergi Indonesia Head Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Product Catalogue</h4>
              {/* <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#partnership"
                    className="hover:text-white transition-colors"
                  >
                    Distribution Partners
                  </a>
                </li>
                <li>
                  <a
                    href="#partnership"
                    className="hover:text-white transition-colors"
                  >
                    Private Label Partners
                  </a>
                </li>
                <li>
                  <a
                    href="#partnership"
                    className="hover:text-white transition-colors"
                  >
                    Import Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Custom Packaging
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    OEM Manufacturing
                  </a>
                </li>
                <li>
                  <a
                    href="#quality"
                    className="hover:text-white transition-colors"
                  >
                    Quality Assurance
                  </a>
                </li>
              </ul> */}
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us!</h4>
              {/* <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#quality"
                    className="hover:text-white transition-colors"
                  >
                    Quality Standards
                  </a>
                </li>
                <li>
                  <a
                    href="#partnership"
                    className="hover:text-white transition-colors"
                  >
                    Partnership Opportunities
                  </a>
                </li>
                <li>
                  <a
                    href="#shipping"
                    className="hover:text-white transition-colors"
                  >
                    Shipping & Logistics
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    ISO Certification
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
              <p>
                &copy; 2025 PT. Skala Sinergi Indonesia. Sinergi Charcoal
                Nusantara.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
