
import { Mail, Phone, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Melvin Tan</h3>
            <p className="text-slate-300 mb-4">
              Creative Graphic Designer specializing in branding, digital design, and visual storytelling.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:m.santos.tan0527@gmail.com" className="text-slate-300 hover:text-white transition-colors">
                  m.santos.tan0527@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+639307247132" className="text-slate-300 hover:text-white transition-colors">
                  +639307247132
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/about" className="block text-slate-300 hover:text-white transition-colors">About</a>
              <a href="/portfolio" className="block text-slate-300 hover:text-white transition-colors">Portfolio</a>
              <a href="/services" className="block text-slate-300 hover:text-white transition-colors">Services</a>
              <a href="/contact" className="block text-slate-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center space-x-1">
            <span>Made with</span>
            <Heart size={16} className="text-rose-500" />
            <span>by Melvin Tan © 2024</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
