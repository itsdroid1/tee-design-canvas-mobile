
import React from "react";
import { Link } from "react-router-dom";
import { useCursor } from "@/context/CursorContext";

const ProductCard = ({ id, name, price, image }) => {
  const { setCursorVariant } = useCursor();
  
  return (
    <Link 
      to={`/products/${id}`} 
      className="product-card group"
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
  );
};

export default ProductCard;
