import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import imgBlkTrailLogo from "figma:asset/7e1096ae6877c4f73af8ea54866c56e7194c8e3b.png";

export const RotatingLogo = ({ scale = 0.35, className = "" }: { scale?: number, className?: string }) => {
  const [rotation, setRotation] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll-based rotation with smoother mobile behavior
  useEffect(() => {
    const handleScroll = () => {
      const rotationMultiplier = isMobile ? 0.1 : 0.15;
      setRotation(window.scrollY * rotationMultiplier);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    }
  };

  // Responsive sizing based on viewport
  const getLogoSize = () => {
    if (isMobile) {
      return {
        container: 'size-[80px] md:size-[100px]',
        imageWrapper: 'h-[96px] w-[117px] sm:h-[128px] sm:w-[156px] md:h-[256.913px] md:w-[313.808px]'
      };
    }
    return {
      container: 'size-[100px]',
      imageWrapper: 'h-[256.913px] w-[313.808px]'
    };
  };

  const sizes = getLogoSize();

  return (
    <div 
      onClick={handleLogoClick}
      className={`relative flex items-center justify-center ${sizes.container} cursor-pointer hover:opacity-90 transition-opacity ${className}`}
      style={{ 
        transform: `rotate(${rotation}deg)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
       <div 
         className="relative flex items-center justify-center"
         style={{ transform: `rotate(255deg) scale(${scale})` }}
       >
          <div className="rotate-[110deg]">
             <div className={`${sizes.imageWrapper} relative scale-[0.72]`}>
               <img 
                 src={imgBlkTrailLogo} 
                 alt="Black Trail Collective Logo" 
                 className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none" 
                 draggable={false}
               />
             </div>
          </div>
       </div>
    </div>
  );
};