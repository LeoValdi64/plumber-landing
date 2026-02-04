'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will contact you shortly.');
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">🔧</span>
            </div>
            <span className="text-xl font-bold text-blue-800">ProFlow Plumbing</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-blue-600 transition">Services</button>
            <button onClick={() => scrollToSection('why-us')} className="text-gray-600 hover:text-blue-600 transition">Why Us</button>
            <button onClick={() => scrollToSection('areas')} className="text-gray-600 hover:text-blue-600 transition">Service Areas</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition">Contact</button>
          </nav>
          <a href="tel:5551233569" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2">
            <span>📞</span> (555) 123-FLOW
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 via-blue-600 to-blue-500 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm">Available 24/7 for Emergencies</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            24/7 Emergency<br />Plumbing Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Fast, reliable, and affordable plumbing solutions for your home and business. Licensed & insured professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5551233569" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition shadow-lg">
              📞 Call Now - Free Quote
            </a>
            <button onClick={() => scrollToSection('contact')} className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition shadow-lg">
              Get Free Estimate
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
              <span>✅</span> Licensed & Insured
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
              <span>⭐</span> 5-Star Rated
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
              <span>🏆</span> 15+ Years Experience
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From minor repairs to major installations, we handle all your plumbing needs with expertise and care.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🚿', title: 'Drain Cleaning', desc: 'Professional drain cleaning to remove clogs and buildup. We use advanced equipment for thorough results.' },
              { icon: '🔥', title: 'Water Heater Repair', desc: 'Expert repair and installation of all water heater types including tankless, gas, and electric models.' },
              { icon: '💧', title: 'Leak Detection', desc: 'State-of-the-art leak detection to find hidden leaks before they cause major damage to your property.' },
              { icon: '🔧', title: 'Pipe Repair', desc: 'Fast and reliable pipe repair services for burst pipes, corrosion, and general wear and tear.' },
              { icon: '🛁', title: 'Bathroom Remodeling', desc: 'Complete bathroom plumbing for remodels including fixture installation and pipe reconfiguration.' },
              { icon: '🏠', title: 'Sewer Line Services', desc: 'Comprehensive sewer line inspection, repair, and replacement using trenchless technology.' }
            ].map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition group">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-3xl mb-4 group-hover:bg-blue-600 group-hover:scale-110 transition">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose ProFlow?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We&apos;re committed to providing exceptional service that exceeds your expectations.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '📜', title: 'Licensed & Insured', desc: 'Fully licensed, bonded, and insured for your peace of mind. License #PLB-123456' },
              { icon: '⚡', title: 'Same-Day Service', desc: 'Emergency? We offer same-day service to get your plumbing back on track fast.' },
              { icon: '💰', title: 'Upfront Pricing', desc: 'No surprises. We provide detailed quotes before any work begins. No hidden fees.' },
              { icon: '🤝', title: '100% Satisfaction', desc: 'Your satisfaction is guaranteed. We stand behind our work with a full warranty.' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="areas" className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Areas</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">Proudly serving the greater Seattle area and surrounding communities.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['Seattle', 'Bellevue', 'Tacoma', 'Kirkland', 'Redmond', 'Everett', 'Renton', 'Kent', 'Federal Way', 'Bothell'].map((city, i) => (
              <div key={i} className="bg-white/10 backdrop-blur px-6 py-3 rounded-full text-lg font-medium">
                📍 {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600">Don&apos;t just take our word for it — hear from our satisfied customers.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Sarah M.', location: 'Seattle, WA', text: 'ProFlow saved us during a midnight emergency! They arrived within 30 minutes and fixed our burst pipe. Incredibly professional and fair pricing.', rating: 5 },
              { name: 'Michael T.', location: 'Bellevue, WA', text: 'Best plumbing service I\'ve ever used. They installed our new water heater quickly and even cleaned up after themselves. Highly recommend!', rating: 5 },
              { name: 'Jennifer L.', location: 'Kirkland, WA', text: 'Called for a simple drain cleaning and was impressed by their thoroughness. They even spotted a potential issue and fixed it before it became a problem.', rating: 5 }
            ].map((review, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <span key={j} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">&quot;{review.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-semibold text-blue-600">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-gradient-to-r from-red-600 to-orange-500 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            🚨 Plumbing Emergency? We&apos;re Available 24/7!
          </h2>
          <p className="text-white/90 mb-6">Don&apos;t wait — water damage gets worse by the minute. Call us now!</p>
          <a href="tel:5551233569" className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition shadow-lg">
            📞 (555) 123-FLOW
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get a Free Quote</h2>
              <p className="text-gray-600 mb-8">Fill out the form and we&apos;ll get back to you within 1 hour during business hours.</p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">📍</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">123 Plumber Way, Seattle, WA 98101</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">📞</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <a href="tel:5551233569" className="text-blue-600 hover:underline">(555) 123-FLOW</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">🕐</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Business Hours</h3>
                    <p className="text-gray-600">Mon-Fri: 7am - 8pm</p>
                    <p className="text-gray-600">Saturday: 8am - 5pm</p>
                    <p className="text-orange-500 font-medium">24/7 Emergency Service</p>
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="john@example.com"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Type *</label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
                >
                  <option value="">Select a service...</option>
                  <option value="drain">Drain Cleaning</option>
                  <option value="water-heater">Water Heater Repair/Install</option>
                  <option value="leak">Leak Detection & Repair</option>
                  <option value="pipe">Pipe Repair</option>
                  <option value="bathroom">Bathroom Remodeling</option>
                  <option value="sewer">Sewer Line Services</option>
                  <option value="emergency">Emergency Service</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Describe your plumbing issue..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition"
              >
                Request Free Quote
              </button>
              <p className="text-sm text-gray-500 text-center mt-4">
                We&apos;ll respond within 1 hour during business hours
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-xl">🔧</span>
                </div>
                <span className="text-xl font-bold">ProFlow Plumbing</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted local plumbing experts. Serving the Seattle area with pride since 2009.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition">Services</button></li>
                <li><button onClick={() => scrollToSection('why-us')} className="hover:text-white transition">Why Choose Us</button></li>
                <li><button onClick={() => scrollToSection('areas')} className="hover:text-white transition">Service Areas</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition">Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Drain Cleaning</li>
                <li>Water Heater Repair</li>
                <li>Leak Detection</li>
                <li>Emergency Plumbing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="tel:5551233569" className="hover:text-white transition">📞 (555) 123-FLOW</a></li>
                <li>📧 info@proflowplumbing.com</li>
                <li>📍 123 Plumber Way, Seattle, WA</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 ProFlow Plumbing. All rights reserved. License #PLB-123456
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <span>📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <span>📸</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <span>🐦</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
