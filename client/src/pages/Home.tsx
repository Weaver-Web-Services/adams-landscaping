import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Hammer, Wrench, Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-emerald-600" />
            <h1 className="text-2xl font-bold text-slate-900">Adams Landscaping</h1>
          </div>
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-slate-700 hover:text-emerald-600 transition">Home</Link>
            <Link href="/services" className="text-slate-700 hover:text-emerald-600 transition">Services</Link>
            <Link href="/gallery" className="text-slate-700 hover:text-emerald-600 transition">Gallery</Link>
            <Link href="/about" className="text-slate-700 hover:text-emerald-600 transition">About</Link>
            <Link href="/contact" className="text-slate-700 hover:text-emerald-600 transition">Contact</Link>
            <Link href="/pricing" className="text-slate-700 hover:text-emerald-600 transition">Pricing</Link>
            <Link href="/testimonials" className="text-slate-700 hover:text-emerald-600 transition">Testimonials</Link>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">Schedule Now</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Elegant Landscaping Since 2006</h2>
            <p className="text-xl md:text-2xl mb-8 text-emerald-50">Serving Baltimore County and City with Excellence</p>
            <p className="text-lg mb-12 text-emerald-100 max-w-2xl mx-auto">
              Nearly 20 years of transforming outdoor spaces with hard work, integrity, and a commitment to the Baltimore community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">Get Free Quote</Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-900">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition">
              <CardHeader>
                <CardTitle className="text-emerald-600">Hard Work</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">We approach every project with dedication and attention to detail, ensuring exceptional results every time.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition">
              <CardHeader>
                <CardTitle className="text-emerald-600">Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Honest communication, fair pricing, and reliable service are the foundation of our business relationships.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition">
              <CardHeader>
                <CardTitle className="text-emerald-600">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">We're proud to serve Baltimore and give back to the community that has supported us for nearly two decades.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-900">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition cursor-pointer">
              <CardHeader>
                <Hammer className="w-8 h-8 text-emerald-600 mb-2" />
                <CardTitle>Hardscaping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Patios, retaining walls, fire pits, and outdoor kitchens that enhance your property.</p>
                <Link href="/services" className="text-emerald-600 font-semibold flex items-center gap-2 hover:gap-3 transition">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition cursor-pointer">
              <CardHeader>
                <Leaf className="w-8 h-8 text-emerald-600 mb-2" />
                <CardTitle>Softscaping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Garden design, native planting, and sod installation for natural beauty.</p>
                <Link href="/services" className="text-emerald-600 font-semibold flex items-center gap-2 hover:gap-3 transition">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition cursor-pointer">
              <CardHeader>
                <Wrench className="w-8 h-8 text-emerald-600 mb-2" />
                <CardTitle>Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Lawn care, seasonal cleanups, irrigation, and snow removal services.</p>
                <Link href="/services" className="text-emerald-600 font-semibold flex items-center gap-2 hover:gap-3 transition">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="container mx-auto max-w-2xl text-center">
          <h3 className="text-3xl font-bold mb-6 text-slate-900">Ready to Transform Your Outdoor Space?</h3>
          <p className="text-lg text-slate-600 mb-8">Contact us today for a free consultation and estimate.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+14105551234" className="flex items-center gap-2 text-emerald-600 font-semibold text-lg hover:text-emerald-700">
              <Phone className="w-5 h-5" /> (410) 555-1234
            </a>
            <span className="text-slate-400">|</span>
            <a href="mailto:info@adamslandscaping.com" className="flex items-center gap-2 text-emerald-600 font-semibold text-lg hover:text-emerald-700">
              <Mail className="w-5 h-5" /> info@adamslandscaping.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Leaf className="w-5 h-5" /> Adams Landscaping
              </h4>
              <p className="text-slate-400 text-sm">Serving Baltimore County and City since 2006.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/about">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="tel:+14105551234">(410) 555-1234</a></li>
                <li><a href="mailto:info@adamslandscaping.com">info@adamslandscaping.com</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Hours</h4>
              <p className="text-slate-400 text-sm">Mon-Fri: 8am-6pm<br/>Sat: 9am-4pm<br/>Sun: Closed</p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2024 Adams Landscaping. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
