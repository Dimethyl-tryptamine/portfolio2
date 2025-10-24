import { motion } from "framer-motion";
import { siteData } from "../../../assets/Variables";
import Certification from "./Certification";
import { useRef, useEffect, useState } from "react";

const Track = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState(window.innerWidth >= 1000);
  const [containerWidth, setContainerWidth] = useState(0);

  const items = [...siteData.certifications, ...siteData.certifications];

  useEffect(() => {
    const handleResize = () => setScroll(window.innerWidth >= 1000);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Measure container width
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.scrollWidth / 2); // half for duplicated items
    }
  }, [containerRef.current]);

  return (
    <div className="w-full overflow-hidden hidden sml:flex relative" ref={containerRef}>
      {scroll && containerWidth > 0 && (
        <motion.div
          className="flex"
          animate={{ x: [-containerWidth, 0] }} // scroll from -width to 0
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 20, // adjust speed
          }}
        >
          {items.map((cert, i) => (
            <Certification
              key={i}
              {...cert}
              className="w-[10rem] aspect-square flex-shrink-0"
            />
          ))}
        </motion.div>
      )}

      {!scroll && (
        <div className="flex gap-5">
          {siteData.certifications.map((cert, i) => (
            <Certification
              key={i}
              {...cert}
              className="w-[10rem] aspect-square flex-shrink-0"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Track;
