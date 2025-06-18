export const About = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div>
          <img
            src="/k.png" // Replace with your actual image path
            alt="Tatla Zari Corporations"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">ہمارا تعارف</h2>
          <p className="text-gray-600 mb-6 text-lg">
           🕌 دلکش اور باوقار تعارف (حضرت کلیا والا کے لیے):
تاتلہ زری کارپوریشنز — حضرت کلیا والا میں خوبصورتی کا مرکز
جہاں روایت، معیار اور جدت ایک ساتھ بُنتے ہیں۔
ہماری دکان ایک مقام نہیں، ایک پہچان ہے — یہاں ہر چیز خاص ہے، ہر دھاگہ محبت سے تیار کیا گیا ہے۔
نفیس زری کڑھائیاں، جدید ڈیزائن، اور اعلیٰ معیار — سب کچھ صرف ایک ہی جگہ:
تاتلہ زری کارپوریشنز، حضرت کلیا والا


          </p>
          <p className="text-gray-500">
            Our mission is to preserve the beauty of heritage while embracing new-age techniques to
            provide unmatched products to our clients globally.
          </p>
        </div>
      </div>
    </section>
  );
};
