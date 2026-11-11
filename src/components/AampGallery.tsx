import React, { useRef, useEffect } from 'react';

// ═══ All Figma assets for AAMP Rebrand ═══
// Row 1 (full-width — AAMP typography hero)
import imgSafeVideo from "figma:asset/1bd234b5010e54e9c1206fb5bb2725a3cdaad416.png";
import imgAamp from "figma:asset/0c3894a2ad75d5ae21ee3da40247278283fc9f12.png";
// Row 2 (split 30/70 — mobile mockup | graffiti wall)
import imgImage from "figma:asset/ef1fc9111ccd1c22e929178f597279ccc764ea9b.png";
import imgAampMobile5 from "figma:asset/0029a253717af8170539e22f0af21a075a281540.png";
import imgImage1 from "figma:asset/41f00002b5635cfd998d0f36f9ca3e6419836f83.png";
import imgImg3096 from "figma:asset/2ddb6afe5eb1231379dbace695c24137ecd207a7.png";
// Row 3 (full-width — Simone Leigh exhibition)
import imgImage537 from "figma:asset/e2361296bf132166b547c7bfa8b89144fcb2132c.png";
// Row 4 (split 60/40 — signage orange | poster yellow)
import imgImage2 from "figma:asset/16f062cd800e0e8c3f3cbd7d77d4d9ed4b23958f.png";
import imgAampSinageOrange from "figma:asset/7f12dc44cc9e36fa40d252dc2eadddf697ab481e.png";
import imgImage3 from "figma:asset/3dd686a014cfcf6f157c8a9918cde754e4dc27c9.png";
import imgAampPoster from "figma:asset/22536b638ced855bbc5ab6443b4e51eae94b9517.png";
// Row 5 (full-width — gift shop merch)
import imgAampGiftShop from "figma:asset/7c370d621644d006381aacf48ce93c2d9f71e603.png";
// Row 6 (split 30/70 — statue detail | letterhead)
import imgImage4 from "figma:asset/98539235779deb732f5132f2dc6c6ffbc7bba1a0.png";
import imgImage159 from "figma:asset/e930a87de208b736ca87fa9a9545f53097d094a7.png";
import imgImage5 from "figma:asset/9172aae98664a629e841ec16ecb048f881ca489a.png";
import imgAampLetterHead1 from "figma:asset/6fd9cbca5fbaf6941300201918cf083b56610ca0.png";

// Safe Video — graceful autoplay matching gallery architecture
const SafeVideo = ({ className, src }: { className?: string; src?: string }) => {
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
      <source src={src || 'https://res.cloudinary.com/demo/video/upload/q_auto:good,f_auto/docs/walking_talking.mp4'} type="video/mp4" />
    </video>
  );
};

// Hover overlay — identical to Flavien/Cymatic/Drexel
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

