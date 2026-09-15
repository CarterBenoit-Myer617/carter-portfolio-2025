import React, { useRef, useEffect } from 'react';

/** Public project assets — stable paths (no Figma /_assets/vN/ dependency) */
const ROAM = {
  cover: '/projects/roam-media-brand/cover/roam-cover.webp',
  hero: '/projects/roam-media-brand/hero/roam-2024-hero.webp',
  spread01: '/projects/roam-media-brand/spreads/roam-2024-spread-01.webp',
  spread02: '/projects/roam-media-brand/spreads/roam-2024-spread-02.webp',
  spread03: '/projects/roam-media-brand/spreads/roam-2024-spread-03.webp',
  webSpread: '/projects/roam-media-brand/spreads/roam-web-spread.webp',
  caseStudy01: '/projects/roam-media-brand/mockups/case-study-01.webp',
  caseStudy02: '/projects/roam-media-brand/mockups/case-study-02.webp',
  aesthetic01: '/projects/roam-media-brand/images/roam-aesthetic-01.webp',
  aesthetic02: '/projects/roam-media-brand/images/roam-aesthetic-02.webp',
  aesthetic03: '/projects/roam-media-brand/images/roam-aesthetic-03.webp',
  applicationDetail: '/projects/roam-media-brand/images/roam-application-detail.webp',
  videoPreview: '/projects/roam-media-brand/images/roam-application-video-preview.webp',
  palestine: '/projects/roam-media-brand/spreads/roam-2024-spread-02.webp',
  openBook: '/projects/roam-media-brand/mockups/case-study-02.webp',
  spine: '/projects/roam-media-brand/images/roam-system-showcase.webp',
  sea: '/projects/roam-media-brand/images/roam-aesthetic-03.webp',
} as const;

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

