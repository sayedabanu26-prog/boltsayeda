import { Flower2, Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Flower2 className="w-8 h-8 text-amber-500" />
              <div>
                <h3 className="text-2xl font-bold">Al Henna</h3>
                <p className="text-sm text-amber-500">by Iram</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Creating beautiful, intricate henna designs for your special moments. Experience the art of traditional and contemporary mehndi with personalized service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-amber-700 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-amber-500 transition-colors">Gallery</a></li>
              <li><a href="#about" className="hover:text-amber-500 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Bridal Henna</li>
              <li>Party & Events</li>
              <li>Contemporary Designs</li>
              <li>Group Sessions</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Al Henna by Iram. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
