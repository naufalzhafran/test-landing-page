import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Indonesia Charcoal Briquettes Manufacturer | Export Quality Coconut & Wood Charcoal | Sinergi Charcoal Nusantara",
  description: "Leading Indonesian charcoal supplier offering premium coconut shell charcoal, wood charcoal, and briquettes for global export. ISO certified, competitive pricing, worldwide shipping.",
  keywords: [
    "Indonesian charcoal",
    "coconut charcoal export",
    "wood charcoal supplier",
    "charcoal briquettes",
    "shisha charcoal",
    "BBQ charcoal",
    "charcoal manufacturer Indonesia",
    "bulk charcoal supplier",
    "premium charcoal",
    "halaban charcoal",
    "coconut shell charcoal"
  ],
  authors: [{ name: "Premium Indonesian Charcoal" }],
  creator: "Premium Indonesian Charcoal",
  publisher: "Premium Indonesian Charcoal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Premium Indonesian Charcoal Supplier | Export Quality Products",
    description: "Leading Indonesian charcoal supplier offering premium coconut shell charcoal, wood charcoal, and briquettes for global export.",
    url: "https://your-domain.com",
    siteName: "Premium Indonesian Charcoal",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Indonesian Charcoal Products",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Indonesian Charcoal Supplier",
    description: "Leading Indonesian charcoal supplier offering premium coconut shell charcoal, wood charcoal, and briquettes for global export.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://your-domain.com" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1a1a1a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Premium Indonesian Charcoal",
              url: "https://your-domain.com",
              logo: "https://your-domain.com/logo.png",
              description: "Leading Indonesian charcoal supplier offering premium coconut shell charcoal, wood charcoal, and briquettes for global export.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Your Street Address",
                addressLocality: "Jakarta",
                addressRegion: "DKI Jakarta",
                postalCode: "12345",
                addressCountry: "ID"
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62-XXX-XXX-XXXX",
                contactType: "customer service",
                availableLanguage: ["English", "Indonesian"]
              },
              sameAs: [
                "https://www.linkedin.com/company/your-company",
                "https://www.instagram.com/your-company"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-white text-gray-900 font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
