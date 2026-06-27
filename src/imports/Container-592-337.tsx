import imgImageAboutBackground from "figma:asset/021c349ac05dc4997129639d9ed8074d3c7a21b0.png";
import imgImageWorkBackground from "figma:asset/85b9a65b3c8fcf22247cc2856839c69e5bbc27aa.png";

function ImageStudioBackground() {
  return <div className="absolute h-[447.967px] left-0 opacity-60 top-0 w-[346.145px]" data-name="Image (Studio Background)" />;
}

function Container() {
  return <div className="bg-[rgba(0,0,0,0.4)] h-[447.967px] shrink-0 w-[346.145px]" data-name="Container" />;
}

function LandingPage() {
  return (
    <div className="absolute content-stretch flex flex-col h-[447.967px] items-center justify-center left-0 top-0 w-[346.145px]" data-name="LandingPage">
      <ImageStudioBackground />
      <Container />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="[grid-area:1_/_1] h-[23.998px] justify-self-stretch relative shrink-0" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.97px] tracking-[1.29px]">01</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="[grid-area:2_/_1] h-[54px] relative shrink-0 w-[249.93px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[54px] left-0 not-italic text-[60px] text-nowrap text-white top-[-0.12px] tracking-[4px] uppercase">STUDIO</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="[grid-area:3_/_1] h-[95.993px] justify-self-stretch relative shrink-0" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#d1d5db] text-[20px] top-[-1.01px] tracking-[0.14px] w-[262px]">A selection of commissioned projects ranging from brand identity to digital experiences.</p>
    </div>
  );
}

function Button() {
  return (
    <div className="[grid-area:4_/_1] h-[27.008px] relative shrink-0 w-[94.631px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.014px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[18px] left-[47.5px] not-italic text-[12px] text-[rgba(255,255,255,0.8)] text-center text-nowrap top-[-0.99px] tracking-[2px] translate-x-[-50%] uppercase">Show More</p>
    </div>
  );
}

function LandingPage1() {
  return (
    <div className="absolute gap-[37px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[repeat(4,_fit-content(100%))] left-[calc(50%-0.08px)] top-[calc(50%+0.43px)] translate-x-[-50%] translate-y-[-50%] w-[261.984px]" data-name="LandingPage">
      <Paragraph />
      <Paragraph1 />
      <Paragraph2 />
      <Button />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute bg-[#111827] border-[1.014px] border-[rgba(255,255,255,0.1)] border-solid h-[449.994px] left-[14.99px] overflow-clip rounded-[10px] top-[79.99px] w-[348.172px]" data-name="Section">
      <LandingPage />
      <LandingPage1 />
    </div>
  );
}

function ImageAboutBackground() {
  return (
    <div className="absolute h-[447.967px] left-0 opacity-60 top-0 w-[346.145px]" data-name="Image (About Background)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageAboutBackground} />
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-[rgba(0,0,0,0.4)] h-[447.967px] left-0 top-0 w-[346.145px]" data-name="Container" />;
}

function LandingPage2() {
  return (
    <div className="absolute h-[447.967px] left-0 top-0 w-[346.145px]" data-name="LandingPage">
      <ImageAboutBackground />
      <Container1 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center justify-end relative shrink-0" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[1.29px]">02</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="[grid-area:2_/_1] content-stretch flex items-center justify-end relative shrink-0" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[54px] not-italic relative shrink-0 text-[60px] text-nowrap text-white tracking-[4px] uppercase">ABOUT</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="[grid-area:3_/_1] content-stretch flex items-center justify-end relative shrink-0" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#d1d5db] text-[20px] text-right tracking-[0.14px] w-[262px]">A selection of commissioned projects ranging from brand identity to digital experiences.</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="[grid-area:4_/_1] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.014px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-px py-0 relative w-full">
          <p className="font-['Arial:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] text-center text-nowrap tracking-[2px] uppercase">Show More</p>
        </div>
      </div>
    </div>
  );
}

function LandingPage3() {
  return (
    <div className="absolute gap-[37px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[repeat(4,_fit-content(100%))] left-[calc(50%-0.08px)] top-[calc(50%-0.06px)] translate-x-[-50%] translate-y-[-50%] w-[261.984px]" data-name="LandingPage">
      <Paragraph3 />
      <Paragraph4 />
      <Paragraph5 />
      <Button1 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute bg-[#111827] border-[1.014px] border-[rgba(255,255,255,0.1)] border-solid h-[449.994px] left-[14.99px] overflow-clip rounded-[10px] top-[541.98px] w-[348.172px]" data-name="Section">
      <LandingPage2 />
      <LandingPage3 />
    </div>
  );
}

function ImageWorkBackground() {
  return (
    <div className="absolute h-[447.967px] left-0 opacity-60 top-0 w-[346.145px]" data-name="Image (Work Background)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWorkBackground} />
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-[rgba(0,0,0,0.4)] h-[447.967px] left-0 top-0 w-[346.145px]" data-name="Container" />;
}

function Paragraph6() {
  return (
    <div className="[grid-area:1_/_1] h-[23.998px] justify-self-stretch relative shrink-0" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.97px] tracking-[1.29px]">03</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="[grid-area:2_/_1] h-[54px] relative shrink-0 w-[249.93px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[54px] left-0 not-italic text-[60px] text-nowrap text-white top-[-0.12px] tracking-[4px] uppercase">STUDIO</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="[grid-area:3_/_1] h-[95.993px] justify-self-stretch relative shrink-0" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#d1d5db] text-[20px] top-[-1.01px] tracking-[0.14px] w-[262px]">A selection of commissioned projects ranging from brand identity to digital experiences.</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="[grid-area:4_/_1] h-[27.008px] relative shrink-0 w-[94.631px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.014px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[18px] left-[47.5px] not-italic text-[12px] text-[rgba(255,255,255,0.8)] text-center text-nowrap top-[-0.99px] tracking-[2px] translate-x-[-50%] uppercase">Show More</p>
    </div>
  );
}

function LandingPage4() {
  return (
    <div className="absolute gap-[37px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[repeat(4,_fit-content(100%))] left-[calc(50%-0.06px)] top-[calc(50%+0.47px)] translate-x-[-50%] translate-y-[-50%] w-[261.984px]" data-name="LandingPage">
      <Paragraph6 />
      <Paragraph7 />
      <Paragraph8 />
      <Button2 />
    </div>
  );
}

function LandingPage5() {
  return (
    <div className="absolute h-[447.967px] left-[15.99px] top-[1004.96px] w-[346.145px]" data-name="LandingPage">
      <ImageWorkBackground />
      <Container2 />
      <LandingPage4 />
    </div>
  );
}

export default function Container3() {
  return (
    <div className="relative size-full" data-name="Container">
      <Section />
      <Section1 />
      <LandingPage5 />
    </div>
  );
}