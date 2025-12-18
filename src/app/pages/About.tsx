import { useEffect, useRef, useState } from 'react';
import { Target, Eye, Heart, Award, TrendingUp, Globe, Users, CircleCheck } from 'lucide-react';

export default function About() {
  const [stats, setStats] = useState({
    years: 0,
    clients: 0,
    partners: 0,
    products: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateStats();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateStats = () => {
    const duration = 2000;
    const intervals = 50;
    const steps = duration / intervals;

    const targets = {
      years: 15,
      clients: 1000,
      partners: 50,
      products: 200,
    };

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats({
        years: Math.floor(targets.years * progress),
        clients: Math.floor(targets.clients * progress),
        partners: Math.floor(targets.partners * progress),
        products: Math.floor(targets.products * progress),
      });

      if (currentStep >= steps) {
        setStats(targets);
        clearInterval(interval);
      }
    }, intervals);
  };

  const values = [
    {
      icon: CircleCheck,
      title: "Sifat",
      description: "Biz faqat yuqori sifatli mahsulotlarni taqdim etamiz va barcha xalqaro standartlarga rioya qilamiz.",
    },
    {
      icon: Heart,
      title: "Ishonch",
      description: "Mijozlarimiz bilan uzoq muddatli va ishonchli munosabatlarni o'rnatish bizning asosiy maqsadimiz.",
    },
    {
      icon: TrendingUp,
      title: "Innovatsiya",
      description: "Zamonaviy texnologiyalar va yechimlarni qo'llash orqali doimo rivojlanib boramiz.",
    },
    {
      icon: Globe,
      title: "Mas'uliyat",
      description: "Atrof-muhitga va jamiyatga mas'uliyat bilan yondashish bizning printsipimiz.",
    },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-green-600 to-green-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Biz haqimizda
            </h1>
            <p className="text-lg md:text-xl text-green-50">
              O'zbekiston qishloq xo'jaligini rivojlantirishga hissa qo'shayotgan 
              ishonchli hamkor va yetakchi kompaniya
            </p>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Kompaniya tarixi
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900">Agra Hosil Ta'minoti</strong> 2009 yilda tashkil etilgan bo'lib, 
                  qishloq xo'jalik mahsulotlarini ta'minlash sohasida 15 yildan ortiq tajribaga ega.
                </p>
                <p>
                  Biz kichik oilaviy korxona sifatida boshlab, bugungi kunda O'zbekistonning 
                  barcha hududlarida faoliyat yuritadigan yirik kompaniyaga aylandik.
                </p>
                <p>
                  Yillar davomida biz minglab fermer xo'jaliklari va qishloq xo'jalik 
                  korxonalari bilan ishonchli hamkorlik munosabatlarini o'rnatdik.
                </p>
                <p>
                  Bugungi kunda biz zamonaviy texnologiyalar va yuqori sifatli mahsulotlar 
                  yordamida O'zbekiston qishloq xo'jaligini rivojlantirishga hissa qo'shmoqdamiz.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1714385370462-37cab271a883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYXJtJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjYwNTA5Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern agriculture"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Missiyamiz
              </h3>
              <p className="text-gray-600 leading-relaxed">
                O'zbekiston fermerlariga yuqori sifatli qishloq xo'jalik mahsulotlari va 
                professional xizmatlarni taqdim etish orqali mamlakatimizning oziq-ovqat 
                xavfsizligiga hissa qo'shish. Biz har bir mijozga individual yondashuv va 
                eng yaxshi yechimlarni taklif qilishga intilamiz.
              </p>
            </div>

            <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Vazifamiz
              </h3>
              <p className="text-gray-600 leading-relaxed">
                2030 yilga kelib O'zbekiston qishloq xo'jaligi sohasida etakchi va 
                eng ishonchli ta'minotchi kompaniyasiga aylanish. Zamonaviy texnologiyalar 
                va innovatsion yechimlar orqali qishloq xo'jaligini modernizatsiya qilish 
                va barqaror rivojlanishga erishish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bizning qadriyatlarimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Biz quyidagi printsiplar asosida faoliyat yuritamiz
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 lg:p-8 rounded-xl hover:bg-green-50 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-4 shadow-md group-hover:bg-green-600 transition-colors">
                  <value.icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section ref={statsRef} className="py-16 lg:py-24 bg-gradient-to-br from-green-600 to-green-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bizning yutuqlarimiz
            </h2>
            <p className="text-lg text-green-50">
              Raqamlarda kompaniyamizning muvaffaqiyatlari
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center hover:bg-white/20 transition-all">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stats.years}+
              </div>
              <div className="text-green-50">Yillik tajriba</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center hover:bg-white/20 transition-all">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stats.clients}+
              </div>
              <div className="text-green-50">Mamnun mijozlar</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center hover:bg-white/20 transition-all">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stats.partners}+
              </div>
              <div className="text-green-50">Hamkor kompaniyalar</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center hover:bg-white/20 transition-all">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stats.products}+
              </div>
              <div className="text-green-50">Mahsulot turlari</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1758524054151-46fd7b2ac71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwYnVzaW5lc3MlMjBhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NjYwNTA5Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our team"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional jamoa
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Bizning jamoamiz qishloq xo'jalik sohasida tajribali mutaxassislardan iborat. 
                Har bir xodimimiz o'z sohasida professional bo'lib, mijozlarimizga eng yaxshi 
                xizmat ko'rsatishga intiladi.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Malakali mutaxassislar</h4>
                    <p className="text-gray-600">
                      Tajribali agronomlar va texnik mutaxassislar jamoasi
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Mijozlarga yo'naltirilgan</h4>
                    <p className="text-gray-600">
                      Har bir mijozga individual yondashuv va professional maslahat
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Doimiy rivojlanish</h4>
                    <p className="text-gray-600">
                      Xodimlarimiz muntazam treninglar va kurslardan o'tadilar
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}