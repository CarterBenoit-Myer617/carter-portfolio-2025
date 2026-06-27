function Text() {
  return (
    <div className="h-[24px] opacity-70 relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px] tracking-[1.29px]">01</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[90px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[90px] left-0 not-italic text-[60px] text-nowrap text-white top-[-6px] tracking-[7px] uppercase">Work</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[156px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[1.1] left-0 not-italic text-[20px] text-white top-[-2px] tracking-[0.14px] w-[264px]">A selection of commissioned projects ranging from brand identity to digital experiences.</p>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-center p-px relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[3.65px] uppercase">Show More</p>
    </div>
  );
}

function LandingPage() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="LandingPage">
      <Text />
      <Heading />
      <Paragraph />
      <Button />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[#18181b] h-[450px] relative rounded-[10px] shrink-0 w-full" data-name="Section">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[32px] py-[148px] relative size-full">
          <LandingPage />
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] opacity-70 relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[266.16px] not-italic text-[16px] text-nowrap text-right text-white top-[-2px] tracking-[1.29px] translate-x-[-100%]">02</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[90px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[90px] left-[266px] not-italic text-[60px] text-nowrap text-right text-white top-[-6px] tracking-[7px] translate-x-[-100%] uppercase">About</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[195px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[1.1] left-[266.91px] not-italic text-[20px] text-right text-white top-[-2px] tracking-[0.14px] translate-x-[-100%] w-[234px]">Schultzschultz is a design studio focusing on corporate design, type design and digital tool development.</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-center p-px relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[3.65px] uppercase">Read More</p>
    </div>
  );
}

function LandingPage1() {
  return (
    <div className="relative shrink-0 w-[266px]" data-name="LandingPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Text1 />
        <Heading1 />
        <Paragraph1 />
        <Button1 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-[#18181b] h-[450px] relative rounded-[10px] shrink-0 w-full" data-name="Section">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[32px] pr-0 py-0 relative size-full">
          <LandingPage1 />
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] opacity-70 relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px] tracking-[1.29px]">03</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[90px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[90px] left-0 not-italic text-[60px] text-nowrap text-white top-[-6px] tracking-[7px] uppercase">Studio</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[1.1] left-0 not-italic text-[20px] text-white top-[-2px] tracking-[0.14px] w-[231px]">Learn more about us and get in touch.</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-center p-px relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[3.65px] uppercase">Show More</p>
    </div>
  );
}

function LandingPage2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="LandingPage">
      <Text2 />
      <Heading2 />
      <Paragraph2 />
      <Button2 />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#18181b] h-[450px] relative rounded-[10px] shrink-0 w-full" data-name="Section">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[32px] py-[187px] relative size-full">
          <LandingPage2 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#736878] content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[21px] py-[96px] relative shrink-0 w-[375px]" data-name="Container">
      <Section />
      <Section1 />
      <Section2 />
    </div>
  );
}

export default function ContainerSitePageCardsMobile() {
  return (
    <div className="content-stretch flex items-center relative size-full" data-name="Container_site_page_cards_mobile">
      <Container />
    </div>
  );
}