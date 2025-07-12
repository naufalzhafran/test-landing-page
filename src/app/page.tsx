import Link from "next/link";
import Image from "next/image";

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
                width={200}
                height={200}
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
              Indonesia's leading world-class quality coconut shell charcoal,
              wood charcoal, and briquettes from Indonesia.
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              The Indonesian Charcoal Experience
            </h2>
            <p className="text-xl text-gray-50 max-w-3xl mx-auto">
              With extensive experience in global trade, we deliver premium
              charcoal products worldwide. From production to packaging, we
              offer complete OEM solutions tailored to your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <div className="text-2xl">💰</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Competitive Pricing
              </h3>
              <p className="text-gray-600">
                Most competitive pricing without compromising on quality
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <div className="text-2xl">🛡️</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Reliable</h3>
              <p className="text-gray-600">
                Money-back guarantee if you&apos;re not satisfied with our
                products
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <div className="text-2xl">⭐</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Rigorous quality control to guarantee performance and
                consistency
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <div className="text-2xl">⚡</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Response</h3>
              <p className="text-gray-600">
                Quick and reliable communication for all your inquiries
              </p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Coconut Shell Charcoal Briquettes */}
            <div className="card card-hover">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-6xl">🥥</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Coconut Shell Charcoal Briquettes
                </h3>
                <p className="text-gray-600 mb-4">
                  Perfect for shisha and hookah. Clean burn, minimal ash,
                  long-lasting heat.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">
                    $570/ton
                  </span>
                  <span className="text-sm text-gray-500">Starting from</span>
                </div>
                <ul className="mt-4 space-y-1 text-sm text-gray-600">
                  <li>• 2+ hours burning time</li>
                  <li>• 1.6% ash content</li>
                  <li>• Odorless and smokeless</li>
                  <li>• Multiple shapes available</li>
                </ul>
              </div>
            </div>

            {/* Wood Charcoal */}
            <div className="card card-hover">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-6xl">🪵</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Premium Wood Charcoal
                </h3>
                <p className="text-gray-600 mb-4">
                  Made from Halaban and Binchotan wood. High heat output and
                  durability.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">
                    $220/ton
                  </span>
                  <span className="text-sm text-gray-500">Starting from</span>
                </div>
                <ul className="mt-4 space-y-1 text-sm text-gray-600">
                  <li>• High calorific value</li>
                  <li>• Low moisture content</li>
                  <li>• Long burning time</li>
                  <li>• Perfect for grilling</li>
                </ul>
              </div>
            </div>

            {/* BBQ Charcoal Briquettes */}
            <div className="card card-hover">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-6xl">🔥</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  BBQ Charcoal Briquettes
                </h3>
                <p className="text-gray-600 mb-4">
                  Consistent heat and clean burn for perfectly cooked meals
                  every time.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">
                    $650/ton
                  </span>
                  <span className="text-sm text-gray-500">Starting from</span>
                </div>
                <ul className="mt-4 space-y-1 text-sm text-gray-600">
                  <li>• Even heat distribution</li>
                  <li>• No sparks or pops</li>
                  <li>• Easy to light</li>
                  <li>• Food-safe materials</li>
                </ul>
              </div>
            </div>

            {/* Sawdust Charcoal */}
            <div className="card card-hover">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <div className="text-6xl">🌾</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sawdust Charcoal</h3>
                <p className="text-gray-600 mb-4">
                  Engineered for steady, long-lasting heat. Perfect for
                  restaurants and events.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">
                    $740/ton
                  </span>
                  <span className="text-sm text-gray-500">Starting from</span>
                </div>
                <ul className="mt-4 space-y-1 text-sm text-gray-600">
                  <li>• Consistent heat output</li>
                  <li>• Longer burning time</li>
                  <li>• Minimal ash residue</li>
                  <li>• Eco-friendly production</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section id="quality" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              World-Class Quality Assurance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every batch undergoes rigorous testing and quality control to
              ensure consistent performance.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Certifications & Documentation
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-green-600 font-semibold">
                    ISO 9001:2015
                  </div>
                  <div className="text-sm text-gray-600">
                    Quality Management
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-green-600 font-semibold">MSDS</div>
                  <div className="text-sm text-gray-600">
                    Material Safety Data
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-green-600 font-semibold">COA</div>
                  <div className="text-sm text-gray-600">
                    Certificate of Analysis
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-green-600 font-semibold">COO</div>
                  <div className="text-sm text-gray-600">
                    Certificate of Origin
                  </div>
                </div>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Independent laboratory testing for each batch
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Complete export documentation provided
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Factory audit and inspection available
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Self-heating test (SHT) certified
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                Quality Specifications
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Calorific Value</span>
                  <span className="font-semibold">7,500+ cal/g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ash Content</span>
                  <span className="font-semibold">1.6 - 2.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Moisture Content</span>
                  <span className="font-semibold">6 - 8%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Fixed Carbon</span>
                  <span className="font-semibold">75 - 80%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Burning Time</span>
                  <span className="font-semibold">2+ hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ignition Time</span>
                  <span className="font-semibold">8 - 12 min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OEM Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              Complete OEM Solutions
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

      {/* Shipping Section */}
      <section id="shipping" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              Worldwide Shipping & Delivery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reliable shipping to over 20 countries with expert logistics and
              flexible payment terms.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Shipping Destinations & Timeline
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">
                      East Asia (Korea, Japan, China)
                    </span>
                    <span className="text-gray-600">21-35 days</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">
                      Middle East (UAE, Saudi, Qatar)
                    </span>
                    <span className="text-gray-600">30-45 days</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Europe</span>
                    <span className="text-gray-600">38-55 days</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">North America</span>
                    <span className="text-gray-600">30-70 days</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">India</span>
                    <span className="text-gray-600">35-65 days</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                Shipping Information
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Container Options
                  </h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• 20ft FCL: 17.5 - 20 tons</li>
                    <li>• 40ft HQ FCL: 25 - 26 tons</li>
                    <li>• LCL available for smaller orders</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Payment Terms
                  </h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Currencies: USD, EUR, CNY</li>
                    <li>• Methods: T/T, L/C</li>
                    <li>• Flexible payment options</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Packaging
                  </h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Thermal blanket protection</li>
                    <li>• Moisture-proof packaging</li>
                    <li>• Custom branding available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Samples Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              Try Before You Buy
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the quality of our products firsthand with up to 2kg of
              free samples. See why we&apos;re Indonesia&apos;s trusted charcoal
              supplier.
            </p>
            <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Free Sample Package Includes:
                  </h3>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      Up to 2kg of your chosen products
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      Quality certificates and specifications
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      Detailed product information
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      Pricing and MOQ details
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">📦</div>
                  <p className="text-gray-600 mb-6">
                    Samples are FREE - you only pay for shipping via DHL, FedEx,
                    or EMS
                  </p>
                  <Link
                    href="#contact"
                    className="btn btn-accent text-lg px-8 py-3 inline-block"
                  >
                    Request Free Samples
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our charcoal products and
              services.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-2">
                What is your minimum order quantity (MOQ)?
              </h3>
              <p className="text-gray-600">
                Our MOQ is typically 18 tons (20ft container). For established
                customers, we can accommodate smaller orders. US and Russia
                customers can order from 1 ton via LCL.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-2">
                How do you guarantee product quality?
              </h3>
              <p className="text-gray-600">
                Every batch undergoes rigorous testing at our ISO 9001:2015
                certified facility. We provide independent laboratory reports,
                certificates of analysis, and complete documentation for each
                shipment.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-2">
                Can you provide custom packaging and branding?
              </h3>
              <p className="text-gray-600">
                Yes! We offer complete OEM services including custom packaging,
                private labeling, and product customization. Our in-house
                printing facility can handle all your branding needs.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-2">
                What payment terms do you accept?
              </h3>
              <p className="text-gray-600">
                We accept various payment methods including T/T (bank transfer),
                L/C (letter of credit), and multiple currencies (USD, EUR, CNY).
                Payment terms are flexible based on order size and customer
                relationship.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-2">
                How long does production and shipping take?
              </h3>
              <p className="text-gray-600">
                Production takes 10-14 days for standard orders. Shipping time
                varies by destination: 21-35 days to East Asia, 30-45 days to
                Middle East, 38-55 days to Europe, and 30-70 days to North
                America.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📧</div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">info@premiumcharcoal.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📱</div>
                  <div>
                    <h4 className="font-semibold">WhatsApp</h4>
                    <p className="text-gray-600">+62 XXX XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-4">📍</div>
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-gray-600">
                      Jakarta, Indonesia
                      <br />
                      Factory: Central Java, Indonesia
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-4">🕒</div>
                  <div>
                    <h4 className="font-semibold">Working Hours</h4>
                    <p className="text-gray-600">
                      Monday - Saturday: 08:00 - 17:00 (GMT+7)
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6">Quick Contact Form</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Interest
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent">
                    <option>Select a product</option>
                    <option>Coconut Shell Charcoal Briquettes</option>
                    <option>Wood Charcoal</option>
                    <option>BBQ Charcoal Briquettes</option>
                    <option>Sawdust Charcoal</option>
                    <option>Custom/OEM Products</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <button type="submit" className="w-full btn btn-primary">
                  Send Message
                </button>
              </form>
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
                Premium Indonesian Charcoal
              </h3>
              <p className="text-gray-400 mb-4">
                Indonesia&apos;s leading charcoal supplier, delivering premium
                quality products to over 20 countries worldwide.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Coconut Shell Charcoal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Wood Charcoal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    BBQ Briquettes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Sawdust Charcoal
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    OEM Manufacturing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Custom Packaging
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Private Labeling
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Quality Control
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#about" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#quality" className="hover:text-white">
                    Quality Assurance
                  </a>
                </li>
                <li>
                  <a href="#shipping" className="hover:text-white">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 PT. Skala Sinergi Indonesia. Sinergi Charcoal
              Nusantara. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
