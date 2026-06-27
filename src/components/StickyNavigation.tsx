import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetDescription } from './ui/sheet';
import { ChevronDown, Menu, X } from 'lucide-react';
import { RotatingLogo } from './RotatingLogo';

interface NavigationProps {
  variant?: 'light' | 'dark';
  showLogo?: boolean;
}

export const StickyNavigation: React.FC<NavigationProps> = ({ 
  variant = 'light',
  showLogo = true 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Strict viewport detection
  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Strict scroll detection with threshold
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Dynamic text color based on variant and scroll state
  const getTextColor = () => {
    if (variant === 'light') return 'text-white';
    return 'text-black';
  };

  const getBorderColor = () => {
    if (variant === 'light') return 'border-white';
    return 'border-black';
  };

  return (
    <>
      {/* Fixed/Sticky Navigation Bar - ALWAYS visible */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
        style={{ mixBlendMode: 'difference' }}
      >
        <div className="max-w-[1920px] mx-auto px-[27px] md:px-[32px] py-[32px] pointer-events-none">
          <div className="flex justify-between items-start">
            
            {/* Logo - Left Side */}
            <Link 
              to="/" 
              className="relative z-50 flex items-center hover:opacity-80 transition-opacity text-white pointer-events-auto"
              onClick={closeMenu}
            >
              <RotatingLogo scale={0.65} className="size-[79.988px]" />
            </Link>

            {/* Menu Controls - Right Side (Stacked Vertically) */}
            <div className="flex flex-col items-end justify-center gap-[8px] text-white w-[48.81px] h-[112.62px] relative z-[1] ml-auto pointer-events-auto">
              
              {/* Hamburger Menu Button - ALWAYS VISIBLE */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button 
                    className="cursor-pointer hover:opacity-80 transition-opacity relative shrink-0"
                    aria-label="Toggle menu"
                  >
                    <div className="flex flex-col gap-[11px] items-start p-[4px] w-[47.99px] h-[38.98px]">
                      <div className="h-[2.99px] w-[39.99px] bg-white shrink-0"></div>
                      <div className="h-[2.99px] w-[39.99px] bg-white shrink-0"></div>
                      <div className="h-[2.99px] w-[39.99px] bg-white shrink-0"></div>
                    </div>
                  </button>
                </SheetTrigger>
                
                <SheetContent 
                  side="top" 
                  className="w-full h-screen flex flex-col justify-center items-center bg-zinc-950 text-white border-none overflow-y-auto"
                >
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <SheetDescription className="sr-only">Site navigation links</SheetDescription>
                  
                  {/* Menu Items */}
                  <div className="flex flex-col gap-6 md:gap-8 text-center w-full max-w-md px-6">
                    
                    {/* Work */}
                    <SheetClose asChild>
                      <Link
                        to="/studio"
                        className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-[7px] hover:text-gray-400 transition-colors"
                      >
                        Work
                      </Link>
                    </SheetClose>

                    {/* About */}
                    <SheetClose asChild>
                      <Link
                        to="/about"
                        className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-[7px] hover:text-gray-400 transition-colors"
                      >
                        About
                      </Link>
                    </SheetClose>

                    {/* Studio */}
                    <SheetClose asChild>
                      <Link
                        to="/studio/process"
                        className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-[7px] hover:text-gray-400 transition-colors"
                      >
                        Studio
                      </Link>
                    </SheetClose>

                    {/* Contact */}
                    <SheetClose asChild>
                      <Link
                        to="/contact"
                        className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-[7px] hover:text-gray-400 transition-colors"
                      >
                        Contact
                      </Link>
                    </SheetClose>
                  </div>

                  {/* Footer Info in Menu */}
                  <div className="absolute bottom-12 left-0 right-0 text-center">
                    <p className="text-sm text-gray-500 tracking-wider">© Carter Benoît-Myer {new Date().getFullYear()}</p>
                  </div>
                </SheetContent>
              </Sheet>

              {/* Language Selector Box - BELOW the hamburger - ALWAYS VISIBLE */}
              <div className="relative shrink-0">
                <div aria-hidden="true" className="absolute border-[1.836px] border-solid border-white inset-0 pointer-events-none" />
                <div className="flex flex-col items-center justify-center p-[10px] w-[47.14px] h-[38px] relative">
                  <button 
                    className="w-[27.14px] h-[18px] relative hover:opacity-70 transition-opacity cursor-pointer"
                    aria-label="Change language"
                  >
                    <p className="absolute font-['Inter',sans-serif] font-normal leading-[18px] left-0 not-italic text-[18px] text-nowrap text-white top-[0.16px] tracking-[1.56055px] uppercase">
                      EN
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};