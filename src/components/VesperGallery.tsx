import React, { useRef, useEffect } from 'react';
import { VIDEO_VESPER_FIGMA, VIDEO_VESPER_LOCAL } from '../data/media';

// ═══ All Figma assets for Vesper Boat Club ═══
// Row 1 (full-width — rowing team hero)
import imgSafeVideo from "figma:asset/74e47482d950c00866bf7e89e4c68dee745956db.png";
import imgImage41 from "figma:asset/0e8b6f61c00123e14f9aab20c681f65d71870c88.png";
// Row 2 (split 30/70 — racing kit | hat & apparel)
import imgImage from "figma:asset/46ec3f05a1dbd789e21c83b6a54d78d2494e1b11.png";
import imgImg7320 from "figma:asset/e4d6d4e634a5c3613d1f3f284bc0e66e20b5d6ec.png";
import imgImage1 from "figma:asset/e5fe6981dbb7fdf0c7f9cc32f2737d24d3245bc9.png";
import imgVesperRacingHatSweatshirt1 from "figma:asset/2c659ca4cb1179bf81463291353423f36c239c99.png";
// Row 3 (full-width — MacBook website mockup)
import imgMacbookMockupTopVesper2 from "figma:asset/4f2e9b4aba5947c4247d1c6d281392e78146fea8.png";
// Row 4 (split 60/40 — social media reel | long sleeve shirt)
import imgImage2 from "figma:asset/8bcc320077a58a824bd90067fb0bb81c161c144e.png";
import imgImage3 from "figma:asset/3e4f515b078571ede80fcf838c3330d2e0fd70f5.png";
import imgVersperFrontLogsleeve2 from "figma:asset/545fae6ac18249b802a724dd9919adde2605d6c3.png";
// Row 5 (full-width — red long sleeve apparel)
import imgVesperRedLongSleeve1 from "figma:asset/226a1713895c1bf28dd6b713618622b7a1531860.png";
// Row 6 (split 30/70 — detail photo | brand guidelines)
import imgImage4 from "figma:asset/4048c5eaf560370cb79b81d963ac89213dd09999.png";
import imgImage5 from "figma:asset/ba2642fd71608a0cea10cb9fef2a32e57a742ea4.png";
import imgImage42 from "figma:asset/100fb3e647be5e3d3d7a28c38faf412434bfd538.png";

// Safe Video — graceful autoplay
const VesperVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);
  return (
    <div className="relative size-full">
      <video
        ref={videoRef}
        autoPlay
        className="absolute max-w-none object-cover size-full"
        controlsList="nodownload"
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={VIDEO_VESPER_LOCAL} type="video/mp4" />
        <source src={VIDEO_VESPER_FIGMA} type="video/mp4" />
      </video>
    </div>
  );
};

// Hover overlay — identical pattern
const HoverOverlay = ({ category, title, description }: { category?: string; title?: string; description?: string }) => {
  if (!title && !description) return null;
  return (
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col justify-end p-6 md:p-10 lg:p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
      <div className="flex flex-col gap-2 text-white">
        {category && (
          <p className="text-[#999] text-[10px] md:text-xs uppercase tracking-[2px]">{category}</p>
        )}
        {title && <h2 className="text-xl md:text-3xl lg:text-4xl font-normal leading-tight">{title}</h2>}
        {description && (
          <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-xl mt-1">{description}</p>
        )}
      </div>
    </div>
  );
};

