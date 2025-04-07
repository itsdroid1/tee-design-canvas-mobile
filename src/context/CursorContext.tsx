
import React, { createContext, useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Position {
  x: number;
  y: number;
}

interface CursorContextType {
  cursorPosition: Position;
  cursorVariant: "default" | "hover";
  setCursorVariant: (variant: "default" | "hover") => void;
}

export const CursorContext = createContext<CursorContextType>({
  cursorPosition: { x: 0, y: 0 },
  cursorVariant: "default",
  setCursorVariant: () => {},
});

export const CustomCursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cursorPosition, setCursorPosition] = useState<Position>({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover">("default");
  const isMobile = useIsMobile();

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    if (!isMobile) {
      window.addEventListener("mousemove", moveCursor);
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [isMobile]);

  return (
    <CursorContext.Provider value={{ cursorPosition, cursorVariant, setCursorVariant }}>
      {children}
      {!isMobile && (
        <div 
          className="custom-cursor cursor-hide-mobile" 
          style={{ 
            left: `${cursorPosition.x}px`, 
            top: `${cursorPosition.y}px`,
            transform: `scale(${cursorVariant === "hover" ? 1.5 : 1})`,
          }}
        >
          <div className="custom-cursor-inner"></div>
          <div className="custom-cursor-outer"></div>
        </div>
      )}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = React.useContext(CursorContext);
  if (context === undefined) {
    throw new Error("useCursor must be used within a CustomCursorProvider");
  }
  return context;
};
