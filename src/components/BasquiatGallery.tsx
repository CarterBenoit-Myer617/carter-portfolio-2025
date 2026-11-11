import React, { useRef, useEffect } from 'react';
import svgPaths from "../imports/svg-6a5u4vu6wv";

// ═══ All Figma assets for BASQUIAT Catalogue ═══
// Row 1 (full-width — exhibition gallery overview)
import imgSafeVideo from "figma:asset/429b1dbebda44b2ef7d6b27ea3899519a3e40315.png";
import imgImage540 from "figma:asset/780d2cd4f4286c54b89e4b025c420dee3c9a68fa.png";
// Row 2 (split 30/70 — red Basquiat sketches | black catalogue cover)
import imgImage from "figma:asset/403568e419d8a3a0e5f8248e6321a66f57ec7fbd.png";
import imgBasquiat01 from "figma:asset/9a07ecdd6d1d6a5615a34a939a42072d08558216.png";
import imgImg9627 from "figma:asset/50b9eecfa882785ead34cc059818c83c0a3dcf37.png";
import imgImage1 from "figma:asset/fae7248ce6a6a31426da9942dbe18cb1ebbe612e.png";
import imgCoverFrame06 from "figma:asset/d916d2391338a9cc7fdc9b2c2502c43d5d74d68b.png";
import imgImage541 from "figma:asset/84f4d564c1126a9dab450d6963da3a05d2a1a767.png";
// Row 3 (full-width — catalogue spread)
import imgImage539 from "figma:asset/f863c80d6a8e6dca1ea4781ddc4f9b8d142f1ca1.png";
// Row 4 (split 60/40 — back side cover | red Basquiat art)
import imgImage2 from "figma:asset/10cf7c4806884b8abcc74b02dfcc2116ba65b9d2.png";
import imgBasquiatBackSide1 from "figma:asset/04c453de7f178b8aaa6c5934d5b726e4515b69f3.png";
import imgImage3 from "figma:asset/3bf07a0812142dc9dc4034970bc48744dfcd262c.png";
import imgBasquiat1 from "figma:asset/b37cbbf57925bfddc8f76a301348a26cf2186240.png";
// Row 5 (full-width — Carter Benoit exhibition display)
import imgCarterBenoit2 from "figma:asset/0fcac5110e733ab89fbc05dbbe220f841f3a63f3.png";
// Row 6 (split 30/70 — editorial pages | exhibition spread)
import imgImage4 from "figma:asset/1caccb05360a7ab8e35a0b4d568ee9b48cc178f4.png";
import imgImage72 from "figma:asset/765831e5ec3bd885ed7f3e9f18d403908ec7cfa6.png";
import imgImg202211041921458321 from "figma:asset/f006f9bf9b928a32ac21199cf33db629eb38b093.png";
import imgImage24 from "figma:asset/cc249772823d05b430327e4684f1bce071662e45.png";
import imgImage73 from "figma:asset/97ae8822724bc8cae6f827d0e40abf83860455f9.png";
import imgImage543 from "figma:asset/d16e8ef1334ce4fd1ec85fcb675338f633146b57.png";
import imgImage5 from "figma:asset/7bf41b0b4acfa67d1383ca1f52c943e84e2d1a7b.png";
import imgImage542 from "figma:asset/e2e896007dcf388ec0c65e6c9357c5e20a851316.png";

// Hover overlay — identical pattern to other galleries
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

