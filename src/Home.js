import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, ChevronLeft, ChevronRight, Menu, X, UtensilsCrossed, Bath, Hammer, Paintbrush, CheckCircle, Users,} from 'lucide-react';

import bathroom from "./assets/bathroom.jpg";
import kitchen from "./assets/kitchen.jpg";
import kitchenService from "./assets/kitchen-service.jpg";
import bathroomService from "./assets/bathroom-service.jpg";
import joineryService from "./assets/joinery-service.jpg";
import interiorService from "./assets/interior-service.jpg";
import { Link } from "react-router-dom";


const slides = [
  {
    title: "Renovate Design",
    subtitle: "No room for error in bathroom design",
    description: "From complete renovations to worktop changes",
    image: bathroom
  },
  {
    title: "Renovate Design", 
    subtitle: "From complete renovations to worktop changes",
    description: "Premium kitchen and bathroom solutions",
    image: kitchen
  }
];


const RenovateDesignWebsite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
        <div className="min-h-screen bg-white">
          {/* Header */}
          <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-2">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                  <img 
                    src="/logo.png" 
                    alt="Renovate Design Logo" 
                    className="h-20 w-auto"
                  />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6 text-sm relative">
                  <a href="#home" className="text-gray-700 hover:text-blue-500 font-medium">Home</a>

                  {/* Services Dropdown */}
                  <div className="relative group">
                    <a
                      href="#services"
                      className="text-gray-700 hover:text-blue-500 font-medium flex items-center"
                    >
                      Services ▾
                    </a>
                    <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <Link to="/kitchens" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Kitchens</Link>
                      <Link to="/bathrooms" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Bathrooms</Link>
                      <Link to="/joinery" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Joinery</Link>
                      <Link to="/interiors" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Interiors</Link>
                    </div>
                  </div>

                  <a href="#about" className="text-gray-700 hover:text-blue-500 font-medium">About</a>
                  <a href="#contact" className="text-gray-700 hover:text-blue-500 font-medium">Contact</a>
                </nav>

                {/* Phone Number */}
                <div className="hidden md:flex items-center space-x-2 text-blue-500 text-sm">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">07505 541466</span>
                </div>

                {/* Mobile menu button */}
                <button 
                  className="md:hidden p-2"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </header>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-6">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 p-2"
              >
                <X className="w-6 h-6" />
              </button>
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-700">Home</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-700">Services</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-700">About</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-700">Contact</a>
              <div className="flex items-center space-x-2 text-blue-500 text-lg">
                <Phone className="w-5 h-5" />
                <span>07505 541466</span>
              </div>
            </div>
          )}


{/* Hero Section */}
<section
  id="home"
  className="relative min-h-screen bg-gray-400 flex flex-col items-center justify-center text-center text-gray-900 px-4"
>
  <div className="relative z-10 max-w-3xl mx-auto">

    {/* Tag */}
    <div className="inline-block bg-gray-200 rounded-full px-4 py-1 mt-6 mb-10">
      <span className="text-xs sm:text-sm font-medium tracking-wide text-gray-700">
        PREMIUM HOME RENOVATIONS
      </span>
    </div>

    {/* Logo (bigger now) */}
    <div className="mb-6 flex justify-center">
      <img 
        src="/logo.png" 
        alt="Renovate Design Logo" 
        className="max-h-80 sm:max-h-96 w-auto"
      />
    </div>

    {/* Service Tags */}
    <div className="flex flex-wrap justify-center gap-3 mb-6 text-xs sm:text-sm text-gray-900">
      <span className="border-l-4 border-blue-500 pl-2">Joinery</span>
      <span className="border-l-4 border-blue-500 pl-2">Kitchens</span>
      <span className="border-l-4 border-blue-500 pl-2">Bathrooms</span>
      <span className="border-l-4 border-blue-500 pl-2">Interiors</span>
    </div>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <button className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium text-sm md:text-base shadow-md transition-all">
        Explore Our Work →
      </button>
      <button className="inline-flex items-center justify-center border border-black text-black hover:bg-black hover:text-white px-6 py-3 rounded-md font-medium text-sm md:text-base shadow-md transition-all">
        Free Consultation
      </button>
    </div>
  </div>
</section>


