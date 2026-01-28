import { Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span className="text-sm text-amber-900 font-medium">Traditional & Contemporary Henna Art</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Exquisite Henna
              <span className="block text-amber-700">Designs for Every</span>
              <span className="block text-amber-700">Occasion</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Transform your celebrations with intricate, handcrafted henna artistry. From bridal ceremonies to festive gatherings, we bring timeless beauty to your special moments.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToContact}
                className="bg-amber-700 text-white px-8 py-3 rounded-full hover:bg-amber-800 transition-all hover:scale-105 shadow-lg"
              >
                Book Appointment
              </button>
              <button
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-amber-700 text-amber-700 px-8 py-3 rounded-full hover:bg-amber-50 transition-colors"
              >
                View Gallery
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-amber-200 to-orange-200 shadow-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5849180/pexels-photo-5849180.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Beautiful henna design on hands"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
              <p className="text-3xl font-bold text-amber-700">500+</p>
              <p className="text-sm text-gray-600">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
