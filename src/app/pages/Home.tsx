import { useEffect, useState } from 'react';
import { Sprout, Shield, Truck, Users, CircleCheck, ArrowRight } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Sprout,
      title: "Qishloq xo'jalik mahsulotlari",
      description: "Yuqori sifatli urug'lar, o'g'itlar va qishloq xo'jalik uchun zarur bo'lgan barcha mahsulotlar.",
    },
    {
      icon: Truck,
      title: "Tez yetkazib berish",
      description: "O'z vaqtida va xavfsiz yetkazib berish xizmati barcha hududlarga.",
    },
    {
      icon: Shield,
      title: "Sifat kafolati",
      description: "Barcha mahsulotlarimiz sifat standartlariga to'liq javob beradi.",
    },
    {
      icon: Users,
      title: "Professional maslahat",
      description: "Tajribali mutaxassislarimiz har doim yordam berishga tayyor.",
    },
  ];

  const benefits = [
    "15 yillik tajriba qishloq xo'jalik sohasida",
    "1000+ mamnun mijozlar",
    "Raqobatbardosh narxlar",
    "Sifat sertifikatlari",
    "24/7 qo'llab-quvvatlash",
    "Tez yetkazib berish xizmati",
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1721577756352-54505d771f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVhdCUyMGZpZWxkJTIwYWdyaWN1bHR1cmV8ZW58MXx8fHwxNzY1OTU4NDg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Agriculture field"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`max-w-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Sifatli hosil — ishonchli ta'minot
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Qishloq xo'jalik sohasida 15 yillik tajriba bilan sizning ishonchli hamkoringiz. 
              Yuqori sifatli mahsulotlar va professional xizmat ko'rsatish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all hover:shadow-lg hover:shadow-green-600/50"
              >
                Xizmatlarimiz
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all hover:shadow-lg"
              >
                Batafsil ma'lumot
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Agra Hosil Ta'minoti haqida
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Biz 2009 yildan beri qishloq xo'jalik sohasida faoliyat yuritamiz. 
                Kompaniyamiz fermer xo'jaliklari va qishloq xo'jalik korxonalariga 
                yuqori sifatli mahsulotlar va professional xizmatlar taqdim etadi.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Bizning maqsadimiz - O'zbekiston qishloq xo'jaligini rivojlantirishga 
                hissa qo'shish va fermerlarga eng yaxshi mahsulotlarni taqdim etish.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600">Yillik tajriba</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
                  <div className="text-sm text-gray-600">Mijozlar</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Hamkorlar</div>
                </div>
              </div>
            </div>
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <img
                src="https://cdn.uza.uz/2025/04/18/21/31/fKYoFkmP6vLBcwhdO955GiEatU6pmPs9_normal.jpg"
                alt="Modern farming"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section id="services" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bizning xizmatlarimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Qishloq xo'jaligining barcha ehtiyojlari uchun kompleks yechimlar
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white p-6 lg:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                  <service.icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1624668430039-0175a0fbf006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBoYXJ2ZXN0fGVufDF8fHx8MTc2NjAyMjEyMnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Fresh harvest"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nima uchun bizni tanlashadi?
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Biz mijozlarimizga eng yaxshi xizmat ko'rsatishga intilamiz va 
                qishloq xo'jalik sohasidagi barcha zamonaviy talablarga javob beramiz.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-green-600 transition-colors">
                      <CircleCheck className="w-4 h-4 text-green-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-gray-700">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-600 to-green-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bizning jamoa bilan bog'laning
          </h2>
          <p className="text-lg text-green-50 mb-8 max-w-2xl mx-auto">
            Savol va takliflaringiz bo'lsa, biz bilan bog'laning. 
            Mutaxassislarimiz sizga yordam berishga doim tayyor!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all hover:shadow-xl"
          >
            Aloqaga chiqish
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}