// Basquiat handwritten biography SVG (full text block — rotated in Figma)
const BasquiatBioSVG = () => (
  <svg className="absolute block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 167.462 146.455">
    <g>
      {[
        svgPaths.p1d3a9600, svgPaths.p37d08032, svgPaths.p2cc2fb80, svgPaths.p2986c300,
        svgPaths.p2c292580, svgPaths.p38b03380, svgPaths.pc8ea580, svgPaths.p3bb1e80,
        svgPaths.p3efe6260, svgPaths.pe5ee400, svgPaths.p29153a00, svgPaths.p2e2d8900,
        svgPaths.p25503480, svgPaths.p2c704700, svgPaths.p33277100, svgPaths.p3c7f0f80,
        svgPaths.pea16500, svgPaths.p1c485d00, svgPaths.p1efab980, svgPaths.p9536d80,
        svgPaths.p3ec46bf0, svgPaths.p345b2880, svgPaths.p33729480, svgPaths.pf5d100,
        svgPaths.p93d6300, svgPaths.pccb0f00, svgPaths.p43e372, svgPaths.p21923b00,
        svgPaths.p3c4c0c70, svgPaths.p6e96900, svgPaths.p3bbf6b80, svgPaths.p27b12600,
        svgPaths.p270c1a00, svgPaths.pc6ae280, svgPaths.p37f02f00, svgPaths.p82a9db0,
        svgPaths.pbce8500, svgPaths.p11a64100, svgPaths.p19d63700, svgPaths.pb0dca00,
        svgPaths.p15da8b80, svgPaths.p18d21e80, svgPaths.p23fd3600, svgPaths.p4b5d200,
        svgPaths.p303fe800, svgPaths.p37fbc900, svgPaths.p7e09100, svgPaths.p1d144700,
        svgPaths.p3bc9fe00, svgPaths.p19bb15c0, svgPaths.p2b25af00, svgPaths.p3df1c1f0,
        svgPaths.pfaa25f0, svgPaths.p286f9200, svgPaths.p1c287880, svgPaths.p8678200,
        svgPaths.p2442d5c0, svgPaths.p35c22800, svgPaths.p35e36200, svgPaths.p267bbe00,
        svgPaths.p13077900, svgPaths.p3d54e00, svgPaths.p1f050000, svgPaths.p30401480,
        svgPaths.p3559f270, svgPaths.p1fcde480, svgPaths.p1779a700, svgPaths.p1fc38280,
        svgPaths.pd6d8a80, svgPaths.p2868a700, svgPaths.p3aefbb00, svgPaths.p1727e300,
        svgPaths.p1d79bd00, svgPaths.p11f8ad00, svgPaths.p5585800, svgPaths.p13fb4500,
        svgPaths.p17048280, svgPaths.p561e700, svgPaths.p273b1d80, svgPaths.p1c9a7d00,
        svgPaths.p1cb66d00, svgPaths.p6283a80, svgPaths.p12d49371, svgPaths.p2b10b500,
        svgPaths.p53edff0, svgPaths.p2e3a2d00, svgPaths.p1c89080, svgPaths.pf167df0,
        svgPaths.p2f8c9780, svgPaths.p17a01580, svgPaths.p10be4700, svgPaths.p1dcf0400,
        svgPaths.p37b8f580, svgPaths.p123ade00, svgPaths.p155a4c00, svgPaths.p1928c870,
        svgPaths.p280f8f00, svgPaths.p326f9880, svgPaths.p111a9a80, svgPaths.pd0b0800,
        svgPaths.p2920fd00, svgPaths.p1a102480, svgPaths.p29813800, svgPaths.p29561e00,
        svgPaths.pd26b00, svgPaths.p2b820700, svgPaths.p1fe1a9f2, svgPaths.p2fb24380,
        svgPaths.p32d79600, svgPaths.p2a196140, svgPaths.p1b7dff00, svgPaths.p14af4a00,
        svgPaths.pfc6b600, svgPaths.p46a5a00, svgPaths.p2ae18f80, svgPaths.p32f67700,
        svgPaths.p27807520, svgPaths.p3e157900, svgPaths.pd97c3f0, svgPaths.p9f8b100,
        svgPaths.p1e1e5d00, svgPaths.p5556fc0, svgPaths.p62d6580, svgPaths.p226b3c80,
        svgPaths.p3f5ced70, svgPaths.p25bd1680, svgPaths.p2f6d0900, svgPaths.p22243000,
        svgPaths.p114a2180, svgPaths.p23e09c70, svgPaths.p2d52b100, svgPaths.p3da7c200,
        svgPaths.p1bda7bc0, svgPaths.pe07c900, svgPaths.p18c99700, svgPaths.p3c5db800,
        svgPaths.p87c4a60, svgPaths.p2f835e00, svgPaths.p1751f380, svgPaths.p38be7b00,
        svgPaths.pbeefd00, svgPaths.p14c20380, svgPaths.p2a720400, svgPaths.p1fe13280,
        svgPaths.p36535540, svgPaths.p34f4e900, svgPaths.p3bb49600, svgPaths.p31ffe900,
        svgPaths.p4800600, svgPaths.p31d74e00, svgPaths.p22f6a480, svgPaths.p3482da00,
        svgPaths.p25ff9c00, svgPaths.p2db38c00, svgPaths.pc079500, svgPaths.p1d535000,
        svgPaths.p23fb9a00, svgPaths.p23210d00, svgPaths.p8ddd880, svgPaths.p2cd1b580,
        svgPaths.p38e05900, svgPaths.p19161080, svgPaths.p2692c080, svgPaths.p245d2700,
        svgPaths.p161f1300, svgPaths.p27cf0f80, svgPaths.p285ee680, svgPaths.pa990480,
        svgPaths.p17f9e200, svgPaths.p101fe400, svgPaths.p3a915f80, svgPaths.p1b69a300,
        svgPaths.p3de2b940, svgPaths.p1bc9f580, svgPaths.p1f111130, svgPaths.p3c81ac00,
        svgPaths.p10f99c00, svgPaths.p20fc5f80, svgPaths.p3c0d8800, svgPaths.p193bca00,
        svgPaths.p3b489080, svgPaths.p686c480, svgPaths.p7214000, svgPaths.p113b2500,
        svgPaths.p341a8d00, svgPaths.pc4bd170, svgPaths.p1262da80, svgPaths.pe45280,
        svgPaths.p16029880, svgPaths.p39390400, svgPaths.p1c34bf80, svgPaths.p3a9d8d00,
        svgPaths.p5607680, svgPaths.p18266eb0, svgPaths.p6acec40, svgPaths.p253fb000,
        svgPaths.p6655ec0, svgPaths.p677d480, svgPaths.p35103800, svgPaths.p1d3b9400,
        svgPaths.pe7f6080, svgPaths.p337b5f00, svgPaths.p33260e00, svgPaths.p2583b900,
        svgPaths.pbca5500, svgPaths.p33e2eb00, svgPaths.p2e044c00, svgPaths.p2ac9f400,
        svgPaths.p16e24600, svgPaths.p28404ec0, svgPaths.p32652e00, svgPaths.p2fa09600,
        svgPaths.p33524a00, svgPaths.p18066a00, svgPaths.p392f9c00, svgPaths.p2e52f200,
        svgPaths.p76ab080, svgPaths.p3fac6300, svgPaths.pd4a6680, svgPaths.p37bbff00,
        svgPaths.p247483a0, svgPaths.p26fb7b80, svgPaths.p33377400, svgPaths.p6127900,
        svgPaths.p2b43d200, svgPaths.p124ffa00, svgPaths.p3b6b42e0, svgPaths.p3b938580,
      ].map((d, i) => (
        <path key={i} d={d} fill="black" />
      ))}
    </g>
  </svg>
);

