
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Share2, ShoppingCart, ChevronRight } from "lucide-react";
import { useCursor } from "@/context/CursorContext";
import { toast } from "sonner";

// Mock product data
const mockProducts = {
  "1": {
    id: "1",
    name: "Classic Black Tee",
    price: 24.99,
    description: "Our classic black tee is made from 100% organic cotton for maximum comfort and durability. Features a relaxed fit with a crew neck and short sleeves.",
    images: [
      "https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?q=80&w=987&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?q=80&w=1015&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1034&auto=format&fit=crop",
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["#000000", "#0A1128", "#D62828"],
  },
  "2": {
    id: "2",
    name: "White Minimalist Tee",
    price: 24.99,
    description: "A clean, minimalist white t-shirt made from premium cotton. Perfect for any casual outfit with its classic fit and versatile style.",
    images: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=987&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1480&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529635133059-f47a22e0c051?q=80&w=1305&auto=format&fit=crop",
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["#ffffff", "#F5F5DC", "#D8E2DC"],
  },
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { setCursorVariant } = useCursor();
  const product = id ? mockProducts[id as keyof typeof mockProducts] : null;
  
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [mainImage, setMainImage] = useState(0);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    
    if (!selectedColor) {
      toast.error("Please select a color");
      return;
    }
    
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen pt-16 lg:pt-24">
      <div className="container mx-auto px-4 md:px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <a 
            href="/" 
            className="hover:text-gray-700 transition-colors"
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            Home
          </a>
          <ChevronRight className="mx-2" size={14} />
          <a 
            href="/products" 
            className="hover:text-gray-700 transition-colors"
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            Products
          </a>
          <ChevronRight className="mx-2" size={14} />
          <span>{product.name}</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <img 
                src={product.images[mainImage]} 
                alt={product.name} 
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, idx) => (
                <button 
                  key={idx} 
                  className={`bg-gray-50 rounded-md overflow-hidden border-2 transition-all ${
                    mainImage === idx ? "border-black" : "border-transparent"
                  }`}
                  onClick={() => setMainImage(idx)}
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - view ${idx + 1}`} 
                    className="w-full h-auto object-cover aspect-square"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl mb-4">${product.price.toFixed(2)}</p>
            
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Color</h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color ? "border-black" : "border-gray-200"
                    } transition-all flex items-center justify-center`}
                    style={{ backgroundColor: color }}
                    onMouseEnter={() => setCursorVariant("hover")}
                    onMouseLeave={() => setCursorVariant("default")}
                    aria-label={`Select color ${color}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Size</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 flex items-center justify-center rounded-md border ${
                      selectedSize === size 
                        ? "border-black bg-black text-white" 
                        : "border-gray-300 hover:border-gray-400"
                    } transition-all`}
                    onMouseEnter={() => setCursorVariant("hover")}
                    onMouseLeave={() => setCursorVariant("default")}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Add to Cart */}
            <div className="flex space-x-4 mb-6">
              <Button 
                className="flex-grow py-6 text-base"
                onClick={handleAddToCart}
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <ShoppingCart className="mr-2" size={18} /> Add to Cart
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="h-auto aspect-square"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
                aria-label="Save to wishlist"
              >
                <Heart size={18} />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="h-auto aspect-square"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
                aria-label="Share product"
              >
                <Share2 size={18} />
              </Button>
            </div>
            
            {/* Product Info */}
            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Material</p>
                  <p className="font-medium">100% Organic Cotton</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Fit</p>
                  <p className="font-medium">Regular Fit</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Weight</p>
                  <p className="font-medium">180 GSM</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Care</p>
                  <p className="font-medium">Machine Wash Cold</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
