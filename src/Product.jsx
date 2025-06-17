import { useEffect, useState } from "react";

export const Product = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  const products = [
    { title: "Zari Kurta", image: "/p1.jpg", oldPrice: "PKR 3500", price: "PKR 2499", phone: "923001234567" },
    { title: "Classic Shawl", image: "/p11.jpg", oldPrice: "PKR 4000", price: "PKR 2999", phone: "923001234567" },
    { title: "Bridal Dupatta", image: "/p3.jpg", oldPrice: "PKR 5000", price: "PKR 3799", phone: "923001234567" },
    { title: "Luxury Cap", image: "/p4.jpg", oldPrice: "PKR 2500", price: "PKR 1899", phone: "923001234567" },
    { title: "Embroidery Shirt", image: "/p5.jpg", oldPrice: "PKR 4200", price: "PKR 3199", phone: "923001234567" },
    { title: "Zari Waistcoat", image: "/p6.jpg", oldPrice: "PKR 6000", price: "PKR 4499", phone: "923001234567" },
    { title: "Royal Khussa", image: "/p7.jpg", oldPrice: "PKR 3000", price: "PKR 2199", phone: "923001234567" },
    { title: "Festive Dress", image: "/p8.jpg", oldPrice: "PKR 5200", price: "PKR 3999", phone: "923001234567" },
    { title: "Wedding Shawl", image: "/p9.jpg", oldPrice: "PKR 5500", price: "PKR 4199", phone: "923001234567" },
    { title: "Traditional Cap", image: "/p10.jpg", oldPrice: "PKR 2700", price: "PKR 1999", phone: "923001234567" },
    { title: "Fancy Dress", image: "/p2.jpg", oldPrice: "PKR 4800", price: "PKR 3599", phone: "923001234567" },
    { title: "Fancy Dress", image: "/p12.jpg", oldPrice: "PKR 4800", price: "PKR 3599", phone: "923001234567" },
  ];

  return (
    <section
      className={`bg-gray-50 py-10 px-3 sm:px-6 md:px-12 transition-all duration-700 ${
        fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 underline decoration-pink-500 underline-offset-4">
        Tatla Zari Collections
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {products.map((p, i) => (
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
                href={`https://wa.me/${p.phone}?text=${encodeURIComponent(
                  `I'm interested in:\n\n🧵 *${p.title}*\n💰 Old Price: ${p.oldPrice}\n🔥 New Price: ${p.price}\n🖼️ Image: https://yourdomain.com${p.image}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-full hover:bg-green-600 transition-all"
              >
                WhatsApp Order
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
