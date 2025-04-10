
import React from "react";
import { useCursor } from "@/context/CursorContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  const { setCursorVariant } = useCursor();

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            T-Shirt Studio began with a simple idea: create premium quality t-shirts
            that look good, feel comfortable, and last for years.
          </p>
        </div>

        {/* Mission statement */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                We believe that clothing should be both sustainable and stylish. Our mission
                is to create timeless t-shirts using ethical production methods and eco-friendly materials.
              </p>
              <p className="text-gray-700">
                Every t-shirt we make is crafted to last, reducing waste and promoting
                a more sustainable approach to fashion.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2070&auto=format&fit=crop"
                alt="Sustainable cotton field"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Our process */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Ethically Sourced</h3>
              <p className="text-gray-600">
                We partner with certified organic cotton farmers who use sustainable
                farming practices and fair labor standards.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Quality Craftsmanship</h3>
              <p className="text-gray-600">
                Each t-shirt is meticulously crafted in small batches by skilled
                artisans who take pride in their work.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Designed to Last</h3>
              <p className="text-gray-600">
                We use premium materials and construction techniques to ensure
                our t-shirts maintain their shape, color, and comfort for years.
              </p>
            </div>
          </div>
        </div>

        {/* Team section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop"
                alt="Sarah Johnson"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium mb-1">Sarah Johnson</h3>
                <p className="text-gray-500 mb-3">Founder & Creative Director</p>
                <p className="text-gray-600">
                  With over 15 years in sustainable fashion, Sarah founded
                  T-Shirt Studio to create clothing that makes a positive impact.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=987&auto=format&fit=crop"
                alt="David Chen"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium mb-1">David Chen</h3>
                <p className="text-gray-500 mb-3">Head of Production</p>
                <p className="text-gray-600">
                  David oversees our manufacturing process, ensuring every t-shirt
                  meets our high standards for quality and sustainability.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop"
                alt="Maya Patel"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium mb-1">Maya Patel</h3>
                <p className="text-gray-500 mb-3">Design Lead</p>
                <p className="text-gray-600">
                  Maya brings her unique vision to our collections, balancing
                  timeless design with contemporary trends.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-semibold mb-4">Join Our Community</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Experience the difference of thoughtfully designed, ethically made clothing.
            Browse our collection or design your own custom t-shirt today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
              asChild
            >
              <Link to="/shop">Shop Collection</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
              asChild
            >
              <Link to="/custom-design">Design Your Own</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
