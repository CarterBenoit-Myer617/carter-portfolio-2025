import imgImageWorkBackground from "figma:asset/85b9a65b3c8fcf22247cc2856839c69e5bbc27aa.png";
import imgImageAboutBackground from "figma:asset/021c349ac05dc4997129639d9ed8074d3c7a21b0.png";

function ImageWorkBackground() {
  return (
    <div className="absolute h-[447.967px] left-0 opacity-60 top-0 w-[327.896px]" data-name="Image (Work Background)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWorkBackground} />
    </div>
  );
}

function Container() {
  return <div className="absolute bg-[rgba(0,0,0,0.4)] h-[447.967px] left-0 top-0 w-[327.896px]" data-name="Container" />;
}

function LandingPage() {
  return (
    <div className="absolute h-[447.967px] left-[1.01px] top-[1.01px] w-[327.896px]" data-name="LandingPage">
      <ImageWorkBackground />
      <Container />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[23.998px] opacity-70 relative shrink-0 w-[20.022px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#a1a1aa] text-[16px] text-nowrap top-[-0.97px] tracking-[1.29px]">01</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[90.005px] relative shrink-0 w-[206.036px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[90px] left-0 not-italic text-[60px] text-nowrap text-white top-[-0.89px] tracking-[7px] uppercase">WORK</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[110.012px] relative shrink-0 w-[256.995px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[#d1d5db] text-[20px] top-[-1.03px] tracking-[0.14px] w-[221px]">A selection of commissioned projects ranging from brand identity to digital experiences.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[212.008px] relative shrink-0 w-[256.995px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11.991px] items-start relative size-full">
        <Heading />
        <Paragraph1 />
      </div>
    </div>
  );
}

function LandingPage1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[31.998px] h-[268.004px] items-start left-[36.46px] top-[90.99px] w-[256.995px]" data-name="LandingPage">
      <Paragraph />
      <Container1 />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[#111827] h-[449.994px] relative rounded-[10px] shrink-0 w-[329.924px]" data-name="Section">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <LandingPage />
        <LandingPage1 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.014px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function ImageAboutBackground() {
  return (
    <div className="absolute h-[447.967px] left-0 opacity-60 top-0 w-[327.896px]" data-name="Image (About Background)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageAboutBackground} />
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-[rgba(0,0,0,0.4)] h-[447.967px] left-0 top-0 w-[327.896px]" data-name="Container" />;
}

function LandingPage2() {
  return (
    <div className="absolute h-[447.967px] left-[1.01px] top-[1.01px] w-[327.896px]" data-name="LandingPage">
      <ImageAboutBackground />
      <Container2 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[90px] relative shrink-0 w-[233px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[90px] left-0 not-italic text-[60px] text-nowrap text-white top-[-0.89px] tracking-[7px] uppercase">ABOUT</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end relative">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[#d1d5db] text-[20px] text-right tracking-[0.14px] w-[219px]">Schultzschultz is a design studio focusing on corporate design, type design and digital tool development.</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[212.008px] relative shrink-0 w-[268.986px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11.991px] items-end justify-center relative size-full">
        <Heading1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function LandingPage3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[31.998px] grow h-[268.004px] items-end min-h-px min-w-px relative shrink-0" data-name="LandingPage">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#a1a1aa] text-[16px] text-nowrap tracking-[1.29px]">02</p>
      <Container3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex items-start left-[30.02px] right-[30.91px] top-[91.01px]">
      <LandingPage3 />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-[#111827] h-[449.994px] relative rounded-[10px] shrink-0 w-[329.924px]" data-name="Section">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <LandingPage2 />
        <Frame />
      </div>
      <div aria-hidden="true" className="absolute border-[1.014px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function ImageStudioBackground() {
  return <div className="absolute h-[447.967px] left-0 opacity-60 top-0 w-[327.896px]" data-name="Image (Studio Background)" />;
}

function Container4() {
  return <div className="[grid-area:1_/_1] bg-[rgba(0,0,0,0.4)] h-[447.967px] shrink-0 w-[327.896px]" data-name="Container" />;
}

function LandingPage4() {
  return (
    <div className="absolute grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[447.967px] left-[1.01px] top-[1.01px] w-[327.896px]" data-name="LandingPage">
      <ImageStudioBackground />
      <Container4 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[23.998px] opacity-70 relative shrink-0 w-[22.763px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#a1a1aa] text-[16px] text-nowrap top-[-0.97px] tracking-[1.29px]">03</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[90.005px] relative shrink-0 w-[267.925px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[90px] left-0 not-italic text-[60px] text-nowrap text-white top-[-0.89px] tracking-[7px] uppercase">STUDIO</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[88.009px] relative shrink-0 w-[261.984px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[#d1d5db] text-[20px] top-[-1.03px] tracking-[0.14px] w-[262px]">A selection of commissioned projects ranging from brand identity to digital experiences.</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[190.006px] relative shrink-0 w-[261.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11.991px] items-start relative size-full">
        <Heading2 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function LandingPage5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[31.998px] h-[246.001px] items-start left-[33.96px] top-[102px] w-[261.984px]" data-name="LandingPage">
      <Paragraph3 />
      <Container5 />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#111827] h-[449.994px] relative rounded-[10px] shrink-0 w-[329.924px]" data-name="Section">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <LandingPage4 />
        <LandingPage5 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.014px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

export default function Container6() {
  return (
    <div className="relative size-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between px-[15px] py-[80px] relative size-full">
          <Section />
          <Section1 />
          <Section2 />
        </div>
      </div>
    </div>
  );
}