export function VesperGallery() {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-0 w-full">

        {/* ═══ ROW 1: Full-width — Rowing team hero ═══ */}
        <div className="group relative w-full bg-[#121212] overflow-hidden" style={{ aspectRatio: '1339 / 867' }}>
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgSafeVideo} />
          <div className="absolute bg-white overflow-hidden" style={{ left: '0', right: '0', top: '0.09%', bottom: '-0.09%' }}>
            <div className="absolute" style={{ left: '-1.05%', top: '-9.23%', width: '102.17%', height: '118.37%' }}>
              <img alt="Vesper rowing team" className="absolute inset-0 w-full h-full object-cover" src={imgImage41} />
            </div>
          </div>
          <HoverOverlay
            category="Identity"
            title="Project Overview"
            description="A high-performance rebrand for Vesper Boat Club — Philadelphia's legendary Olympic rowing institution on the international stage."
          />
        </div>

        {/* ═══ ROW 2: Split 30/70 — Racing kit | Hat & apparel ═══ */}
        <div className="flex flex-col md:flex-row w-full" style={{ aspectRatio: '1339 / 1059' }}>
          {/* Left 30%: Racing uniforms & kit */}
          <div className="group relative w-full md:w-[30%] bg-[#121212] overflow-hidden aspect-[3/4] md:aspect-auto">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage} />
            <div className="absolute bg-white overflow-hidden" style={{ left: '0', right: '0', top: '0.005%', bottom: '-0.005%' }}>
              <div className="absolute" style={{ left: '-31.8%', top: '-1.39%', width: '165.6%', height: '135.8%' }}>
                <img alt="Vesper racing kit" className="absolute inset-0 w-full h-full object-cover" src={imgImg7320} />
              </div>
              {/* Gold accent bar */}
              <div className="absolute bg-[#9a8b61]" style={{ left: '-3.2%', top: '-1.39%', width: '118.6%', height: '6.99%' }} />
            </div>
            <HoverOverlay
              category="Apparel"
              title="Racing Kit"
              description="Competition-grade racing uniforms — technical performance meets brand identity."
            />
          </div>
          {/* Right 70%: Hat & sweatshirt apparel */}
          <div className="group relative w-full md:w-[70%] bg-[#121212] overflow-hidden aspect-square md:aspect-auto">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage1} />
            <div className="absolute overflow-hidden" style={{ left: '-5.73%', right: '0', top: '-14.25%', bottom: '-14.25%' }}>
              {/* Brand header text */}
              <div className="absolute z-10 flex items-center" style={{ left: '0.67%', top: '1.05%', height: '2.84%' }}>
                <p className="font-['Inter',sans-serif] text-black text-sm md:text-lg tracking-[-0.7px] whitespace-nowrap">
                  <span className="font-bold">VESPER BOAT CLUB | </span>
                  <span className="font-extralight"> Vesper Racing Gear</span>
                </p>
              </div>
              <div className="absolute" style={{ left: '0', top: '4.25%', width: '100%', height: '95.65%' }}>
                <img alt="Vesper hat and sweatshirt" className="absolute inset-0 w-full h-full object-cover" src={imgVesperRacingHatSweatshirt1} />
              </div>
            </div>
            <HoverOverlay
              category="Apparel"
              title="Racing Gear Collection"
              description="Hat and sweatshirt design — branded performance wear for athletes and supporters."
            />
          </div>
        </div>

        {/* ═══ ROW 3: Full-width — MacBook website mockup ═══ */}
        <div className="group relative w-full bg-[#1a1818] overflow-hidden" style={{ aspectRatio: '1339 / 867' }}>
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgSafeVideo} />
          <div className="absolute bg-[#1a1818] overflow-hidden" style={{ left: '-3.73%', right: '-3.73%', top: '0.09%', bottom: '-0.09%' }}>
            <div className="absolute" style={{ left: '-16.5%', top: '-21.37%', width: '126.3%', height: '138.56%' }}>
              <img alt="Vesper website on MacBook" className="absolute inset-0 w-full h-full object-cover" src={imgMacbookMockupTopVesper2} />
            </div>
          </div>
          <HoverOverlay
            category="Digital"
            title="Web Presence"
            description="Responsive website design — the brand experience translated to digital with bold typography and immersive imagery."
          />
        </div>

        {/* ═══ ROW 4: Split 60/40 — Social media reel | Long sleeve shirt ═══ */}
        <div className="flex flex-col md:flex-row w-full" style={{ aspectRatio: '1339 / 1059' }}>
          {/* Left 60%: Social media / Instagram reel */}
          <div className="group relative w-full md:w-[60%] bg-[#121212] overflow-hidden aspect-[3/4] md:aspect-auto">
            {/* Fallback poster image behind video */}
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage2} />
            <div className="absolute inset-0 z-10">
              <VesperVideo />
            </div>
            <HoverOverlay
              category="Social"
              title="Content Strategy"
              description="Instagram and social media presence — motion content capturing the energy of competitive rowing."
            />
          </div>
          {/* Right 40%: Long sleeve shirt */}
          <div className="group relative w-full md:w-[40%] bg-[#121212] overflow-hidden aspect-[3/4] md:aspect-auto">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage3} />
            <div className="absolute bg-white overflow-hidden" style={{ left: '-0.07%', right: '-0.02%', top: '0.006%', bottom: '0.02%' }}>
              {/* Bottom portion with long sleeve product */}
              <div className="absolute bg-[#d3d0d0] overflow-hidden" style={{ left: '0', right: '0', bottom: '3.49%', top: '0' }}>
                {/* Brand header */}
                <div className="absolute z-10 flex items-center" style={{ left: '19.8%', top: '0', height: '5%' }}>
                  <p className="font-['Inter',sans-serif] text-black text-xs md:text-base tracking-[-0.7px] whitespace-nowrap">
                    <span className="font-bold">VESPER BOAT CLUB | </span>
                    <span className="font-extralight"> Long Sleeve Shirt</span>
                  </p>
                </div>
                <div className="absolute overflow-hidden" style={{ left: '-42.8%', top: '-0.95%', right: '0', bottom: '-0.95%' }}>
                  <img alt="Vesper front long sleeve" className="absolute inset-0 w-full h-full object-cover" src={imgVersperFrontLogsleeve2} />
                </div>
              </div>
            </div>
            <HoverOverlay
              category="Apparel"
              title="Long Sleeve Design"
              description="Performance long sleeve — the Vesper crest and identity system applied to everyday athletic wear."
            />
          </div>
        </div>

        {/* ═══ ROW 5: Full-width — Red long sleeve apparel ═══ */}
        <div className="group relative w-full bg-[#121212] overflow-hidden" style={{ aspectRatio: '1339 / 867' }}>
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgSafeVideo} />
          <div className="absolute bg-[#121212] overflow-hidden" style={{ left: '-3.73%', right: '-3.73%', top: '0.09%', bottom: '-0.09%' }}>
            <div className="absolute" style={{ left: '-0.97%', top: '-6.54%', width: '109.5%', height: '113%' }}>
              <img alt="Vesper red long sleeve" className="absolute inset-0 w-full h-full object-cover" src={imgVesperRedLongSleeve1} />
            </div>
          </div>
          <HoverOverlay
            category="Apparel"
            title="Signature Red"
            description="The iconic Vesper red — translated into a modern long sleeve silhouette with crest placement and typographic detailing."
          />
        </div>

        {/* ═══ ROW 6: Split 30/70 — Detail photo | Brand guidelines ═══ */}
        <div className="flex flex-col md:flex-row w-full" style={{ aspectRatio: '1339 / 1059' }}>
          {/* Left 30%: Rowing detail photo */}
          <div className="group relative w-full md:w-[30%] bg-[#121212] overflow-hidden aspect-[3/4] md:aspect-auto">
            <img alt="Vesper rowing detail" className="absolute inset-0 w-full h-full object-cover" src={imgImage4} />
            <HoverOverlay
              category="Photography"
              title="On the Water"
              description="Documentary photography capturing the grit and grace of competitive rowing on the Schuylkill."
            />
          </div>
          {/* Right 70%: Brand guidelines */}
          <div className="group relative w-full md:w-[70%] bg-[#121212] overflow-hidden aspect-square md:aspect-auto">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage5} />
            <div className="absolute bg-white overflow-hidden" style={{ left: '-3.73%', right: '-3.73%', top: '0.007%', bottom: '-0.007%' }}>
              {/* Brand guidelines slide with text header */}
              <div className="absolute z-10 flex items-center gap-12" style={{ left: '13.5%', top: '0', height: '5%' }}>
                <p className="font-['Inter',sans-serif] text-black text-xs md:text-base tracking-[-0.7px] whitespace-nowrap">
                  <span className="font-bold">VESPER BOAT CLUB | </span>
                  <span className="font-extralight">Branding Guidelines</span>
                </p>
                <span className="font-['Inter',sans-serif] text-black text-[10px] md:text-xs tracking-[-0.7px] font-bold">Baskerville</span>
              </div>
              <div className="absolute bg-white overflow-hidden" style={{ left: '50%', top: '14.85%', transform: 'translateX(-50%)', width: '101.3%', aspectRatio: '950 / 725' }}>
                <div className="absolute" style={{ left: '-9.9%', top: '-12.97%', width: '124.7%', height: '125.8%' }}>
                  <img alt="Vesper brand guidelines" className="absolute inset-0 w-full h-full object-cover" src={imgImage42} />
                </div>
              </div>
            </div>
            <HoverOverlay
              category="System"
              title="Brand Guidelines"
              description="Complete brand standards — logo usage, typography (Baskerville), color system, and application rules for all touchpoints."
            />
          </div>
        </div>

      </div>
    </section>
  );
}