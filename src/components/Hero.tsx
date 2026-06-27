import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#a1a1aa] font-medium tracking-wider uppercase text-sm mb-4 block">
              Systems Designer
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              Carter <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#a1a1aa]">
                Benoît-Myer
              </span>
            </h1>
            <p className="text-xl text-[#a1a1aa] mb-8 max-w-2xl mx-auto lg:mx-0">
              A systems designer applying the rigor of elite rowing to visual infrastructure. Brand identity, editorial design, and motion — built to last.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" onClick={() => navigate('/studio')} className="gap-2">
                View Work <ArrowRight size={18} />
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/contact')}>
                Get In Touch
              </Button>
            </div>

            <div className="flex items-center gap-6 mt-12 justify-center lg:justify-start text-[#6a7282]">
              <a
                href="https://www.instagram.com/blacktrailcollective"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a
                href="https://www.linkedin.com/in/carterbenoitmyer"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
