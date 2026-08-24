import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { business } from "@/lib/business";
import { towns } from "@/lib/locations";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: "Renovate Design | Kitchen & Bathroom Renovations in Glasgow",
    template: "%s | Renovate Design",
  },
  description:
    "Renovate Design is a home renovation company serving Glasgow, Renfrewshire and Inverclyde, specialising in kitchens, bathrooms, joinery and interior design from first sketch to final finish.",
  openGraph: {
    type: "website",
    siteName: business.name,
    title: "Renovate Design | Kitchen & Bathroom Renovations in Glasgow",
    description:
      "Premium home renovations across Glasgow, Renfrewshire and Inverclyde: kitchens, bathrooms, joinery and interior design.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: "/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: business.name,
  url: business.siteUrl,
  telephone: business.phoneHref.replace("tel:", ""),
  image: `${business.siteUrl}/logo.png`,
  address: {
    "@type": "PostalAddress",
    addressRegion: "Scotland",
    addressCountry: "GB",
  },
  areaServed: towns.map((town) => ({
    "@type": "City",
    name: town.name,
  })),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: [business.social.instagram, business.social.facebook, business.social.tiktok],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Renovation Services",
    itemListElement: [
      { "@type": "Service", name: "Kitchen Renovations", url: `${business.siteUrl}/kitchens` },
      { "@type": "Service", name: "Bathroom Renovations", url: `${business.siteUrl}/bathrooms` },
      { "@type": "Service", name: "Joinery", url: `${business.siteUrl}/joinery` },
      { "@type": "Service", name: "Interior Design", url: `${business.siteUrl}/interiors` },
      { "@type": "Service", name: "Trade Supply", url: `${business.siteUrl}/trade-supply` },
    ].map((item) => ({ "@type": "Offer", itemOffered: item })),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
