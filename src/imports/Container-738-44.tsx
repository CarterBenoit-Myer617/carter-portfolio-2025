function ProjectDetailPage() {
  return (
    <div className="h-[16px] relative shrink-0 w-[123.609px]" data-name="ProjectDetailPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] tracking-[1.2px] uppercase">Previous Project</p>
      </div>
    </div>
  );
}

function ProjectDetailPage1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[74.109px]" data-name="ProjectDetailPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Arial:Regular',sans-serif] leading-[40px] left-0 not-italic text-[36px] text-black top-[-3px]">Vave</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[72px] relative shrink-0 w-[123.609px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <ProjectDetailPage />
        <ProjectDetailPage1 />
      </div>
    </div>
  );
}

function ProjectDetailPage2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[93.141px]" data-name="ProjectDetailPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] text-right tracking-[1.2px] uppercase">Next Project</p>
      </div>
    </div>
  );
}

function ProjectDetailPage3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[113.766px]" data-name="ProjectDetailPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Arial:Regular',sans-serif] leading-[40px] left-[114px] not-italic text-[36px] text-black text-right top-[-3px] translate-x-[-100%]">NSYNK</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[72px] relative shrink-0 w-[113.766px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-end relative size-full">
        <ProjectDetailPage2 />
        <ProjectDetailPage3 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex h-[72px] items-center justify-between left-0 top-[96px] w-[1152px]" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex h-[86px] items-start left-[441.38px] px-[65px] py-[33px] top-[264px] w-[269.25px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <p className="css-ew64yg font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-center tracking-[2px] uppercase">View Full Index</p>
    </div>
  );
}

export default function Container1() {
  return (
    <div className="border-[#e5e7eb] border-solid border-t relative size-full" data-name="Container">
      <Container />
      <Link2 />
    </div>
  );
}