import React, { useRef } from "react";
import Certification from "./Certification";
import { siteData } from "../../../assets/Variables";

interface ScrollWheelProps {
  children?: React.ReactNode;
  className?: string;
  scrollSpeed?: number; // Multiplier for scroll speed
}

const ScrollWheel: React.FC<ScrollWheelProps> = ({ children, className, scrollSpeed = 2 }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * scrollSpeed;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
      onMouseMove={handleMouseMove}
      className={`flex sml:hidden overflow-x-hidden gap-4 border border-none p-2 select-none ${className}`}
      style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
    >
      {children ? children : <ScrollWheelFallbackItems />}
    </div>
  );
};

// Fallback items if no children are provided
const ScrollWheelFallbackItems: React.FC = () => (
  <>
    {siteData.certifications.map((cert, i) => (
      <div key={i} className="flex-shrink-0 w-[15rem] aspect-square">
        <Certification {...cert} className="w-full h-full" />
      </div>
    ))}
  </>
);



export default ScrollWheel;
