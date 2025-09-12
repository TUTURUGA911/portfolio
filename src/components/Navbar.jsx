import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Daftar menu dengan target id
  const menuItems = [
    { name: "Beranda", link: "#beranda" },
    { name: "Tentang Saya", link: "#tentang" },
    { name: "Proyek", link: "#proyek" },
    { name: "Kontak", link: "#kontak" },
  ];

  return (
    <nav
      className={`navbar py-4 md:py-6 flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 sticky top-0 z-50 transition-all duration-300 rounded-b-sm ${
        isScrolled ? "bg-gray-50 shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="logo">
        <h1
          className={`text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-200 transition-colors duration-300`}
        >
          Portfolio
        </h1>
      </div>

      {/* Menu untuk layar besar */}
      <ul className="hidden md:flex items-center gap-8 lg:gap-12">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.link}
              className={`text-base lg:text-lg font-medium relative group hover:text-red-400 transition-colors duration-300 ${
                isScrolled ? "text-black" : "text-gray-200"
              }`}
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger button (hanya tampil di mobile) */}
      <button
        className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X size={28} className="text-gray-800" />
        ) : (
          <Menu size={28} className="text-gray-800" />
        )}
      </button>

      {/* Mobile menu */}
      <ul
        className={`absolute top-16 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg flex flex-col items-center gap-6 py-8 md:hidden z-50 transition-all duration-300 ease-in-out rounded-2xl ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.link}
              className={`text-lg font-medium hover:text-red-400 transition-colors duration-200 ${
                isScrolled ? "text-black" : "text-gray-800"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
