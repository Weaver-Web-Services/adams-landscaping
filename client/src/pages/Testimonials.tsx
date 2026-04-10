import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Star, Gift, Users } from "lucide-react";
import { Link } from "wouter";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Towson, MD",
      rating: 5,
      text: "Adams Landscaping transformed our backyard into a beautiful outdoor oasis. The team was professional, punctual, and delivered exactly what we envisioned. Highly recommended!",
      service: "Hardscaping & Softscaping",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Canton, Baltimore",
      rating: 5,
      text: "We've been using Adams Landscaping for maintenance for 3 years now. They're reliable, thorough, and always go the extra mile. Best landscaping company in Baltimore!",
      service: "Maintenance",
    },
    {
      id: 3,
      name: "Jennifer Martinez",
      location: "Dundalk, MD",
      rating: 5,
      text: "The team designed and installed our garden beautifully. They listened to our ideas and made them even better. The native plants are thriving!",
      service: "Softscaping",
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Federal Hill, Baltimore",
      rating: 5,
      text: "Professional, courteous, and excellent work quality. Our fire pit area is now the perfect spot for entertaining. Worth every penny!",
      service: "Hardscaping",
    },
    {
      id: 5,
      name: "Lisa Anderson",
      location: "Pikesville, MD",
      rating: 5,
      text: "Adams Landscaping handled our seasonal cleanup beautifully. The attention to detail is remarkable. They made our yard look magazine-ready!",
      service: "Maintenance",
    },
    {
      id: 6,
      name: "Robert Williams",
      location: "Fells Point, Baltimore",
      rating: 5,
      text: "Outstanding work on our patio installation. The craftsmanship is top-notch and they were very communicative throughout the project.",
      service: "Hardscaping",
    },
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
            <Link href="/services" className="text-slate-700 hover:text-emerald-600 transition">Services</Link>
            <Link href="/gallery" className="text-slate-700 hover:text-emerald-600 transition">Gallery</Link>
            <Link href="/about" className="text-slate-700 hover:text-emerald-600 transition">About</Link>
            <Link href="/contact" className="text-slate-700 hover:text-emerald-600 transition">Contact</Link>
            <Link href="/pricing" className="text-slate-700 hover:text-emerald-600 transition">Pricing</Link>
            <Link href="/testimonials" className="text-slate-700 hover:text-emerald-600 transition font-semibold text-emerald-600">Testimonials</Link>
          </div>
          <a href="tel:+14105551234" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition">
            Call Now
          </a>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Testimonials</h1>
          <p className="text-xl text-emerald-50">See what our satisfied customers have to say</p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-lg hover:shadow-xl transition">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <CardTitle className="text-slate-900">{testimonial.name}</CardTitle>
                      <p className="text-sm text-slate-500">{testimonial.location}</p>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded w-fit">
                    {testimonial.service}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg bg-emerald-50">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">5000+</div>
                <p className="text-slate-700 font-semibold">Satisfied Customers</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-emerald-50">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">4.9/5</div>
                <p className="text-slate-700 font-semibold">Average Rating</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-emerald-50">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">18+</div>
                <p className="text-slate-700 font-semibold">Years of Service</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Referral Program */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Our Referral Program</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Share the Love, Earn Rewards</h3>
              <p className="text-lg text-slate-600 mb-6">
                We believe our best customers are our best advertisers. That's why we offer a generous referral program to show our appreciation.
              </p>

              <div className="space-y-4">
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-emerald-600">
                      <Gift className="w-5 h-5" /> How It Works
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-3 text-slate-600">
                      <li className="flex gap-3">
                        <span className="font-bold text-emerald-600">1.</span>
                        <span>Refer a friend or family member to Adams Landscaping</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-emerald-600">2.</span>
                        <span>They complete a service project with us</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-emerald-600">3.</span>
                        <span>You both receive $50 off your next service</span>
                      </li>
                    </ol>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md bg-emerald-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-emerald-600">
                      <Users className="w-5 h-5" /> Unlimited Referrals
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      There's no limit to how many friends you can refer. Earn rewards on every successful referral!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-teal-50">
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-600">Ready to Refer?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  Spread the word about Adams Landscaping and earn rewards. Contact us to learn more about our referral program.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-700">Call us:</p>
                  <a href="tel:+14105551234" className="text-lg font-bold text-emerald-600 hover:text-emerald-700">
                    (410) 555-1234
                  </a>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-700">Email us:</p>
                  <a href="mailto:info@adamslandscaping.com" className="text-lg font-bold text-emerald-600 hover:text-emerald-700">
                    info@adamslandscaping.com
                  </a>
                </div>
                <Link href="/contact">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 mt-4">
                    Contact Us
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Happy Customers?</h2>
          <p className="text-xl text-emerald-50 mb-8">
            Experience the Adams Landscaping difference. Get your free consultation today.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="tel:+14105551234" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 flex items-center justify-center gap-2">
              Call (410) 555-1234
            </a>
            <Link href="/contact">
              <Button size="lg" className="bg-emerald-800 hover:bg-emerald-900 text-white px-8 py-4">
                Get Free Estimate
              </Button>
            </Link>
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
