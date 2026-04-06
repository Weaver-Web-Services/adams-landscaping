import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hammer, Leaf, Wrench, Check } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const hardscapingServices = [
    "Custom patio design and installation",
    "Retaining walls and garden borders",
    "Fire pits and outdoor fireplaces",
    "Outdoor kitchens and dining areas",
    "Pergolas and shade structures",
    "Stone and brick work",
  ];

  const softscapingServices = [
    "Professional garden design",
    "Native plant selection and installation",
    "Sod installation and seeding",
    "Mulch and ground cover installation",
    "Seasonal flower beds",
    "Tree and shrub planting",
  ];

  const maintenanceServices = [
    "Weekly and bi-weekly lawn care",
    "Spring and fall seasonal cleanups",
    "Irrigation system installation and maintenance",
    "Snow removal and winter plowing",
    "Leaf removal and debris cleanup",
    "Landscape pruning and trimming",
  ];

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
            <Link href="/services" className="text-slate-700 hover:text-emerald-600 transition font-semibold text-emerald-600">Services</Link>
            <Link href="/gallery" className="text-slate-700 hover:text-emerald-600 transition">Gallery</Link>
            <Link href="/about" className="text-slate-700 hover:text-emerald-600 transition">About</Link>
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-emerald-50">Comprehensive landscaping solutions for your Baltimore home</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Hardscaping */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <Hammer className="w-10 h-10 text-emerald-600" />
              <h2 className="text-3xl font-bold text-slate-900">Hardscaping</h2>
            </div>
            <p className="text-lg text-slate-600 mb-8">
              Transform your outdoor space with durable, beautiful hardscape features. From elegant patios to functional outdoor kitchens, we create structures that enhance your property's value and enjoyment.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-emerald-600">What We Offer</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {hardscapingServices.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-emerald-600">Why Choose Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Expert craftsmanship with 20 years of experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">High-quality materials and proven techniques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Custom designs tailored to your vision</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Competitive pricing with transparent estimates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Softscaping */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <Leaf className="w-10 h-10 text-emerald-600" />
              <h2 className="text-3xl font-bold text-slate-900">Softscaping</h2>
            </div>
            <p className="text-lg text-slate-600 mb-8">
              Bring natural beauty to your landscape with expert plant selection and installation. We specialize in native plants that thrive in Baltimore's climate while creating stunning garden designs.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-emerald-600">What We Offer</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {softscapingServices.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-emerald-600">Why Choose Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Native plant expertise for sustainable landscapes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Professional garden design consultation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Quality plants and materials sourced locally</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Eco-friendly landscaping practices</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Maintenance */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <Wrench className="w-10 h-10 text-emerald-600" />
              <h2 className="text-3xl font-bold text-slate-900">Maintenance</h2>
            </div>
            <p className="text-lg text-slate-600 mb-8">
              Keep your landscape looking pristine year-round with our comprehensive maintenance services. From regular lawn care to seasonal cleanups and winter snow removal, we've got you covered.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-emerald-600">What We Offer</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {maintenanceServices.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-emerald-600">Why Choose Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Reliable, consistent service every season</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">24/7 emergency snow removal available</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Flexible scheduling to fit your needs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Professional equipment and trained crew</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-12 px-8 bg-emerald-50 rounded-lg border-2 border-emerald-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Get Started?</h3>
            <p className="text-slate-600 mb-6">Contact us today for a free consultation and custom quote.</p>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">Schedule Your Consultation</Button>
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
