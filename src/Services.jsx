export const Services = () => {
  const services = [
    {
      title: "Custom Zari Designs",
      description: "We create intricate, personalized zari patterns for your garments and projects.",
      icon: "🧵",
    },
    {
      title: "Bulk Manufacturing",
      description: "High-quality bulk zari production with timely delivery and consistent standards.",
      icon: "🏭",
    },
    {
      title: "Embroidery Services",
      description: "Traditional and modern embroidery done by skilled artisans.",
      icon: "🪡",
    },
    {
      title: "Export Solutions",
      description: "We offer international delivery and export-quality zari materials.",
      icon: "🌍",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          At Tatla Zari Corporations, we offer premium-quality services tailored for excellence in the zari industry.
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
