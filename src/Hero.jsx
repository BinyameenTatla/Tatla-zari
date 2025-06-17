import { useEffect, useState } from "react";

export const Hero = () => {
  const fullText = "Tatla Zari Corporations";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 100); // typing speed (100ms per letter)

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center px-4 md:px-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-7xl">
        
        {/* Left: Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            <span className="bg-gradient-to-r from-black via-gray-900 to-black bg-clip-text text-transparent">
              {text}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Every item is thoughtfully selected and beautifully crafted — a perfect blend of quality, tradition, and modern design. 
            More than just products, we bring you an experience rich in culture, care, and craftsmanship.
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg transition-all duration-300">
            Explore Products
          </button>
        </div>

        {/* Right: Image */}
        <div>
          <img
            src="/jjjj.png"
            alt="Zari Product"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};