// Individual SVG vector icons from A4-2 page (Basquiat-style marks)
const BasquiatVectors = () => {
  const vectors = [
    { viewBox: "0 0 93.9378 227.461", d: svgPaths.p146ff880, style: { left: '8.07%', top: '14.25%', width: '38.23%', height: '85.75%' }, rotate: 90 },
    { viewBox: "0 0 28.5204 48.2168", d: svgPaths.pa444300, style: { left: '46.4%', top: '15.84%', width: '8.11%', height: '19.22%' }, rotate: 90 },
    { viewBox: "0 0 14.853 63.4301", d: svgPaths.p25b293f2, style: { left: '43.44%', top: '14.39%', width: '10.66%', height: '14.39%' }, rotate: 90 },
    { viewBox: "0 0 20.297 11.1319", d: svgPaths.p3751ff00, style: { left: '35.5%', top: '12.85%', width: '1.87%', height: '15.26%' }, rotate: 90 },
    { viewBox: "0 0 8.64496 15.3366", d: svgPaths.pc122a00, style: { left: '57.58%', top: '19.39%', width: '2.57%', height: '3.03%' }, rotate: 90 },
    { viewBox: "0 0 10.8643 10.4298", d: svgPaths.p28744d00, style: { left: '57.68%', top: '29.45%', width: '1.76%', height: '1.29%' }, rotate: 90 },
    { viewBox: "0 0 8.66135 10.6101", d: svgPaths.p29634780, style: { left: '58%', top: '20.9%', width: '1.78%', height: '1.03%' }, rotate: 90 },
    { viewBox: "0 0 8.65394 8.71948", d: svgPaths.p249116c0, style: { left: '37.91%', top: '22.69%', width: '1.29%', height: '1.02%' }, rotate: 90 },
  ];

  return (
    <>
      {vectors.map((v, i) => (
        <div
          key={i}
          className="absolute flex items-center justify-center"
          style={{ left: v.style.left, top: v.style.top, width: v.style.width, height: v.style.height }}
        >
          <div className="flex-none" style={{ transform: `rotate(${v.rotate}deg)` }}>
            <svg className="block" fill="none" viewBox={v.viewBox} style={{ width: '100%', height: '100%' }}>
              <path d={v.d} fill="black" />
            </svg>
          </div>
        </div>
      ))}
    </>
  );
};

