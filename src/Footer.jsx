export const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Tatla Zari Corporations</h2>
          <p className="text-gray-400 text-sm">
            Delivering excellence in traditional zari craftsmanship and modern design across the globe.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Products</a></li>
            <li><a href="#" className="hover:text-white transition">Services</a></li>
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-400 text-sm">📍 Ali Pur Chattha, Pakistan</p>
          <p className="text-gray-400 text-sm">📞 +92 300 1234567</p>
          <p className="text-gray-400 text-sm">✉️ info@tatlazari.com</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Tatla Zari Corporations. All rights reserved.
      </div>
    </footer>
  );
};
