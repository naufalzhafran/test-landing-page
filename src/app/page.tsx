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
                width={120}
                height={120}
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
                <Link
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
                </Link>
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
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200 hero-subtitle">
              Competitive pricing, and reliable shipping worldwide.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              {/* <Link
                href="#contact"
                className="btn btn-secondary text-lg px-8 py-4 bg-white text-gray-900 hover:bg-gray-100"
              >
                Our Products
              </Link>
              <Link
                href="#contact"
                className="btn btn-secondary text-lg px-8 py-4 bg-white text-gray-900 hover:bg-gray-100"
              >
                Contact Us
              </Link> */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">20+</div>
                <div className="text-gray-300">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10K+</div>
                <div className="text-gray-300">Tons Exported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">ISO</div>
                <div className="text-gray-300">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Description */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                The Indonesian Charcoal Experience
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
                emoji: "🥥",
                title: "Coconut Shell Charcoal Briquettes",
                description:
                  "Perfect for shisha and hookah. Clean burn, minimal ash, long-lasting heat.",
                price: "$570/ton",
                features: [
                  "2+ hours burning time",
                  "1.6% ash content",
                  "Odorless and smokeless",
                  "Multiple shapes available",
                ],
              },
              {
                id: "premium-wood-charcoal",
                emoji: "🪵",
                title: "Premium Wood Charcoal",
                description:
                  "Made from Halaban and Binchotan wood. High heat output and durability.",
                price: "$220/ton",
                features: [
                  "High calorific value",
                  "Low moisture content",
                  "Long burning time",
                  "Perfect for grilling",
                ],
              },
              {
                id: "bbq-charcoal-briquettes",
                emoji: "🔥",
                title: "BBQ Charcoal Briquettes",
                description:
                  "Consistent heat and clean burn for perfectly cooked meals every time.",
                price: "$650/ton",
                features: [
                  "Even heat distribution",
                  "No sparks or pops",
                  "Easy to light",
                  "Food-safe materials",
                ],
              },
              {
                id: "sawdust-charcoal",
                emoji: "🌾",
                title: "Sawdust Charcoal",
                description:
                  "Engineered for steady, long-lasting heat. Perfect for restaurants and events.",
                price: "$740/ton",
                features: [
                  "Consistent heat output",
                  "Longer burning time",
                  "Minimal ash residue",
                  "Eco-friendly production",
                ],
              },
              {
                id: "hardwood-charcoal",
                emoji: "🌳",
                title: "Premium Hardwood Charcoal",
                description:
                  "High-grade hardwood charcoal with superior heat retention and minimal smoke.",
                price: "$480/ton",
                features: [
                  "4+ hours burning time",
                  "High carbon content",
                  "Low moisture",
                  "Consistent size pieces",
                ],
              },
              {
                id: "bamboo-charcoal",
                emoji: "🎋",
                title: "Bamboo Charcoal",
                description:
                  "Sustainable bamboo charcoal with excellent heat output and eco-friendly properties.",
                price: "$520/ton",
                features: [
                  "Fast ignition",
                  "Clean burning",
                  "Sustainable source",
                  "Natural purification",
                ],
              },
              {
                id: "restaurant-grade-briquettes",
                emoji: "🍳",
                title: "Restaurant Grade Briquettes",
                description:
                  "Professional-grade briquettes designed for commercial kitchens and restaurants.",
                price: "$680/ton",
                features: [
                  "5+ hours burning time",
                  "Consistent temperature",
                  "Food service approved",
                  "Bulk packaging available",
                ],
              },
              {
                id: "hookah-premium-cubes",
                emoji: "💨",
                title: "Hookah Premium Cubes",
                description:
                  "Premium cube-shaped briquettes specifically designed for hookah lounges.",
                price: "$750/ton",
                features: [
                  "Perfect cube shape",
                  "No taste interference",
                  "Long-lasting heat",
                  "Professional grade",
                ],
              },
              {
                id: "eco-charcoal-logs",
                emoji: "♻️",
                title: "Eco Charcoal Logs",
                description:
                  "Environmentally friendly charcoal logs made from recycled wood waste.",
                price: "$380/ton",
                features: [
                  "100% recycled materials",
                  "Carbon neutral",
                  "Long burning logs",
                  "Eco-certified",
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
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take your brand to the next level with our OEM services. Custom
              products, packaging, and branding solutions.
            </p>
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
              Partnership Opportunities
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Join forces with Indonesia&apos;s leading charcoal supplier. We offer
              flexible partnership models to help you grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl">🤝</div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Distribution Partners
              </h3>
              <p className="text-white mb-6">
                Become an exclusive distributor in your region. Access wholesale
                pricing and marketing support.
              </p>
              <ul className="text-sm text-gray-100 space-y-2">
                <li>• Exclusive territory rights</li>
                <li>• Marketing materials included</li>
                <li>• Volume-based discounts</li>
                <li>• Technical support</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl">🏭</div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Private Label Partners
              </h3>
              <p className="text-white mb-6">
                Build your own charcoal brand with our manufacturing expertise
                and quality standards.
              </p>
              <ul className="text-sm text-gray-100 space-y-2">
                <li>• Custom product development</li>
                <li>• Your brand, our quality</li>
                <li>• Flexible MOQ requirements</li>
                <li>• Design & packaging support</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl">🌍</div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Import Partners
              </h3>
              <p className="text-white mb-6">
                Established importers looking for reliable supply chains and
                consistent quality products.
              </p>
              <ul className="text-sm text-gray-100 space-y-2">
                <li>• Guaranteed supply reliability</li>
                <li>• Competitive pricing tiers</li>
                <li>• Flexible payment terms</li>
                <li>• Logistics coordination</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Why Partner With Us?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-green-400 mr-3 mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Proven Track Record
                      </h4>
                      <p className="text-gray-100 text-sm">
                        Over 500+ satisfied clients across 20+ countries
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-green-400 mr-3 mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Quality Assurance
                      </h4>
                      <p className="text-gray-100 text-sm">
                        ISO certified with rigorous quality control processes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-green-400 mr-3 mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Flexible Solutions
                      </h4>
                      <p className="text-gray-100 text-sm">
                        Customizable products and packaging to meet your needs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-green-400 mr-3 mt-1">✓</div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Dedicated Support
                      </h4>
                      <p className="text-gray-100 text-sm">
                        24/7 customer service and technical assistance
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold mb-4 text-white">
                  Ready to Partner?
                </h3>
                <p className="text-gray-100 mb-6">
                  Let&apos;s discuss how we can build a successful partnership
                  together.
                </p>
                <div className="space-y-3">
                  <a
                    href="#contact"
                    className="block bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    Start Partnership Discussion
                  </a>
                  <div className="text-sm text-gray-200">
                    or call us directly at +62 XXX XXX XXXX
                  </div>
                </div>
              </div>
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
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your charcoal import business? Contact us today for
              quotes, samples, or any questions.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Photo Gallery */}
            <div className="lg:sticky lg:top-24">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                  See Our Operations
                </h3>
                <p className="text-gray-600">
                  Take a look at our modern facilities and quality processes
                </p>
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
                <p className="text-gray-200">
                  Let&apos;s discuss your charcoal requirements
                </p>
              </div>

              {/* Contact Information */}
              <div className="px-8 py-6 bg-gray-50 border-b border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="text-lg mr-3 text-gray-600">📧</div>
                    <div>
                      <div className="font-medium text-gray-800">Email</div>
                      <div className="text-sm text-gray-600">
                        info@premiumcharcoal.com
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
                  </div>

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

                  <div className="text-center pt-4">
                    <p className="text-sm text-gray-500">
                      We typically respond within 2-4 hours during business
                      hours
                    </p>
                  </div>
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
              <p className="text-gray-400 mb-4">
                Indonesia&apos;s leading world-class quality coconut shell
                charcoal, wood charcoal, and briquettes supplier with
                competitive pricing and reliable shipping worldwide.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                <span>📧 info@premiumcharcoal.com</span>
              </div>
              <div className="flex space-x-4">
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
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#products"
                    className="hover:text-white transition-colors"
                  >
                    Coconut Shell Briquettes
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="hover:text-white transition-colors"
                  >
                    Premium Wood Charcoal
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="hover:text-white transition-colors"
                  >
                    BBQ Charcoal Briquettes
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="hover:text-white transition-colors"
                  >
                    Hookah Premium Cubes
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="hover:text-white transition-colors"
                  >
                    Restaurant Grade Briquettes
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="hover:text-white transition-colors"
                  >
                    View All Products
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">
                Services & Partnership
              </h4>
              <ul className="space-y-2 text-gray-400">
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
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company Info</h4>
              <ul className="space-y-2 text-gray-400">
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
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
              <p>
                &copy; 2025 PT. Skala Sinergi Indonesia. Sinergi Charcoal
                Nusantara. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
