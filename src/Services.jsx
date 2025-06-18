export const Services = () => {
  const services = [
    {
     title:"🧪 زری کی خصوصی دوائیاں",
description: " ہماری دکان سے آپ کو زری کے تمام کاموں کے لیے اعلیٰ معیار کی دوائیاں اور کیمیکل آسانی سے دستیاب ہیں — جیسے کہ رنگ، چمک، چونا، اور مخصوص محلول جو زری کے کام میں جان ڈال دیتے ہیں۔",

    },
    {
     title:"🌱 اعلیٰ معیار کی کھاد",
   description:" زرعی زمین کی زرخیزی بڑھانے کے لیے ہم فراہم کرتے ہیں خالص، مؤثر اور معیاری کھاد — جو فصل کی پیداوار میں نمایاں اضافہ کرے۔"

    },
    {
    title: "🐄 اعلیٰ معیار کا ونڈا",
    description: "  ہم فراہم کرتے ہیں مویشیوں کے لیے طاقتور، متوازن اور غذائیت سے بھرپور ونڈا — جو دودھ کی پیداوار بڑھائے اور صحت مند جانوروں کی ضمانت بنے۔ ابھی آرڈر کریں اور بہترین ونڈا فوری حاصل کریں"
    },
    {
    title: " 🪡 فنِ کڑھائی کی دلکش خدمات",
 description: " ہم پیش کرتے ہیں روایت اور جدت کا حسین امتزاج — ماہر کاریگروں کے ہاتھوں بنائی گئی نفیس کڑھائیاں۔ بس آرڈر کریں اور اپنی پسند کی چیزیں فوری حاصل کریں"

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
