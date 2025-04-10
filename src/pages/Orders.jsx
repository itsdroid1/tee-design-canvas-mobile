
import React from "react";
import { useCursor } from "@/context/CursorContext";
import { Link } from "react-router-dom";
import { Package, ChevronRight, Calendar, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock orders data
const orders = [
  {
    id: "ORD-12345",
    date: "April 5, 2025",
    status: "Delivered",
    total: 74.97,
    items: [
      {
        id: "1",
        name: "Classic Black Tee",
        quantity: 1,
        price: 24.99,
        image: "https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?q=80&w=987&auto=format&fit=crop",
      },
      {
        id: "3",
        name: "Vintage Gray Tee",
        quantity: 1,
        price: 29.99,
        image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=987&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "ORD-12346",
    date: "March 22, 2025",
    status: "Delivered",
    total: 49.98,
    items: [
      {
        id: "2",
        name: "White Minimalist Tee",
        quantity: 2,
        price: 24.99,
        image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=987&auto=format&fit=crop",
      },
    ],
  },
];

const statusColors = {
  "Delivered": "bg-green-100 text-green-800",
  "Processing": "bg-blue-100 text-blue-800",
  "Shipped": "bg-purple-100 text-purple-800",
  "Cancelled": "bg-red-100 text-red-800",
};

const Orders = () => {
  const { setCursorVariant } = useCursor();
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-8">My Orders</h1>
        
        {orders.length > 0 ? (
          <div className="space-y-6">
            {orders.map((order) => (
              <div 
                key={order.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                {/* Order header */}
                <div className="bg-gray-50 p-4 md:p-6 flex flex-col md:flex-row justify-between gap-4 border-b">
                  <div>
                    <div className="flex items-center gap-x-4">
                      <h2 className="font-semibold text-lg">{order.id}</h2>
                      <span 
                        className={`text-xs px-2 py-1 rounded-full ${
                          statusColors[order.status]
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <div className="flex mt-2 text-sm text-gray-600">
                      <Calendar size={16} className="mr-2" />
                      <span>Ordered on {order.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      asChild
                      onMouseEnter={() => setCursorVariant("hover")}
                      onMouseLeave={() => setCursorVariant("default")}
                      className="whitespace-nowrap"
                    >
                      <Link to={`/orders/${order.id}`}>
                        Order Details
                      </Link>
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onMouseEnter={() => setCursorVariant("hover")}
                      onMouseLeave={() => setCursorVariant("default")}
                      className="whitespace-nowrap"
                    >
                      <FileText size={14} className="mr-1" />
                      Invoice
                    </Button>
                  </div>
                </div>
                
                {/* Order items */}
                <div className="p-4 md:p-6">
                  <div className="space-y-4">
                    {order.items.map((item) => (
                      <div 
                        key={`${order.id}-${item.id}`}
                        className="flex items-center"
                      >
                        <div className="w-16 h-16 rounded overflow-hidden mr-4">
                          <Link to={`/products/${item.id}`}>
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover"
                            />
                          </Link>
                        </div>
                        <div className="flex-grow">
                          <Link 
                            to={`/products/${item.id}`}
                            className="font-medium hover:underline"
                            onMouseEnter={() => setCursorVariant("hover")}
                            onMouseLeave={() => setCursorVariant("default")}
                          >
                            {item.name}
                          </Link>
                          <div className="text-sm text-gray-600 mt-1">
                            Qty: {item.quantity} × ${item.price.toFixed(2)}
                          </div>
                        </div>
                        <Link 
                          to={`/products/${item.id}`}
                          className="ml-auto text-gray-400 hover:text-gray-800"
                          onMouseEnter={() => setCursorVariant("hover")}
                          onMouseLeave={() => setCursorVariant("default")}
                        >
                          <ChevronRight size={20} />
                        </Link>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      {order.items.reduce((total, item) => total + item.quantity, 0)} items
                    </div>
                    <div className="font-medium">
                      Total: ${order.total.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="mb-4 text-gray-400">
              <Package className="mx-auto h-16 w-16" />
            </div>
            <h2 className="text-2xl font-medium mb-4">No orders yet</h2>
            <p className="text-gray-600 mb-8">Start shopping to see your orders here!</p>
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

export default Orders;
