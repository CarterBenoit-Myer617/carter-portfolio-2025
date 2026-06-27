import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetDescription } from './ui/sheet';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', path: '/' },
    { name: 'Studio', path: '/studio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); navigate('/'); }}
          className="flex items-center gap-2 cursor-pointer"
          aria-label="Carter Benoît-Myer — Home"
        >
          <span className="font-bold text-xl tracking-tight">Carter Benoît-Myer</span>
        </a>

        {/* Navigation - Hamburger Menu Only */}
        <div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:w-auto md:px-4 md:gap-2">
                <span className="hidden md:inline font-medium">Menu</span>
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full h-screen flex flex-col justify-center items-center bg-background/95 backdrop-blur-md">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Access different sections of the portfolio
              </SheetDescription>
              <div className="flex flex-col gap-8 items-center mt-0">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.path}>
                    <button
                      onClick={() => navigate(link.path)}
                      className={`flex items-center text-4xl font-bold transition-colors hover:text-primary ${
                        location.pathname === link.path
                          ? 'text-primary'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {link.name}
                    </button>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button className="w-full max-w-xs mt-8 text-lg py-6" size="lg" onClick={() => navigate('/contact')}>
                    Get In Touch
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
