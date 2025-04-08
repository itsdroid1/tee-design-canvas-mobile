
import React from "react";
import ProductCard from "./ProductCard";
import { useCursor } from "@/context/CursorContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Mock product data
const products = [
  {
    id: "1",
    name: "Classic Black Tee",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?q=80&w=987&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "White Minimalist Tee",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=987&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Vintage Gray Tee",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=987&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Navy Blue Essential",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=987&auto=format&fit=crop",
  },
];

const FeaturedProducts = () => {
  const { setCursorVariant } = useCursor();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular t-shirt designs, crafted with premium materials for comfort and style.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
            asChild
          >
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
