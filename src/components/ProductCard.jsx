
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useCursor } from "@/context/CursorContext";
import { toast } from "sonner";

const ProductCard = ({ id, name, price, image }) => {
  const { setCursorVariant } = useCursor();
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const toggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    
    if (!isWishlisted) {
      toast.success(`${name} added to your wishlist!`);
    } else {
      toast.info(`${name} removed from your wishlist`);
    }
  };
  
  return (
    <div className="product-card group relative">
      <Link 
        to={`/products/${id}`} 
        className="block"
        onMouseEnter={() => setCursorVariant("hover")}
        onMouseLeave={() => setCursorVariant("default")}
      >
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="product-image transition-transform duration-500 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div className="p-4">
          <h3 className="text-base font-medium">{name}</h3>
          <p className="text-sm text-gray-500 mt-1">${price.toFixed(2)}</p>
        </div>
      </Link>
      
      {/* Wishlist button */}
      <button 
        className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
          isWishlisted 
            ? 'bg-white text-red-500' 
            : 'bg-white/80 text-gray-600 hover:bg-white hover:text-gray-900'
        }`}
        onClick={toggleWishlist}
        onMouseEnter={() => setCursorVariant("hover")}
        onMouseLeave={() => setCursorVariant("default")}
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart 
          size={16} 
          className={isWishlisted ? "fill-red-500" : ""} 
        />
      </button>
    </div>
  );
};

export default ProductCard;
