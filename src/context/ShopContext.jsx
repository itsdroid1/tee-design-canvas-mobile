
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

const ShopContext = createContext();

// Initial product data
const initialProducts = [
  {
    id: "1",
    name: "Classic Black Tee",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?q=80&w=987&auto=format&fit=crop",
    description: "Our signature t-shirt in classic black. Made from 100% organic cotton for maximum comfort and durability.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
  },
  {
    id: "2",
    name: "White Minimalist Tee",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=987&auto=format&fit=crop",
    description: "Clean and simple white t-shirt for everyday wear. Premium cotton blend that stays bright wash after wash.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White"],
  },
  {
    id: "3",
    name: "Vintage Gray Tee",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=987&auto=format&fit=crop",
    description: "Vintage-inspired gray t-shirt with a soft, worn-in feel right from the start. Perfect for casual outings.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gray"],
  },
  {
    id: "4",
    name: "Navy Blue Essential",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=987&auto=format&fit=crop",
    description: "Deep navy blue t-shirt that pairs well with any outfit. Crafted for comfort and style.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy"],
  },
  {
    id: "5",
    name: "Limited Edition Graphic Tee",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=927&auto=format&fit=crop",
    description: "Limited edition graphic t-shirt featuring original artwork. Each piece is unique and made in small batches.",
    sizes: ["M", "L", "XL"],
    colors: ["Black", "White"],
  },
  {
    id: "6",
    name: "Striped Summer Tee",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1529374814760-fe74e7dbfbb3?q=80&w=987&auto=format&fit=crop",
    description: "Breezy striped t-shirt perfect for summer days. Lightweight fabric that keeps you cool.",
    sizes: ["S", "M", "L"],
    colors: ["Blue/White"],
  },
  {
    id: "7",
    name: "Eco-Friendly Cotton Tee",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=987&auto=format&fit=crop",
    description: "Sustainable t-shirt made from 100% organic cotton. Eco-friendly and ethically sourced.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Natural", "Sage"],
  },
  {
    id: "8",
    name: "Urban Street Style Tee",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=964&auto=format&fit=crop",
    description: "Street-inspired design with modern fit. Perfect for urban adventures and casual styling.",
    sizes: ["S", "M", "L"],
    colors: ["Black", "Gray"],
  },
];

export const ShopProvider = ({ children }) => {
  // Load saved data from localStorage if available
  const [products] = useState(initialProducts);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Save cart and wishlist to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Add item to cart
  const addToCart = (productId, quantity = 1, size = "M", color) => {
    const product = products.find(item => item.id === productId);
    
    if (!product) return;
    
    const existingItem = cart.find(item => 
      item.id === productId && item.size === size && item.color === color
    );
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === productId && item.size === size && item.color === color
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      const selectedColor = color || product.colors[0];
      setCart([...cart, { 
        ...product, 
        quantity, 
        size, 
        color: selectedColor
      }]);
    }
    
    toast.success(`${product.name} added to your cart!`);
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    const itemToRemove = cart.find(item => item.id === id);
    if (itemToRemove) {
      setCart(cart.filter(item => item.id !== id));
      toast.info(`${itemToRemove.name} removed from your cart`);
    }
  };

  // Update cart item quantity
  const updateCartQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Toggle wishlist item
  const toggleWishlist = (productId) => {
    const product = products.find(item => item.id === productId);
    if (!product) return;
    
    const existingItem = wishlist.find(item => item.id === productId);
    
    if (existingItem) {
      setWishlist(wishlist.filter(item => item.id !== productId));
      toast.info(`${product.name} removed from your wishlist`);
    } else {
      setWishlist([...wishlist, product]);
      toast.success(`${product.name} added to your wishlist!`);
    }
  };

  // Check if item is in wishlist
  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  // Move item from cart to wishlist
  const moveToWishlist = (id) => {
    const itemToMove = cart.find(item => item.id === id);
    if (itemToMove) {
      // Remove from cart
      setCart(cart.filter(item => item.id !== id));
      
      // Add to wishlist if not already there
      if (!isInWishlist(id)) {
        const product = products.find(item => item.id === id);
        setWishlist([...wishlist, product]);
      }
      
      toast.success(`${itemToMove.name} moved to your wishlist`);
    }
  };

  // Calculate cart totals
  const getCartTotals = () => {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? 5.99 : 0;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;
    
    return { subtotal, shipping, tax, total };
  };

  const value = {
    products,
    cart,
    wishlist,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    toggleWishlist,
    isInWishlist,
    moveToWishlist,
    getCartTotals
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
};
