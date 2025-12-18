import { MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="font-bold text-white">Agro Hosil Ta'minoti</h3>
                <p className="text-xs text-gray-400">Qishloq xo'jaligi</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Qishloq xo'jalik mahsulotlarini yetkazib berish va ta'minlash sohasida
              ishonchli hamkoringiz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Tezkor havolalar</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-sm hover:text-green-500 transition-colors"
                >
                  Bosh sahifa
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="text-sm hover:text-green-500 transition-colors"
                >
                  Biz haqimizda
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="text-sm hover:text-green-500 transition-colors"
                >
                  Xizmatlar
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="text-sm hover:text-green-500 transition-colors"
                >
                  Aloqa
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Bog'lanish</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Xorazm viloyati, Xonqa tumani, Olaja, Oydin Hayot MFY, Yog`du ko`chasi, 11A-uy</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a href="tel:+998702271144" className="text-sm hover:text-green-500 transition-colors">
                  +998 70 227 11 44
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0" />
                <a
                  href="mailto:info@agrahosil.uz"
                  className="text-sm hover:text-green-500 transition-colors"
                >
                  info@agrahosil.uz
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-white mb-4">Ish vaqti</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Dushanba - Juma:</span>
                <span className="text-green-500">9:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Shanba:</span>
                <span className="text-green-500">9:00 - 14:00</span>
              </li>
              <li className="flex justify-between">
                <span>Yakshanba:</span>
                <span className="text-gray-500">Dam olish</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© {currentYear} Agro Hosil Ta'minoti. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
}
