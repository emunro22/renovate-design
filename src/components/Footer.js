import React from "react";
import { Phone, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/logo.png" alt="Renovate Design Logo" className="h-12 w-auto" />
              <div>
                <div className="font-bold text-lg">Renovate Design</div>
                <div className="text-sm text-gray-400">Premium Home Renovations</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional home renovation company specializing in kitchens,
              bathrooms, joinery, and interior design across Glasgow and surrounding areas.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Kitchens</li>
              <li>Bathrooms</li>
              <li>Joinery</li>
              <li>Interior Design</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Get In Touch</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-blue-500" />
                <span>07505 541466</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-blue-500 mt-1" />
                <span>Serving Glasgow, Renfrewshire, Inverclyde & Surrounding Areas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Renovate Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
