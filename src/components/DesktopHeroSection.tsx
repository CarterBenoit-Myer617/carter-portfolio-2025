import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../data/cms';
import svgPaths from "../imports/svg-nylaa5zclz";
import { YouTubeEmbedCard } from './YouTubeEmbedCard';

// Project Assets
const IMG_AAMP = "https://images.unsplash.com/photo-1761287347585-9b4f871820fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFyY2hpdGVjdHVyZSUyMG1vZGVybiUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2NjcxNTE5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const IMG_DREXEL = "https://images.unsplash.com/photo-1670284768187-5cc68eada1b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwbW9kZXJuJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY2NzE1MTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const IMG_ROAM = "https://images.unsplash.com/photo-1619344730659-430b7e73722c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBsdWdnYWdlJTIwYWR2ZW50dXJlJTIwbGlmZXN0eWxlfGVufDF8fHx8MTc2NjcxNTE5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const IMG_BASQUIAT = "https://images.unsplash.com/photo-1691995016747-d367c51c7d65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFmZml0aSUyMGFydCUyMHVyYmFuJTIwc3RyZWV0JTIwYXJ0fGVufDF8fHx8MTc2NjcxNTE5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

// Preview Items (Fallback)
const PREVIEW_ITEMS = [
  { type: 'image', src: IMG_AAMP, label: 'AAMP', slug: 'aamp-rebrand' },
  { type: 'image', src: IMG_DREXEL, label: 'Drexel', slug: 'drexel-showcase-web' },
  { type: 'image', src: IMG_ROAM, label: 'ROAM', slug: 'roam-media-brand' },
  { type: 'image', src: IMG_BASQUIAT, label: 'BASQUIAT', slug: 'basquiat-catalogue' },
];

function Heading() {
  return (
    <div className="absolute h-[65px] left-[124px] top-[450px] w-[583px]" data-name="Heading">
      <p className="absolute font-['Inter',sans-serif] font-normal leading-[65px] left-0 not-italic text-[40px] text-white top-0 tracking-[4px] uppercase">CARTER BENOÎT MYER</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#d1d5db] text-[18px] top-0 tracking-[0.1px] w-[442px] whitespace-pre-wrap">A selection of commissioned projects ranging from brand identity to digital experiences.</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[78px] items-start left-0 top-0 w-[480px]" data-name="Paragraph10">
      <Paragraph />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[78px] left-[124px] top-[548px] w-[480px]" data-name="Container20">
      <Paragraph3 />
    </div>
  );
}

function ContactButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="absolute h-[48px] left-[124px] top-[663px] w-[120px]" data-name="Paragraph11">
      <button 
        onClick={onClick}
        className="size-full backdrop-blur-md bg-white/10 border border-white/30 rounded-full hover:bg-white/20 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer" 
      >
        <div className="absolute content-stretch flex h-[48px] items-center justify-center left-0 pr-[0.016px] top-0 w-[120px]">
          <div className="h-[18px] relative shrink-0 w-[71.109px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <p className="absolute font-['Arial',sans-serif] leading-[18px] left-0 not-italic text-[12px] text-white top-0 tracking-[2px] uppercase">Contact</p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

function ViewWorkButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="absolute h-[48px] left-[264px] top-[663px] w-[140px]" data-name="Paragraph12">
      <button 
        onClick={onClick}
        className="size-full backdrop-blur-md bg-white/10 border border-white/30 rounded-full hover:bg-white/20 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
      >
        <div className="absolute content-stretch flex h-[48px] items-center justify-center left-0 top-0 w-[140px]">
          <div className="h-[18px] relative shrink-0 w-[89.344px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <p className="absolute font-['Arial',sans-serif] leading-[18px] left-0 not-italic text-[12px] text-white top-0 tracking-[2px] uppercase">View Work</p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

function Frame() {
  const navigate = useNavigate();
  
  return (
    <div className="absolute bg-[#0a0a0a] border-[rgba(255,255,255,0.1)] border-r border-solid h-[1080px] left-0 top-0 w-[831px] z-10" data-name="Frame">
      <Heading />
      <Container6 />
      <ContactButton onClick={() => navigate('/contact')} />
      <ViewWorkButton onClick={() => navigate('/studio')} />
    </div>
  );
}

