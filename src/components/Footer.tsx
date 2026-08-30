import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Instagram, Star } from "lucide-react";
import { business } from "@/lib/business";
import { towns } from "@/lib/locations";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image src="/logo.png" alt="Renovate Design Logo" width={700} height={466} className="h-12 w-auto" />
              <div>
                <div className="font-bold text-lg">{business.name}</div>
                <div className="text-sm text-gray-400">Premium Home Renovations</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional home renovation company specializing in kitchens,
              bathrooms, joinery, and interior design across Glasgow and surrounding areas.
            </p>
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-300 hover:text-blue-400"
            >
              <Instagram className="w-5 h-5 mr-2 text-blue-500" />
              <span>@renovatedesign_</span>
            </a>
            <div className="mt-4">
              <a
                href={business.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-300 hover:text-blue-400"
              >
                <Star className="w-5 h-5 mr-2 text-blue-500" />
                <span>Leave us a review</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/kitchens" className="hover:underline">Kitchens</Link>
              </li>
              <li>
                <Link href="/bathrooms" className="hover:underline">Bathrooms</Link>
              </li>
              <li>
                <Link href="/joinery" className="hover:underline">Joinery</Link>
              </li>
              <li>
                <Link href="/interiors" className="hover:underline">Interior Design</Link>
              </li>
              <li>
                <Link href="/trade-supply" className="hover:underline">Trade Supply</Link>
              </li>
              <li>
                <Link href="/home-extensions-glasgow" className="hover:underline">Home Extensions</Link>
              </li>
            </ul>
          </div>

          {/* Areas We Cover */}
          <div>
            <h4 className="font-bold text-lg mb-4">Areas We Cover</h4>
            <ul className="space-y-2 text-gray-300">
              {towns.map((town) => (
                <li key={town.slug}>
                  <Link href={`/areas/${town.slug}`} className="hover:underline">
                    {town.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Get In Touch</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-blue-500" />
                <span>{business.phone}</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-blue-500 mt-1" />
                <span>Serving {business.serviceAreas.join(", ")} & Surrounding Areas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <div className="mt-3 flex justify-center gap-4 text-sm">
            <Link href="/privacy-policy" className="hover:underline hover:text-white">Privacy Policy</Link>
            <span aria-hidden="true">&middot;</span>
            <Link href="/terms" className="hover:underline hover:text-white">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
