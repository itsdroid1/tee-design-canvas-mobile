
import React, { useState } from "react";
import { useCursor } from "@/context/CursorContext";
import { useShop } from "@/context/ShopContext";
import { Link } from "react-router-dom";
import { Trash2, Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Cart = () => {
  const { setCursorVariant } = useCursor();
  const { 
    cart, 
    removeFromCart, 
    updateCartQuantity, 
    moveToWishlist,
    getCartTotals
  } = useShop();
  
  const [promoCode, setPromoCode] = useState("");
  
  // Calculate totals
  const { subtotal, shipping, tax, total } = getCartTotals();
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {cart.map((item, index) => (
                  <div 
                    key={item.id} 
                    className={`p-4 md:p-6 flex flex-col sm:flex-row gap-4 ${
                      index !== cart.length - 1 ? 'border-b' : ''
                    }`}
                  >
                    <div className="w-full sm:w-24 h-24 sm:h-full rounded-md overflow-hidden">
                      <Link to={`/products/${item.id}`}>
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </Link>
                    </div>
                    
                    <div className="flex-grow flex flex-col sm:flex-row justify-between">
                      <div className="flex flex-col">
                        <Link 
                          to={`/products/${item.id}`}
                          className="font-medium hover:underline"
                          onMouseEnter={() => setCursorVariant("hover")}
                          onMouseLeave={() => setCursorVariant("default")}
                        >
                          {item.name}
                        </Link>
                        <div className="text-sm text-gray-600 mt-1">
                          <span>Size: {item.size}</span>
                          <span className="mx-2">•</span>
                          <span>Color: {item.color}</span>
                        </div>
                        <div className="text-sm font-medium mt-2">${item.price.toFixed(2)}</div>
                      </div>
                      
                      <div className="flex items-center mt-4 sm:mt-0">
                        <div className="flex items-center border rounded-md overflow-hidden">
                          <button 
                            className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                            onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <input 
                            type="text" 
                            value={item.quantity}
                            onChange={(e) => {
                              const value = parseInt(e.target.value);
                              if (!isNaN(value)) {
                                updateCartQuantity(item.id, value);
                              }
                            }}
                            className="w-12 text-center border-0 focus:ring-0"
                          />
                          <button 
                            className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                            onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex sm:flex-col justify-between items-center sm:items-end">
                      <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                      <div className="flex space-x-2">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => moveToWishlist(item.id)}
                          onMouseEnter={() => setCursorVariant("hover")}
                          onMouseLeave={() => setCursorVariant("default")}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <Heart size={18} />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => removeFromCart(item.id)}
                          onMouseEnter={() => setCursorVariant("hover")}
                          onMouseLeave={() => setCursorVariant("default")}
                          className="text-gray-500 hover:text-red-600"
                        >
                          <Trash2 size={18} />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3 font-medium flex justify-between">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full flex items-center justify-center"
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <ShoppingBag className="mr-2" size={18} />
                  Proceed to Checkout
                </Button>
                
                {/* Promo Code */}
                <div className="mt-6 pt-6 border-t">
                  <p className="font-medium mb-2">Promo Code</p>
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Enter code" 
                      className="flex-grow"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <Button 
                      variant="outline"
                      onMouseEnter={() => setCursorVariant("hover")}
                      onMouseLeave={() => setCursorVariant("default")}
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="mb-4 text-gray-400">
              <ShoppingBag className="mx-auto h-16 w-16" />
            </div>
            <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet!</p>
            <Button
              size="lg" 
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
              asChild
            >
              <Link to="/shop">Start Shopping</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