export function AampGallery() {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-0 w-full">

        {/* ═══ ROW 1: Full-width — AAMP typography hero ═══ */}
        <div className="group relative w-full bg-[#121212] overflow-hidden" style={{ aspectRatio: '1339 / 867' }}>
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgSafeVideo} />
          <div className="absolute inset-[0.08%_0_-0.08%_0] overflow-hidden">
            <div className="absolute" style={{ left: '0.07%', top: '-8.9%', width: '99.93%', height: '117.9%' }}>
              <img alt="AAMP brand typography" className="absolute inset-0 w-full h-full object-cover" src={imgAamp} />
            </div>
          </div>
          <HoverOverlay
            category="Identity"
            title="Project Overview"
            description="A bold typographic identity for the African American Museum of Philadelphia — bridging ancestral heritage with modern architecture."
          />
        </div>

        {/* ═══ ROW 2: Split 30/70 — Mobile mockup | Graffiti wall ═══ */}
        <div className="flex flex-col md:flex-row w-full" style={{ aspectRatio: '1339 / 1059' }}>
          {/* Left 30%: Mobile device mockup */}
          <div className="group relative w-full md:w-[30%] bg-[#121212] overflow-hidden aspect-[3/4] md:aspect-auto">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage} />
            <div className="absolute bg-[#383131] overflow-hidden" style={{ left: '0', right: '0', top: '0.005%', bottom: '-0.005%' }}>
              <div className="absolute" style={{ left: '-117.9%', top: '2.18%', width: '327.7%', height: '93.1%' }}>
                <img alt="AAMP mobile app screens" className="absolute inset-0 w-full h-full object-cover" src={imgAampMobile5} />
              </div>
            </div>
            <HoverOverlay
              category="Digital"
              title="Mobile Experience"
              description="Responsive mobile presence — extending the brand identity to handheld touchpoints."
            />
          </div>
          {/* Right 70%: Graffiti wall / street art */}
          <div className="group relative w-full md:w-[70%] bg-[#121212] overflow-hidden aspect-square md:aspect-auto">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage1} />
            <div className="absolute bg-[#4a4040] overflow-hidden" style={{ left: '-0.07%', right: '-6.83%', top: '-8.96%', bottom: '-8.1%' }}>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: '100.5%', aspectRatio: '938.5 / 1251.33' }}>
                <img alt="AAMP street installation" className="absolute inset-0 w-full h-full object-cover" src={imgImg3096} />
              </div>
            </div>
            <HoverOverlay
              category="Environmental"
              title="Urban Integration"
              description="The brand language translated to urban environments — street-level presence rooted in community context."
            />
          </div>
        </div>

        {/* ═══ ROW 3: Full-width — Simone Leigh exhibition / cultural program ═══ */}
        <div className="group relative w-full bg-[#121212] overflow-hidden" style={{ aspectRatio: '1339 / 867' }}>
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgSafeVideo} />
          <div className="absolute top-1/2 -translate-y-1/2 overflow-hidden" style={{ left: '0', right: '-7.47%', aspectRatio: '2878 / 1734' }}>
            <img alt="AAMP cultural exhibition" className="absolute inset-0 w-full h-full object-cover" src={imgImage537} />
          </div>
          <HoverOverlay
            category="Culture"
            title="Exhibition Identity"
            description="Visual identity system applied to exhibition programming — Simone Leigh and beyond."
          />
        </div>

        {/* ═══ ROW 4: Split 60/40 — Signage orange | Poster yellow ═══ */}
        <div className="flex flex-col md:flex-row w-full" style={{ aspectRatio: '1339 / 1059' }}>
          {/* Left 60%: Environmental signage */}
          <div className="group relative w-full md:w-[60%] bg-[#121212] overflow-hidden aspect-[3/4] md:aspect-auto">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage2} />
            <div className="absolute" style={{ left: '0', right: '-7.47%', top: '0.006%', bottom: '-0.006%' }}>
              <div className="absolute" style={{ left: '0.025%', top: '-3.5%', width: '107.4%', height: '107%' }}>
                <img alt="AAMP environmental signage" className="absolute inset-0 w-full h-full object-cover" src={imgAampSinageOrange} />
              </div>
            </div>
            <HoverOverlay
              category="Environmental"
              title="Signage System"
              description="Large-format environmental graphics — the identity system at architectural scale with bold orange and typographic rhythm."
            />
          </div>
          {/* Right 40%: Poster design */}
          <div className="group relative w-full md:w-[40%] bg-[#121212] overflow-hidden aspect-[3/4] md:aspect-auto">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage3} />
            <div className="absolute bg-[#e5e700] overflow-hidden" style={{ left: '-3.81%', right: '-0.002%', top: '0.006%', bottom: '0.02%' }}>
              <div className="absolute" style={{ left: '-0.11%', top: '-0.003%', width: '164.2%', height: '113%' }}>
                <img alt="AAMP poster design" className="absolute inset-0 w-full h-full object-cover" src={imgAampPoster} />
              </div>
            </div>
            <HoverOverlay
              category="Print"
              title="Poster Series"
              description="Typographic poster system — yellow and black palette encoding the museum's forward-thinking voice."
            />
          </div>
        </div>

        {/* ═══ ROW 5: Full-width — Gift Shop merch (t-shirts, collateral) ═══ */}
        <div className="group relative w-full bg-[#121212] overflow-hidden" style={{ aspectRatio: '1339 / 867' }}>
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgSafeVideo} />
          <div className="absolute overflow-hidden" style={{ left: '-7.61%', right: '-7.69%', top: '-0.03%', bottom: '-0.12%' }}>
            <div className="absolute" style={{ left: '-0.15%', top: '-8.92%', width: '94.2%', height: '111.9%' }}>
              <img alt="AAMP gift shop merchandise" className="absolute inset-0 w-full h-full object-cover" src={imgAampGiftShop} />
            </div>
          </div>
          <HoverOverlay
            category="Merch"
            title="Gift Shop Collection"
            description="Branded merchandise and retail touchpoints — t-shirts, totes, and collateral extending the identity into everyday life."
          />
        </div>

        {/* ═══ ROW 6: Split 30/70 — Statue detail | Letterhead stationery ═══ */}
        <div className="flex flex-col md:flex-row w-full" style={{ aspectRatio: '1339 / 1059' }}>
          {/* Left 30%: Statue / artifact detail */}
          <div className="group relative w-full md:w-[30%] bg-[#121212] overflow-hidden aspect-[3/4] md:aspect-auto">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage4} />
            <div className="absolute bg-[#e5e700] overflow-hidden" style={{ left: '-3.73%', right: '-3.73%', top: '0.007%', bottom: '-0.007%' }}>
              <div className="absolute" style={{ left: '-3.9%', top: '-3.65%', width: '111.5%', height: '103.7%' }}>
                <img alt="AAMP cultural artifact" className="absolute inset-0 w-full h-full object-cover" src={imgImage159} />
              </div>
            </div>
            <HoverOverlay
              category="Culture"
              title="Heritage Detail"
              description="Visual connection to the museum's permanent collection — identity grounded in specific historical motifs."
            />
          </div>
          {/* Right 70%: Letterhead / stationery system */}
          <div className="group relative w-full md:w-[70%] bg-[#121212] overflow-hidden aspect-square md:aspect-auto">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage5} />
            <div className="absolute bg-[#e5e700] overflow-hidden" style={{ left: '-3.8%', right: '-3.66%', top: '0.007%', bottom: '-0.007%' }}>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[30px] overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" style={{ width: '113.5%', aspectRatio: '1065 / 1134' }}>
                <img alt="AAMP letterhead stationery system" className="absolute h-[113.4%] left-[-25.4%] max-w-none top-[-8.2%] w-[161%]" src={imgAampLetterHead1} />
              </div>
            </div>
            <HoverOverlay
              category="Print"
              title="Stationery System"
              description="Complete letterhead and stationery suite — the typographic system applied to institutional correspondence."
            />
          </div>
        </div>

      </div>
    </section>
  );
}