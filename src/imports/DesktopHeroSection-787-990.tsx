import svgPaths from "./svg-nylaa5zclz";
import imgHeroPreview1 from "figma:asset/0beeb78895074d785465fbec0b4aa8bceb8ade11.png";

function HeroPreview() {
  return (
    <div className="absolute h-[1080px] left-0 opacity-80 top-0 w-[831px]" data-name="HeroPreview1">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeroPreview1} />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[20px] left-0 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.15)] top-0 w-[61px]" data-name="Text">
      <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.6)] top-0 tracking-[2px]">03 — 10</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[20px] left-[297.19px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.15)] top-0 w-[119.813px]" data-name="Text1">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[12px] text-white top-0 tracking-[2px] uppercase">AAMP Rebrand</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[417px]" data-name="Container23">
      <Text />
      <Text1 />
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

function Container11() {
  return <div className="bg-white flex-[1_0_0] min-h-px min-w-px shadow-[0px_0px_10px_0px_rgba(255,255,255,0.5)] w-[176.297px]" data-name="Container26" />;
}

function Container10() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col h-[2px] items-start left-0 overflow-clip top-[52px] w-[417px]" data-name="Container25">
      <Container11 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[162px] left-[124px] top-[96px] w-[417px]" data-name="Container22">
      <Container8 />
      <IconArrow />
      <Container10 />
    </div>
  );
}

function ProjectProgressBar() {
  return (
    <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(0,0,0,0)] h-[354px] left-0 right-0 to-[rgba(0,0,0,0.9)] via-1/2 via-[rgba(0,0,0,0.5)]" data-name="ProjectProgressBar">
      <Container7 />
    </div>
  );
}

function HeroPreview1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.2)] h-[1080px] left-0 top-0 w-[831px]" data-name="HeroPreview2">
      <ProjectProgressBar />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[1080px] left-0 opacity-71 overflow-clip top-0 w-[831px]" data-name="Container19">
      <HeroPreview />
      <HeroPreview1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[1080px] overflow-clip relative shrink-0 w-full" data-name="Container18">
      <Container5 />
    </div>
  );
}

function CarouselContainer() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1080px] items-start left-[831px] overflow-clip top-0 w-[831px]" data-name="CarouselContainer">
      <Container4 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[65px] left-[124px] top-[450px] w-[583px]" data-name="Heading">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[65px] left-0 not-italic text-[52px] text-white top-0 tracking-[4px] uppercase">CARTER BENOÎT MYER</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#d1d5db] text-[18px] top-0 tracking-[0.1px] w-[442px] whitespace-pre-wrap">A selection of commissioned projects ranging from brand identity to digital experiences.</p>
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

function Container() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] border-solid h-[48px] left-0 rounded-[33554400px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.1)] top-0 w-[120px]" data-name="Container" />;
}

function Paragraph1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[71.109px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[18px] left-0 not-italic text-[12px] text-white top-0 tracking-[2px] uppercase">Contact</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-center left-0 pr-[0.016px] top-0 w-[120px]" data-name="Container">
      <Paragraph1 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[48px] left-[124px] top-[663px] w-[120px]" data-name="Paragraph11">
      <Container />
      <Container1 />
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] border-solid h-[48px] left-0 rounded-[33554400px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.1)] top-0 w-[140px]" data-name="Container" />;
}

function Paragraph2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[89.344px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[18px] left-0 not-italic text-[12px] text-white top-0 tracking-[2px] uppercase">View Work</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-center left-0 top-0 w-[140px]" data-name="Container">
      <Paragraph2 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[48px] left-[264px] top-[663px] w-[140px]" data-name="Paragraph12">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#0a0a0a] border-[rgba(255,255,255,0.1)] border-r border-solid h-[1080px] left-0 top-0 w-[831px]" data-name="Frame">
      <Heading />
      <Container6 />
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

export default function DesktopHeroSection() {
  return (
    <div className="relative size-full" data-name="DesktopHeroSection">
      <CarouselContainer />
      <Frame />
    </div>
  );
}