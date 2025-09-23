import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, ChevronLeft, ChevronRight, Menu, X, UtensilsCrossed, Bath, Hammer, Paintbrush, CheckCircle, Users,} from 'lucide-react';

import bathroom from "./assets/bathroom.jpg";
import kitchen from "./assets/kitchen.jpg";
import kitchenService from "./assets/kitchen-service.jpg";
import bathroomService from "./assets/bathroom-service.jpg";
import joineryService from "./assets/joinery-service.jpg";
import interiorService from "./assets/interior-service.jpg";


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
          <header className="bg-white shadow-sm relative z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-2">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                  <img 
                    src="/logo.png" 
                    alt="Renovate Design Logo" 
                    className="h-12 w-auto"
                  />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6 text-sm">
                  <a href="#home" className="text-gray-700 hover:text-blue-500 font-medium">Home</a>
                  <a href="#services" className="text-gray-700 hover:text-blue-500 font-medium">Services</a>
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
          </header>   {/* ✅ keep this one only */}

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-4 py-2 space-y-2">
                <a href="#home" className="block py-2 text-gray-700">Home</a>
                <a href="#services" className="block py-2 text-gray-700">Services</a>
                <a href="#about" className="block py-2 text-gray-700">About</a>
                <a href="#contact" className="block py-2 text-gray-700">Contact</a>
                <div className="flex items-center space-x-2 text-blue-500 py-2">
                  <Phone className="w-4 h-4" />
                  <span>07505 541466</span>
                </div>
              </div>
            </div>
          )}


        {/* Hero Section */}
        <section id="home" className="relative h-screen overflow-hidden">
          {/* Background Slides */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          ))}

          {/* Hero Content */}
          <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block bg-gray-700 bg-opacity-50 rounded-full px-6 py-2 mb-8">
                <span className="text-sm font-medium">PREMIUM HOME RENOVATIONS</span>
              </div>

              {/* Logo */}
              <div className="mb-6 flex justify-center">
                <img 
                  src="/logo2.png" 
                  alt="Renovate Design Logo" 
                  className="max-h-85 md:max-h-85 w-auto"
                />
              </div>

              {/* Service Tags */}
              <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm">
                <span className="border-l-4 border-blue-500 pl-2 text-white">Joinery</span>
                <span className="border-l-4 border-blue-500 pl-2 text-white">Kitchens</span>
                <span className="border-l-4 border-blue-500 pl-2 text-white">Bathrooms</span>
                <span className="border-l-4 border-blue-500 pl-2 text-white">Interiors</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Explore Our Work →
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors">
                  Free Consultation
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </section>


{/* Services Section */}
<section id="services" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <p className="text-blue-500 font-medium mb-2">OUR EXPERTISE</p>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Luxury <span className="text-blue-500">Services</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        From complete renovations to specialist joinery, we deliver exceptional craftsmanship across all areas 
        of home improvement with uncompromising attention to detail.
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
            <p className="text-sm text-orange-500 mb-1">FROM CONCEPT TO COMPLETION</p>
            <h3 className="text-2xl font-bold">Luxury Kitchens</h3>
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
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors">
            Learn More →
          </button>
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
            <h3 className="text-2xl font-bold">Premium Bathrooms</h3>
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
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors">
            Learn More →
          </button>
        </div>
      </div>
    </div>

    <div className="grid lg:grid-cols-2 gap-8">
      {/* Bespoke Joinery */}
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
            <h3 className="text-2xl font-bold">Bespoke Joinery</h3>
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
          </ul>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors">
            Learn More →
          </button>
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
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors">
            Learn More →
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Home?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Every project begins with understanding your vision. Let's discuss how we can bring your dream space to life.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors">
            Start Your Project
          </button>
        </div>
      </section>

              {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Renovate Design
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-gray-600 mb-6">
                  Renovate Design is a home renovation company designated by design. We handle and organise your projects from start to finish and there is never a job too small!
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We prize ourselves on high-end finishings, tidiness and punctuality.
                </p>
                <p className="text-lg text-gray-600">
                  Specialising in home improvements across Renfrewshire, Inverclyde, Glasgow and surrounding areas.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">High-End Finishings</h3>
                <p className="text-gray-600">We pride ourselves on exceptional quality and attention to detail in every project.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Punctuality</h3>
                <p className="text-gray-600">Reliable service with projects completed on time and to specification.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600">Skilled tradespeople working together to make your house become your home.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Local Coverage</h3>
                <p className="text-gray-600">Serving Renfrewshire, Inverclyde, Glasgow and surrounding areas.</p>
              </div>
            </div>

            {/* Quality Badges */}
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700 font-medium">Quality Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700 font-medium">Expert Craftsmen</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700 font-medium">On-Time Delivery</span>
              </div>
            </div>
          </div>
        </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your home? Contact us today for a consultation and let's discuss your project.
            </p>
          </div>

          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">07505 541466</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@renovatedesign.co.uk</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Service Areas</h3>
              <p className="text-gray-600">Glasgow, Renfrewshire, Inverclyde & Surrounding Areas</p>
            </div>
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
              <button className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2" />
                Email Us
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
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold">R</span>
                </div>
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
                <li>Kitchen Design & Installation</li>
                <li>Bathroom Renovations</li>
                <li>Custom Joinery & Panelling</li>
                <li>Built-in Shelving</li>
                <li>Interior Design</li>
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <h4 className="font-bold text-lg mb-4">Get In Touch</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-blue-500" />
                  <span>07505 541466</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-blue-500" />
                  <span>info@renovatedesign.co.uk</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 text-blue-500 mt-1" />
                  <span>Serving Glasgow, Renfrewshire, Inverclyde & Surrounding Areas</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Renovate Design. All rights reserved. | Professional home renovations across Scotland.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RenovateDesignWebsite;