export function RoamGallery() {
  return (
    <section className="w-full max-w-full overflow-hidden">
      <div className="flex flex-col gap-0 w-full">

        {/* ROW 1: Full-width — ROAM magazine hero */}
        <div className="group relative w-full bg-[#121212] overflow-hidden aspect-[4/3] lg:[aspect-ratio:1339/867]">
          <img className="lg:hidden w-full h-full max-w-full object-cover" src={ROAM.hero} alt="ROAM editorial spread" />
          <div className="hidden lg:block absolute inset-0 overflow-hidden">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={ROAM.videoPreview} />
            <div className="absolute inset-0 overflow-hidden">
              <img alt="ROAM magazine cover" className="absolute inset-0 w-full h-full max-w-full object-cover" src={ROAM.cover} />
            </div>
            <div className="absolute inset-x-[3.73%] inset-y-[5%] bg-[#e5e700] overflow-hidden">
              <img alt="ROAM editorial spread" className="w-full h-full max-w-full object-cover" src={ROAM.hero} />
            </div>
          </div>
          <HoverOverlay
            category="Publication"
            title="Project Overview"
            description="Subculture as humanitarian aid — a non-profit subscription ecosystem bridging skateboarding culture with global impact."
          />
        </div>

        {/* ROW 2: Split 30/70 */}
        <div className="flex flex-col w-full lg:flex-row lg:[aspect-ratio:1339/1059]">
          <div className="group relative w-full bg-[#e5e700] overflow-hidden aspect-[3/4] lg:w-[30%] lg:aspect-auto">
            <img className="lg:hidden w-full h-full max-w-full object-cover" src={ROAM.cover} alt="ROAM cover" />
            <div className="hidden lg:block absolute inset-0 overflow-hidden">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={ROAM.aesthetic01} />
              <div className="absolute flex items-center justify-center" style={{ left: '-75.6%', top: '-99.6%', width: '378.8%', height: '215.3%' }}>
                <div className="-rotate-90 flex-none">
                  <img alt="ROAM rotated cover" className="w-full h-full object-cover" style={{ width: '1520px', height: '2280px', maxWidth: 'none' }} src={ROAM.cover} />
                </div>
              </div>
              <div className="absolute flex items-center justify-center" style={{ left: '-17.6%', top: '2.05%', width: '120.1%', height: '46.8%' }}>
                <div className="-rotate-[120deg] -scale-y-100 flex-none">
                  <div className="relative overflow-hidden" style={{ width: '377px', height: '339px' }}>
                    <img alt="" className="absolute object-cover" style={{ left: '-5.32%', top: '0', width: '275.81%', height: '306.83%', maxWidth: 'none' }} src={ROAM.aesthetic02} />
                  </div>
                </div>
              </div>
            </div>
            <HoverOverlay
              category="Design"
              title="Visual Language"
              description="Layered texture work and rotational compositions — the ROAM aesthetic rooted in raw, analog energy."
            />
          </div>
          <div className="group relative w-full bg-[#121212] overflow-hidden aspect-square lg:w-[70%] lg:aspect-auto">
            <img className="lg:hidden w-full h-full max-w-full object-cover" src={ROAM.spread01} alt="Skateboarding editorial" />
            <div className="hidden lg:block absolute inset-0 overflow-hidden">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={ROAM.caseStudy01} />
              <div className="absolute bg-[#e5e700] overflow-hidden" style={{ left: '16.3%', top: '3.31%', width: '60.9%', height: '97.06%' }}>
                <div className="absolute" style={{ left: '-201.4%', top: '-20.6%', width: '352.2%', height: '175.6%' }}>
                  <img alt="Skateboarding editorial" className="absolute inset-0 w-full h-full object-cover" src={ROAM.spread01} />
                </div>
              </div>
            </div>
            <HoverOverlay
              category="Editorial"
              title="Skateboarding & Culture"
              description="What tricks are you learning right now? — centering authentic voices and first-person perspectives in editorial design."
            />
          </div>
        </div>

        {/* ROW 3: Full-width — Magazine web spread */}
        <div className="group relative w-full bg-[#121212] overflow-hidden aspect-[4/3] lg:[aspect-ratio:1339/867]">
          <img className="lg:hidden w-full h-full max-w-full object-cover" src={ROAM.webSpread} alt="ROAM magazine web spread" />
          <div className="hidden lg:block absolute inset-0 overflow-hidden">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={ROAM.videoPreview} />
            <div className="absolute inset-0 bg-[#e5e700] overflow-hidden">
              <img className="absolute w-full -top-[884%] h-[987%] max-w-full object-cover" src={ROAM.webSpread} alt="ROAM magazine web spread" />
            </div>
          </div>
          <HoverOverlay
            category="Publication"
            title="Editorial System"
            description="The ROAM grid system — web spreads designed for both digital and print reproduction at maximum visual impact."
          />
        </div>

        {/* ROW 4: Split 60/40 */}
        <div className="flex flex-col w-full lg:flex-row lg:[aspect-ratio:1339/1059]">
          <div className="group relative w-full bg-[#121212] overflow-hidden aspect-[3/4] lg:w-[60%] lg:aspect-auto">
            <img className="lg:hidden w-full h-full max-w-full object-cover" src={ROAM.palestine} alt="Come to Palestine editorial" />
            <div className="hidden lg:block absolute inset-0 overflow-hidden">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={ROAM.caseStudy02} />
              <div className="absolute" style={{ left: '-146.8%', top: '-24.83%', width: '263%', height: '133.1%' }}>
                <img alt="Come to Palestine editorial" className="absolute inset-0 w-full h-full object-cover" src={ROAM.palestine} />
              </div>
            </div>
            <HoverOverlay
              category="Culture"
              title="Come to Palestine"
              description="Visual storytelling as humanitarian narrative — centering underrepresented communities through authentic editorial design."
            />
          </div>
          <div className="group relative w-full bg-[#121212] overflow-hidden aspect-[3/4] lg:w-[40%] lg:aspect-auto">
            <img className="lg:hidden w-full h-full max-w-full object-cover" src={ROAM.spread03} alt="ROAM magazine spread" />
            <div className="hidden lg:block absolute inset-0 overflow-hidden">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={ROAM.aesthetic03} />
              <div className="absolute flex items-center justify-center" style={{ left: '-202.4%', top: '-9.32%', width: '379.4%', height: '129.54%' }}>
                <div className="flex-none" style={{ transform: 'rotate(0.76deg)' }}>
                  <img alt="ROAM magazine spread" className="w-full h-full object-cover" style={{ width: '2015px', height: '1344px', maxWidth: 'none' }} src={ROAM.spread03} />
                </div>
              </div>
            </div>
            <HoverOverlay
              category="Print"
              title="Layout Detail"
              description="Large-format editorial spreads — raw photography and bold typography in a hand-finished, tactile publication."
            />
          </div>
        </div>

        {/* ROW 5: Full-width — Open book display */}
        <div className="group relative w-full bg-[#121212] overflow-hidden aspect-[4/3] lg:[aspect-ratio:1339/867]">
          <img alt="" className="w-full h-auto max-w-full lg:absolute lg:inset-0 lg:w-full lg:h-full object-cover" src={ROAM.videoPreview} />
          <img className="lg:hidden w-full h-full max-w-full object-cover" src={ROAM.openBook} alt="ROAM open book display" />
          <div className="hidden lg:block absolute inset-0 overflow-hidden">
            <img alt="ROAM open book display" className="absolute inset-0 w-full h-full object-cover" src={ROAM.openBook} />
          </div>
          <HoverOverlay
            category="Publication"
            title="Border to Boarder"
            description="The physical artifact — hand-bound publication showcasing the intersection of skateboarding culture and social impact narratives."
          />
        </div>

        {/* ROW 6: Split 30/70 */}
        <div className="flex flex-col w-full lg:flex-row lg:[aspect-ratio:1339/1059]">
          <div className="group relative w-full bg-[#121212] overflow-hidden aspect-[3/4] lg:w-[30%] lg:aspect-auto">
            <img className="lg:hidden w-full h-full max-w-full object-cover" src={ROAM.spine} alt="ROAM magazine spine" />
            <div className="hidden lg:block absolute inset-0 overflow-hidden">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={ROAM.applicationDetail} />
              <img alt="ROAM magazine spine" className="absolute inset-0 w-full h-full object-cover" src={ROAM.spine} />
            </div>
            <HoverOverlay
              category="Print"
              title="Binding Detail"
              description="Swiss-bound spine with exposed stitching — every production detail reinforces the ROAM ethos of raw authenticity."
            />
          </div>
          <div className="group relative w-full bg-[#121212] overflow-hidden aspect-square lg:w-[70%] lg:aspect-auto">
            <img className="lg:hidden w-full h-full max-w-full object-cover" src={ROAM.sea} alt="ROAM sea imagery" />
            <div className="hidden lg:block absolute inset-0 overflow-hidden">
              <div className="absolute inset-0">
                <img alt="ROAM sea imagery" className="absolute inset-0 w-full h-full object-cover" src={ROAM.sea} />
              </div>
              <div className="absolute overflow-hidden" style={{ left: '-13.4%', top: '-27.6%', width: '204.5%', height: '136.7%' }}>
                <img alt="" className="absolute inset-0 w-full h-full object-cover" src={ROAM.palestine} />
              </div>
            </div>
            <HoverOverlay
              category="Culture"
              title="Global Reach"
              description="COME TO PALESTINE — the publication as a vehicle for cross-cultural solidarity, blending sea imagery with activist typography."
            />
          </div>
        </div>

      </div>
    </section>
  );
}
