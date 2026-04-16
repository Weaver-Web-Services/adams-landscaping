import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: "Modern Patio Installation",
      category: "Hardscaping",
      before: "Before: Plain backyard",
      after: "After: Beautiful stone patio",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663482553895/LPaz92cnRdeSnN7Fr9fQ49/hardscape-patio-SAJy3h4Sd4k2hkqvdjbDwR.webp",
    },
    {
      id: 2,
      title: "Garden Transformation",
      category: "Softscaping",
      before: "Before: Overgrown garden",
      after: "After: Lush native plantings",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663482553895/LPaz92cnRdeSnN7Fr9fQ49/softscape-garden-hJXrjGMidHBL6xMDRGdvhD.webp",
    },
    {
      id: 3,
      title: "Retaining Wall & Landscaping",
      category: "Hardscaping",
      before: "Before: Sloped yard",
      after: "After: Terraced landscape",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663482553895/LPaz92cnRdeSnN7Fr9fQ49/retaining-wall-b7z334HP58fFmb7Nww8z9H.webp",
    },
    {
      id: 4,
      title: "Fire Pit Installation",
      category: "Hardscaping",
      before: "Before: Empty space",
      after: "After: Outdoor gathering area",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663482553895/LPaz92cnRdeSnN7Fr9fQ49/fire-pit-KdRtp76uubcrdjmxboFLhP.webp",
    },
    {
      id: 5,
      title: "Lawn Renovation",
      category: "Maintenance",
      before: "Before: Patchy lawn",
      after: "After: Lush green grass",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663482553895/LPaz92cnRdeSnN7Fr9fQ49/lawn-renovation-before-after_59464e03.png",
    },
    {
      id: 6,
      title: "Snow Removal Service",
      category: "Maintenance",
      before: "Before: Heavy snow accumulation",
      after: "After: Clear driveway & walkways",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663482553895/LPaz92cnRdeSnN7Fr9fQ49/snow-removal-9YhCSKQsmcL5RqHJYbBkwa.webp",
    },
  ];

  const handlePrevious = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < galleryItems.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

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
            <Link href="/gallery" className="text-slate-700 hover:text-emerald-600 transition font-semibold text-emerald-600">Gallery</Link>
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Project Gallery</h1>
          <p className="text-xl text-emerald-50">Before & After transformations showcasing our work</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <Card
                key={item.id}
                className="border-0 shadow-lg hover:shadow-xl transition cursor-pointer overflow-hidden"
                onClick={() => setSelectedImageIndex(index)}
              >
                <CardContent className="p-0">
                  <div className="relative h-64 bg-gradient-to-br from-emerald-100 to-teal-100 flex flex-col items-center justify-center overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between text-sm mb-3">
                      <span className="text-slate-600">
                        <strong>Before:</strong> {item.before}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-emerald-600">
                        <strong>After:</strong> {item.after}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for selected image */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-slate-900">
                {galleryItems[selectedImageIndex].title}
              </h2>
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="text-slate-500 hover:text-slate-700 text-2xl"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg h-96 flex items-center justify-center mb-6 overflow-hidden">
                <img 
                  src={galleryItems[selectedImageIndex].image}
                  alt={galleryItems[selectedImageIndex].title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-slate-700 mb-2">Before</p>
                  <p className="text-slate-600">{galleryItems[selectedImageIndex].before}</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-emerald-700 mb-2">After</p>
                  <p className="text-slate-600">{galleryItems[selectedImageIndex].after}</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button
                  onClick={handlePrevious}
                  disabled={selectedImageIndex === 0}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-200 hover:bg-slate-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition"
                >
                  <ChevronLeft className="w-5 h-5" /> Previous
                </button>

                <span className="text-slate-600 font-semibold">
                  {selectedImageIndex + 1} / {galleryItems.length}
                </span>

                <button
                  onClick={handleNext}
                  disabled={selectedImageIndex === galleryItems.length - 1}
                  className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition"
                >
                  Next <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="container mx-auto max-w-2xl text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-6">Ready to Transform Your Yard?</h3>
          <p className="text-lg text-slate-600 mb-8">
            Schedule a free consultation with our team to discuss your landscaping project.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Get Started Today
            </Button>
          </Link>
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