export function BasquiatGallery() {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-0 w-full">

        {/* ═══ ROW 1: Full-width SafeVideo — Exhibition gallery overview ═══ */}
        <div className="group relative w-full bg-[#121212] overflow-hidden" style={{ aspectRatio: '1339 / 867' }}>
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgSafeVideo} />
          {/* image540: centered vertically, full width, aspect 2678/1734 */}
          <div
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2"
            style={{ aspectRatio: '2678 / 1734' }}
          >
            <img alt="Basquiat exhibition gallery" className="absolute inset-0 w-full h-full object-cover" src={imgImage540} />
          </div>
          <HoverOverlay
            category="Publication"
            title="Exhibition Overview"
            description="An anthropological study of Double Consciousness in layout — the BASQUIAT catalogue displayed in its gallery context."
          />
        </div>

        {/* ═══ ROW 2: Split 30/70 — Red Basquiat sketches | Black catalogue cover ═══ */}
        <div className="flex flex-col md:flex-row w-full" style={{ aspectRatio: '1339 / 1059' }}>

          {/* Left ~30% (401.695/1339): Red bg with BASQUIAT_01 + IMG_9627 */}
          <div className="group relative w-full md:w-[30%] bg-[#121212] overflow-hidden aspect-[3/4] md:aspect-auto">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage} />
            {/* Red overlay: inset(0.3px 0 -0.3px -30px) → bleeds left by ~7.5% */}
            <div
              className="absolute bg-[#93230c] overflow-hidden"
              style={{ top: '0.03%', right: '0', bottom: '-0.03%', left: '-7.47%' }}
            >
              {/* BASQUIAT_01 drawing — massive, mostly cropped */}
              <div className="absolute" style={{ left: '-317.3%', top: '-26.9%', width: '576.2%', height: '185.3%' }}>
                <img alt="Basquiat sketch" className="absolute inset-0 w-full h-full object-cover" src={imgBasquiat01} />
              </div>
              {/* Inner red panel with IMG_9627: left=-72, top=0, bottom=0, w=575.594 */}
              <div
                className="absolute bg-[#93230c] overflow-hidden"
                style={{ left: '-16.7%', top: '0', bottom: '0', width: '133.4%' }}
              >
                <div className="absolute" style={{ left: '-27.3%', top: '-2.93%', width: '143.5%', height: '106%' }}>
                  <img alt="Catalogue pages" className="absolute inset-0 w-full h-full object-cover" src={imgImg9627} />
                </div>
              </div>
            </div>
            <HoverOverlay
              category="Process"
              title="Source Material"
              description="Original Basquiat sketches and reference material — the raw visual DNA informing the catalogue's editorial direction."
            />
          </div>

          {/* Right ~70% (937.297/1339): Black bg with cover frame + catalogue image */}
          <div className="group relative w-full md:w-[70%] bg-[#121212] overflow-hidden aspect-square md:aspect-auto">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage1} />
            {/* Black overlay: inset(21.3px -62.01px -0.01px -62.7px) */}
            <div
              className="absolute bg-black overflow-hidden"
              style={{ top: '2.01%', right: '-6.61%', bottom: '0', left: '-6.69%' }}
            >
              {/* COVER_FRAME_06: centered vertically, fills width + 9px bleed right */}
              <div
                className="absolute left-0 top-1/2 overflow-hidden"
                style={{ right: '-0.85%', aspectRatio: '1071 / 1055', transform: 'translateY(calc(-50% - 0.82%))' }}
              >
                <img
                  alt="Catalogue cover frame"
                  className="absolute object-cover"
                  style={{ left: '-7%', top: '-6.07%', width: '107%', height: '108.63%', maxWidth: 'none' }}
                  src={imgCoverFrame06}
                />
              </div>
              {/* image541: 1:1 square, centered, 14px inset top/bottom */}
              <div
                className="absolute left-1/2 -translate-x-1/2"
                style={{ top: '1.35%', bottom: '1.35%', aspectRatio: '1 / 1' }}
              >
                <img alt="BASQUIAT catalogue cover" className="absolute inset-0 w-full h-full object-cover" src={imgImage541} />
              </div>
            </div>
            <HoverOverlay
              category="Design"
              title="Catalogue Cover"
              description="The BASQUIAT catalogue cover — a deliberate collision of neo-expressionist raw energy with editorial restraint."
            />
          </div>
        </div>

        {/* ═══ ROW 3: Full-width SafeVideo — Catalogue interior spread ═══ */}
        <div className="group relative w-full bg-[#121212] overflow-hidden" style={{ aspectRatio: '1339 / 867' }}>
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgSafeVideo} />
          {/* image539: centered vertically, aspect 1684/1190 */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2"
            style={{ left: '0.07%', aspectRatio: '1684 / 1190' }}
          >
            <img alt="Basquiat catalogue spread" className="absolute inset-0 w-full h-full object-cover" src={imgImage539} />
          </div>
          <HoverOverlay
            category="Editorial"
            title="Interior Spreads"
            description="Double consciousness in layout — text and image occupy equal space, each contesting the other's authority across the gutter."
          />
        </div>

        {/* ═══ ROW 4: Split 60/40 — Back side cover | Red Basquiat art ═══ */}
        <div className="flex flex-col md:flex-row w-full" style={{ aspectRatio: '1339 / 1059' }}>

          {/* Left ~60% (803.398/1339): basquiatBackSide1 centered */}
          <div className="group relative w-full md:w-[60%] bg-[#121212] overflow-hidden aspect-[3/4] md:aspect-auto">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage2} />
            {/* basquiatBackSide1: centered, top=11.07%, bottom=11.14%, aspect 1080/1152 */}
            <div
              className="absolute left-1/2 -translate-x-1/2"
              style={{ top: '11.07%', bottom: '11.14%', aspectRatio: '1080 / 1152.31', transform: 'translateX(calc(-50% + 0.04%))' }}
            >
              <img alt="Basquiat catalogue back cover" className="absolute inset-0 w-full h-full object-cover" src={imgBasquiatBackSide1} />
            </div>
            <HoverOverlay
              category="Print"
              title="Back Cover"
              description="The reverse side as a continuation of the narrative — not an afterthought but an integral surface for the visual argument."
            />
          </div>

          {/* Right ~40% (535.594/1339): Red bg with Basquiat art */}
          <div className="group relative w-full md:w-[40%] bg-[#121212] overflow-hidden aspect-[3/4] md:aspect-auto">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage3} />
            {/* Red overlay: inset(0.31px -20.6px -0.31px -19.4px) */}
            <div
              className="absolute bg-[#93230c] overflow-hidden"
              style={{ top: '0.03%', right: '-3.85%', bottom: '-0.03%', left: '-3.62%' }}
            >
              {/* basquiat1: left=-15.59, top=0.22, w=605.904, h=1059 */}
              <div className="absolute" style={{ left: '-2.71%', top: '0.02%', width: '105.27%', height: '100%' }}>
                <img alt="Basquiat art prints" className="absolute inset-0 w-full h-full object-cover" src={imgBasquiat1} />
              </div>
            </div>
            <HoverOverlay
              category="Art Direction"
              title="Visual Language"
              description="Basquiat's crown motif and neo-expressionist gesture — translated into a contemporary editorial system without domesticating the original energy."
            />
          </div>
        </div>

        {/* ═══ ROW 5: Full-width SafeVideo — Carter Benoit exhibition ═══ */}
        <div className="group relative w-full bg-[#121212] overflow-hidden" style={{ aspectRatio: '1339 / 867' }}>
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgSafeVideo} />
          {/* CARTER BENOIT 2: inset(-46.98px -51px -47.32px -50px) → bleeds all edges */}
          <div
            className="absolute overflow-hidden"
            style={{ top: '-5.42%', right: '-3.81%', bottom: '-5.46%', left: '-3.73%' }}
          >
            <img alt="Exhibition display" className="absolute inset-0 w-full h-full object-cover" src={imgCarterBenoit2} />
          </div>
          <HoverOverlay
            category="Exhibition"
            title="Gallery Installation"
            description="The catalogue in situ — how the printed artifact functions within the larger exhibition ecosystem and gallery environment."
          />
        </div>

        {/* ═══ ROW 6: Split 30/70 — Complex editorial pages | Exhibition spread ═══ */}
        <div className="flex flex-col md:flex-row w-full" style={{ aspectRatio: '1339 / 1059' }}>

          {/* Left ~30% (401.695/1339): Red bg with A4 pages, SVG handwriting, image73, image543 */}
          <div className="group relative w-full md:w-[30%] bg-[#121212] overflow-hidden aspect-[3/4] md:aspect-auto">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage4} />
            {/* Red overlay: inset(0.32px -30px -0.32px 0) → bleeds right by ~7.5% */}
            <div
              className="absolute bg-[#93230c] overflow-hidden"
              style={{ top: '0.03%', right: '-7.47%', bottom: '-0.03%', left: '0' }}
            >
              {/* White A4-8 page (partially visible from left) */}
              <div
                className="absolute bg-white"
                style={{ left: '-13.83%', top: '43.87%', width: '137.87%', height: '79.49%' }}
              />

              {/* image72 — Basquiat reference on page (partially visible) */}
              <div
                className="absolute"
                style={{ left: '-190.34%', top: '47.93%', width: '158.04%', height: '47.86%' }}
              >
                <img alt="Basquiat reference" className="absolute inset-0 w-full h-full object-cover" src={imgImage72} />
              </div>

              {/* Rotated A4-2 page with photo + handwriting SVGs */}
              <div
                className="absolute flex items-center justify-center"
                style={{ left: '-13.83%', top: '43.77%', width: '195.11%', height: '56.17%' }}
              >
                <div className="-rotate-90 flex-none">
                  <div className="bg-white relative overflow-hidden" style={{ width: '595px', height: '842px' }}>
                    {/* Rotated portrait photo inside A4-2 */}
                    <div
                      className="absolute flex items-center justify-center"
                      style={{ left: '-0.59%', top: '34.68%', width: '100.5%', height: '40.5%' }}
                    >
                      <div className="flex-none rotate-90" style={{ width: '341px', height: '598px' }}>
                        <img alt="Exhibition photo" className="absolute block w-full h-full object-cover" src={imgImg202211041921458321} />
                      </div>
                    </div>
                    {/* Basquiat biography handwritten SVG text */}
                    <div
                      className="absolute flex items-center justify-center"
                      style={{ left: '-16.55%', top: '-78.38%', width: '28.15%', height: '19.89%' }}
                    >
                      <div className="flex-none rotate-90" style={{ width: '167.462px', height: '146.455px' }}>
                        <BasquiatBioSVG />
                      </div>
                    </div>
                    <div
                      className="absolute flex items-center justify-center"
                      style={{ left: '10.26%', top: '11.87%', width: '28.15%', height: '19.89%' }}
                    >
                      <div className="flex-none rotate-90" style={{ width: '167.462px', height: '146.455px' }}>
                        <BasquiatBioSVG />
                      </div>
                    </div>
                    {/* Small Basquiat-style vector marks */}
                    <BasquiatVectors />
                    {/* image24 — small reference photo */}
                    <div
                      className="absolute flex items-center justify-center"
                      style={{ left: '-391.42%', top: '-252.14%', width: '39.16%', height: '33.97%' }}
                    >
                      <div className="flex-none rotate-90" style={{ width: '286px', height: '233px' }}>
                        <img alt="Reference image" className="absolute block w-full h-full object-cover" src={imgImage24} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* image73 — catalogue spread pages overlay (upper portion) */}
              <div
                className="absolute"
                style={{ left: '-50.44%', top: '-0.14%', width: '152.7%', height: '43.97%' }}
              >
                <img alt="Editorial pages" className="absolute inset-0 w-full h-full object-cover" src={imgImage73} />
              </div>

              {/* image543 — magazine spine (centered vertically) */}
              <div
                className="absolute left-1/2 -translate-x-1/2"
                style={{ top: '-0.19%', bottom: '0.17%', aspectRatio: '864 / 2119', transform: 'translateX(calc(-50% + 2.12%))' }}
              >
                <img alt="Catalogue spine" className="absolute inset-0 w-full h-full object-cover" src={imgImage543} />
              </div>
            </div>
            <HoverOverlay
              category="Grid Systems"
              title="Editorial Architecture"
              description="Basquiat-inspired handwritten annotations and modular grid — the catalogue's internal logic made visible."
            />
          </div>

          {/* Right ~70% (937.297/1339): image542 exhibition spread */}
          <div className="group relative w-full md:w-[70%] bg-[#121212] overflow-hidden aspect-square md:aspect-auto">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage5} />
            {/* image542: aspect 1727/2119, bleeds top/bottom/left */}
            <div
              className="absolute"
              style={{ left: '-2.21%', top: '-6.61%', bottom: '-6.61%', aspectRatio: '1727 / 2119' }}
            >
              <img alt="BASQUIAT exhibition spread" className="absolute inset-0 w-full h-full object-cover" src={imgImage542} />
            </div>
            <HoverOverlay
              category="Typography"
              title="Eroica Series"
              description="Bold typographic compositions — the intersection of Basquiat's textual practice with contemporary editorial grid systems."
            />
          </div>
        </div>

      </div>
    </section>
  );
}
