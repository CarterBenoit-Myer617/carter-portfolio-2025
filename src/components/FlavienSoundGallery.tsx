import React, { useRef, useEffect } from 'react';

// All Figma assets for the Flavien Sound gallery
import imgImage from "figma:asset/26b55ec5d5854f8fabe67986156459d338664124.png";
import imgImage1 from "figma:asset/8dd641bb82dfe40cb27bbaa835c9a72ac356675f.png";
import imgFlavienPattern from "figma:asset/7aa3495f74423626a5c4bec077eb4e82b787d475.png";
import imgFalvDiver from "figma:asset/327b5c7b0355ba0a288a5ba2a0ee55d8ce4459be.png";
import imgImage2 from "figma:asset/126841165273e1adf0e2d26723e760b6222501bd.png";
import imgImg39142 from "figma:asset/81b7414fc00caaee2167818e3e2da6b9dbbe857b.png";
import img3PostersFinal from "figma:asset/cebd4076bbec27e9481775be4686ed5029b04909.png";
import imgImage3 from "figma:asset/98cc6b69705a5f62ea3df61d301b7c5535dcd49d.png";
import imgFlaviencar from "figma:asset/c42b714fceb4310f94832daa2a8b8425f373f38e.png";
import imgFlaviendiver from "figma:asset/7ebdf79c2fccd577bd8751f95b882fcee96bcb86.png";
import imgImg78862 from "figma:asset/36a039d79bbcbec86f39f1a3c370f73b4fdc8aae.png";
import imgInstagramPost11 from "figma:asset/c628ecb8ddb42a887fc431524d64d361ad9119c2.png";
import imgTwoWhiteCrumpledPostersGrungeWall21 from "figma:asset/9398336d5f9d8d43a9a2f12bb3daa569b01e30ee.png";
import imgUnsplash9OCsKoyQlk from "figma:asset/6b55c49ac796df9dd1dd09f45f27366573530e8b.png";

// Safe Video with graceful autoplay
const SafeVideo = ({ className }: { className?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);
  return (
    <video
      ref={videoRef}
      loop
      muted
      playsInline
      autoPlay
      preload="auto"
      controlsList="nodownload"
      className={className}
    >
      <source src="https://res.cloudinary.com/demo/video/upload/q_auto:good,f_auto/docs/walking_talking.mp4" type="video/mp4" />
    </video>
  );
};

// Hover overlay for gallery items
const HoverOverlay = ({ category, title, description }: { category?: string; title?: string; description?: string }) => {
  if (!title && !description) return null;
  return (
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col justify-end p-4 sm:p-6 md:p-10 lg:p-12 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-20">
      <div className="flex flex-col gap-1.5 sm:gap-2 text-white">
        {category && (
          <p className="text-[#999] text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[2px]">{category}</p>
        )}
        {title && <h2 className="text-base sm:text-xl md:text-3xl lg:text-4xl font-normal leading-tight">{title}</h2>}
        {description && (
          <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed max-w-xl mt-0.5 sm:mt-1 line-clamp-3 md:line-clamp-none">{description}</p>
        )}
      </div>
    </div>
  );
};

