function Heading() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="css-4hzbpn flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px] tracking-[1.2px] uppercase">Other Projects</p>
    </div>
  );
}

function Source() {
  return <div className="h-0 shrink-0 w-full" data-name="Source" />;
}

function Video() {
  return (
    <div className="h-[379.734px] relative shrink-0 w-full" data-name="Video">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pl-[-128px] pr-[634.328px] pt-[-8299.344px] relative size-full">
          <Source />
        </div>
      </div>
    </div>
  );
}

function ProjectDetailPage() {
  return (
    <div className="bg-[#121212] content-stretch flex flex-col h-[379.734px] items-start overflow-clip relative shrink-0 w-full" data-name="ProjectDetailPage">
      <Video />
    </div>
  );
}

function ProjectDetailPage1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="ProjectDetailPage">
      <p className="absolute css-ew64yg font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-white top-[-1px]">Drexel Senior Showcase</p>
    </div>
  );
}

function ProjectDetailPage2() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="ProjectDetailPage">
      <p className="css-4hzbpn flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[14px]">Web</p>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[467.75px] items-start left-0 top-0 w-[506.328px]" data-name="Link">
      <ProjectDetailPage />
      <ProjectDetailPage1 />
      <ProjectDetailPage2 />
    </div>
  );
}

function ImageWellesleyFreshEcosystem() {
  return <div className="h-[379.734px] shrink-0 w-full" data-name="Image (Wellesley Fresh Ecosystem)" />;
}

function ProjectDetailPage3() {
  return (
    <div className="bg-[#121212] content-stretch flex flex-col h-[379.734px] items-start overflow-clip relative shrink-0 w-full" data-name="ProjectDetailPage">
      <ImageWellesleyFreshEcosystem />
    </div>
  );
}

function ProjectDetailPage4() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="ProjectDetailPage">
      <p className="absolute css-ew64yg font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-white top-[-1px]">Wellesley Fresh Ecosystem</p>
    </div>
  );
}

function ProjectDetailPage5() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="ProjectDetailPage">
      <p className="css-4hzbpn flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[14px]">Identity</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[467.75px] items-start left-[570.33px] top-0 w-[506.328px]" data-name="Link">
      <ProjectDetailPage3 />
      <ProjectDetailPage4 />
      <ProjectDetailPage5 />
    </div>
  );
}

function ImageAampRebrand() {
  return <div className="h-[379.75px] shrink-0 w-full" data-name="Image (AAMP Rebrand)" />;
}

function ProjectDetailPage6() {
  return (
    <div className="bg-[#121212] content-stretch flex flex-col h-[379.75px] items-start overflow-clip relative shrink-0 w-full" data-name="ProjectDetailPage">
      <ImageAampRebrand />
    </div>
  );
}

function ProjectDetailPage7() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="ProjectDetailPage">
      <p className="absolute css-ew64yg font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-white top-[-1px]">AAMP Rebrand</p>
    </div>
  );
}

function ProjectDetailPage8() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="ProjectDetailPage">
      <p className="css-4hzbpn flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[14px]">Identity</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[467.75px] items-start left-[1140.66px] top-0 w-[506.344px]" data-name="Link">
      <ProjectDetailPage6 />
      <ProjectDetailPage7 />
      <ProjectDetailPage8 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[467.75px] relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[96px] h-[836.75px] items-start left-0 pb-0 pt-[129px] px-[128px] top-0 w-[1903px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#27272a] border-solid border-t inset-0 pointer-events-none" />
      <Heading />
      <Container />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute content-stretch flex h-[86px] items-start left-[818.38px] px-[65px] py-[33px] top-[836.75px] w-[266.25px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <p className="css-ew64yg font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[1.8px] uppercase">View Full Index</p>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Section />
      <Link3 />
    </div>
  );
}