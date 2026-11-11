import React, { useRef, useEffect } from 'react';

// ═══ All 19 Figma assets for Cymatic Studies ═══
// Row 1 (full-width)
import imgImage529 from "figma:asset/bf0b8e96855ccb3cc23d706b64ab34812b5879fe.png";
// Row 2 (split 30/70)
// 64ce1a7d… original bytes were not found locally; keep the live Figma path (do not invent art).
import imgImage31 from "figma:asset/684073c384599bdd885fca3ce6fd7aa00ce23e53.png";
import imgImage1 from "figma:asset/e0d14c19364de823fbf45e4e03a204c54e59e957.png";
import imgImg0925 from "figma:asset/f981bd1fb16a92b0c4361ebfcb165153fc1fb9f1.png";
// Row 3 (full-width)
import imgImage530 from "figma:asset/e4bd1d4daabecc11e64ec48cd6b49b6a9b81ed59.png";
// Row 4 (split 60/40)
import imgImage2 from "figma:asset/dddd5163c0042e966564f468b775745574b3c62d.png";
import imgImage38 from "figma:asset/2667abaccf09d16137c6c2b17e03a9394a084a47.png";
import imgImage531 from "figma:asset/b25b9d2448bd821271940d3b36e4d8ce6f5efc90.png";
import imgImage3 from "figma:asset/e5947eae9ef4f087fba7af85a5d1528f8be6e0a1.png";
import img6PhysicalFinal03 from "figma:asset/655acf212988463451f6e7e710e0d12483b5366d.png";
// Row 5 (full-width video/image)
import imgSafeVideo from "figma:asset/1bd234b5010e54e9c1206fb5bb2725a3cdaad416.png";
import imgCfghgvj1 from "figma:asset/1b8c9571e499bfdc2783872e15011ebf9480e5cc.png";
// Row 6 (split 30/70)
import imgImage4 from "figma:asset/5a9da72778278414e605d2ba0d61ece2d06b8588.png";
import imgImage34 from "figma:asset/47590bbcb91d0fa03caf20ccc4fa9249b3bedd42.png";
import imgImage5 from "figma:asset/650266aaa033918ebf5fff982249385b7a56a109.png";
import img6NuralogicalCopy403 from "figma:asset/a0cc0178554e3f1e6e3f37c93c9f3c3b811ead86.png";
import imgImage533 from "figma:asset/f8f633d51d71a2724cd8f73c43e4491fd5446099.png";

const VIDEO_PLACEHOLDER = 'https://res.cloudinary.com/demo/video/upload/q_auto:good,f_auto/docs/walking_talking.mp4';

// Safe Video — graceful autoplay, native poster replaces static fallback
const SafeVideo = ({ className, fallbackImg }: { className?: string; fallbackImg?: string }) => {
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
      poster={fallbackImg}
      className={`${className} z-[1]`}
    >
      <source src={VIDEO_PLACEHOLDER} type="video/mp4" />
    </video>
  );
};

// Hover overlay — matches Flavien architecture exactly
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

