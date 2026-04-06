import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Award, Users, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <Leaf className="w-8 h-8 text-emerald-600" />
            <h1 className="text-2xl font-bold text-slate-900">Adams Landscaping</h1>
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-slate-700 hover:text-emerald-600 transition">Home</Link>
            <Link href="/services" className="text-slate-700 hover:text-emerald-600 transition">Services</Link>
            <Link href="/gallery" className="text-slate-700 hover:text-emerald-600 transition">Gallery</Link>
            <Link href="/about" className="text-slate-700 hover:text-emerald-600 transition font-semibold text-emerald-600">About</Link>
            <Link href="/contact" className="text-slate-700 hover:text-emerald-600 transition">Contact</Link>
            <Link href="/pricing" className="text-slate-700 hover:text-emerald-600 transition">Pricing</Link>
            <Link href="/testimonials" className="text-slate-700 hover:text-emerald-600 transition">Testimonials</Link>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">Schedule Now</Button>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Adams Landscaping</h1>
          <p className="text-xl text-emerald-50">Nearly 20 Years of Excellence in Baltimore</p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-4">
                Founded in 2006, Adams Landscaping began with a simple vision: to transform outdoor spaces with exceptional craftsmanship and integrity. What started as a small operation has grown into one of Baltimore's most trusted landscaping companies.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                For nearly two decades, we've been dedicated to serving Baltimore County and City residents with top-notch landscaping services. Our commitment to hard work, integrity, and community has earned us the trust of thousands of satisfied customers.
              </p>
              <p className="text-lg text-slate-600">
                Today, we continue to uphold the same values that founded our company: delivering exceptional results, treating every project with care, and giving back to the Baltimore community that has supported us.
              </p>
            </div>
            <Card className="border-0 shadow-xl bg-emerald-50">
              <CardHeader>
                <CardTitle className="text-emerald-600 text-2xl">By The Numbers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-emerald-600">18+</div>
                  <p className="text-slate-600">Years of Service</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-emerald-600">5000+</div>
                  <p className="text-slate-600">Satisfied Customers</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-emerald-600">100%</div>
                  <p className="text-slate-600">Satisfaction Guarantee</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-emerald-600">2</div>
                  <p className="text-slate-600">Service Areas (County & City)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition">
              <CardHeader>
                <Award className="w-8 h-8 text-emerald-600 mb-2" />
                <CardTitle>Hard Work</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We approach every project with dedication and attention to detail. Our team takes pride in delivering exceptional results that exceed expectations.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition">
              <CardHeader>
                <Users className="w-8 h-8 text-emerald-600 mb-2" />
                <CardTitle>Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Honest communication, fair pricing, and reliable service are the foundation of our relationships with customers. We do what we say we'll do.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition">
              <CardHeader>
                <MapPin className="w-8 h-8 text-emerald-600 mb-2" />
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We're proud to serve Baltimore and give back to the community that has supported us. We believe in building relationships that last.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Service Areas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <MapPin className="w-6 h-6 text-emerald-600 mb-2" />
                <CardTitle>Baltimore County</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  We proudly serve all of Baltimore County with our comprehensive landscaping services, from Towson to Dundalk and everywhere in between.
                </p>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>✓ Residential landscaping</li>
                  <li>✓ Commercial properties</li>
                  <li>✓ HOA communities</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <MapPin className="w-6 h-6 text-emerald-600 mb-2" />
                <CardTitle>Baltimore City</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  From Canton to Federal Hill, we serve Baltimore City neighborhoods with the same dedication and quality that has made us a trusted name.
                </p>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>✓ Urban gardens</li>
                  <li>✓ Rooftop landscapes</li>
                  <li>✓ Historic properties</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Team</h2>
          <p className="text-lg text-slate-600 text-center mb-12">
            Our experienced team of landscapers, designers, and maintenance specialists are dedicated to bringing your outdoor vision to life. With years of combined experience, we have the expertise to handle projects of any size.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-600">
                  <li>✓ Licensed and insured professionals</li>
                  <li>✓ Certified landscape designers</li>
                  <li>✓ Specialized equipment operators</li>
                  <li>✓ Continuous training and certification</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Commitment</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-600">
                  <li>✓ Customer satisfaction first</li>
                  <li>✓ Attention to detail</li>
                  <li>✓ Reliable and punctual service</li>
                  <li>✓ Eco-friendly practices</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-6">Ready to Work With Us?</h3>
          <p className="text-lg text-slate-600 mb-8">
            Let's transform your outdoor space into something beautiful. Contact us today for a free consultation.
          </p>
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
      <footer className="bg-slate-900 text-white py-12 px-4 mt-12">
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
