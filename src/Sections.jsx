export const Sections = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-12 text-center">
    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-relaxed tracking-wider max-w-4xl mx-auto px-4 mb-6">
    ✨ ہماری زری کلیکشن ✨
  </h2>
  <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-loose">یہاں آپ کو کھاد، ونڈا، چُونا، آئل، زری اور جاپسان کی ہر چیز معیاری قیمت پر دستیاب ہے۔
  </p> <br></br><br></br>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <img
          src="/kl.webp"
          alt="Zari Product 1"
          className="w-64 h-64 object-cover rounded-2xl shadow-xl transition-transform hover:scale-105"
        />
        <img
          src="/mn.png"
          alt="Zari Product 2"
          className="w-64 h-72 object-cover rounded-2xl shadow-xl transition-transform hover:scale-105"
        />
      </div>
    </section>
  );
};
