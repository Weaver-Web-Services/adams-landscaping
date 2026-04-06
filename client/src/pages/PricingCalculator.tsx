import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Calculator } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function PricingCalculator() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [propertySize, setPropertySize] = useState<string>("");
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);

  const services = [
    { id: "lawn-care", name: "Lawn Care", basePrice: 150, unit: "per visit" },
    { id: "patio", name: "Patio Installation", basePrice: 3000, unit: "per 200 sq ft" },
    { id: "retaining-wall", name: "Retaining Wall", basePrice: 2500, unit: "per 50 linear ft" },
    { id: "garden-design", name: "Garden Design", basePrice: 1500, unit: "consultation" },
    { id: "sod-installation", name: "Sod Installation", basePrice: 800, unit: "per 1000 sq ft" },
    { id: "snow-removal", name: "Snow Removal", basePrice: 200, unit: "per visit" },
    { id: "seasonal-cleanup", name: "Seasonal Cleanup", basePrice: 400, unit: "per visit" },
    { id: "fire-pit", name: "Fire Pit Installation", basePrice: 2000, unit: "per pit" },
  ];

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const calculateEstimate = () => {
    if (selectedServices.length === 0 || !propertySize) {
      alert("Please select at least one service and enter property size");
      return;
    }

    let total = 0;
    selectedServices.forEach(serviceId => {
      const service = services.find(s => s.id === serviceId);
      if (service) {
        const sizeMultiplier = Math.max(1, parseInt(propertySize) / 5000);
        total += service.basePrice * sizeMultiplier;
      }
    });

    setEstimatedCost(total);
  };

  const resetCalculator = () => {
    setSelectedServices([]);
    setPropertySize("");
    setEstimatedCost(null);
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
            <Link href="/gallery" className="text-slate-700 hover:text-emerald-600 transition">Gallery</Link>
            <Link href="/about" className="text-slate-700 hover:text-emerald-600 transition">About</Link>
            <Link href="/contact" className="text-slate-700 hover:text-emerald-600 transition">Contact</Link>
            <Link href="/pricing" className="text-slate-700 hover:text-emerald-600 transition font-semibold text-emerald-600">Pricing</Link>
            <Link href="/testimonials" className="text-slate-700 hover:text-emerald-600 transition">Testimonials</Link>
          </div>
          <Button className="bg-emerald-600 hover:bg-emerald-700">Schedule Now</Button>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Calculator className="w-10 h-10" /> Pricing Calculator
          </h1>
          <p className="text-xl text-emerald-50">Get an instant estimate for your landscaping project</p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Select Your Services</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {services.map(service => (
                      <label key={service.id} className="flex items-start gap-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer transition">
                        <input
                          type="checkbox"
                          checked={selectedServices.includes(service.id)}
                          onChange={() => handleServiceToggle(service.id)}
                          className="w-5 h-5 text-emerald-600 rounded mt-0.5"
                        />
                        <div className="flex-1">
                          <p className="font-semibold text-slate-900">{service.name}</p>
                          <p className="text-sm text-slate-600">${service.basePrice} {service.unit}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Property Size & Results */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Property Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Property Size (square feet)
                    </label>
                    <input
                      type="number"
                      value={propertySize}
                      onChange={(e) => setPropertySize(e.target.value)}
                      placeholder="e.g., 10000"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <p className="text-xs text-slate-500 mt-2">This helps us calculate accurate pricing based on scale</p>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={calculateEstimate}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                    >
                      Calculate Estimate
                    </Button>
                    <Button
                      onClick={resetCalculator}
                      variant="outline"
                      className="flex-1"
                    >
                      Reset
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Results */}
              {estimatedCost !== null && (
                <Card className="border-0 shadow-lg bg-emerald-50">
                  <CardHeader>
                    <CardTitle className="text-emerald-600">Estimated Cost</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <p className="text-slate-600 text-sm mb-2">Your estimated project cost:</p>
                      <p className="text-5xl font-bold text-emerald-600">${estimatedCost.toLocaleString()}</p>
                    </div>

                    <div className="bg-white rounded-lg p-4 space-y-2">
                      <p className="text-sm font-semibold text-slate-700">Selected Services:</p>
                      <ul className="space-y-1 text-sm text-slate-600">
                        {selectedServices.map(serviceId => {
                          const service = services.find(s => s.id === serviceId);
                          return (
                            <li key={serviceId} className="flex justify-between">
                              <span>{service?.name}</span>
                              <span className="font-semibold">${service?.basePrice.toLocaleString()}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    <p className="text-xs text-slate-600 italic">
                      * This is an estimate based on standard pricing. Actual cost may vary depending on site conditions and specific requirements.
                    </p>

                    <Link href="/contact">
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                        Get Detailed Quote
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Info Section */}
          <Card className="border-0 shadow-lg mt-8 bg-white">
            <CardHeader>
              <CardTitle>How Our Pricing Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Transparent Pricing</h4>
                  <p className="text-slate-600 text-sm">
                    We provide upfront estimates with no hidden fees. What you see is what you pay.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Custom Quotes</h4>
                  <p className="text-slate-600 text-sm">
                    This calculator provides estimates. Contact us for a detailed, site-specific quote.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Flexible Payment</h4>
                  <p className="text-slate-600 text-sm">
                    We offer flexible payment options for projects of all sizes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="container mx-auto max-w-2xl text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-6">Ready to Start Your Project?</h3>
          <p className="text-lg text-slate-600 mb-8">
            Contact us today to discuss your landscaping needs and get a detailed quote.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Contact Us Today
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
