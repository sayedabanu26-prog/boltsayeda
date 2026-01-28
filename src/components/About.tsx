import { Award, Clock, Heart, Star } from 'lucide-react';

const stats = [
  { icon: Star, label: 'Years Experience', value: '10+' },
  { icon: Heart, label: 'Happy Clients', value: '500+' },
  { icon: Award, label: 'Events Covered', value: '300+' },
  { icon: Clock, label: 'Hours of Art', value: '1000+' }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Henna artist at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-amber-700 text-white p-8 rounded-2xl shadow-xl max-w-xs">
              <p className="text-sm font-medium mb-1">Crafting Beauty Since</p>
              <p className="text-4xl font-bold">2014</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">About Iram</h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              With over a decade of experience in the art of henna, I've had the privilege of being part of countless special moments. What started as a passion has blossomed into Al Henna by Iram, where traditional craftsmanship meets contemporary design.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Every design I create is unique, carefully crafted to reflect your personality and the significance of your occasion. Using only the finest natural henna, I ensure not just beautiful designs, but also your safety and comfort.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-amber-50 rounded-xl">
                  <stat.icon className="w-8 h-8 text-amber-700 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
