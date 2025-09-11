import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/properties" },
    { name: "About", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-white" // always white navbar
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">J</span>
            </div>
            <div>
              <h1 className="font-playfair font-bold text-xl text-gray-900">
                Satija Properties
              </h1>
              <p className="text-xs text-gray-500 -mt-1">
                From Land to Luxury All in one Place
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-300 hover:text-primary relative ${
                  isActive(item.path)
                    ? "text-primary"
                    : "text-gray-800 hover:text-primary"
                }`}
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+91 9205413041</span>
            </div>
            <Link to="/contact">
              <button className="btn-hero text-sm px-6 py-2.5">
                Book Consultation
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors duration-300"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 animate-fade-in">
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => {
                      setIsOpen(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`block py-2 font-medium transition-colors duration-300 hover:text-primary ${
                      isActive(item.path) ? "text-primary" : "text-gray-800"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>+91 9205413041</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>Delhi NCR, Gurugram, Mumbai, Goa</span>
                  </div>
                  <Link to="/contact">
                    <button
                      className="btn-hero w-full py-3 mt-4"
                      onClick={() => setIsOpen(false)}
                    >
                      Book Consultation
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
