import React, { useRef, useEffect } from 'react';
import { VIDEO_DREXEL_FIGMA, VIDEO_DREXEL_LOCAL } from '../data/media';

// ═══ All Figma assets for Drexel Senior Showcase ═══
// Row 2 (split 30/70)
import imgImage from "figma:asset/254d10d1ef0521280d9f9465a57bef81827d712e.png";
import imgImage512 from "figma:asset/d7304bcf10f8d9ba255dffe0d23e11be591c7e65.png";
import imgImage1 from "figma:asset/021588b1281bf8ad334b94847c36ddc8d2a2e72d.png";
import imgFrame2147242040 from "figma:asset/4ee073b77f93438aa5f74a493b82852e7303bf56.png";
import imgImage505 from "figma:asset/200f4926a1cf7c27efcaef055005be382b23e98e.png";
// Row 3 (full-width)
import imgSafeVideo from "figma:asset/37aa1b27d67615fe2162a1a399cb529fc6bd2701.png";
import imgImage506 from "figma:asset/10a886ce2fa5f9b0b4762058f8365eb0bf9a984f.png";
import imgImage514 from "figma:asset/2e2a1c8f546c57290493e5a8b2d6bb6ea2d6cc49.png";
// Row 4 (split 60/40)
import imgImage2 from "figma:asset/51656855530b47bfa45eb6c2fd90defb6e55654b.png";
import imgImage536 from "figma:asset/61b1e37bfde313beec0d2fef29f6b26dc53b640f.png";
import imgImage3 from "figma:asset/f8d4cd90e4e50be4ae4821bf536c6bd05f13bebb.png";
// Row 5 (full-width)
import imgImage517 from "figma:asset/ca696082f8971d7630e775ee6d6223e4eb4d3774.png";
// Row 6 (split 30/70)
import imgImage4 from "figma:asset/90ec552fb75debea6b6d631b21e7e669ce005200.png";
import imgImage510 from "figma:asset/3488f1aee7ac3cf64aa54a3d746404af9b215ae1.png";

// Video source from Figma import
const DREXEL_VIDEO_SRC = VIDEO_DREXEL_LOCAL;

// Safe Video — graceful autoplay matching Flavien/Cymatic architecture
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
      <source src={src || VIDEO_DREXEL_LOCAL} type="video/mp4" />
      <source src={VIDEO_DREXEL_FIGMA} type="video/mp4" />
    </video>
  );
};

// Hover overlay — identical to Flavien/Cymatic
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

