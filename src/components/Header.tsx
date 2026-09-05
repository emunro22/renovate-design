"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, Instagram, Facebook } from "lucide-react";
import { business } from "@/lib/business";

const services = [
  { href: "/kitchens", label: "Kitchens" },
  { href: "/bathrooms", label: "Bathrooms" },
  { href: "/joinery", label: "Joinery" },
  { href: "/interiors", label: "Interiors" },
  { href: "/trade-supply", label: "Trade Supply" },
  { href: "/home-extensions-glasgow", label: "Home Extensions" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Renovate Design Logo"
              width={700}
              height={466}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 text-sm relative">
            <Link href="/" className="text-gray-700 hover:text-blue-500 font-medium transition-colors">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-500 font-medium flex items-center transition-colors">
                Services ▾
              </button>
              <div
                className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 rounded-lg shadow-lg
                           opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible
                           group-hover:translate-y-0 transition-all duration-200 z-50"
              >
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-500"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            <a href="/#about" className="text-gray-700 hover:text-blue-500 font-medium transition-colors">
              About
            </a>
            <Link href="/blog" className="text-gray-700 hover:text-blue-500 font-medium transition-colors">
              Blog
            </Link>
            <a href="/#faq" className="text-gray-700 hover:text-blue-500 font-medium transition-colors">
              FAQ
            </a>
            <a href="/#contact" className="text-gray-700 hover:text-blue-500 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Phone + Instagram */}
          <div className="hidden md:flex items-center space-x-4 text-sm">
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Renovate Design on Instagram"
              className="text-gray-500 hover:text-blue-500 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={business.phoneHref}
              className="flex items-center space-x-2 text-blue-500 font-medium hover:underline"
            >
              <Phone className="w-4 h-4" />
              <span>{business.phone}</span>
            </a>
          </div>

          {/* Mobile social icons + Nav button */}
          <div className="md:hidden flex items-center space-x-1">
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Renovate Design on Instagram"
              className="p-2 text-gray-500 hover:text-blue-500 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Renovate Design on Facebook"
              className="p-2 text-gray-500 hover:text-blue-500 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[64px] bg-white z-40 flex flex-col items-center justify-center space-y-6">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-700">
            Home
          </Link>
          {services.map((s) => (
            <Link key={s.href} href={s.href} onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-700">
              {s.label}
            </Link>
          ))}
          <a href="/#about" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-700">
            About
          </a>
          <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-700">
            Blog
          </Link>
          <a href="/#faq" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-700">
            FAQ
          </a>
          <a href="/#contact" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-700">
            Contact
          </a>
          <a
            href={business.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center space-x-2 text-gray-700 text-lg"
          >
            <Instagram className="w-5 h-5" />
            <span>Instagram</span>
          </a>
          <a
            href={business.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center space-x-2 text-gray-700 text-lg"
          >
            <Facebook className="w-5 h-5" />
            <span>Facebook</span>
          </a>
          <a href={business.phoneHref} className="flex items-center space-x-2 text-blue-500 text-lg hover:underline">
            <Phone className="w-5 h-5" />
            <span>{business.phone}</span>
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
