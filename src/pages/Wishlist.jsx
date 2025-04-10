
import React, { useState } from "react";
import { useCursor } from "@/context/CursorContext";
import { Link } from "react-router-dom";
import { ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// Mock wishlist items
const initialWishlistItems = [
  {
    id: "1",
    name: "Classic Black Tee",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?q=80&w=987&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Vintage Gray Tee",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=987&auto=format&fit=crop",
  },
];

const Wishlist = () => {
  const { setCursorVariant } = useCursor();
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);
  
  const removeFromWishlist = (id) => {
    const itemToRemove = wishlistItems.find(item => item.id === id);
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
    toast.info(`${itemToRemove.name} removed from your wishlist`);
  };
  
  const addToCart = (item) => {
    toast.success(`${item.name} added to your cart!`);
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
        
        {wishlistItems.length > 0 ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {wishlistItems.map((item) => (
                <div key={item.id} className="border rounded-lg overflow-hidden bg-white shadow-sm">
                  <div className="flex">
                    <div className="w-1/3">
                      <Link to={`/products/${item.id}`}>
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover aspect-square"
                        />
                      </Link>
                    </div>
                    <div className="w-2/3 p-4 flex flex-col justify-between">
                      <div>
                        <Link 
                          to={`/products/${item.id}`}
                          onMouseEnter={() => setCursorVariant("hover")}
                          onMouseLeave={() => setCursorVariant("default")}
                          className="hover:underline"
                        >
                          <h3 className="font-medium mb-1">{item.name}</h3>
                        </Link>
                        <p className="text-gray-600 mb-4">${item.price.toFixed(2)}</p>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => removeFromWishlist(item.id)}
                          onMouseEnter={() => setCursorVariant("hover")}
                          onMouseLeave={() => setCursorVariant("default")}
                          className="text-gray-500 hover:text-red-600"
                        >
                          <Trash2 size={14} className="mr-1" /> Remove
                        </Button>
                        
                        <Button 
                          size="sm"
                          onClick={() => addToCart(item)}
                          onMouseEnter={() => setCursorVariant("hover")}
                          onMouseLeave={() => setCursorVariant("default")}
                        >
                          <ShoppingCart size={14} className="mr-1" /> Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="mb-4 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-medium mb-4">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8">Browse our collection and add items you love to your wishlist!</p>
            <Button
              size="lg" 
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
              asChild
            >
              <Link to="/shop">Shop Now</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
