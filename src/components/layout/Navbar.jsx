
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, User, Heart, Package, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCursor } from "@/context/CursorContext";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { setCursorVariant } = useCursor();
  const profileRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link 
                to="/" 
                className="text-base font-medium hover:text-gray-600 transition-colors px-4 py-2"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link 
                to="/custom-design" 
                className="text-base font-medium hover:text-gray-600 transition-colors px-4 py-2"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                Design Your Own
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link 
                to="/shop" 
                className="text-base font-medium hover:text-gray-600 transition-colors px-4 py-2"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                Shop
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link 
                to="/about" 
                className="text-base font-medium hover:text-gray-600 transition-colors px-4 py-2"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                About
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Link 
            to="/wishlist"
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            <Heart size={20} />
          </Link>
          
          <div className="relative" ref={profileRef}>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleProfile}
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <User size={20} />
            </Button>
            
            {/* Profile Dropdown */}
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 animate-fade-in">
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="font-medium">My Account</p>
                  <p className="text-sm text-gray-500">user@example.com</p>
                </div>
                
                <div className="py-2">
                  <Link 
                    to="/profile/orders" 
                    className="flex items-center px-4 py-2 hover:bg-gray-50 transition-colors"
                    onClick={() => setProfileOpen(false)}
                  >
                    <Package size={16} className="mr-3 text-gray-500" />
                    <span>My Orders</span>
                  </Link>
                  <Link 
                    to="/wishlist" 
                    className="flex items-center px-4 py-2 hover:bg-gray-50 transition-colors"
                    onClick={() => setProfileOpen(false)}
                  >
                    <Heart size={16} className="mr-3 text-gray-500" />
                    <span>Wishlist</span>
                  </Link>
                  <Link 
                    to="/cart" 
                    className="flex items-center px-4 py-2 hover:bg-gray-50 transition-colors"
                    onClick={() => setProfileOpen(false)}
                  >
                    <ShoppingCart size={16} className="mr-3 text-gray-500" />
                    <span>Shopping Cart</span>
                  </Link>
                </div>
                
                <div className="border-t border-gray-100 py-2">
                  <button 
                    className="w-full text-left flex items-center px-4 py-2 text-red-600 hover:bg-gray-50 transition-colors"
                    onClick={() => setProfileOpen(false)}
                  >
                    <LogOut size={16} className="mr-3" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <Button 
            variant="ghost" 
            size="icon"
            asChild
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            <Link to="/cart">
              <ShoppingCart size={20} />
            </Link>
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
            <Link to="/shop" onClick={toggleMenu} className="text-base font-medium py-2">
              Shop
            </Link>
            <Link to="/about" onClick={toggleMenu} className="text-base font-medium py-2">
              About
            </Link>
            <Link to="/wishlist" onClick={toggleMenu} className="text-base font-medium py-2 flex items-center">
              <Heart size={18} className="mr-2" /> Wishlist
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
