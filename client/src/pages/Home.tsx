import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Award, Users, Clock, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <Leaf className="w-8 h-8 text-emerald-600" />
            <h1 className="text-2xl font-bold text-slate-900">Adams Landscaping</h1>
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-slate-700 hover:text-emerald-600 transition font-semibold text-emerald-600">Home</Link>
            <Link href="/services" className="text-slate-700 hover:text-emerald-600 transition">Services</Link>
            <Link href="/gallery" className="text-slate-700 hover:text-emerald-600 transition">Gallery</Link>
            <Link href="/about" className="text-slate-700 hover:text-emerald-600 transition">About</Link>
            <Link href="/contact" className="text-slate-700 hover:text-emerald-600 transition">Contact</Link>
            <Link href="/pricing" className="text-slate-700 hover:text-emerald-600 transition">Pricing</Link>
            <Link href="/testimonials" className="text-slate-700 hover:text-emerald-600 transition">Testimonials</Link>
          </div>
          <a href="tel:+14105551234" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition">
            Call Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663482553895/LPaz92cnRdeSnN7Fr9fQ49/hero-landscape-BuDz4c7UfEMdiRg7CkczQS.webp)',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white max-w-3xl">
          <div className="mb-6 inline-block bg-emerald-500/20 px-4 py-2 rounded-full border border-emerald-300/30">
            <p className="text-sm font-semibold">🏆 Baltimore's Trusted Landscaping Experts</p>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Outdoor Space Into Paradise
          </h1>

          <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
            Nearly 20 years of excellence. Serving Baltimore City & County with premium hardscaping, softscaping, and maintenance services.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <a href="tel:+14105551234" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Call Now (410) 555-1234
            </a>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="bg-white/20 border-white text-white hover:bg-white/30 px-8 py-4 text-lg">
                Get Free Quote <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">18+</div>
              <p className="text-sm text-gray-100">Years in Business</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">5000+</div>
              <p className="text-sm text-gray-100">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">4.9★</div>
              <p className="text-sm text-gray-100">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">Why Choose Adams Landscaping?</h2>
          <p className="text-center text-slate-600 text-lg mb-16 max-w-2xl mx-auto">
            Built on hard work, integrity, and a commitment to the Baltimore community
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition">
              <CardContent className="pt-6 text-center">
                <Award className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">Premium Quality</h3>
                <p className="text-sm text-slate-600">Expert craftsmanship on every project</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition">
              <CardContent className="pt-6 text-center">
                <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">Local Experts</h3>
                <p className="text-sm text-slate-600">Deep roots in Baltimore community</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition">
              <CardContent className="pt-6 text-center">
                <Clock className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">24/7 Service</h3>
                <p className="text-sm text-slate-600">Emergency snow removal anytime</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition">
              <CardContent className="pt-6 text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">Guaranteed</h3>
                <p className="text-sm text-slate-600">100% satisfaction guaranteed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">Our Services</h2>
          <p className="text-center text-slate-600 text-lg mb-16">
            Complete landscaping solutions for every season
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Hardscaping */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663482553895/LPaz92cnRdeSnN7Fr9fQ49/service-icon-hardscape-HtV9UABSgzqJEWx8GbpZc.webp"
                  alt="Hardscaping"
                  className="w-32 h-32 object-contain"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Hardscaping</h3>
                <ul className="space-y-2 text-slate-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Premium Patios</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Retaining Walls</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Fire Pits & Kitchens</span>
                  </li>
                </ul>
                <Link href="/services">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Softscaping */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663482553895/LPaz92cnRdeSnN7Fr9fQ49/service-icon-softscape-hCS7F2PCgrWCpFL85Qz5ir.webp"
                  alt="Softscaping"
                  className="w-32 h-32 object-contain"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Softscaping</h3>
                <ul className="space-y-2 text-slate-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Garden Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Native Planting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Sod Installation</span>
                  </li>
                </ul>
                <Link href="/services">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Maintenance */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-lime-100 to-green-100 flex items-center justify-center">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663482553895/LPaz92cnRdeSnN7Fr9fQ49/service-icon-maintenance-koAbrsL3vjsJ7gryPzWi73.webp"
                  alt="Maintenance"
                  className="w-32 h-32 object-contain"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Maintenance</h3>
                <ul className="space-y-2 text-slate-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Weekly Lawn Care</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Seasonal Cleanup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Snow Removal 24/7</span>
                  </li>
                </ul>
                <Link href="/services">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Learn More</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">Recent Projects</h2>
          <p className="text-center text-slate-600 text-lg mb-16">
            See the transformations we've created for Baltimore homeowners
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663482553895/LPaz92cnRdeSnN7Fr9fQ49/hardscape-patio-SAJy3h4Sd4k2hkqvdjbDwR.webp"
                alt="Patio Installation"
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <p className="text-white font-bold text-lg p-4">Modern Patio Installation</p>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663482553895/LPaz92cnRdeSnN7Fr9fQ49/softscape-garden-hJXrjGMidHBL6xMDRGdvhD.webp"
                alt="Garden Design"
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <p className="text-white font-bold text-lg p-4">Lush Garden Design</p>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663482553895/LPaz92cnRdeSnN7Fr9fQ49/retaining-wall-b7z334HP58fFmb7Nww8z9H.webp"
                alt="Retaining Wall"
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <p className="text-white font-bold text-lg p-4">Terraced Retaining Walls</p>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663482553895/LPaz92cnRdeSnN7Fr9fQ49/fire-pit-KdRtp76uubcrdjmxboFLhP.webp"
                alt="Fire Pit"
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <p className="text-white font-bold text-lg p-4">Premium Fire Pit Area</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/gallery">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                View Full Gallery <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">What Our Customers Say</h2>
          <p className="text-center text-slate-600 text-lg mb-16">
            Join thousands of satisfied Baltimore homeowners
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-slate-600 mb-4 italic">
                  "Adams Landscaping transformed our backyard into a beautiful outdoor oasis. The team was professional, punctual, and delivered exactly what we envisioned!"
                </p>
                <p className="font-bold text-slate-900">Sarah Johnson</p>
                <p className="text-sm text-slate-500">Towson, MD</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-slate-600 mb-4 italic">
                  "We've been using Adams Landscaping for maintenance for 3 years now. They're reliable, thorough, and always go the extra mile!"
                </p>
                <p className="font-bold text-slate-900">Michael Chen</p>
                <p className="text-sm text-slate-500">Canton, Baltimore</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-slate-600 mb-4 italic">
                  "Professional, courteous, and excellent work quality. Our fire pit area is now the perfect spot for entertaining!"
                </p>
                <p className="font-bold text-slate-900">David Thompson</p>
                <p className="text-sm text-slate-500">Federal Hill, Baltimore</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials">
              <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                Read More Reviews <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Yard?</h2>
          <p className="text-xl text-emerald-50 mb-8">
            Get a free quote in 60 seconds. No obligation, no pressure.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+14105551234" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105">
              Call Now: (410) 555-1234
            </a>
            <Link href="/pricing">
              <Button size="lg" className="bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-4">
                Get Free Estimate
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Leaf className="w-5 h-5" /> Adams Landscaping
              </h4>
              <p className="text-slate-400 text-sm">Serving Baltimore County and City since 2006. Built on hard work, integrity, and community commitment.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/testimonials">Testimonials</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="tel:+14105551234" className="hover:text-emerald-400 transition">(410) 555-1234</a></li>
                <li><a href="mailto:info@adamslandscaping.com" className="hover:text-emerald-400 transition">info@adamslandscaping.com</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Hours</h4>
              <p className="text-slate-400 text-sm">Mon-Fri: 8am-6pm<br/>Sat: 9am-4pm<br/>Sun: Closed<br/>Emergency: 24/7</p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2024 Adams Landscaping. All rights reserved. | Baltimore's Trusted Landscaping Experts Since 2006</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
