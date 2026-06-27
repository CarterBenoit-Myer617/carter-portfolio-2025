import imgImageAboutBackground from "figma:asset/021c349ac05dc4997129639d9ed8074d3c7a21b0.png";
import imgImageWorkBackground from "figma:asset/85b9a65b3c8fcf22247cc2856839c69e5bbc27aa.png";

function ImageStudioBackground() {
  return <div className="absolute h-[670px] left-0 opacity-60 top-0 w-[1013px]" data-name="Image (Studio Background)" />;
}

function Container() {
  return <div className="absolute bg-[rgba(0,0,0,0.4)] h-[670px] left-0 top-0 w-[1013px]" data-name="Container" />;
}

function LandingPage() {
  return (
    <div className="h-[670px] relative shrink-0 w-full" data-name="LandingPage">
      <ImageStudioBackground />
      <Container />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="[grid-area:1_/_1] h-[24px] relative shrink-0 w-[20.016px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1px] tracking-[1.29px]">01</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="[grid-area:2_/_1] h-[90px] relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-center justify-center relative">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[90px] not-italic relative shrink-0 text-[100px] text-nowrap text-white tracking-[7px] uppercase">STUDIO</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="[grid-area:3_/_1] relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[39px] not-italic relative shrink-0 text-[#d1d5db] text-[24px] tracking-[0.14px] w-[522px]">A selection of commissioned projects ranging from brand identity to digital experiences.</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="[grid-area:4_/_1] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative">
        <p className="font-['Arial:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] text-center text-nowrap tracking-[2px] uppercase">Show More</p>
      </div>
    </div>
  );
}

function LandingPage1() {
  return (
    <div className="absolute gap-[23px] grid-cols-[repeat(1,_fit-content(100%))] grid-rows-[repeat(4,_fit-content(100%))] inline-grid left-[247px] top-[197px]" data-name="LandingPage">
      <Paragraph />
      <Heading />
      <Paragraph1 />
      <Button />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute bg-[#111827] h-[672px] left-[96px] rounded-[10px] top-[96px] w-[1015px]" data-name="Section">
      <div className="content-stretch flex flex-col items-center justify-between overflow-clip p-px relative rounded-[inherit] size-full">
        <LandingPage />
        <LandingPage1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function ImageAboutBackground() {
  return (
    <div className="absolute h-[670px] left-0 opacity-60 top-0 w-[1013px]" data-name="Image (About Background)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageAboutBackground} />
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-[rgba(0,0,0,0.4)] h-[670px] left-0 top-0 w-[1013px]" data-name="Container" />;
}

function LandingPage2() {
  return (
    <div className="h-[670px] relative shrink-0 w-full" data-name="LandingPage">
      <ImageAboutBackground />
      <Container1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-end justify-center relative shrink-0 w-[21px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-right text-white tracking-[1.29px]">02</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="[grid-area:3_/_1] content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[39px] not-italic relative shrink-0 text-[#d1d5db] text-[24px] text-right tracking-[0.14px] w-[417px]">Schultzschultz is a design studio focusing on corporate design, type design and digital tool development.</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="[grid-area:4_/_1] content-stretch flex items-center justify-end relative shrink-0 w-[89px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] text-center text-nowrap tracking-[2px] uppercase">Read More</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="[grid-area:2_/_1] content-stretch flex flex-col h-[90px] items-end justify-center justify-self-stretch relative shrink-0" data-name="Heading 2">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[90px] not-italic relative shrink-0 text-[100px] text-nowrap text-right text-white tracking-[7px] uppercase">ABOUT</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="[grid-area:1_/_1] gap-[9px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[repeat(4,_fit-content(100%))] relative self-start shrink-0 w-[417px]">
      <Paragraph2 />
      <Paragraph3 />
      <Button1 />
      <Heading1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute gap-[23px] grid-cols-[repeat(1,_fit-content(100%))] grid-rows-[repeat(1,_fit-content(100%))] inline-grid left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Frame />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute bg-[#111827] h-[672px] left-[443px] rounded-[10px] top-[864px] w-[1015px]" data-name="Section">
      <div className="content-stretch flex flex-col items-center justify-between overflow-clip p-px relative rounded-[inherit] size-full">
        <LandingPage2 />
        <Frame1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function ImageWorkBackground() {
  return (
    <div className="absolute h-[670px] left-0 opacity-60 top-0 w-[1013px]" data-name="Image (Work Background)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWorkBackground} />
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-[rgba(0,0,0,0.4)] h-[670px] left-0 top-0 w-[1013px]" data-name="Container" />;
}

function LandingPage3() {
  return (
    <div className="h-[670px] relative shrink-0 w-full" data-name="LandingPage">
      <ImageWorkBackground />
      <Container2 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="[grid-area:1_/_1] relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[1.29px]">03</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="[grid-area:2_/_1] relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[90px] not-italic relative shrink-0 text-[100px] text-nowrap text-white tracking-[7px] uppercase">WORK</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="[grid-area:3_/_1] h-[117px] relative shrink-0 w-[509px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[39px] left-0 not-italic text-[#d1d5db] text-[24px] top-0 tracking-[0.14px] w-[347px]">A selection of commissioned projects ranging from brand identity to digital experiences.</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="[grid-area:4_/_1] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative">
        <p className="font-['Arial:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] text-center text-nowrap tracking-[2px] uppercase">Show More</p>
      </div>
    </div>
  );
}

function LandingPage4() {
  return (
    <div className="absolute gap-[23px] grid-cols-[repeat(1,_fit-content(100%))] grid-rows-[repeat(4,_fit-content(100%))] inline-grid left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="LandingPage">
      <Paragraph4 />
      <Heading2 />
      <Paragraph5 />
      <Button2 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute bg-[#111827] h-[672px] left-[96px] rounded-[10px] top-[1632px] w-[1015px]" data-name="Section">
      <div className="content-stretch flex flex-col items-center justify-between overflow-clip p-px relative rounded-[inherit] size-full">
        <LandingPage3 />
        <LandingPage4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

export default function ContainerUpdateAutoLatouForEachCard() {
  return (
    <div className="relative size-full" data-name="Container-update-auto latou for each card">
      <Section />
      <Section1 />
      <Section2 />
    </div>
  );
}