
import React, { createContext, useState, useContext, useEffect } from "react";

const CursorContext = createContext();

export function useCursor() {
  return useContext(CursorContext);
}

export function CustomCursorProvider({ children }) {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <CursorContext.Provider value={{ cursorVariant, setCursorVariant }}>
      {children}
      <div
        className={`custom-cursor ${cursorVariant} ${isVisible ? "visible" : "hidden"}`}
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
          position: "fixed",
          pointerEvents: "none",
          zIndex: 9999,
          width: "16px",
          height: "16px",
          backgroundImage: cursorVariant === "hover" ? "url('/pointer.svg')" : "url('/cursor.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          transitionDuration: "150ms",
          transitionTimingFunction: "ease-out",
          marginLeft: "-8px",
          marginTop: "-8px",
          userSelect: "none",
        }}
      />
    </CursorContext.Provider>
  );
}
