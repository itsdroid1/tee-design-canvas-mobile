
import React from "react";
import { useCursor } from "@/context/CursorContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const { setCursorVariant } = useCursor();
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero section */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Crafting premium t-shirts with passion, purpose, and a commitment to sustainability since 2018.
          </p>
        </div>
        
        {/* Vision and mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600 mb-4">
              To revolutionize the fashion industry by creating t-shirts that not only look amazing but also have minimal impact on our planet. We envision a world where style and sustainability go hand in hand.
            </p>
            <p className="text-gray-600">
              Every T-Shirt Studio product is designed with both you and the environment in mind, ensuring that looking good never comes at the expense of our planet.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              To provide customers with high-quality, comfortable t-shirts that express their unique personality while maintaining our commitment to ethical production and environmental stewardship.
            </p>
            <p className="text-gray-600">
              We believe that fashion can be a force for positive change, and we're dedicated to making that belief a reality with every shirt we create.
            </p>
          </div>
        </div>
        
        {/* Our journey */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <h3 className="text-xl font-semibold mb-3">The Beginning (2018)</h3>
                <p className="text-gray-600 mb-4">
                  T-Shirt Studio began in a small apartment with just two friends and a dream. Armed with a vintage screen printing press and a determination to create something different, we printed our first batch of 50 shirts that sold out in less than a week at a local market.
                </p>
                <p className="text-gray-600">
                  Our commitment to quality was evident from day one. Even with our limited resources, we insisted on using premium fabrics and eco-friendly inks, setting the foundation for what would become our core values.
                </p>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1582039923110-30bdb7f1b0e5?q=80&w=1674&auto=format&fit=crop" 
                  alt="Our beginning" 
                  className="w-full h-auto object-cover aspect-video rounded-lg"
                />
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?q=80&w=1674&auto=format&fit=crop" 
                  alt="Growing years" 
                  className="w-full h-auto object-cover aspect-video rounded-lg"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-semibold mb-3">Growing Years (2020-2022)</h3>
                <p className="text-gray-600 mb-4">
                  As word spread about our unique designs and exceptional quality, our little studio expanded into a proper workshop. We formed partnerships with local artists, bringing fresh perspectives and innovative designs to our collections.
                </p>
                <p className="text-gray-600">
                  During this period, we implemented our seed-to-shirt tracking system, allowing customers to trace the journey of their t-shirt from the organic cotton fields to their closet—transparency that remains a cornerstone of our business.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <h3 className="text-xl font-semibold mb-3">Present Day</h3>
                <p className="text-gray-600 mb-4">
                  Today, T-Shirt Studio is recognized as a leader in sustainable fashion. Our team has grown to include designers, environmental specialists, and ethical supply chain experts, all working together to create products that stand the test of time.
                </p>
                <p className="text-gray-600">
                  While we've come a long way from our humble beginnings, our core mission remains the same: to create exceptional t-shirts that look good, feel good, and do good for the planet.
                </p>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1596347396504-59c165c17a60?q=80&w=1770&auto=format&fit=crop" 
                  alt="Present day" 
                  className="w-full h-auto object-cover aspect-video rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We use 100% organic cotton, recycled materials, and water-based inks. Our packaging is plastic-free and made from recycled paper. Each year, we plant 10,000 trees to offset our carbon footprint.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-gray-600">
                Every t-shirt undergoes rigorous quality testing, ensuring it withstands years of wear and washing. We never compromise on materials or craftsmanship, believing that true sustainability starts with longevity.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-600">
                We collaborate with local artists, donate 5% of profits to environmental causes, and organize regular community clean-up events. Our studio doors are always open for workshops and educational tours.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1061&auto=format&fit=crop" 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Sarah Johnson</h3>
              <p className="text-gray-600">Founder & Creative Director</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1590086782957-93c06ef21604?q=80&w=987&auto=format&fit=crop" 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Michael Chen</h3>
              <p className="text-gray-600">Co-Founder & Sustainability Lead</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop" 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Aisha Patel</h3>
              <p className="text-gray-600">Head of Design</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1160&auto=format&fit=crop" 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">David Rodriguez</h3>
              <p className="text-gray-600">Production Manager</p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Whether you're looking for the perfect t-shirt or share our passion for sustainable fashion, we'd love to connect with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
              asChild
            >
              <Link to="/shop">Shop Our Collection</Link>
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