export function CymaticGallery() {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-0 w-full">

        {/* ═══ ROW 1: Full-width — Outdoor installation (image 529) ═══ */}
        <div className="group relative w-full bg-[#121212] overflow-hidden" style={{ aspectRatio: '1439 / 867' }}>
          <img
            alt="Cymatic Studies outdoor installation"
            className="absolute inset-0 w-full h-full object-cover"
            src={imgImage529}
          />
          <HoverOverlay
            category="R&D"
            title="Outdoor Installation"
            description="Typography as physical artifact — large-format posters installed on exterior walls, testing legibility at architectural scale."
          />
        </div>

        {/* ═══ ROW 2: Split 30/70 — Wall poster | Typography collage ═══ */}
        <div className="flex flex-col md:flex-row w-full" style={{ aspectRatio: '1439 / 1059' }}>
          {/* Left 30%: Poster on wall/pillar */}
          <div className="group relative w-full md:w-[30%] bg-[#121212] overflow-hidden aspect-[3/4] md:aspect-auto">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src="/_assets/v11/64ce1a7d8bbc9f0973ab301f332c6c41476ebc16.png" />
            {/* Magenta mask + poster overlay */}
            <div className="absolute inset-[0.3px_0_-0.3px_0] bg-transparent overflow-hidden">
              <img
                alt="Typography poster on wall"
                className="absolute inset-0 w-full h-full object-cover"
                src={imgImage31}
                style={{ left: '-0.17%', top: '-0.13%', width: '100.2%', height: '100.1%' }}
              />
            </div>
            <HoverOverlay
              category="Installation"
              title="Wall Series"
              description="Posters mounted on architectural columns — the white surface becomes part of the composition."
            />
          </div>
          {/* Right 70%: IMG_0925 typography collage rotated 0.8deg */}
          <div className="group relative w-full md:w-[70%] bg-[#121212] overflow-hidden aspect-square md:aspect-auto">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage1} />
            {/* Light gray mask with rotated collage */}
            <div className="absolute inset-[0.3px_-0.3px_-0.3px_0.3px] bg-[#e4e4e4] overflow-hidden">
              <div
                className="absolute flex items-center justify-center"
                style={{ left: '3%', right: '-4%', top: '2.86%' }}
              >
                <div className="flex-none rotate-[0.8deg]" style={{ width: '99.5%', aspectRatio: '946.56 / 998.94' }}>
                  <div className="relative w-full h-full overflow-hidden">
                    <img
                      alt="Cymatic typography collage"
                      className="absolute left-0 top-[-5.14%] w-[99.95%] h-[134.96%] max-w-none"
                      src={imgImg0925}
                    />
                  </div>
                </div>
              </div>
            </div>
            <HoverOverlay
              category="Process"
              title="Type Specimens"
              description="Comprehensive collage of all cymatic type experiments — letterforms governed by frequency, amplitude, and resonance."
            />
          </div>
        </div>

        {/* ═══ ROW 3: Full-width — Second installation shot (image 530) ═══ */}
        <div className="group relative w-full bg-[#121212] overflow-hidden" style={{ aspectRatio: '1439 / 867' }}>
          <img
            alt="Cymatic Studies installation detail"
            className="absolute inset-0 w-full h-full object-cover"
            src={imgImage530}
          />
          <HoverOverlay
            category="R&D"
            title="Installation Detail"
            description="Close documentation of the typographic system in situ — every letter carries the visual DNA of its generating frequency."
          />
        </div>

        {/* ═══ ROW 4: Split 60/40 — Yellow gradient composition | Physics animation ═══ */}
        <div className="flex flex-col md:flex-row w-full" style={{ aspectRatio: '1439 / 1059' }}>
          {/* Left 60%: Yellow radial gradient with layered typography */}
          <div className="group relative w-full md:w-[60%] bg-[#121212] overflow-hidden aspect-[3/4] md:aspect-auto">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage2} />
            {/* Yellow radial gradient overlay with centered artwork */}
            <div
              className="absolute overflow-hidden"
              style={{
                left: '-3.7%', right: '-3.7%', top: '-0.065%', bottom: '0.064%',
                backgroundImage: `radial-gradient(44.4% 50% at 50% 50%, rgba(250,255,0,1) 34.61%, rgba(187,191,0,1) 50.96%, rgba(156,159,0,1) 59.13%, rgba(125,128,0,1) 67.31%, rgba(94,96,0,1) 75.48%, rgba(62,64,0,1) 83.65%, rgba(31,32,0,1) 91.83%, rgba(16,16,0,1) 95.91%, rgba(8,8,0,1) 97.96%, rgba(0,0,0,1) 100%)`,
              }}
            >
              {/* image 38 — centered artwork */}
              <div className="absolute" style={{ left: '12.9%', top: '3.14%', width: '75.2%', height: '91.3%' }}>
                <img alt="Cymatic frequency artwork" className="absolute inset-0 w-full h-full object-cover" src={imgImage38} />
              </div>
              {/* image 531 — full overlay */}
              <div
                className="absolute -translate-y-1/2"
                style={{ left: '0.46%', right: '-0.47%', top: 'calc(50% - 3.1%)' }}
              >
                <img
                  alt="Typography overlay"
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: '1727 / 2119' }}
                  src={imgImage531}
                />
              </div>
            </div>
            <HoverOverlay
              category="Process"
              title="Frequency Mapping"
              description="Yellow radial gradient as energy field — typography specimens layered over frequency-derived compositions."
            />
          </div>
          {/* Right 40%: Dark bg with physics animation frame */}
          <div className="group relative w-full md:w-[40%] bg-[#121212] overflow-hidden aspect-[3/4] md:aspect-auto">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage3} />
            {/* Dark overlay with physics animation */}
            <div
              className="absolute bg-[#050505] overflow-hidden"
              style={{ left: '-3.8%', top: '0.03%', bottom: '-0.03%', width: '107.5%' }}
            >
              <div
                className="absolute"
                style={{ left: '5.46%', top: '14.03%', width: '88.8%', height: '71.9%' }}
              >
                <img
                  alt="Physics simulation with typographic text"
                  className="absolute inset-0 w-full h-full object-cover"
                  src={img6PhysicalFinal03}
                />
              </div>
            </div>
            <HoverOverlay
              category="Physics"
              title="Soft Body Simulation"
              description="Cinema 4D soft-body dynamics applied to letterforms — each frame captures typography under physical stress."
            />
          </div>
        </div>

        {/* ═══ ROW 5: Full-width — Video/Image with CFGHGVJ overlay ═══ */}
        <div className="group relative w-full bg-[#121212] overflow-hidden" style={{ aspectRatio: '1439 / 867' }}>
          {/* Background (video slot — currently static, swap with actual reel) */}
          <img
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            src={imgSafeVideo}
          />
          {/* Magenta mask + CFGHGVJ illustration overlay */}
          <div
            className="absolute bg-transparent overflow-hidden"
            style={{ left: '-3.47%', right: '-3.47%', top: '0.002%', bottom: '-0.002%' }}
          >
            <div
              className="absolute"
              style={{ left: '-1.67%', top: '-14.42%', width: '103.3%', height: '128.7%' }}
            >
              <img
                alt="Cymatic generative illustration"
                className="absolute inset-0 w-full h-full object-cover"
                src={imgCfghgvj1}
              />
            </div>
          </div>
          <HoverOverlay
            category="Motion"
            title="Generative Output"
            description="The culmination of all frequency experiments — a dense, layered composition where every visual element traces back to sound data."
          />
        </div>

        {/* ═══ ROW 6: Split 30/70 — Doubled poster | Green gradient with white card ═══ */}
        <div className="flex flex-col md:flex-row w-full" style={{ aspectRatio: '1439 / 1059' }}>
          {/* Left 30%: Doubled poster on pillar */}
          <div className="group relative w-full md:w-[30%] bg-[#121212] overflow-hidden aspect-[3/4] md:aspect-auto">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage4} />
            {/* First magenta layer + image 34 */}
            <div
              className="absolute bg-transparent overflow-hidden"
              style={{ left: '-3.73%', right: '-3.73%', top: '-0.064%', bottom: '0.064%' }}
            >
              <img
                alt="Poster on architectural column"
                className="absolute inset-0 w-full h-full object-cover"
                src={imgImage34}
                style={{ top: '-0.063%', height: '100.1%' }}
              />
            </div>
            {/* Second magenta layer + image 34 (doubled for depth) */}
            <div
              className="absolute bg-transparent overflow-hidden"
              style={{ left: '-3.48%', right: '-3.98%', top: '0.03%', bottom: '-0.03%' }}
            >
              <img
                alt="Poster overlay"
                className="absolute inset-0 w-full h-full object-cover"
                src={imgImage34}
                style={{ top: '-0.063%', height: '100.1%' }}
              />
            </div>
            <HoverOverlay
              category="Installation"
              title="Column Series"
              description="Doubled exposure — the same poster mounted and re-photographed, creating visual echoes of the type system."
            />
          </div>
          {/* Right 70%: Green radial gradient with white card artwork */}
          <div className="group relative w-full md:w-[70%] bg-[#121212] overflow-hidden aspect-square md:aspect-auto">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage5} />
            {/* Green radial gradient overlay */}
            <div
              className="absolute overflow-hidden"
              style={{
                left: '-0.61%', right: '-0.43%', top: '-4.78%', bottom: '-4.81%',
                backgroundImage: `radial-gradient(44.4% 50% at 50% 50%, rgba(128,255,0,1) 34.61%, rgba(96,191,0,1) 50.96%, rgba(64,128,0,1) 67.31%, rgba(48,96,0,1) 75.48%, rgba(32,64,0,1) 83.65%, rgba(16,32,0,1) 91.83%, rgba(8,16,0,1) 95.91%, rgba(0,0,0,1) 100%)`,
              }}
            >
              {/* White card with shadow */}
              <div
                className="absolute bg-white overflow-hidden"
                style={{
                  left: '15.83%', top: '11.52%', width: '68.43%', bottom: '5.95%',
                  boxShadow: '1px 3px 3px rgba(0,0,0,0.1), 0px 3px 8px rgba(0,0,0,0.1), 0px 0px 0.5px rgba(0,0,0,0.18)',
                }}
              >
                {/* Neurological artwork */}
                <div
                  className="absolute"
                  style={{ left: '1.03%', top: '1.77%', width: '101.4%', height: '96.7%' }}
                >
                  <img
                    alt="Neurological type study"
                    className="absolute inset-0 w-full h-full object-cover"
                    src={img6NuralogicalCopy403}
                  />
                </div>
                {/* image 533 typography overlay */}
                <div
                  className="absolute -translate-y-1/2"
                  style={{ left: '-16.49%', right: '-16.56%', top: 'calc(50% - 0.026%)' }}
                >
                  <img
                    alt="Typography system overlay"
                    className="w-full h-auto object-cover"
                    style={{ aspectRatio: '1727 / 2119' }}
                    src={imgImage533}
                  />
                </div>
              </div>
            </div>
            <HoverOverlay
              category="R&D"
              title="Neurological Study"
              description="Where cymatic patterns meet neural mapping — typography derived from the intersection of sound physics and biological form."
            />
          </div>
        </div>

      </div>
    </section>
  );
}