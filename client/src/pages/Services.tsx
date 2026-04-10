import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
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
            <Link href="/" className="text-slate-700 hover:text-emerald-600 transition">Home</Link>
            <Link href="/services" className="text-slate-700 hover:text-emerald-600 transition font-semibold text-emerald-600">Services</Link>
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

      {/* Hero */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-emerald-50">Complete landscaping solutions for every season and budget</p>
        </div>
      </section>

      {/* Hardscaping */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-block bg-amber-100 px-4 py-2 rounded-full mb-4">
                <span className="text-amber-900 font-semibold">HARDSCAPING</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Premium Hardscaping Solutions</h2>
              <p className="text-lg text-slate-600 mb-6">
                Transform your outdoor space with our expert hardscaping services. From stunning patios to functional retaining walls, we create lasting structures that enhance your property's beauty and value.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">Stone & Paver Patios</h4>
                    <p className="text-slate-600 text-sm">Premium materials, expert installation, timeless designs</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">Retaining Walls</h4>
                    <p className="text-slate-600 text-sm">Structural integrity meets aesthetic appeal</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">Fire Pits & Seating</h4>
                    <p className="text-slate-600 text-sm">Create the perfect gathering space for your family</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">Outdoor Kitchens</h4>
                    <p className="text-slate-600 text-sm">Premium outdoor cooking and entertaining spaces</p>
                  </div>
                </div>
              </div>

              <Link href="/contact">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Request Hardscaping Quote <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663482553895/LPaz92cnRdeSnN7Fr9fQ49/hardscape-patio-SAJy3h4Sd4k2hkqvdjbDwR.webp"
                alt="Hardscaping"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Softscaping */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl order-2 md:order-1">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663482553895/LPaz92cnRdeSnN7Fr9fQ49/softscape-garden-hJXrjGMidHBL6xMDRGdvhD.webp"
                alt="Softscaping"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-block bg-green-100 px-4 py-2 rounded-full mb-4">
                <span className="text-green-900 font-semibold">SOFTSCAPING</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Beautiful Garden Design & Planting</h2>
              <p className="text-lg text-slate-600 mb-6">
                Create a vibrant, sustainable landscape with our expert softscaping services. We specialize in native plants, garden design, and creating outdoor spaces that thrive year-round.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">Custom Garden Design</h4>
                    <p className="text-slate-600 text-sm">Personalized landscapes tailored to your vision</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">Native Plant Selection</h4>
                    <p className="text-slate-600 text-sm">Sustainable, low-maintenance plantings for Baltimore</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">Sod Installation</h4>
                    <p className="text-slate-600 text-sm">Instant, healthy green lawns for your property</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">Landscape Beds</h4>
                    <p className="text-slate-600 text-sm">Professional mulching and bed design</p>
                  </div>
                </div>
              </div>

              <Link href="/contact">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Request Softscaping Quote <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-block bg-lime-100 px-4 py-2 rounded-full mb-4">
                <span className="text-lime-900 font-semibold">MAINTENANCE</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Year-Round Maintenance Services</h2>
              <p className="text-lg text-slate-600 mb-6">
                Keep your landscape looking pristine with our comprehensive maintenance programs. From weekly lawn care to 24/7 emergency snow removal, we've got you covered every season.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">Weekly Lawn Care</h4>
                    <p className="text-slate-600 text-sm">Mowing, edging, and professional lawn maintenance</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">Seasonal Cleanup</h4>
                    <p className="text-slate-600 text-sm">Spring and fall cleanup, leaf removal, debris hauling</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">Irrigation Maintenance</h4>
                    <p className="text-slate-600 text-sm">System checks, repairs, and seasonal adjustments</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">24/7 Snow Removal</h4>
                    <p className="text-slate-600 text-sm">Emergency snow plowing and ice management</p>
                  </div>
                </div>
              </div>

              <Link href="/contact">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Set Up Maintenance Plan <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663482553895/LPaz92cnRdeSnN7Fr9fQ49/maintenance-lawn-YxSn86wvxPeAEGhoq7bAK8hf.webp"
                alt="Maintenance"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-center text-slate-600 text-lg mb-16">
            See how we've transformed Baltimore properties
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663482553895/LPaz92cnRdeSnN7Fr9fQ49/retaining-wall-b7z334HP58fFmb7Nww8z9H.webp"
                  alt="Retaining Wall Project"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Terraced Retaining Walls</h3>
                <p className="text-slate-600 mb-4">
                  Multi-level retaining walls with integrated planting and professional drainage system for a dramatic landscape transformation.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">Hardscaping</span>
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">Softscaping</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-slate-200 to-slate-300 relative overflow-hidden">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663482553895/LPaz92cnRdeSnN7Fr9fQ49/fire-pit-KdRtp76uubcrdjmxboFLhP.webp"
                  alt="Fire Pit Project"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Premium Fire Pit Area</h3>
                <p className="text-slate-600 mb-4">
                  Beautiful stone fire pit with integrated seating and landscape lighting, creating the perfect outdoor entertaining space.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">Hardscaping</span>
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">Lighting</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/gallery">
              <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                View All Projects <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">Why Choose Adams Landscaping?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-4">18+</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Years of Excellence</h3>
                <p className="text-slate-600">
                  Nearly two decades of proven experience serving Baltimore County and City
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-4">5000+</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Happy Customers</h3>
                <p className="text-slate-600">
                  Thousands of satisfied homeowners trust us with their outdoor spaces
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-4">4.9★</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Top Rated</h3>
                <p className="text-slate-600">
                  Consistently praised for quality, professionalism, and customer service
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-emerald-50 mb-8">
            Contact us today for a free consultation and estimate
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+14105551234" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Call (410) 555-1234
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
