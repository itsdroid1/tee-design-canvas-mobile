
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import TShirt3DModel from "@/components/TShirt3DModel";
import { Palette, Upload, ShoppingCart, TextCursor, Check } from "lucide-react";
import { useCursor } from "@/context/CursorContext";
import { useShop } from "@/context/ShopContext";
import { toast } from "sonner";

const colors = [
  { name: "Black", value: "#000000" },
  { name: "White", value: "#ffffff" },
  { name: "Navy", value: "#0A1128" },
  { name: "Red", value: "#D62828" },
  { name: "Forest Green", value: "#2C6E49" },
  { name: "Royal Blue", value: "#1565C0" },
  { name: "Purple", value: "#7B1FA2" },
  { name: "Yellow", value: "#FFC107" },
];

const CustomDesign = () => {
  const { setCursorVariant } = useCursor();
  const { addToCart } = useShop();
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [logoTexture, setLogoTexture] = useState<string | null>(null);
  const [textInput, setTextInput] = useState("");
  const [fontSize, setFontSize] = useState([24]);

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setLogoTexture(event.target.result as string);
          toast.success("Image uploaded successfully!");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddText = () => {
    if (textInput.trim()) {
      // In a real application, this would generate a texture with the text
      toast("Text added to your design!");
    } else {
      toast.error("Please enter some text first");
    }
  };

  const handleAddToCart = () => {
    // Create a custom product object for the customized shirt
    const customShirt = {
      id: `custom-${Date.now()}`, // Generate a unique ID
      name: `Custom T-Shirt (${getColorName(selectedColor)})`,
      price: 24.99,
      image: logoTexture || "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1064&auto=format&fit=crop",
      description: textInput ? `Custom design with text: "${textInput}"` : "Custom designed t-shirt",
      customProduct: true,
      customDetails: {
        color: selectedColor,
        text: textInput,
        fontSize: fontSize[0],
        logoTexture,
      },
    };

    // Add the custom shirt to the cart
    addToCart(customShirt.id, 1, "M", getColorName(selectedColor), customShirt);
    
    toast.success("Custom design added to cart!");
  };

  // Helper function to get color name from hex value
  const getColorName = (hexValue: string): string => {
    const color = colors.find(c => c.value === hexValue);
    return color ? color.name : "Custom";
  };

  return (
    <div className="min-h-screen pt-16 lg:pt-24">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">Design Your Custom T-Shirt</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 3D Model Viewer */}
          <div className="bg-gray-50 rounded-lg p-6">
            <TShirt3DModel color={selectedColor} logoTexture={logoTexture} />
            <p className="text-center text-sm text-gray-500 mt-2">Drag to rotate, scroll to zoom</p>
          </div>
          
          {/* Customization Controls */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <Tabs defaultValue="colors">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger 
                  value="colors"
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <Palette size={16} className="mr-2" /> Colors
                </TabsTrigger>
                <TabsTrigger 
                  value="images"
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <Upload size={16} className="mr-2" /> Images
                </TabsTrigger>
                <TabsTrigger 
                  value="text"
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <TextCursor size={16} className="mr-2" /> Text
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="colors" className="space-y-6">
                <p className="text-gray-600 mb-4">Select a color for your t-shirt:</p>
                <div className="grid grid-cols-4 gap-4">
                  {colors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => handleColorSelect(color.value)}
                      className={`w-full aspect-square rounded-full border-2 ${
                        selectedColor === color.value ? "border-black" : "border-gray-200"
                      } transition-all flex items-center justify-center`}
                      style={{ backgroundColor: color.value }}
                      onMouseEnter={() => setCursorVariant("hover")}
                      onMouseLeave={() => setCursorVariant("default")}
                      aria-label={`Select ${color.name}`}
                    >
                      {selectedColor === color.value && (
                        <Check size={20} className={color.value === "#ffffff" ? "text-black" : "text-white"} />
                      )}
                    </button>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="images" className="space-y-6">
                <p className="text-gray-600 mb-4">Upload your own design:</p>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <label 
                      className="block cursor-pointer"
                      onMouseEnter={() => setCursorVariant("hover")}
                      onMouseLeave={() => setCursorVariant("default")}
                    >
                      <Upload className="mx-auto mb-4 text-gray-500" size={32} />
                      <span className="block mb-2 text-gray-700">Click to upload an image</span>
                      <span className="text-sm text-gray-500">PNG, JPG, SVG (max 5MB)</span>
                      <input 
                        type="file" 
                        className="hidden" 
                        accept="image/*" 
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                  
                  {logoTexture && (
                    <div className="bg-gray-100 rounded-lg p-4">
                      <p className="text-sm text-gray-700 mb-2">Uploaded image:</p>
                      <img 
                        src={logoTexture} 
                        alt="Uploaded design" 
                        className="h-20 object-contain mx-auto"
                      />
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="text" className="space-y-6">
                <p className="text-gray-600 mb-4">Add text to your design:</p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="text-input">Text</Label>
                    <Input 
                      id="text-input"
                      placeholder="Enter your text"
                      value={textInput}
                      onChange={(e) => setTextInput(e.target.value)}
                      onMouseEnter={() => setCursorVariant("hover")}
                      onMouseLeave={() => setCursorVariant("default")}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="font-size">Font Size: {fontSize[0]}px</Label>
                    <Slider
                      id="font-size"
                      min={12}
                      max={72}
                      step={1}
                      value={fontSize}
                      onValueChange={setFontSize}
                      onMouseEnter={() => setCursorVariant("hover")}
                      onMouseLeave={() => setCursorVariant("default")}
                    />
                  </div>
                  
                  <Button 
                    variant="outline" 
                    onClick={handleAddText}
                    onMouseEnter={() => setCursorVariant("hover")}
                    onMouseLeave={() => setCursorVariant("default")}
                  >
                    Add Text to Design
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Button 
                className="w-full h-12 text-lg"
                onClick={handleAddToCart}
                onMouseEnter={() => setCursorVariant("hover")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <ShoppingCart className="mr-2" size={18} /> Add to Cart - $24.99
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDesign;
