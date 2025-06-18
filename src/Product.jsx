import { useEffect, useState } from "react";

export const Product = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  const domain = "https://tatlazari.com"; // ✅ replace with your domain

  const products = [
    { title: "Cypermethrin", image: "/p1.jpg", oldPrice: "PKR 750", price: "PKR 450", phone: "923001234567" },
    { title: "Ultimate", image: "/p11.jpg", oldPrice: "PKR 500", price: "PKR 350", phone: "923001234567" },
    { title: "Bridal Dupatta", image: "/p3.jpg", oldPrice: "PKR 5000", price: "PKR 3799", phone: "923001234567" },
    { title: "Glyphosate", image: "/p4.jpg", oldPrice: "PKR 1700", price: "PKR 1400", phone: "923001234567" },
    { title: "Bio-Enhancer", image: "/p77.jpg", oldPrice: "PKR 1450", price: "PKR 1200", phone: "923001234567" },
    { title: "K.king", image: "/p6.jpg", oldPrice: "PKR 1300", price: "PKR 1000", phone: "923001234567" },
    { title: "Magnesium", image: "/p7.jpg", oldPrice: "PKR 1350", price: "PKR 1000", phone: "923001234567" },
    { title: "Sipermethrin", image: "/p8.jpg", oldPrice: "PKR 1500", price: "PKR 1300", phone: "923001234567" },
    { title: "Deworx", image: "/p9.jpg", oldPrice: "PKR 1900", price: "PKR 1500", phone: "923001234567" },
    { title: "Acetochlor", image: "/p88.jpg", oldPrice: "PKR 1250", price: "PKR 1000", phone: "923001234567" },
    { title: "Lambda", image: "/p2.jpg", oldPrice: "PKR 1700", price: "PKR 1300", phone: "923001234567" },
    { title: "2 Pice ", image: "/p12.jpg", oldPrice: "PKR 4800", price: "PKR 4200", phone: "923001234567" },
  ];

  return (
    <section
      className={`bg-gray-50 py-10 px-3 sm:px-6 md:px-12 transition-all duration-700 ${
        fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 underline decoration-pink-500 underline-offset-4">
        تاتلہ زری کلیکشنز
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {products.map((p, i) => {
          const imageUrl = `${domain}${p.image}`;
          const message = `🛍️ Product: ${p.title}\n💰 Price: ${p.price}\n🖼️ Image: ${imageUrl}`;

          return (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full lg:h-96 h-[220px] object-cover rounded-t-xl"
              />
              <div className="p-3 text-center">
                <h3 className="text-sm font-medium text-gray-800 truncate">{p.title}</h3>
                <div className="mt-1 flex justify-center space-x-1 text-sm">
                  <span className="text-red-400 line-through">{p.oldPrice}</span>
                  <span className="text-green-600 font-semibold">{p.price}</span>
                </div>

                <a
                  href={`https://wa.me/${p.phone}?text=${encodeURIComponent(message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-full hover:bg-green-600 transition-all"
                >
                  WhatsApp Order
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
