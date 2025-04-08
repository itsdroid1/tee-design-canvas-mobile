
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Palette, Shapes, Sparkles } from "lucide-react";
import { useCursor } from "@/context/CursorContext";

const DesignSection = () => {
  const { setCursorVariant } = useCursor();
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Design Your Own T-Shirt</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Express yourself with our intuitive 3D t-shirt designer. Add text, upload images, and see your creation come to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <div className="bg-white p-8 text-center rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Palette className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Choose Colors</h3>
            <p className="text-gray-600">
              Pick from a wide range of colors for your custom t-shirt.
            </p>
          </div>
          
          <div className="bg-white p-8 text-center rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shapes className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Add Designs</h3>
            <p className="text-gray-600">
              Upload your own artwork or choose from our library of designs.
            </p>
          </div>
          
          <div className="bg-white p-8 text-center rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Preview in 3D</h3>
            <p className="text-gray-600">
              See how your design looks with our interactive 3D preview tool.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg"
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
            asChild
          >
            <Link to="/custom-design">Start Designing Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DesignSection;
