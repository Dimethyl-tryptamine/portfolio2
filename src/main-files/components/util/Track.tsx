import { motion } from 'framer-motion';
import { siteData } from '../../../assets/Variables';
import Certification from './Certification'; 
import { useState, useEffect, useRef } from 'react';

const Track = () => {
  const [scroll, setScroll] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const currentX = useRef<string | number>('0vw'); // Allow both string and number

  // Update window width on resize and set scroll based on the width
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (windowWidth >= 1000) {
      setScroll(true);
    } else {
      setScroll(false);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  const handleMouseEnter = () => {
    if (windowWidth >= 1000) {
      setScroll(false);
    }
    console.log(currentX.current)
  };

  const handleMouseLeave = () => {
    if (windowWidth >= 1000) {
      setScroll(true);
    }
    console.log(currentX.current)
    
  };

  const items = [...siteData.certifications, ...siteData.certifications];

  return (
    <motion.div
      className="flex w-full h-full overflow-hidden relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="flex"
        animate={scroll ? { x: [currentX.current, '-100vw'] } : { x: currentX.current }}
        transition={{
          duration: 10,
          repeat: scroll ? Infinity : 0, // Loop only if scrolling
          repeatType: 'loop',
          ease: 'linear',
        }}
        onUpdate={(latest) => {
          if (!scroll) {
            currentX.current = latest.x; // Update the position when paused
          }
        }}
      >
        {items.map((certification, index) => (
          <Certification
            key={index}
            title={certification.title}
            colors={certification.colors}
            logo={certification.logo}
            previewDescription={certification.previewDescription}
            description={certification.description}
            issuer={certification.issuer}
            date={certification.date}
            link={certification.link}
            showcaseImage={certification.showcaseImage}
          />
        ))}
      </motion.div>

      <motion.div
        className="flex absolute top-0 left-full"
        animate={scroll ? { x: [currentX.current, '-100vw'] } : { x: currentX.current }}
        transition={{
          duration: 10,
          repeat: scroll ? Infinity : 0,
          repeatType: 'loop',
          ease: 'linear',
        }}
        onUpdate={(latest) => {
          if (!scroll) {
            currentX.current = latest.x; // Update the position when paused
          }
        }}
      >
        {items.map((certification, index) => (
          <Certification
            key={index + items.length}
            title={certification.title}
            colors={certification.colors}
            logo={certification.logo}
            previewDescription={certification.previewDescription}
            description={certification.description}
            issuer={certification.issuer}
            date={certification.date}
            link={certification.link}
            showcaseImage={certification.showcaseImage}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Track;
