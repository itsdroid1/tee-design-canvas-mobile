
import React, { useState } from "react";
import { useCursor } from "@/context/CursorContext";
import { useShop } from "@/context/ShopContext";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Sliders, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Shop = () => {
  const { setCursorVariant } = useCursor();
  const { products } = useShop();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  
  // Filter products based on search term
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Collection</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our premium selection of t-shirts, designed for comfort and style. Each piece is crafted with high-quality materials to ensure you look and feel great.
          </p>
        </div>
        
        {/* Search and filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Button 
            variant="outline" 
            onClick={() => setFilterOpen(!filterOpen)}
            className="w-full md:w-auto"
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            <Sliders className="mr-2" size={16} />
            Filters
          </Button>
        </div>
        
        {/* Filters panel - simple version */}
        {filterOpen && (
          <div className="bg-white shadow-md rounded-lg p-6 mb-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="basic" className="mr-2" />
                    <label htmlFor="basic">Basic Tees</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="graphic" className="mr-2" />
                    <label htmlFor="graphic">Graphic Tees</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="premium" className="mr-2" />
                    <label htmlFor="premium">Premium Collection</label>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="radio" name="price" id="price1" className="mr-2" />
                    <label htmlFor="price1">Under $25</label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" name="price" id="price2" className="mr-2" />
                    <label htmlFor="price2">$25 - $35</label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" name="price" id="price3" className="mr-2" />
                    <label htmlFor="price3">$35+</label>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Color</h3>
                <div className="flex flex-wrap gap-2">
                  <button className="w-6 h-6 rounded-full bg-black border border-gray-300"></button>
                  <button className="w-6 h-6 rounded-full bg-white border border-gray-300"></button>
                  <button className="w-6 h-6 rounded-full bg-gray-500 border border-gray-300"></button>
                  <button className="w-6 h-6 rounded-full bg-blue-800 border border-gray-300"></button>
                  <button className="w-6 h-6 rounded-full bg-red-600 border border-gray-300"></button>
                  <button className="w-6 h-6 rounded-full bg-green-600 border border-gray-300"></button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-gray-500">No products found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
