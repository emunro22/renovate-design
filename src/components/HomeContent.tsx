"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Phone, MapPin, Clock, UtensilsCrossed, Bath, Hammer, Paintbrush, CheckCircle, Users, Instagram,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { StaticImageData } from "next/image";

import bathroom from "@/assets/bathroom.jpg";
import kitchen from "@/assets/kitchen.jpg";
import kitchenService from "@/assets/kitchen-service.jpg";
import bathroomService from "@/assets/bathroom-service.jpg";
import joineryService from "@/assets/joinery-service.jpg";
import interiorService from "@/assets/interior-service.jpg";
import { business } from "@/lib/business";
import Faq from "@/components/Faq";
import { homeFaqs } from "@/lib/faqs";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const heroSlides: StaticImageData[] = [kitchen, bathroom, joineryService, interiorService];

function HomeContent() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate hero background slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center text-center text-gray-900 px-4 overflow-hidden bg-gray-900"
      >
        {/* Background slideshow, medium opacity */}
        <div className="absolute inset-0">
          <AnimatePresence mode="sync">
            <motion.div
              key={currentSlide}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
            >
              <Image
                src={heroSlides[currentSlide]}
                alt=""
                fill
                priority={currentSlide === 0}
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/60 to-gray-900/80" />
        </div>

        <motion.div
          className="relative z-10 max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Tag */}
          <motion.div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1 mt-6 mb-8" variants={fadeInUp}>
            <span className="text-xs sm:text-sm font-medium tracking-wide text-white">
              PREMIUM HOME RENOVATIONS · GLASGOW &amp; THE WEST
            </span>
          </motion.div>

          {/* Logo */}
          <motion.div className="mb-6 flex justify-center" variants={fadeInUp}>
            <Image
              src="/logo.png"
              alt="Renovate Design Logo"
              width={700}
              height={466}
              priority
              className="max-h-48 sm:max-h-56 w-auto drop-shadow-lg"
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
            variants={fadeInUp}
          >
            Kitchens, bathrooms &amp; interiors —{" "}
            <span className="text-blue-400">designed and built without compromise.</span>
          </motion.h1>

          <motion.p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto mb-8" variants={fadeInUp}>
            From first sketch to final finish, we manage every trade so your renovation is
            seamless, on time and built to last — across Glasgow, Renfrewshire &amp; Inverclyde.
          </motion.p>

          {/* Service Tags */}
          <motion.div className="flex flex-wrap justify-center gap-3 mb-8 text-xs sm:text-sm text-white" variants={fadeInUp}>
            <span className="border-l-4 border-blue-400 pl-2">Joinery</span>
            <span className="border-l-4 border-blue-400 pl-2">Kitchens</span>
            <span className="border-l-4 border-blue-400 pl-2">Bathrooms</span>
            <span className="border-l-4 border-blue-400 pl-2">Interiors</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div className="flex flex-col sm:flex-row justify-center gap-4" variants={fadeInUp}>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium text-sm md:text-base shadow-md transition-all"
            >
              Explore Our Work →
            </Link>
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center border border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-md font-medium text-sm md:text-base shadow-md transition-all"
            >
              Free Consultation
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="scroll-mt-32 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeInUp}
          >
            <p className="text-blue-500 font-medium mb-2">OUR EXPERTISE</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-black">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From complete renovations to specialist joinery, we deliver exceptional craftsmanship across all areas
              of home improvement with uncompromising attention to detail.
            </p>
            <br />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We can organise and handle the project from start to finish. We have a team of trades that work together making your house become your home. Even if you have your own tradesmen you&apos;d like to use on the project we can deal with the rest.
            </p>
          </motion.div>

          {/* Row 1 */}
          <motion.div
            className="grid lg:grid-cols-2 gap-8 mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {/* Kitchens */}
            <motion.div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-shadow hover:shadow-xl" variants={fadeInUp}>
              <div className="h-64 relative">
                <Image src={kitchenService} alt="Kitchen renovation in Glasgow" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40" />
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
                  Our services begin from your ideas, whether it&apos;s a completely new kitchen or just adaptations to your current one, even if it&apos;s only changing the worktops. At Renovate Design we will design a kitchen best suited for your lifestyle and home. Supplying and fitting different brands of kitchens across Glasgow and the West.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />Complete kitchen renovations</li>
                  <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />Worktop replacements</li>
                  <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />Custom design solutions</li>
                  <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />Multiple brand options</li>
                  <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />Project management from start to finish</li>
                </ul>
                <Link href="/kitchens" className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors">
                  Learn More →
                </Link>
              </div>
            </motion.div>

            {/* Bathrooms */}
            <motion.div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-shadow hover:shadow-xl" variants={fadeInUp}>
              <div className="h-64 relative">
                <Image src={bathroomService} alt="Bathroom renovation in Glasgow" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40" />
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
                  <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />Complete bathroom renovations</li>
                  <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />Wet wall solutions</li>
                  <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />Tiled options</li>
                  <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />Space optimization</li>
                  <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />Budget-friendly ranges</li>
                </ul>
                <Link href="/bathrooms" className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors">
                  Learn More →
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Row 2 */}
          <motion.div
            className="grid lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {/* Joinery */}
            <motion.div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-shadow hover:shadow-xl" variants={fadeInUp}>
              <div className="h-64 relative">
                <Image src={joineryService} alt="Joinery project in Glasgow" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40" />
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
                  <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />Ceilings &amp; flooring</li>
                  <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />Skirting, facings &amp; architrave</li>
                  <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />Balustrades &amp; banisters</li>
                  <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />Sliding &amp; fitted wardrobes</li>
                  <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />Internal &amp; External Doors</li>
                  <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />Fencing &amp; Decking</li>
                  <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />Panelling</li>
                  <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />Shelving &amp; Storage Solutions</li>
                </ul>
                <Link href="/joinery" className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors">
                  Learn More →
                </Link>
              </div>
            </motion.div>

            {/* Interior Design */}
            <motion.div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-shadow hover:shadow-xl" variants={fadeInUp}>
              <div className="h-64 relative">
                <Image src={interiorService} alt="Interior design project in Glasgow" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40" />
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
                  As part of the design process we offer an interior design service to gain the maximum aesthetic from your renovation project. If you&apos;re unsure what works well together, this service ensures your project stands out.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />Interior design consultation</li>
                  <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />Aesthetic planning</li>
                  <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />Project coordination</li>
                  <li className="flex items-center text-gray-700"><div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />Style guidance</li>
                </ul>
                <Link href="/interiors" className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors">
                  Learn More →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="scroll-mt-32 py-16 bg-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Renovate Design
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 mb-8">
                Renovate Design is a home renovation company designated by design. We handle and organise your projects from start to finish and there is never a job too small!
              </p>
              <p className="text-xl text-gray-300 mb-8">
                We prize ourselves on high-end finishings, tidiness and punctuality.
              </p>
              <p className="text-xl text-gray-300 mb-8">
                Specialising in home improvements across Renfrewshire, Inverclyde, Glasgow and surrounding areas.
              </p>
              <p className="text-xl text-gray-300 mb-8">
                Even if the job isn&apos;t joinery related, we can organise different trades for you!
              </p>
              <br />
              <p className="text-xl text-gray-300 mb-8">
                This Includes: Plumbers / Gas Engineers, Electricians, Plasters, Tilers &amp; Bricklayers
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16" variants={staggerContainer}>
            <motion.div className="text-center" variants={fadeInUp}>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-300 mb-2">High-End Finishings</h3>
              <p className="text-gray-200">We pride ourselves on exceptional quality and attention to detail in every project.</p>
            </motion.div>

            <motion.div className="text-center" variants={fadeInUp}>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-300 mb-2">Reliability</h3>
              <p className="text-gray-200">A reliable company that shows up when they say they will. Your time is valuable, we don&apos;t want to waste it.</p>
            </motion.div>

            <motion.div className="text-center" variants={fadeInUp}>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-300 mb-2">Expert Team</h3>
              <p className="text-gray-200">Skilled tradespeople working together to make your house become your home.</p>
            </motion.div>

            <motion.div className="text-center" variants={fadeInUp}>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-300 mb-2">Local Coverage</h3>
              <p className="text-gray-200">Serving Renfrewshire, Inverclyde, Glasgow and surrounding areas.</p>
            </motion.div>
          </motion.div>

          {/* Quality Badges */}
          <motion.div className="flex flex-wrap justify-center gap-8 text-center" variants={staggerContainer}>
            {[
              { Icon: CheckCircle, text: "Quality Guaranteed" },
              { Icon: Users, text: "Expert Craftsmen" },
              { Icon: Clock, text: "On-Time Delivery" },
            ].map(({ Icon, text }, i) => (
              <motion.div key={i} className="flex items-center space-x-2" variants={fadeInUp}>
                <Icon className="w-5 h-5 text-blue-500" />
                <span className="text-gray-500 font-medium">{text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <Faq items={homeFaqs} />

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="scroll-mt-32 py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your home? Contact us today for a consultation and let&apos;s discuss your project.
            </p>
          </motion.div>

          {/* Contact Info Grid */}
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-16" variants={staggerContainer}>
            <motion.div className="text-center" variants={fadeInUp}>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">{business.phone}</p>
            </motion.div>

            <motion.div className="text-center" variants={fadeInUp}>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Instagram</h3>
              <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                @renovatedesign_
              </a>
            </motion.div>

            <motion.div className="text-center" variants={fadeInUp}>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fab fa-facebook text-2xl text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Facebook</h3>
              <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                @Renovate Design
              </a>
            </motion.div>

            <motion.div className="text-center" variants={fadeInUp}>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fab fa-tiktok text-2xl text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">TikTok</h3>
              <a href={business.social.tiktok} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                @renovate.design
              </a>
            </motion.div>

            <motion.div className="text-center" variants={fadeInUp}>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Service Areas</h3>
              <p className="text-gray-600">{business.serviceAreas.join(", ")} &amp; Surrounding Areas</p>
            </motion.div>

            <motion.div className="text-center" variants={fadeInUp}>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Working Hours</h3>
              <p className="text-gray-600">{business.hours}</p>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div className="bg-white rounded-2xl shadow-lg p-8 text-center" variants={fadeInUp}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Request a Free Consultation</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you&apos;re planning a complete renovation or just need some advice, we&apos;re here to help.
              Get in touch for your free, no-obligation consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href={business.phoneHref} className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </div>
            <p className="text-gray-900 font-semibold">
              <span className="text-blue-500">No job too small!</span> From complete renovations to minor improvements, we handle projects of all
              sizes with the same level of care and attention to detail.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default HomeContent;