export function DrexelGallery() {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-0 w-full">

        {/* ═══ ROW 1: Full-width — YouTube embed (website walkthrough) ═══ */}
        <div className="group relative w-full bg-[#121212] overflow-hidden" style={{ aspectRatio: '1439 / 867' }}>
          {/* YouTube iframe embed */}
          <iframe
            src="https://www.youtube.com/embed/oLRDqjx3zJY?autoplay=1&mute=1&controls=0&loop=1&playlist=oLRDqjx3zJY&playsinline=1&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&disablekb=1&enablejsapi=1"
            className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 pointer-events-none object-cover"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="Drexel Senior Showcase Walkthrough"
          />
          <HoverOverlay
            category="Web"
            title="Project Overview"
            description="Full walkthrough of the Drexel Senior Showcase website — a digital ecosystem for the Class of 2023."
          />
        </div>

        {/* ═══ ROW 2: Split 30/70 — Exhibition photo | Mobile UI screens ═══ */}
        <div className="flex flex-col md:flex-row w-full" style={{ aspectRatio: '1439 / 1059' }}>
          {/* Left 30%: Exhibition/gallery photo with poster overlay */}
          <div className="group relative w-full md:w-[30%] bg-[#121212] overflow-hidden aspect-[3/4] md:aspect-auto">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage} />
            {/* Magenta mask + image 512 poster overlay */}
            <div
              className="absolute bg-transparent overflow-hidden"
              style={{ left: '0', right: '0', top: '-0.066%', bottom: '0.066%' }}
            >
              <div
                className="absolute"
                style={{ left: '-25.81%', top: '-1.51%', width: '152.3%', height: '102.7%' }}
              >
                <img alt="Exhibition gallery installation" className="absolute inset-0 w-full h-full object-cover" src={imgImage512} />
              </div>
            </div>
            <HoverOverlay
              category="Exhibition"
              title="Gallery Installation"
              description="Opening night at the Drexel Senior Showcase — physical space bridging digital experience."
            />
          </div>
          {/* Right 70%: Frame overlay with beige tint + mobile screens */}
          <div className="group relative w-full md:w-[70%] bg-[#121212] overflow-hidden aspect-square md:aspect-auto">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage1} />
            {/* Frame with beige 90% overlay */}
            <div
              className="absolute -translate-x-1/2 overflow-hidden"
              style={{ left: 'calc(50% + 0.033%)', top: '-0.066%', bottom: '0.065%', aspectRatio: '937.3 / 1059.3' }}
            >
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgFrame2147242040} />
              <div className="absolute inset-0 bg-[rgba(231,231,229,0.9)]" />
              {/* Mobile UI screens */}
              <div
                className="absolute"
                style={{ left: '0', top: '20.59%', width: '100%', height: '56.7%' }}
              >
                <img alt="Drexel Showcase mobile screens" className="absolute inset-0 w-full h-full object-cover" src={imgImage505} />
              </div>
            </div>
            <HoverOverlay
              category="UX"
              title="Mobile Experience"
              description="Responsive mobile UI designed for student portfolios — filtering, browsing, and deep-linking to individual work."
            />
          </div>
        </div>

        {/* ═══ ROW 3: Full-width — Showcase posters/collage (image 514) ═══ */}
        <div className="group relative w-full bg-[#121212] overflow-hidden" style={{ aspectRatio: '1439 / 867' }}>
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgSafeVideo} />
          {/* Layered composition: image 506 base → inner content with image 514 */}
          <div
            className="absolute bg-transparent overflow-hidden"
            style={{ left: '-3.47%', right: '-3.47%', top: '0.001%', bottom: '-0.001%' }}
          >
            {/* image 506 — base layer */}
            <div
              className="absolute"
              style={{ left: '-3.54%', top: '0', width: '106.7%', height: '99.8%' }}
            >
              <img alt="Showcase poster base" className="absolute inset-0 w-full h-full object-cover" src={imgImage506} />
            </div>
            {/* Inner container with image 514 */}
            <div
              className="absolute bg-transparent overflow-hidden"
              style={{ left: '-8.68%', right: '-8.68%', top: '-4.5%', bottom: '-4.07%' }}
            >
              <div
                className="absolute bg-transparent overflow-hidden"
                style={{ left: '12.15%', right: '12.15%', top: '4.28%', bottom: '4.31%' }}
              >
                <div
                  className="absolute"
                  style={{ left: '-7.53%', top: '0', width: '115.06%', height: '100%' }}
                >
                  <img alt="Drexel Senior Showcase poster series" className="absolute inset-0 w-full h-full object-cover" src={imgImage514} />
                </div>
              </div>
            </div>
          </div>
          <HoverOverlay
            category="Design"
            title="Campaign Identity"
            description="Bold typographic system — yellow and magenta gradients encoding the energy of graduating creatives."
          />
        </div>

        {/* ═══ ROW 4: Split 60/40 — Poster collage | Video walkthrough ═══ */}
        <div className="flex flex-col md:flex-row w-full" style={{ aspectRatio: '1439 / 1059' }}>
          {/* Left 60%: Full poster collage with image 536 overlay */}
          <div className="group relative w-full md:w-[60%] bg-[#121212] overflow-hidden aspect-[3/4] md:aspect-auto">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage2} />
            {/* image 536 — full overlay, aspect 2286/3034 */}
            <div
              className="absolute -translate-y-1/2"
              style={{ left: '0', right: '0.05%', top: 'calc(50% + 0.015%)' }}
            >
              <img
                alt="Drexel showcase poster collage"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '2286 / 3034' }}
                src={imgImage536}
              />
            </div>
            <HoverOverlay
              category="Print"
              title="Poster System"
              description="Large-format poster series for physical exhibition spaces — each piece functioning as both wayfinding and brand expression."
            />
          </div>
          {/* Right 40%: Video walkthrough (KEEPING THE VIDEO) */}
          <div className="group relative w-full md:w-[40%] bg-[#121212] overflow-hidden aspect-[3/4] md:aspect-auto">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage3} />
            {/* Magenta mask with embedded video */}
            <div
              className="absolute bg-transparent overflow-hidden"
              style={{ left: '-0.07%', right: '-7.39%', top: '0.03%', bottom: '0.065%' }}
            >
              <div
                className="absolute overflow-hidden"
                style={{ left: '-26.53%', top: '-1.89%', width: '152.9%', height: '103.8%' }}
              >
                <SafeVideo className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
            <HoverOverlay
              category="Motion"
              title="Website Walkthrough"
              description="Recorded walkthrough of the live site — demonstrating responsive behavior, filtering, and student portfolio navigation."
            />
          </div>
        </div>

        {/* ═══ ROW 5: Full-width — Desktop website screenshot (image 517) ═══ */}
        <div className="group relative w-full bg-[#121212] overflow-hidden" style={{ aspectRatio: '1439 / 867' }}>
          {/* Black container with website screenshot */}
          <div className="absolute inset-0 bg-black overflow-hidden">
            <div
              className="absolute overflow-hidden"
              style={{ left: '1.31%', top: '3.93%', width: '97.37%', height: '92.13%' }}
            >
              <img
                alt="Drexel Showcase desktop website"
                className="absolute left-[-0.65%] top-0 w-[101.3%] h-full max-w-none object-cover"
                src={imgImage517}
              />
            </div>
          </div>
          <HoverOverlay
            category="Frontend"
            title="Desktop Experience"
            description="Full-width desktop layout — grid-based student showcase with category filtering and search."
          />
        </div>

        {/* ═══ ROW 6: Split 30/70 — Cropped poster | Centered graphic element ═══ */}
        <div className="flex flex-col md:flex-row w-full" style={{ aspectRatio: '1439 / 1059' }}>
          {/* Left 30%: Poster with cropped image 506 */}
          <div className="group relative w-full md:w-[30%] bg-[#121212] overflow-hidden aspect-[3/4] md:aspect-auto">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage2} />
            {/* Magenta mask + image 506 cropped */}
            <div
              className="absolute bg-transparent overflow-hidden"
              style={{ left: '-3.73%', right: '-3.73%', top: '0.064%', bottom: '-0.064%' }}
            >
              <div
                className="absolute overflow-hidden"
                style={{ left: '-60.19%', top: '-4.42%', width: '220.37%', height: '100%' }}
              >
                <img
                  alt="Showcase poster detail"
                  className="absolute left-[-35.86%] top-[-1.55%] w-[223.62%] h-[103.06%] max-w-none"
                  src={imgImage506}
                />
              </div>
            </div>
            <HoverOverlay
              category="Design"
              title="Visual Detail"
              description="Cropped poster fragment — the yellow-magenta gradient system at macro scale."
            />
          </div>
          {/* Right 70%: Centered graphic element (image 510) */}
          <div className="group relative w-full md:w-[70%] bg-[#121212] overflow-hidden aspect-square md:aspect-auto">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage4} />
            {/* Positioning container + centered image 510 */}
            <div
              className="absolute overflow-hidden"
              style={{ left: '0.03%', right: '-4.59%', top: '-1.01%', bottom: '-0.95%' }}
            >
              <div
                className="absolute -translate-y-1/2 flex items-center justify-center"
                style={{ left: '5.82%', top: 'calc(50% - 1.99%)', width: '88.31%', aspectRatio: '1 / 1' }}
              >
                <img
                  alt="Senior Showcase graphic system"
                  className="absolute inset-0 w-full h-full object-cover"
                  src={imgImage510}
                />
              </div>
            </div>
            <HoverOverlay
              category="System"
              title="Graphic Framework"
              description="The complete visual system — modular components that scale from social media to environmental graphics."
            />
          </div>
        </div>

      </div>
    </section>
  );
}