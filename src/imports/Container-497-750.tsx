import imgImageWorkBackground from "figma:asset/85b9a65b3c8fcf22247cc2856839c69e5bbc27aa.png";
import imgImageAboutBackground from "figma:asset/021c349ac05dc4997129639d9ed8074d3c7a21b0.png";

function ImageWorkBackground() {
  return (
    <div className="h-[710px] opacity-60 relative shrink-0 w-[1073px]" data-name="Image (Work Background)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWorkBackground} />
    </div>
  );
}

function Container() {
  return <div className="bg-[rgba(0,0,0,0.4)] h-[710px] shrink-0 w-[1073px]" data-name="Container" />;
}

function LandingPage() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[1073px]" data-name="LandingPage">
      <ImageWorkBackground />
      <Container />
    </div>
  );
}

function Container1() {
  return <div className="absolute left-0 size-0 top-0" data-name="Container" />;
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col h-[90px] items-center justify-center relative shrink-0" data-name="Heading 2">
      <p className="font-['Arial:Regular',sans-serif] leading-[90px] not-italic relative shrink-0 text-[100px] text-nowrap text-white tracking-[7px] uppercase">WORK</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="font-['Arial:Regular',sans-serif] leading-[39px] not-italic relative shrink-0 text-[24px] text-white tracking-[0.14px] w-[509px]">A selection of commissioned projects ranging from brand identity to digital experiences.</p>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-center p-px relative shrink-0 w-[221px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[3.65px] uppercase">SHOW MORE</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col h-[256px] items-start justify-between relative shrink-0 w-full">
      <Heading />
      <Frame1 />
      <Button />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col h-[296px] items-start justify-between relative shrink-0 w-full">
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[1.29px]">01</p>
      <Frame6 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col h-[296px] items-start justify-between relative shrink-0 w-[509px]">
      <Frame4 />
    </div>
  );
}

function LandingPage1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-between left-[217px] size-0 top-[186px]" data-name="LandingPage">
      <Container1 />
      <Frame2 />
    </div>
  );
}

function Section() {
  return (
    <div className="[grid-area:1_/_1] bg-[#18181b] content-stretch flex flex-col h-[672px] items-center justify-between overflow-clip relative rounded-[10px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-[1015px]" data-name="Section">
      <LandingPage />
      <LandingPage1 />
    </div>
  );
}

function ImageAboutBackground() {
  return (
    <div className="h-[709px] opacity-60 relative shrink-0 w-[1073px]" data-name="Image (About Background)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageAboutBackground} />
    </div>
  );
}

function Container2() {
  return <div className="bg-[rgba(0,0,0,0.4)] h-[709px] shrink-0 w-[1073px]" data-name="Container" />;
}

function LandingPage2() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col h-[1449px] items-start relative shrink-0 w-[1017px]" data-name="LandingPage">
      <ImageAboutBackground />
      <Container2 />
    </div>
  );
}

function Container3() {
  return <div className="absolute left-[839px] size-0 top-[167px]" data-name="Container" />;
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex flex-col h-[46px] items-center justify-center left-[432px] opacity-70 px-0 py-[8px] top-0" data-name="Paragraph">
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-right text-white tracking-[1.29px]">02</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[112px] items-center justify-center left-[79px] px-0 py-[11px] top-[46px]" data-name="Heading 2">
      <p className="font-['Arial:Regular',sans-serif] leading-[90px] not-italic relative shrink-0 text-[100px] text-nowrap text-right text-white tracking-[7px] uppercase">ABOUT</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[139px] items-center justify-center left-0 px-0 py-[11px] top-[158px]">
      <p className="font-['Arial:Regular',sans-serif] leading-[39px] not-italic relative shrink-0 text-[24px] text-right text-white tracking-[0.14px] w-[452px]">Schultzschultz is a design studio focusing on corporate design, type design and digital tool development.</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[56px] items-center justify-center left-[237px] px-px py-[12px] top-[297px] w-[215px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[3.65px] uppercase">READ MORE</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute grid-rows-[353px] inline-grid left-[377px] top-[127px]">
      <Paragraph />
      <Heading1 />
      <Frame3 />
      <Button1 />
    </div>
  );
}

function Section1() {
  return (
    <div className="[grid-area:2_/_1] bg-[#18181b] grid-cols-[repeat(1,_fit-content(100%))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[671px] inline-grid overflow-clip relative rounded-[10px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0" data-name="Section">
      <LandingPage2 />
      {[...Array(4).keys()].map((_, i) => (
        <Container3 key={i} />
      ))}
      <Frame9 />
    </div>
  );
}

function Container4() {
  return <div className="bg-[rgba(0,0,0,0.4)] h-[682px] shrink-0 w-[1015px]" data-name="Container" />;
}

function LandingPage3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="LandingPage">
      <Container4 />
    </div>
  );
}

function Paragraph1() {
  return <div className="h-[24px] opacity-70 shrink-0 w-[20px]" data-name="Paragraph" />;
}

function Button2() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-center p-px relative shrink-0 w-[221px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[3.65px] uppercase">SHOW MORE</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col h-[296px] items-start justify-between relative shrink-0">
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[1.29px]">03</p>
      <p className="font-['Arial:Regular',sans-serif] leading-[90px] not-italic relative shrink-0 text-[100px] text-nowrap text-white tracking-[7px] uppercase">STUDIO</p>
      <p className="font-['Arial:Regular',sans-serif] leading-[39px] not-italic relative shrink-0 text-[24px] text-white tracking-[0.14px] w-[602px]">A selection of commissioned projects ranging from brand identity to digital experiences.</p>
      <Button2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Paragraph1 />
      <Frame8 />
    </div>
  );
}

function Frame() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col h-[336px] items-start justify-between relative shrink-0">
      <Frame7 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[336px] left-[206px] top-[173px] w-[602px]">
      <Frame />
    </div>
  );
}

function Section2() {
  return (
    <div className="[grid-area:3_/_1] bg-[#18181b] content-stretch flex flex-col h-[682px] items-start justify-between overflow-clip relative rounded-[10px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0" data-name="Section">
      <LandingPage3 />
      <Frame5 />
    </div>
  );
}

export default function Container5() {
  return (
    <div className="bg-[#01001c] relative size-full" data-name="Container">
      <div className="size-full">
        <div className="gap-[96px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[repeat(3,_fit-content(100%))] pl-[125px] pr-[96px] py-[96px] relative size-full">
          <Section />
          <Section1 />
          <Section2 />
        </div>
      </div>
    </div>
  );
}