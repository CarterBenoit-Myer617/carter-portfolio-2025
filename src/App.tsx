import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { PreloaderProvider } from './components/PreloaderContext';
import { GlobalPreloader } from './components/GlobalPreloader';
import { HomePage } from './components/HomePage';
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
import imgBlkTrailLogo from "figma:asset/7e1096ae6877c4f73af8ea54866c56e7194c8e3b.png";

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
        {/* Home page — preloader + split-screen hero */}
        <Route path="/" element={<HomePage />} />
        
        {/* Work page — project grid */}
        <Route path="/work" element={<StudioPage />} />
        
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
        
        {/* Services page — redirects to studio process */}
        <Route path="/services" element={<Navigate to="/studio/process" replace />} />
        
        {/* Shop Archive — redirects to studio shop */}
        <Route path="/shop-archive" element={<Navigate to="/studio-shop" replace />} />
        
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

  // ── Performance: Preload critical above-the-fold resources ──
  useEffect(() => {
    // 1. Preload Inter font (primary portfolio font) via Google Fonts
    if (!document.querySelector('link[data-preload="inter-font"]')) {
      // Preconnect to Google Fonts origins
      const preconnect1 = document.createElement('link');
      preconnect1.rel = 'preconnect';
      preconnect1.href = 'https://fonts.googleapis.com';
      document.head.appendChild(preconnect1);

      const preconnect2 = document.createElement('link');
      preconnect2.rel = 'preconnect';
      preconnect2.href = 'https://fonts.gstatic.com';
      preconnect2.crossOrigin = 'anonymous';
      document.head.appendChild(preconnect2);

      // Preload the font stylesheet
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.as = 'style';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,200;0,300;0,400;0,500;0,700;1,200;1,300&display=swap';
      fontLink.setAttribute('data-preload', 'inter-font');
      document.head.appendChild(fontLink);

      // Also load the stylesheet itself
      const fontStylesheet = document.createElement('link');
      fontStylesheet.rel = 'stylesheet';
      fontStylesheet.href = 'https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,200;0,300;0,400;0,500;0,700;1,200;1,300&display=swap';
      document.head.appendChild(fontStylesheet);
    }

    // 2. Preload LCP hero image (first carousel project's cover)
    //    The preloader logo is also critical — preload it
    const lcpImages = [
      // Preloader logo — first thing the user sees
      { href: imgBlkTrailLogo, type: 'image/png' },
    ];

    lcpImages.forEach(({ href, type }) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = href;
        if (type) link.type = type;
        link.setAttribute('fetchpriority', 'high');
        document.head.appendChild(link);
      }
    });
  }, []);

  return (
    <Router>
      <LanguageProvider>
        <PreloaderProvider>
          <ScrollToTop />
          <GlobalPreloader />
          <div className="bg-[#0A0A0A] text-white antialiased min-h-screen">
            {/* Animated route container with page transition support */}
            <AnimatedRoutes />
            
            {/* Global Footer */}
            <Footer />

            <Toaster position="top-center" />
          </div>
        </PreloaderProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;