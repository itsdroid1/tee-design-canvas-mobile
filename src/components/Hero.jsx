
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCursor } from "@/context/CursorContext";

const Hero = () => {
  const { setCursorVariant } = useCursor();
  
  return (
    <section className="pt-16 lg:pt-24 pb-12 lg:pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Wear Your <span className="text-blue-600">Creativity</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Design custom t-shirts that are uniquely yours. Express yourself with our easy-to-use 3D design tool.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="text-base h-12"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
                asChild
              >
                <Link to="/custom-design">Create Your Design</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base h-12"
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
                asChild
              >
                <Link to="/products">Shop Collection</Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative w-full h-full">
              <img 
                src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1064&auto=format&fit=crop" 
                alt="Custom T-Shirt" 
                className="w-full h-auto rounded-lg shadow-lg" 
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gray-100 rounded-full -z-10"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-100 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
