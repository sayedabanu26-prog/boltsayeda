import { Heart, PartyPopper, Sparkles, Users } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Bridal Henna',
    description: 'Elaborate, traditional bridal mehndi designs that tell your unique love story with intricate patterns and motifs.',
    features: ['Full hand & feet designs', 'Custom patterns', 'Premium quality henna']
  },
  {
    icon: PartyPopper,
    title: 'Party & Events',
    description: 'Perfect for festivals, celebrations, and special occasions. Quick, beautiful designs that make you stand out.',
    features: ['Fast application', 'Group bookings', 'Variety of styles']
  },
  {
    icon: Sparkles,
    title: 'Contemporary Designs',
    description: 'Modern, minimalist henna art combining traditional techniques with contemporary aesthetics.',
    features: ['Modern patterns', 'Unique styles', 'Personalized designs']
  },
  {
    icon: Users,
    title: 'Group Sessions',
    description: 'Fun henna parties for birthdays, baby showers, and girls nights. Entertainment for your entire group.',
    features: ['Multiple artists', 'Flexible packages', 'Party atmosphere']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From timeless bridal designs to contemporary art, we offer a complete range of henna services tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border-2 border-gray-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-700 transition-colors">
                <service.icon className="w-7 h-7 text-amber-700 group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-amber-700 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
