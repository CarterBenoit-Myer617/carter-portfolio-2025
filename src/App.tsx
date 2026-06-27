import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { LandingPage } from './components/LandingPage';
import { StudioPage } from './components/StudioPage';
import { StudioProcessPage } from './components/StudioProcessPage';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { StudioShopPage } from './components/StudioShopPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { VideoUploader } from './components/VideoUploader';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import { LanguageProvider } from './components/LanguageContext';

/**
 * ScrollToTop Component
 * Resets scroll position to top on every route change
 * Uses 'instant' behavior to avoid visible scroll animation on navigation
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // Instant scroll to prevent animation artifacts
    });
  }, [pathname]);

  return null; // This component renders nothing
};

/**
 * AnimatedRoutes Component
 * MUST live inside Router context to access useLocation()
 * The location object and key prop are CRITICAL for AnimatePresence exit animations
 */
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    // mode="wait" ensures exit animation completes before entering next page
    <AnimatePresence mode="wait">
      {/* 
        Key prop triggers AnimatePresence to treat route changes as component unmounts
        Without this, exit animations won't work properly 
      */}
      <Routes location={location} key={location.pathname}>
        {/* Main landing page (Work/Home) */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Work page - Redirect to Studio */}
        <Route path="/work" element={<Navigate to="/studio" replace />} />
        
        {/* About page - Carter's philosophical content */}
        <Route path="/about" element={<AboutPage />} />
        
        {/* Studio page - Work Gallery */}
        <Route path="/studio" element={<StudioPage />} />

        {/* Studio Process Page - Methodology & Mission */}
        <Route path="/studio/process" element={<StudioProcessPage />} />

        {/* Studio Project Detail Page */}
        <Route path="/studio/:slug" element={<ProjectDetailPage />} />
        
        {/* Studio Shop page - Product catalog and editions */}
        <Route path="/studio-shop" element={<StudioShopPage />} />
        
        {/* Contact page - Contact form and info */}
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Video Uploader page - Upload videos */}
        <Route path="/video-uploader" element={<VideoUploader />} />
        
        {/* Catch-all: redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

/**
 * App Component
 * Root component with Router provider and scroll restoration
 */
function App() {
  // Inject JSON-LD Structured Data for SEO
  useEffect(() => {
    const scriptId = 'json-ld-structured-data';
    
    // Avoid duplicate injection
    if (document.getElementById(scriptId)) return;

    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Carter Benoit-Myer",
      "jobTitle": "Systems Designer",
      "url": "https://carterbenoitmyer.com",
      "alumniOf": [
        {
          "@type": "CollegeOrUniversity",
          "name": "Drexel University",
          "sameAs": "https://drexel.edu"
        }
      ],
      "knowsAbout": ["Brand Identity", "Visual Systems", "Rowing", "Editorial Design"],
      "memberOf": [
        {
          "@type": "SportsTeam",
          "name": "Drexel Men's Rowing",
          "startDate": "2019",
          "endDate": "2023",
          "sport": "Rowing",
          "sameAs": "https://drexeldragons.com/sports/mens-crew"
        },
        {
          "@type": "SportsTeam",
          "name": "Vesper Boat Club",
          "sameAs": "https://vesperboatclub.org"
        }
      ],
      "description": "A systems designer applying the rigor of elite rowing to visual infrastructure."
    });

    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount (though App usually doesn't unmount)
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <Router>
      <LanguageProvider>
        <ScrollToTop />
        <div className="bg-[#0A0A0A] text-white antialiased min-h-screen">
          {/* Animated route container with page transition support */}
          <AnimatedRoutes />
          
          {/* Global Footer */}
          <Footer />

          <Toaster position="top-center" />
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;