export const Services = () => {
  const services = [
    {
     title: "🧵 منفرد زری ڈیزائن",
description: "ہم آپ کے ملبوسات اور منصوبوں کے لیے نفاست سے تیار کردہ ذاتی نوعیت کے زری ڈیزائن تخلیق کرتے ہیں۔",

    },
    {
     title: "🏭 بلک تیاری",
description: "اعلیٰ معیار کے زری مصنوعات کی بلک میں تیاری، بروقت فراہمی اور مستقل معیار کے ساتھ۔",

    },
    {
     title: "🪡 فنِ کڑھائی کی دلکش خدمات",
description: "ہم پیش کرتے ہیں روایت اور جدت کا حسین امتزاج — ماہر کاریگروں کے ہاتھوں بنائی گئی نفیس کڑھائیاں۔",

    },
  
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">ہماری خدمات</h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          Tatla Zari Corporations میں، ہم زری کی صنعت میں اعلیٰ معیار کی خدمات فراہم کرتے ہیں جو بہترین مہارت اور عمدگی کے تقاضوں پر پوری اُترتی ہیں۔
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-xl transition-transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
