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
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 mb-6 text-lg">
            Tatla Zari Corporations is a leading name in traditional and modern zari craftsmanship.
            With decades of experience, we deliver excellence in design, quality, and innovation.
            From handcrafted embroidery to industrial-scale production, we take pride in every thread.
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