export function FlavienSoundGallery() {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-0 w-full">

        {/* ═══ ROW 1: Full-width — Video BG with floating tilted posters ═══ */}
        <div className="group relative w-full bg-[#121212] overflow-hidden" style={{ aspectRatio: '1439 / 867' }}>
          {/* Video background */}
          <div className="absolute inset-0 overflow-hidden">
            <SafeVideo className="absolute inset-0 w-full h-full object-cover" />
          </div>
          {/* 3 Posters Final — tilted left */}
          <div className="absolute z-10" style={{ 
            left: '4.4%', top: '3.1%', 
            width: '37.3%', height: '86.1%' 
          }}>
            <div className="w-full h-full flex items-center justify-center">
              <div className="rotate-[-8.89deg] w-[90%] h-[90%] relative">
                <div className="absolute inset-0 overflow-hidden">
                  <img alt="Flavien Berger poster series" className="absolute h-full left-[-52%] max-w-none top-0 w-[209%]" src={img3PostersFinal} />
                </div>
              </div>
            </div>
          </div>
          {/* Falv Diver — tilted right */}
          <div className="absolute z-10" style={{ 
            left: '45.7%', top: '0.1%', 
            width: '56.2%', height: '96.8%' 
          }}>
            <div className="w-full h-full flex items-center justify-center">
              <div className="rotate-[10.28deg] w-[85%] h-[84%] relative">
                <img alt="Diver poster illustration" className="absolute inset-0 w-full h-full object-cover" src={imgFalvDiver} />
              </div>
            </div>
          </div>
          <HoverOverlay 
            category="Motion" 
            title="Poster Series" 
            description="Large-format posters combining hand-drawn typography with photographic elements for outdoor installation." 
          />
        </div>

        {/* ═══ ROW 2: Split — Video+Diver (30%) | Pattern Wall (70%) ═══ */}
        <div className="flex flex-col md:flex-row w-full" style={{ aspectRatio: '1439 / 1059' }}>
          {/* Left: Video with Diver overlay (30%) */}
          <div className="group relative w-full md:w-[30%] bg-[#121212] overflow-hidden aspect-[3/4] md:aspect-auto">
            {/* Background image */}
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage} />
            {/* Video overlay */}
            <div className="absolute inset-0 overflow-hidden">
              <SafeVideo className="absolute inset-0 w-full h-[115%] object-cover" />
            </div>
            {/* Diver poster overlay */}
            <div className="absolute z-10" style={{
              left: '-4.8%', right: '-11.3%', top: '17.5%', height: '65.3%'
            }}>
              <div className="w-full h-full flex items-center justify-center">
                <div className="rotate-[3.01deg] w-full h-full relative">
                  <img alt="Diver illustration" className="absolute inset-0 w-full h-full object-cover" src={imgFalvDiver} />
                </div>
              </div>
            </div>
            <HoverOverlay 
              category="Motion" 
              title="Motion Visualizer" 
              description="Video background with reactive diver poster overlay — translating audio frequencies into visual form." 
            />
          </div>
          {/* Right: Pattern/Instagram collage (70%) */}
          <div className="group relative w-full md:w-[70%] bg-[#121212] overflow-hidden aspect-square md:aspect-auto">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage1} />
            {/* Yellow pattern overlay */}
            <div className="absolute overflow-hidden" style={{
              left: '-7.8%', right: '-13.6%', top: '-3.3%', bottom: '-44.3%'
            }}>
              <div className="absolute bg-white inset-0">
                <div className="absolute w-full h-full">
                  <img alt="Flavien pattern" className="absolute inset-0 w-full h-full object-cover" src={imgFlavienPattern} />
                </div>
              </div>
            </div>
            <HoverOverlay 
              category="Motion" 
              title="Pattern System" 
              description="Generative pattern language derived from sound frequency data, applied across all campaign materials." 
            />
          </div>
        </div>

        {/* ═══ ROW 3: Full-width — Crumpled Wall Posters ═══ */}
        <div className="group relative w-full bg-[#121212] overflow-hidden" style={{ aspectRatio: '1439 / 867' }}>
          <div className="absolute overflow-hidden" style={{
            left: '-5.5%', right: '-5.5%', top: '0', bottom: '-13.8%'
          }}>
            <div className="absolute inset-0">
              <div className="absolute bg-white inset-0" />
              <img alt="Instagram post background" className="absolute inset-0 w-full h-full object-cover" src={imgInstagramPost11} />
            </div>
            <div className="relative w-full h-full">
              <img alt="Crumpled posters on grunge wall" className="absolute inset-0 w-full h-full object-contain" src={imgTwoWhiteCrumpledPostersGrungeWall21} />
            </div>
          </div>
          <HoverOverlay 
            category="Motion" 
            title="Wheat-Paste Campaign" 
            description="Guerrilla-style wheat-paste installations — the crumpled, weathered aesthetic adds authenticity and raw energy." 
          />
        </div>

        {/* ═══ ROW 4: Split — Wall Posters (60%) | Car Illustration (40%) ═══ */}
        <div className="flex flex-col md:flex-row w-full" style={{ aspectRatio: '1439 / 1059' }}>
          {/* Left: 3 posters on wall (60%) */}
          <div className="group relative w-full md:w-[60%] bg-[#121212] overflow-hidden aspect-[3/4] md:aspect-auto">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage2} />
            {/* Layered wall composition */}
            <div className="absolute overflow-hidden" style={{
              left: '-61.2%', right: '-61.2%', top: '-0.9%', bottom: '-1%'
            }}>
              {/* Background wall photo */}
              <div className="absolute" style={{ left: '1.2%', top: '0', width: '97.5%', height: '100%' }}>
                <div className="absolute inset-0 overflow-hidden">
                  <img alt="Wall installation" className="absolute h-[224%] left-0 max-w-none top-[-74%] w-full" src={imgImg39142} />
                </div>
              </div>
              {/* 3 Posters Final overlay */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center" style={{ width: '28%', height: '63%' }}>
                <div className="rotate-[4.46deg] w-full h-full relative">
                  <div className="absolute inset-0 overflow-hidden">
                    <img alt="Three posters composition" className="absolute h-full left-[-52%] max-w-none top-0 w-[209%]" src={img3PostersFinal} />
                  </div>
                </div>
              </div>
            </div>
            <HoverOverlay 
              category="Motion" 
              title="Trio Installation" 
              description="Three-poster arrangement — each piece works independently while forming a cohesive visual statement." 
            />
          </div>
          {/* Right: Car illustration (40%) */}
          <div className="group relative w-full md:w-[40%] bg-[#121212] overflow-hidden aspect-[3/4] md:aspect-auto">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage3} />
            {/* Car overlay */}
            <div className="absolute overflow-hidden" style={{
              left: '-0.07%', right: '-37.3%', top: '3.2%', height: '79.3%'
            }}>
              <div className="absolute -translate-y-1/2" style={{
                left: '-27.1%', right: '0', top: 'calc(50% + 6.3%)'
              }}>
                <img alt="Flavien car illustration" className="w-full h-auto object-cover" src={imgFlaviencar} />
              </div>
            </div>
            <HoverOverlay 
              category="Motion" 
              title="Generative Illustration" 
              description="Signature car illustration rendered in continuous line style, bridging analog drawing and digital processes." 
            />
          </div>
        </div>

        {/* ═══ ROW 5: Split — Diver Illustration (30%) | Rotated Photo Collage (70%) ═══ */}
        <div className="flex flex-col md:flex-row w-full" style={{ aspectRatio: '1439 / 1059' }}>
          {/* Left: Diver illustration (30%) */}
          <div className="group relative w-full md:w-[30%] bg-[#121212] overflow-hidden aspect-[3/4] md:aspect-auto">
            <div className="absolute overflow-hidden" style={{
              left: '-36.4%', right: '0', top: '-4.8%', bottom: '-33.1%'
            }}>
              <img alt="Flavien diver illustration" className="absolute inset-0 w-full h-full object-cover" src={imgFlaviendiver} />
            </div>
            <HoverOverlay 
              category="Motion" 
              title="Diver Artwork" 
              description="Hand-drawn diver figure — a recurring motif representing immersion into sound." 
            />
          </div>
          {/* Right: Rotated photo with poster overlay (70%) */}
          <div className="group relative w-full md:w-[70%] bg-[#121212] overflow-hidden aspect-square md:aspect-auto">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage1} />
            {/* Layered composition */}
            <div className="absolute overflow-hidden" style={{
              left: '1.2%', right: '-91.8%', top: '0.03%', bottom: '-2%'
            }}>
              {/* IMG_7886 rotated -90deg */}
              <div className="absolute flex items-center justify-center" style={{
                left: '-2.9%', top: '-2.9%', width: '105%', height: '105%'
              }}>
                <div className="-rotate-90 flex-none" style={{ width: '59.2%', height: '105%' }}>
                  <img alt="Exhibition photo" className="absolute inset-0 w-full h-full object-cover" src={imgImg78862} />
                </div>
              </div>
              {/* 3 Posters Final overlay */}
              <div className="absolute -translate-x-1/2 flex items-center justify-center" style={{
                left: 'calc(50% - 24.8%)', top: '3.5%', bottom: '1.7%', width: '36.2%'
              }}>
                <div className="rotate-[4.46deg] w-full h-full relative">
                  <div className="absolute inset-0 overflow-hidden">
                    <img alt="Poster overlay" className="absolute h-full left-[-52%] max-w-none top-0 w-[209%]" src={img3PostersFinal} />
                  </div>
                </div>
              </div>
            </div>
            <HoverOverlay 
              category="Motion" 
              title="Exhibition Documentation" 
              description="Gallery installation documentation with rotated poster overlays — layered visual narrative." 
            />
          </div>
        </div>

        {/* ═══ ROW 6: Full-width — Ocean scene with floating posters ═══ */}
        <div className="group relative w-full bg-[#121212] overflow-hidden" style={{ aspectRatio: '1439 / 867' }}>
          {/* Ocean background */}
          <div className="absolute" style={{
            left: '-2.5%', right: '0', top: '-5%', width: '103%', height: '135%'
          }}>
            <img alt="Ocean background" className="absolute inset-0 w-full h-full object-cover" src={imgUnsplash9OCsKoyQlk} />
          </div>
          {/* Falv Diver — tilted left */}
          <div className="absolute z-10 flex items-center justify-center" style={{
            left: '11.2%', top: '10%', width: '36%', height: '77.6%'
          }}>
            <div className="rotate-[-2.77deg] w-full h-full relative">
              <div className="absolute inset-0 overflow-hidden">
                <img alt="Diver poster" className="absolute h-full left-[-48%] max-w-none top-0 w-[200%]" src={imgFalvDiver} />
              </div>
            </div>
          </div>
          {/* 3 Posters Final — tilted right (doubled in Figma) */}
          <div className="absolute z-10 flex items-center justify-center" style={{
            right: '8.1%', top: '7.8%', width: '37.3%', height: '82.2%'
          }}>
            <div className="rotate-[4.46deg] w-full h-full relative">
              <div className="absolute inset-0 overflow-hidden">
                <img alt="Three posters" className="absolute h-full left-[-52%] max-w-none top-0 w-[209%]" src={img3PostersFinal} />
              </div>
            </div>
          </div>
          <HoverOverlay 
            category="Motion" 
            title="Campaign Overview" 
            description="The complete visual system — posters, illustrations, and generative patterns creating an immersive brand world." 
          />
        </div>

      </div>
    </section>
  );
}