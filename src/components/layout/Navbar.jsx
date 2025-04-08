
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCursor } from "@/context/CursorContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { setCursorVariant } = useCursor();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/"
          onMouseEnter={() => setCursorVariant("hover")}
          onMouseLeave={() => setCursorVariant("default")}
          className="text-xl font-bold tracking-tight"
        >
          T-Shirt Studio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-base font-medium hover:text-gray-600 transition-colors"
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            Home
          </Link>
          <Link 
            to="/custom-design" 
            className="text-base font-medium hover:text-gray-600 transition-colors"
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            Design Your Own
          </Link>
          <Link 
            to="/products" 
            className="text-base font-medium hover:text-gray-600 transition-colors"
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            Shop
          </Link>
          <Link 
            to="/about" 
            className="text-base font-medium hover:text-gray-600 transition-colors"
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            About
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon"
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            <User size={20} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            <ShoppingCart size={20} />
          </Button>
          <Button 
            className="md:hidden" 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 border-t animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" onClick={toggleMenu} className="text-base font-medium py-2">
              Home
            </Link>
            <Link to="/custom-design" onClick={toggleMenu} className="text-base font-medium py-2">
              Design Your Own
            </Link>
            <Link to="/products" onClick={toggleMenu} className="text-base font-medium py-2">
              Shop
            </Link>
            <Link to="/about" onClick={toggleMenu} className="text-base font-medium py-2">
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
