
import React from "react";
import { Link } from "react-router-dom";
import { useCursor } from "@/context/CursorContext";

const Footer = () => {
  const { setCursorVariant } = useCursor();
  
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">T-Shirt Studio</h3>
            <p className="text-sm text-gray-600 mb-4">
              Quality custom t-shirts designed just for you.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/products" 
                  className="text-sm text-gray-600 hover:text-gray-900"
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link 
                  to="/custom-design" 
                  className="text-sm text-gray-600 hover:text-gray-900"
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  Custom Design
                </Link>
              </li>
              <li>
                <Link 
                  to="/featured" 
                  className="text-sm text-gray-600 hover:text-gray-900"
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  Featured
                </Link>
              </li>
              <li>
                <Link 
                  to="/bestsellers" 
                  className="text-sm text-gray-600 hover:text-gray-900"
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  Best Sellers
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/faq" 
                  className="text-sm text-gray-600 hover:text-gray-900"
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  to="/shipping" 
                  className="text-sm text-gray-600 hover:text-gray-900"
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  Shipping
                </Link>
              </li>
              <li>
                <Link 
                  to="/returns" 
                  className="text-sm text-gray-600 hover:text-gray-900"
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-sm text-gray-600 hover:text-gray-900"
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about" 
                  className="text-sm text-gray-600 hover:text-gray-900"
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/sustainability" 
                  className="text-sm text-gray-600 hover:text-gray-900"
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-sm text-gray-600 hover:text-gray-900"
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy" 
                  className="text-sm text-gray-600 hover:text-gray-900"
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© 2025 T-Shirt Studio. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            {/* Social Media Icons would go here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