function HeroPreview({ currentIndex, items }: { currentIndex: number; items: any[] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const currentItem = items[currentIndex];
  const isDrexel = currentItem.label === 'Drexel' || currentItem.slug === 'drexel-showcase-web';

  useEffect(() => {
    if (videoRef.current && currentItem.type === 'video' && !isDrexel) {
      videoRef.current.load();
      videoRef.current.play().catch(err => console.log('Video play error:', err));
    }
  }, [currentIndex, isDrexel, currentItem]);

  return (
    <div className="absolute inset-0 bg-transparent overflow-hidden flex items-center justify-center" data-name="HeroPreview">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full flex items-center justify-center"
        >
          {isDrexel ? (
             <div className="relative z-50 transform scale-125">
                <YouTubeEmbedCard 
                  videoId="oLRDqjx3zJY" 
                  title="Senior Showcase Website" 
                  thumbnailSrc={IMG_DREXEL}
                />
             </div>
          ) : (
            <>
              {currentItem.type === 'video' ? (
                <video
                  ref={videoRef}
                  key={currentItem.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-80 absolute inset-0"
                >
                  <source src={currentItem.src} />
                </video>
              ) : (
                <img
                  src={currentItem.src}
                  alt="Preview"
                  className="w-full h-full object-cover opacity-80 absolute inset-0"
                />
              )}
              <div className="absolute inset-0 bg-black/20" />
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[32.438px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5625 32.4375">
        <path d={svgPaths.p38ae4b2} fill="var(--fill-0, white)" id="Vector" />
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32.438px] items-start left-0 overflow-clip top-0 w-[32.563px]" data-name="Icon">
      <Icon1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[32.438px] left-[13.72px] top-[14.69px] w-[32.563px]" data-name="Container24">
      <Icon />
    </div>
  );
}

function IconArrow() {
  return (
    <div className="absolute left-0 overflow-clip size-[60px] top-[102px]" data-name="IconArrow">
      <Container9 />
    </div>
  );
}

function ProjectProgressBar({ 
  currentIndex, 
  isInitialLoad, 
  onNext,
  items
}: { 
  currentIndex: number, 
  isInitialLoad: boolean, 
  onNext: () => void,
  items: any[]
}) {
  const currentItem = items[currentIndex];

  return (
    <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(0,0,0,0)] h-[354px] left-0 right-0 to-[rgba(0,0,0,0.9)] via-1/2 via-[rgba(0,0,0,0.5)] pointer-events-none" data-name="ProjectProgressBar">
      <div className="absolute h-[162px] left-[124px] top-0 w-[600px] pointer-events-auto" data-name="Container22">
        <div className="absolute h-[20px] left-0 top-0 w-[600px]" data-name="Container23">
          <div className="absolute bg-[rgba(255,255,255,0)] h-[20px] left-0 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.15)] top-0 w-[61px]" data-name="Text">
            <p className="absolute font-['Consolas',monospace] leading-[20px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.6)] top-0 tracking-[2px]">
              {String(currentIndex + 1).padStart(2, '0')} — {String(items.length).padStart(2, '0')}
            </p>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0)] h-[20px] left-[297.19px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.15)] top-0 w-auto" data-name="Text1">
            <p className="absolute font-['Arial',sans-serif] leading-[20px] left-0 not-italic text-[12px] text-white top-0 tracking-[2px] uppercase whitespace-nowrap">{currentItem.label || currentItem.title}</p>
          </div>
        </div>
        
        <IconArrow />
        
        <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col h-[2px] items-start left-0 overflow-clip top-[52px] w-[600px]" data-name="Container25">
          <motion.div
            key={currentIndex}
            className="bg-white flex-[1_0_0] min-h-px min-w-px shadow-[0px_0px_10px_0px_rgba(255,255,255,0.5)]"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: isInitialLoad ? 2 : 4, ease: "linear" }}
            onAnimationComplete={onNext}
            data-name="Container26"
          />
        </div>
      </div>
    </div>
  );
}

function CarouselContainer({ currentIndex, items, isInitialLoad, onNext }: { currentIndex: number, items: any[], isInitialLoad: boolean, onNext: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col h-[1080px] items-start left-[831px] overflow-clip top-0 w-[831px]" data-name="CarouselContainer">
      <div className="h-[1080px] overflow-clip relative shrink-0 w-full" data-name="Container18">
        <div className="absolute h-[1080px] left-0 opacity-71 overflow-clip top-0 w-[831px]" data-name="Container19">
          <div className="absolute h-[1080px] left-0 opacity-80 top-0 w-[831px]" data-name="HeroPreview1">
            <HeroPreview currentIndex={currentIndex} items={items} />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.2)] h-[1080px] left-0 top-0 w-[831px]" data-name="HeroPreview2">
            <ProjectProgressBar 
              currentIndex={currentIndex}
              isInitialLoad={isInitialLoad}
              onNext={onNext}
              items={items}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DesktopHeroSection({ projects }: { projects?: Project[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const items = projects && projects.length > 0 ? projects : PREVIEW_ITEMS;

  useEffect(() => {
    setCurrentSlide(0);
  }, [items.length]);

  const handleNext = () => {
    if (isInitialLoad) setIsInitialLoad(false);
    setCurrentSlide((prev) => (prev + 1) % items.length);
  };

  return (
    <div className="relative size-full" data-name="DesktopHeroSection">
      <CarouselContainer 
        currentIndex={currentSlide} 
        items={items} 
        isInitialLoad={isInitialLoad}
        onNext={handleNext}
      />
      <Frame />
    </div>
  );
}