{/* Services Section */}
<section id="services" className="scroll-mt-32 py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <p className="text-blue-500 font-medium mb-2">OUR EXPERTISE</p>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
      <span className="text-black">Services</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        From complete renovations to specialist joinery, we deliver exceptional craftsmanship across all areas 
        of home improvement with uncompromising attention to detail.
      </p>
      <br></br>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We can organise and handle the project from start to finish. We have a team of trades that work together making your house become your home. Even if you have your own tradesmen you’d like to use on the project we can deal with the rest.
      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-8 mb-16">
      {/* Luxury Kitchens */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div
          className="h-64 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${kitchenService})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute top-4 left-4 bg-orange-500 p-2 rounded">
            <UtensilsCrossed className="w-6 h-6 text-white" />
          </div>
          <div className="absolute bottom-4 left-4 text-white z-10">
            <p className="text-sm text-orange-500 mb-1">FROM DESIGN TO DELIVERY</p>
            <h3 className="text-2xl font-bold">Kitchens</h3>
          </div>
        </div>
        <div className="p-6">
            <p className="text-gray-600 mb-6">
                Our services begin from your ideas, whether it's a completely new kitchen or just adaptations to your current one, even if it's only changing the worktops. At Renovate Design we will design a kitchen best suited for your lifestyle and home. Supplying and fitting different brands of kitchens across Glasgow and the West.
            </p>
            <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>Complete kitchen renovations</li>
                <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>Worktop replacements</li>
                <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>Custom design solutions</li>
                <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>Multiple brand options</li>
                <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>Project management from start to finish</li>
            </ul>
            <Link
                to="/kitchens"
                className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors"
            >
                Learn More →
            </Link>
            </div>
      </div>

      {/* Premium Bathrooms */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div
          className="h-64 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${bathroomService})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute top-4 left-4 bg-orange-500 p-2 rounded">
            <Bath className="w-6 h-6 text-white" />
          </div>
          <div className="absolute bottom-4 left-4 text-white z-10">
            <p className="text-sm text-orange-500 mb-1">PRECISION IN EVERY DETAIL</p>
            <h3 className="text-2xl font-bold">Bathrooms</h3>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-6">
            Bathroom design and layout is often overlooked. From the rip-out to the silicone seal at the end, we gain maximum space and practicality for your new bathroom. We have different ranges designed to suit your budget.
          </p>
          <ul className="space-y-2 mb-6 text-sm">
            <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>Complete bathroom renovations</li>
            <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>Wet wall solutions</li>
            <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>Tiled options</li>
            <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>Space optimization</li>
            <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>Budget-friendly ranges</li>
          </ul>
                  <Link
          to="/bathrooms"
          className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors"
        >
          Learn More →
        </Link>
        </div>
      </div>
    </div>

    <div className="grid lg:grid-cols-2 gap-8">
      {/* Joinery */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div
          className="h-64 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${joineryService})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute top-4 left-4 bg-orange-500 p-2 rounded">
            <Hammer className="w-6 h-6 text-white" />
          </div>
          <div className="absolute bottom-4 left-4 text-white z-10">
            <p className="text-sm text-orange-500 mb-1">CRAFTED TO PERFECTION</p>
            <h3 className="text-2xl font-bold">Joinery</h3>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-6">
            Our joiners are fully qualified and carry out skilled work. We offer a wide range of jobs throughout your home and external areas to transform your living spaces.
          </p>
          <ul className="space-y-2 mb-6 text-sm">
            <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>Ceilings & flooring</li>
            <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>Skirting, facings & architrave</li>
            <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>Balustrades & banisters</li>
            <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>Sliding & fitted wardrobes</li>
            <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>Internal & External Doors</li>
            <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>Fencing & Decking</li>
            <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>Panelling</li>
            <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>Shelving & Storage Solutions</li>
          </ul>
                  <Link
          to="/joinery"
          className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors"
        >
          Learn More →
        </Link>
        </div>
      </div>

      {/* Interior Design */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div
          className="h-64 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${interiorService})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute top-4 left-4 bg-orange-500 p-2 rounded">
            <Paintbrush className="w-6 h-6 text-white" />
          </div>
          <div className="absolute bottom-4 left-4 text-white z-10">
            <p className="text-sm text-orange-500 mb-1">STYLED FOR LUXURY LIVING</p>
            <h3 className="text-2xl font-bold">Interior Design</h3>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-6">
            As part of the design process we offer an interior design service to gain the maximum aesthetic from your renovation project. If you're unsure what works well together, this service ensures your project stands out.
          </p>
          <ul className="space-y-2 mb-6 text-sm">
            <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>Interior design consultation</li>
            <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>Aesthetic planning</li>
            <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>Project coordination</li>
            <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>Style guidance</li>
          </ul>
                  <Link
          to="/interiors"
          className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors"
        >
          Learn More →
        </Link>
        </div>
      </div>
    </div>
  </div>
</section>


              {/* About Section */}
        <section id="about" className="scroll-mt-32 py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Renovate Design
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="ttext-xl text-gray-300 mb-8">
                  Renovate Design is a home renovation company designated by design. We handle and organise your projects from start to finish and there is never a job too small!
                </p>
                <p className="text-xl text-gray-300 mb-8">
                  We prize ourselves on high-end finishings, tidiness and punctuality.
                </p>
                <p className="text-xl text-gray-300 mb-8  ">
                  Specialising in home improvements across Renfrewshire, Inverclyde, Glasgow and surrounding areas.
                </p>
                <p className="text-xl text-gray-300 mb-8  ">
                  Even if the job isn’t joinery related, we can organise different trades for you!
                  </p>
                <br></br>
                <p className="text-xl text-gray-300 mb-8  ">
                This Includes: Plumbers / Gas Engineers, Electricians, Plasters, Tilers & Bricklayers                
                </p>
              </div>
            </div>

            {/* Features Grid */}
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-300 mb-2">High-End Finishings</h3>
              <p className="text-gray-200">We pride ourselves on exceptional quality and attention to detail in every project.</p>
            </div>

            {/* ✅ Replaced Punctuality card */}
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-300 mb-2">Reliability</h3>
              <p className="text-gray-200">A reliable company that shows up when they say they will. Your time is valuable, we don’t want to waste it.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-300 mb-2">Expert Team</h3>
              <p className="text-gray-200">Skilled tradespeople working together to make your house become your home.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-300 mb-2">Local Coverage</h3>
              <p className="text-gray-200">Serving Renfrewshire, Inverclyde, Glasgow and surrounding areas.</p>
            </div>
          </div>

            {/* Quality Badges */}
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span className="text-gray-500 font-medium">Quality Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="text-gray-500 font-medium">Expert Craftsmen</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="text-gray-500 font-medium">On-Time Delivery</span>
              </div>
            </div>
          </div>
        </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-32 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your home? Contact us today for a consultation and let's discuss your project.
            </p>
          </div>

          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-16">
            {/* Phone */}
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">07505 541466</p>
            </div>

            {/* Instagram */}
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fab fa-instagram text-2xl text-blue-500"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Instagram</h3>
              <a 
                href="https://www.instagram.com/renovatedesign_?igsh=MTYzMmdsNWJuOGtuNA==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline"
              >
                @renovatedesign_
              </a>
            </div>

            {/* Facebook */}
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fab fa-facebook text-2xl text-blue-500"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Facebook</h3>
              <a 
                href="https://www.facebook.com/profile.php?id=100068351521634" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline"
              >
                @Renovate Design
              </a>
            </div>

            {/* TikTok */}
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fab fa-tiktok text-2xl text-blue-500"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">TikTok</h3>
              <a 
                href="https://www.tiktok.com/@renovate.design?lang=en" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:underline"
              >
                @renovate.design
              </a>
            </div>

            {/* Service Areas */}
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Service Areas</h3>
              <p className="text-gray-600">Glasgow, Renfrewshire, Inverclyde & Surrounding Areas</p>
            </div>

            {/* Working Hours */}
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Working Hours</h3>
              <p className="text-gray-600">Mon - Fri: 8:00 AM - 6:00 PM</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Request a Free Consultation</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're planning a complete renovation or just need some advice, we're here to help. 
              Get in touch for your free, no-obligation consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </button>
            </div>
            <p className="text-gray-900 font-semibold">
              <span className="text-blue-500">No job too small!</span> From complete renovations to minor improvements, we handle projects of all 
              sizes with the same level of care and attention to detail.
            </p>
          </div>
        </div>
      </section>

          {/* Footer */}
          <footer className="bg-gray-800 text-white py-12">
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
                    Professional home renovation company specializing in kitchens, bathrooms, joinery, and interior design across 
                    Glasgow and surrounding areas.
                  </p>
                </div>

                {/* Our Services */}
                <div>
                  <h4 className="font-bold text-lg mb-4">Our Services</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>Kitchens</li>
                    <li>Bathrooms</li>
                    <li>Joinery</li>
                    <li>Interior Design</li>
                    <li>Trade Supply</li>
                  </ul>
                </div>

            {/* Get In Touch */}
            <div>
              <h4 className="font-bold text-lg mb-4">Get In Touch</h4>
              <div className="space-y-3 text-gray-300">
                {/* Phone */}
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-blue-500" />
                  <span>07505 541466</span>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 text-blue-500 mt-1" />
                  <span>Serving Glasgow, Renfrewshire, Inverclyde & Surrounding Areas</span>
                </div>

                {/* Social Media */}
                <div className="flex flex-col space-y-2 mt-4">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/renovatedesign_?igsh=MTYzMmdsNWJuOGtuNA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-blue-400"
                  >
                    <i className="fab fa-instagram text-xl mr-2 text-blue-500"></i>
                    <span>@renovatedesign_</span>
                  </a>

                  {/* TikTok */}
                  <a
                    href="https://www.tiktok.com/@renovate.design?lang=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-blue-400"
                  >
                    <i className="fab fa-tiktok text-xl mr-2 text-blue-500"></i>
                    <span>@renovate.design</span>
                  </a>
                </div>
              </div>
            </div>
              </div> {/* ✅ closes the grid wrapper */}

              {/* Copyright */}
              <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2025 Renovate Design. All rights reserved. | Professional home renovations across Scotland.</p>
              </div>
            </div>
          </footer>
    </div>
  );
};

export default RenovateDesignWebsite;