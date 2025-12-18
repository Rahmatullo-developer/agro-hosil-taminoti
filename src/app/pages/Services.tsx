import { useState } from 'react';
import { Sprout, Leaf, Wrench, ShieldCheck, Truck, GraduationCap, Package, Beaker } from 'lucide-react';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Barchasi' },
    { id: 'seeds', label: "Urug'lar" },
    { id: 'fertilizers', label: "O'g'itlar" },
    { id: 'equipment', label: 'Asbob-uskunalar' },
    { id: 'chemicals', label: 'Kimyoviy moddalar' },
    { id: 'services', label: 'Xizmatlar' },
  ];

  const products = [
    {
      id: 1,
      category: 'seeds',
      icon: Sprout,
      title: "Yuqori sifatli bug'doy urug'lari",
      description: "Sertifikatlangan va seleksiya qilingan bug'doy urug'lari. Yuqori hosildorlik va kasalliklarga chidamlilik.",
      image: "https://images.unsplash.com/photo-1693307299085-1e21b703df8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWVkcyUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc2NTk2MDI2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Sertifikatlangan", "Yuqori hosildorlik", "Kasalliklarga chidamli"],
    },
    {
      id: 2,
      category: 'seeds',
      icon: Sprout,
      title: "Sabzavot urug'lari",
      description: "Pomidor, bodring, qalampir va boshqa sabzavotlarning sifatli urug'lari. Gibrid va mahalliy navlar.",
      image: "https://images.unsplash.com/photo-1693307299085-1e21b703df8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWVkcyUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc2NTk2MDI2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Gibrid navlar", "Sifat kafolati", "Turli xillar"],
    },
    {
      id: 3,
      category: 'seeds',
      icon: Sprout,
      title: "Poliz ekinlari urug'lari",
      description: "Makkajo'xori, kungaboqar, soya va boshqa poliz ekinlari urug'lari.",
      image: "https://images.unsplash.com/photo-1683248895125-87c5705fa8a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFpbiUyMHNlZWRzJTIwYWdyaWN1bHR1cmV8ZW58MXx8fHwxNzY2MDUwOTIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Zamonaviy navlar", "Yuqori yog'lilik", "Ekologik toza"],
    },
    {
      id: 4,
      category: 'fertilizers',
      icon: Leaf,
      title: "Mineral o'g'itlar",
      description: "Azot, fosfor va kaliy o'g'itlari. Muvozanatli tarkib va tez ta'sir.",
      image: "https://images.unsplash.com/photo-1696371269777-88d1ce71642c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJ0aWxpemVyJTIwZmFybWluZ3xlbnwxfHx8fDE3NjYwNTEwNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Tez ta'sir", "Muvozanatli tarkib", "Samarali"],
    },
    {
      id: 5,
      category: 'fertilizers',
      icon: Leaf,
      title: "Organik o'g'itlar",
      description: "Tabiiy va ekologik toza organik o'g'itlar. Tuproq sifatini yaxshilaydi.",
      image: "https://images.unsplash.com/photo-1696371269777-88d1ce71642c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJ0aWxpemVyJTIwZmFybWluZ3xlbnwxfHx8fDE3NjYwNTEwNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Ekologik toza", "Tuproqni boyitadi", "Uzoq muddatli ta'sir"],
    },
    {
      id: 6,
      category: 'fertilizers',
      icon: Beaker,
      title: "Mikroo'g'itlar",
      description: "O'simliklar uchun zarur mikroelementlar majmuasi. Hosildorlikni oshiradi.",
      image: "https://images.unsplash.com/photo-1696371269777-88d1ce71642c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXJ0aWxpemVyJTIwZmFybWluZ3xlbnwxfHx8fDE3NjYwNTEwNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Kompleks tarkib", "Hosildorlikni oshiradi", "Oson qo'llash"],
    },
    {
      id: 7,
      category: 'equipment',
      icon: Wrench,
      title: "Qishloq xo'jalik texnikasi",
      description: "Traktorlar, kombаynlar va boshqa zamonaviy qishloq xo'jalik texnikasi.",
      image: "https://images.unsplash.com/photo-1639334189162-4b25b8aa4ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY2MDE1NTg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Zamonaviy texnologiya", "Ishonchli", "Texnik xizmat"],
    },
    {
      id: 8,
      category: 'equipment',
      icon: Wrench,
      title: "Sug'orish tizimlari",
      description: "Tomchilatib sug'orish va zamonaviy sug'orish tizimlari. Suvni tejaydi.",
      image: "https://images.unsplash.com/photo-1639334189162-4b25b8aa4ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY2MDE1NTg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Suv tejamkor", "Avtomatik", "O'rnatish xizmati"],
    },
    {
      id: 9,
      category: 'chemicals',
      icon: ShieldCheck,
      title: "Zararkunandalarga qarshi vositalar",
      description: "Insektitsidlar va fungitsidlar. O'simliklarni himoya qiladi.",
      image: "https://images.unsplash.com/photo-1700977932725-bf8a069b82db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXN0aWNpZGVzJTIwYWdyaWN1bHR1cmV8ZW58MXx8fHwxNzY2MDUxMDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Samarali himoya", "Xavfsiz", "Sertifikatlangan"],
    },
    {
      id: 10,
      category: 'chemicals',
      icon: Beaker,
      title: "Begona o'tlarga qarshi vositalar",
      description: "Gerbitsidlar va begona o'tlarni nazorat qilish vositalari.",
      image: "https://images.unsplash.com/photo-1700977932725-bf8a069b82db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXN0aWNpZGVzJTIwYWdyaWN1bHR1cmV8ZW58MXx8fHwxNzY2MDUxMDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["Tanlangan ta'sir", "Tez natija", "Ekologik xavfsiz"],
    },
    {
      id: 11,
      category: 'services',
      icon: GraduationCap,
      title: "Agro-maslahat xizmati",
      description: "Professional agronomlardan konsultatsiya. Ekin yetishtirish bo'yicha maslahat.",
      features: ["Tajribali agronomlar", "Individual yondashuv", "Bepul konsultatsiya"],
    },
    {
      id: 12,
      category: 'services',
      icon: Truck,
      title: "Yetkazib berish xizmati",
      description: "Tez va xavfsiz yetkazib berish barcha hududlarga. Pul qaytarish kafolati.",
      features: ["Tez yetkazib berish", "Barcha hududlar", "Xavfsiz tashish"],
    },
    {
      id: 13,
      category: 'services',
      icon: Package,
      title: "Ombor xizmati",
      description: "Mahsulotlarni saqlash va ombor xizmatlari. Zamonaviy ombor sharoitlari.",
      features: ["Zamonaviy ombor", "Xavfsiz saqlash", "Optimal sharoit"],
    },
    {
      id: 14,
      category: 'services',
      icon: ShieldCheck,
      title: "Sifat nazorati",
      description: "Barcha mahsulotlar sifat sertifikatlariga ega. To'liq laboratoriya sinovlari.",
      features: ["Sertifikatlar", "Lab sinovlari", "Sifat kafolati"],
    },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-600 to-green-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Mahsulot va xizmatlar
          </h1>
          <p className="text-lg md:text-xl text-green-50 max-w-3xl mx-auto">
            Qishloq xo'jaligi uchun zarur bo'lgan barcha mahsulot va xizmatlar bir joyda. 
            Yuqori sifat va raqobatbardosh narxlar.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 lg:top-20 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2.5 rounded-full transition-all ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg shadow-green-600/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-gray-600">
            <span className="font-semibold">{filteredProducts.length}</span> ta mahsulot topildi
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {product.image ? (
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                    <product.icon className="w-16 h-16 text-green-600" />
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <product.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 leading-tight">
                      {product.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>

                  {product.features && (
                    <div className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <button className="mt-6 w-full bg-green-600 text-white py-2.5 rounded-lg hover:bg-green-700 transition-colors">
                    Batafsil
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Maxsus taklif olishni xohlaysizmi?
            </h2>
            <p className="text-lg text-green-50 mb-8 max-w-2xl mx-auto">
              Mijozlarimiz uchun maxsus chegirmalar va takliflar. 
              Biz bilan bog'laning va o'zingizga mos taklifni oling!
            </p>
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all hover:shadow-xl">
              Bog'lanish
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
