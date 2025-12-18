import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CircleCheck } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {
      name: '',
      phone: '',
      email: '',
      message: '',
    };

    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Ismingizni kiriting';
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Ism kamida 2 ta belgidan iborat bo\'lishi kerak';
      isValid = false;
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefon raqamini kiriting';
      isValid = false;
    } else if (!/^[\d\s\+\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Telefon raqam noto\'g\'ri formatda';
      isValid = false;
    } else if (formData.phone.replace(/\D/g, '').length < 9) {
      newErrors.phone = 'Telefon raqam kamida 9 ta raqamdan iborat bo\'lishi kerak';
      isValid = false;
    }

    // Email validation (optional but if provided must be valid)
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email manzil noto\'g\'ri formatda';
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Xabar matnini kiriting';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Xabar kamida 10 ta belgidan iborat bo\'lishi kerak';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: '',
    });

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Manzil',
      content:"Xorazm viloyati, Xonqa tumani, Olaja, Oydin Hayot MFY, Yog`du ko`chasi 11A-uy",
      link: null,
    },
    {
      icon: Phone,
      title: 'Telefon',
      content: '+998 70 277 11 44',
      link: 'tel:+998702271144',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@agrahosil.uz',
      link: 'mailto:info@agrahosil.uz',
    },
    {
      icon: Clock,
      title: 'Ish vaqti',
      content: 'Dushanba - Juma: 9:00 - 18:00',
      link: null,
    },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-600 to-green-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Biz bilan bog'laning
          </h1>
          <p className="text-lg md:text-xl text-green-50 max-w-3xl mx-auto">
            Savollaringiz bormi? Biz sizga yordam berishdan mamnunmiz. 
            Mutaxassislarimiz tez orada siz bilan bog'lanadi.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Xabar yuborish
              </h2>
              <p className="text-gray-600 mb-8">
                Quyidagi formani to'ldiring va biz tez orada siz bilan bog'lanamiz.
              </p>

              {isSubmitted && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                  <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-green-900 mb-1">
                      Xabaringiz muvaffaqiyatli yuborildi!
                    </h4>
                    <p className="text-sm text-green-700">
                      Tez orada mutaxassislarimiz siz bilan bog'lanadi.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Ism va familiya <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:ring-green-500'
                    }`}
                    placeholder="Ismingizni kiriting"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Telefon raqam <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      errors.phone
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:ring-green-500'
                    }`}
                    placeholder="+998 90 123 45 67"
                  />
                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:ring-green-500'
                    }`}
                    placeholder="email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Xabar matni <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none ${
                      errors.message
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:ring-green-500'
                    }`}
                    placeholder="Xabaringizni yozing..."
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Yuborilmoqda...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Xabar yuborish
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Bizning manzil
                </h2>
                
                {/* Map Placeholder */}
                <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg h-[400px] mb-6 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.5897927156293!2d69.2041326!3d41.3123363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE4JzQ0LjQiTiA2OcKwMTInMTQuOSJF!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                    title="Kompaniya manzili"
                  />
                </div>

                {/* Working Hours */}
                <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Ish vaqti</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-3 border-b border-green-400">
                      <span>Dushanba - Juma</span>
                      <span className="font-semibold">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-green-400">
                      <span>Shanba</span>
                      <span className="font-semibold">9:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Yakshanba</span>
                      <span className="font-semibold text-green-200">Dam olish</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ko'p beriladigan savollar
            </h2>
            <p className="text-lg text-gray-600">
              Eng ko'p uchraydigan savollarga javoblar
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'Yetkazib berish qancha vaqt oladi?',
                answer: 'Toshkent shahri bo\'ylab 1-2 ish kuni ichida, viloyatlarga 3-5 ish kuni ichida yetkazib beramiz.',
              },
              {
                question: 'Mahsulotlarga kafolat beriladimi?',
                answer: 'Ha, barcha mahsulotlarimiz sifat sertifikatlariga ega va ishlab chiqaruvchi kafolatiga ega.',
              },
              {
                question: 'To\'lovni qanday amalga oshirish mumkin?',
                answer: 'Naqd, plastik karta yoki bank o\'tkazmasi orqali to\'lov qilishingiz mumkin.',
              },
              {
                question: 'Buyurtma berish uchun minimal miqdor bormi?',
                answer: 'Yo\'q, minimal miqdor mavjud emas. Siz kerakli miqdorda buyurtma berishingiz mumkin.',
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group"
              >
                <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <span className="text-green-600 group-open:rotate-180 transition-transform">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}