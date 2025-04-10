
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useCursor } from "@/context/CursorContext";
import { useShop } from "@/context/ShopContext";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, ChevronLeft } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const { setCursorVariant } = useCursor();
  const { products, addToCart, toggleWishlist, isInWishlist } = useShop();
  
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Find the product from the products list
    const foundProduct = products.find(p => p.id === id);
    
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedColor(foundProduct.colors[0]);
    }
    
    setIsLoading(false);
  }, [id, products]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6 text-center py-12">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/shop">Back to Shop</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product.id, quantity, selectedSize, selectedColor);
  };
  
  const handleToggleWishlist = () => {
    toggleWishlist(product.id);
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-6">
          <Link 
            to="/shop" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900"
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            <ChevronLeft size={16} className="mr-1" /> Back to Shop
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto aspect-square object-cover"
            />
          </div>
          
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl font-medium text-gray-900 mb-4">${product.price.toFixed(2)}</p>
            
            <div className="prose prose-sm text-gray-600 mb-6">
              <p>{product.description}</p>
            </div>
            
            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Color: {selectedColor}</h3>
                <div className="flex space-x-2">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full ${getColorClass(color)} ${selectedColor === color ? 'ring-2 ring-offset-2 ring-gray-800' : ''}`}
                      aria-label={color}
                    />
                  ))}
                </div>
              </div>
            )}
            
            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1 border rounded-md text-sm ${
                        selectedSize === size 
                          ? 'bg-gray-900 text-white border-gray-900' 
                          : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Quantity */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Quantity</h3>
              <div className="flex w-32 items-center border rounded-md">
                <button 
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                  onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}
                >
                  -
                </button>
                <input 
                  type="number" 
                  min="1" 
                  value={quantity}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    setQuantity(isNaN(value) || value < 1 ? 1 : value);
                  }}
                  className="w-full text-center border-0 focus:ring-0"
                />
                <button 
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                  onClick={() => setQuantity(prev => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                className="flex-1 gap-2"
                size="lg"
                onClick={handleAddToCart}
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <ShoppingCart size={18} /> Add to Cart
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={handleToggleWishlist}
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
                className={isInWishlist(product.id) ? "text-red-500" : ""}
              >
                <Heart size={18} className={isInWishlist(product.id) ? "fill-red-500" : ""} />
                {isInWishlist(product.id) ? "In Wishlist" : "Add to Wishlist"}
              </Button>
            </div>
            
            {/* Additional Info */}
            <div className="border-t pt-6">
              <div className="prose prose-sm">
                <h3 className="text-base font-medium">Details</h3>
                <ul className="text-gray-600 mt-2 space-y-1">
                  <li>100% premium cotton</li>
                  <li>Machine washable</li>
                  <li>Sustainably sourced materials</li>
                  <li>Preshrunk fabric</li>
                  <li>Designed and printed in-house</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to convert color names to Tailwind classes
const getColorClass = (colorName) => {
  const colorMap = {
    'Black': 'bg-black',
    'White': 'bg-white border border-gray-300',
    'Gray': 'bg-gray-500',
    'Navy': 'bg-blue-900',
    'Blue': 'bg-blue-600',
    'Red': 'bg-red-600',
    'Green': 'bg-green-600',
    'Natural': 'bg-amber-100',
    'Sage': 'bg-green-300',
    'Blue/White': 'bg-gradient-to-r from-blue-500 to-white'
  };
  
  return colorMap[colorName] || 'bg-gray-200';
};

export default ProductDetail;
