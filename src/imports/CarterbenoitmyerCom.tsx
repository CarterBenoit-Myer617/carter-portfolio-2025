import imgMediaContent from "figma:asset/87c30631a7706b6edcbb375738b2d637994ace81.png";
import imgMediaContent1 from "figma:asset/3b62af53baebff0990f478c6d1c08c7900c9fd78.png";
import imgImageBlackTrailCollectiveLogo from "figma:asset/7e1096ae6877c4f73af8ea54866c56e7194c8e3b.png";

function Link() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[128px] top-[128px] w-[78.859px]" data-name="Link">
      <p className="css-ew64yg font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] tracking-[1.2px] uppercase">Case Study</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[72px] relative shrink-0 w-[1009px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Arial:Regular',sans-serif] leading-[72px] left-0 not-italic text-[80px] text-white top-[-7px] tracking-[-2px]">Kona Estate Provenance</p>
      </div>
    </div>
  );
}

function BoldText() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-start left-[47.77px] top-[42px] w-[186.969px]" data-name="Bold Text">
      <p className="css-ew64yg font-['Arial:Bold',sans-serif] leading-[39px] not-italic relative shrink-0 text-[24px] text-white">luxury asset class</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[117px] relative shrink-0 w-[440.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-4hzbpn font-['Arial:Regular',sans-serif] leading-[39px] left-0 not-italic text-[#a1a1aa] text-[24px] top-[-3px] w-[431px]">Repositioning an agricultural commodity as a</p>
        <BoldText />
        <p className="absolute css-4hzbpn font-['Arial:Regular',sans-serif] leading-[39px] left-0 not-italic text-[#a1a1aa] text-[24px] top-[36px] w-[414px]">through design-led brand strategy.</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16px] relative shrink-0 w-[28.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.6px] uppercase">2024</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex h-[96px] items-center justify-center left-0 p-px rounded-[33554400px] top-0 w-[190.281px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#27272a] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <Text />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[244.188px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a0a0a] text-[12px] tracking-[0.6px] uppercase">Brand Strategy / Packaging Systems</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-white content-stretch flex h-[96px] items-center justify-center left-0 rounded-[33554400px] top-[128px] w-[404.188px]" data-name="Container">
      <Text1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[440.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] h-[437px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[96px] items-start relative size-full">
        <Paragraph />
        <Container2 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-4hzbpn flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px] tracking-[0.6px] uppercase">Role</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-white top-[-2px] w-[133px]">{`Brand Strategist & Designer`}</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="col-[1] content-stretch css-vsca90 flex flex-col gap-[32px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <Text2 />
      <Paragraph1 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-4hzbpn flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px] tracking-[0.6px] uppercase">Tools</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-white top-[-2px] w-[161px]">Illustrator, Photoshop, InDesign</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="col-[2] content-stretch css-vsca90 flex flex-col gap-[32px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <Text3 />
      <Paragraph2 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-4hzbpn flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px] tracking-[0.6px] uppercase">Deliverables</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-white top-[-2px] w-[172px]">Brand Strategy, Packaging Architecture, Gift Set System, Partnership Framework</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="col-[1] content-stretch css-vsca90 flex flex-col gap-[32px] items-start relative row-[2] self-stretch shrink-0" data-name="Container">
      <Text4 />
      <Paragraph3 />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-4hzbpn flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px] tracking-[0.6px] uppercase">Tags</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-2px] w-[159px]">#luxury-cpg #provenance #packaging-architecture</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="col-[2] content-stretch css-vsca90 flex flex-col gap-[32px] items-start relative row-[2] self-stretch shrink-0" data-name="Container">
      <Text5 />
      <Paragraph4 />
    </div>
  );
}

function Container8() {
  return (
    <div className="flex-[1_0_0] h-[437px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-[64px] gap-[96px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[__minmax(0,_146.50fr)_minmax(0,_1fr)] relative size-full">
        <Container4 />
        <Container5 />
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1009px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[128px] items-start relative size-full">
        <Container3 />
        <Container8 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[176px] h-[685px] items-start left-[128px] top-[240px] w-[1009px]" data-name="Container">
      <Heading />
      <Container9 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute border-[#27272a] border-b border-solid h-[1022px] left-0 top-0 w-[1265px]" data-name="Header">
      <Link />
      <Container10 />
    </div>
  );
}

function MediaContent() {
  return <div className="h-[711.266px] shrink-0 w-full" data-name="MediaContent" />;
}

function Container11() {
  return (
    <div className="bg-[#121212] h-[711.266px] relative shrink-0 w-[1265px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <MediaContent />
      </div>
    </div>
  );
}

function MediaContent1() {
  return <div className="h-[631px] shrink-0 w-full" data-name="MediaContent" />;
}

function Container12() {
  return (
    <div className="bg-[#121212] relative shrink-0 size-[631px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <MediaContent1 />
      </div>
    </div>
  );
}

function MediaContent2() {
  return <div className="h-[631px] shrink-0 w-full" data-name="MediaContent" />;
}

function Container13() {
  return (
    <div className="bg-[#121212] flex-[1_0_0] h-[631px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <MediaContent2 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[631px] relative shrink-0 w-[1265px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3px] items-start relative size-full">
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function MediaContent3() {
  return <div className="h-[711.25px] shrink-0 w-full" data-name="MediaContent" />;
}

function Container15() {
  return (
    <div className="bg-[#121212] h-[711.25px] relative shrink-0 w-[1265px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <MediaContent3 />
      </div>
    </div>
  );
}

function MediaContent4() {
  return <div className="h-[711.563px] shrink-0 w-full" data-name="MediaContent" />;
}

function Container16() {
  return (
    <div className="bg-[#121212] h-[711.563px] relative shrink-0 w-[1265px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <MediaContent4 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="absolute bg-[#0a0a0a] content-stretch flex flex-col gap-[3px] h-[2902.078px] items-start left-0 top-[1086px] w-[1265px]" data-name="Section">
      <Container11 />
      <Container14 />
      <Container15 />
      <Container16 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="col-[1] content-stretch css-vsca90 flex items-start relative row-[1] self-stretch shrink-0" data-name="Heading 2">
      <p className="css-4hzbpn flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[32px] min-h-px min-w-px not-italic relative text-[24px] text-white">About</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="col-[2] css-3foyfs relative row-[1] self-stretch shrink-0" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Arial:Regular',sans-serif] leading-[34px] left-0 not-italic text-[#a1a1aa] text-[20px] top-[-3px]">No case study content available for this project.</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="gap-[128px] grid grid-cols-[__minmax(0,_280fr)_minmax(0,_1fr)] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[34px] relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Paragraph5 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[291px] items-start left-0 pb-0 pt-[129px] px-[128px] top-[3988.08px] w-[1265px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#27272a] border-solid border-t inset-0 pointer-events-none" />
      <Container17 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="css-4hzbpn flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[16px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[12px] tracking-[1.2px] uppercase">Other Projects</p>
    </div>
  );
}

function Iframe() {
  return <div className="h-[660.703px] shrink-0 w-full" data-name="Iframe" />;
}

function MediaContent5() {
  return (
    <div className="content-stretch flex flex-col h-[220.234px] items-start overflow-clip pb-0 pt-[-220.242px] px-[-293.656px] relative shrink-0 w-full" data-name="MediaContent">
      <Iframe />
    </div>
  );
}

function ProjectDetailPage() {
  return (
    <div className="absolute bg-[#121212] content-stretch flex flex-col h-[220.234px] items-start left-0 overflow-clip top-0 w-[293.656px]" data-name="ProjectDetailPage">
      <MediaContent5 />
    </div>
  );
}

function ProjectDetailPage1() {
  return (
    <div className="absolute h-[28px] left-0 top-[252.23px] w-[293.656px]" data-name="ProjectDetailPage">
      <p className="absolute css-ew64yg font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-white top-[-1px]">Drexel Senior Showcase</p>
    </div>
  );
}

function ProjectDetailPage2() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[288.23px] w-[293.656px]" data-name="ProjectDetailPage">
      <p className="css-4hzbpn flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[14px]">Web</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[75.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] tracking-[0.6px] uppercase">See Project</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[12.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px]">→</p>
      </div>
    </div>
  );
}

function ProjectDetailPage3() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-0 top-[324.25px] w-[293.656px]" data-name="ProjectDetailPage">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[344.25px] left-0 top-0 w-[293.656px]" data-name="Link">
      <ProjectDetailPage />
      <ProjectDetailPage1 />
      <ProjectDetailPage2 />
      <ProjectDetailPage3 />
    </div>
  );
}

function MediaContent6() {
  return (
    <div className="h-[220.25px] relative shrink-0 w-full" data-name="MediaContent">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMediaContent} />
    </div>
  );
}

function ProjectDetailPage4() {
  return (
    <div className="absolute bg-[#121212] content-stretch flex flex-col h-[220.25px] items-start left-0 overflow-clip top-0 w-[293.672px]" data-name="ProjectDetailPage">
      <MediaContent6 />
    </div>
  );
}

function ProjectDetailPage5() {
  return (
    <div className="absolute h-[28px] left-0 top-[252.25px] w-[293.672px]" data-name="ProjectDetailPage">
      <p className="absolute css-ew64yg font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-white top-[-1px]">Wellesley Fresh Ecosystem</p>
    </div>
  );
}

function ProjectDetailPage6() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[288.25px] w-[293.672px]" data-name="ProjectDetailPage">
      <p className="css-4hzbpn flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[14px]">Identity</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[16px] relative shrink-0 w-[75.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] tracking-[0.6px] uppercase">See Project</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[12.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px]">→</p>
      </div>
    </div>
  );
}

function ProjectDetailPage7() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-0 top-[324.25px] w-[293.672px]" data-name="ProjectDetailPage">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[344.25px] left-[357.66px] top-0 w-[293.672px]" data-name="Link">
      <ProjectDetailPage4 />
      <ProjectDetailPage5 />
      <ProjectDetailPage6 />
      <ProjectDetailPage7 />
    </div>
  );
}

function MediaContent7() {
  return (
    <div className="h-[220.234px] relative shrink-0 w-full" data-name="MediaContent">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMediaContent1} />
    </div>
  );
}

function ProjectDetailPage8() {
  return (
    <div className="absolute bg-[#121212] content-stretch flex flex-col h-[220.234px] items-start left-0 overflow-clip top-0 w-[293.656px]" data-name="ProjectDetailPage">
      <MediaContent7 />
    </div>
  );
}

function ProjectDetailPage9() {
  return (
    <div className="absolute h-[28px] left-0 top-[252.23px] w-[293.656px]" data-name="ProjectDetailPage">
      <p className="absolute css-ew64yg font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[18px] text-white top-[-1px]">AAMP Rebrand</p>
    </div>
  );
}

function ProjectDetailPage10() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-0 top-[288.23px] w-[293.656px]" data-name="ProjectDetailPage">
      <p className="css-4hzbpn flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[14px]">Identity</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[16px] relative shrink-0 w-[75.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] tracking-[0.6px] uppercase">See Project</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[12.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#99a1af] text-[14px]">→</p>
      </div>
    </div>
  );
}

function ProjectDetailPage11() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-0 top-[324.25px] w-[293.656px]" data-name="ProjectDetailPage">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[344.25px] left-[715.33px] top-0 w-[293.656px]" data-name="Link">
      <ProjectDetailPage8 />
      <ProjectDetailPage9 />
      <ProjectDetailPage10 />
      <ProjectDetailPage11 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[344.25px] relative shrink-0 w-full" data-name="Container">
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[96px] h-[456.25px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container18 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[713.25px] items-start left-0 pb-0 pt-[129px] px-[128px] top-[4279.08px] w-[1265px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#27272a] border-solid border-t inset-0 pointer-events-none" />
      <Container19 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[39.594px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute css-ew64yg font-['Arial:Regular',sans-serif] leading-[39.6px] left-0 not-italic text-[36px] text-white top-[-4px] tracking-[-1.08px]">{`Connect with us to explore your project's potential.`}</p>
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[232.594px] items-start left-0 pb-0 pt-[97px] px-[128px] top-[4992.33px] w-[1265px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#27272a] border-solid border-t inset-0 pointer-events-none" />
      <Heading3 />
    </div>
  );
}

function ProjectDetailPage12() {
  return (
    <div className="bg-[#0a0a0a] h-[5224.922px] relative shrink-0 w-full" data-name="ProjectDetailPage">
      <Header />
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="css-4hzbpn flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[20px] text-white tracking-[4px] uppercase">Contact</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#a1a1aa] text-[16px] top-[-2px]">Black Trail Collective</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#a1a1aa] text-[16px] top-[-2px]">Boston, MA</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute css-ew64yg font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-white top-[-2px]">studio@carterbenoitmyer.com</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="col-[1] content-stretch css-vsca90 flex flex-col gap-[48px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <Heading4 />
      <Container20 />
      <Link4 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="css-4hzbpn flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[20px] text-white tracking-[4px] uppercase">Social Media</p>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[196.25px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-white top-[-2px]">Instagram</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[196.25px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-white top-[-2px]">LinkedIn</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[64px] items-start relative shrink-0 w-full" data-name="Container">
      <Link5 />
      <Link6 />
    </div>
  );
}

function Container23() {
  return (
    <div className="col-[2] content-stretch css-vsca90 flex flex-col gap-[48px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <Heading5 />
      <Container22 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="css-4hzbpn flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[20px] text-white tracking-[4px] uppercase">Studio</p>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[24px] relative shrink-0 w-[196.25px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-white top-[-2px] tracking-[2px] uppercase">About</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[196.25px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-white top-[-2px] tracking-[2px] uppercase">Services</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[196.25px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Arial:Bold',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-white top-[-2px] tracking-[2px] uppercase">Shop Archive</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[104px] items-start relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container25() {
  return (
    <div className="col-[3] content-stretch css-vsca90 flex flex-col gap-[48px] h-[180px] items-start relative row-[1] shrink-0" data-name="Container">
      <Heading6 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="col-[4] content-stretch css-vsca90 flex h-[20px] items-start relative row-[1] shrink-0" data-name="Container">
      <p className="css-4hzbpn flex-[1_0_0] font-['Arial:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#6a7282] text-[14px]">© Carter Benoît-Myer 2025</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#121212] h-[428px] relative shrink-0 w-full" data-name="Footer">
      <div className="gap-[96px] grid grid-cols-[repeat(4,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] p-[96px] relative size-full">
        <Container21 />
        <Container23 />
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#0a0a0a] content-stretch flex flex-col h-[5652.922px] items-start left-0 top-0 w-[1265px]" data-name="App">
      <ProjectDetailPage12 />
      <Footer />
    </div>
  );
}

function Container27() {
  return <div className="bg-white h-[2.984px] shrink-0 w-[39.984px]" data-name="Container" />;
}

function StickyNavigation() {
  return (
    <div className="h-[38.969px] relative shrink-0 w-full" data-name="StickyNavigation">
      <div className="content-stretch flex flex-col gap-[11px] items-start pb-0 pl-[4px] pr-0 pt-[4px] relative size-full">
        {[...Array(3).keys()].map((_, i) => (
          <Container27 key={i} />
        ))}
      </div>
    </div>
  );
}

function SlotClone() {
  return (
    <div className="absolute content-stretch flex flex-col h-[38.969px] items-start left-[0.81px] top-[13.81px] w-[47.984px]" data-name="SlotClone">
      <StickyNavigation />
    </div>
  );
}

function Container28() {
  return <div className="absolute border border-solid border-white h-[38px] left-0 top-0 w-[47.125px]" data-name="Container" />;
}

function Paragraph8() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[14px] not-italic text-[18px] text-center text-white top-0 tracking-[1.5605px] translate-x-[-50%] uppercase">EN</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[18px] items-start left-[10px] pb-0 pl-0 pr-[-0.313px] pt-[0.156px] top-[10px] w-[27.125px]" data-name="Button">
      <Paragraph8 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[38px] left-[1.67px] top-[60.78px] w-[47.125px]" data-name="Container">
      <Container28 />
      <Button3 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[112.609px] left-[1152.2px] top-0 w-[48.797px]" data-name="Container">
      <SlotClone />
      <Container29 />
    </div>
  );
}

function ImageBlackTrailCollectiveLogo() {
  return (
    <div className="h-[132.574px] relative shrink-0 w-full" data-name="Image (Black Trail Collective Logo)">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageBlackTrailCollectiveLogo} />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[184.131px] relative w-[217.746px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[25.778px] px-[30.484px] relative size-full">
        <ImageBlackTrailCollectiveLogo />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex h-[240.238px] items-center justify-center relative w-[214.09px]" data-name="Container">
      <div className="flex h-[267.591px] items-center justify-center relative shrink-0 w-[247.5px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[110deg]">
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function RotatingLogo() {
  return (
    <div className="absolute left-0 size-[100px] top-0" data-name="RotatingLogo">
      <div className="absolute flex h-[268.973px] items-center justify-center left-[-112.45px] top-[-339.09px] w-[287.462px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[255deg]">
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute left-0 size-[100px] top-0" data-name="Link">
      <RotatingLogo />
    </div>
  );
}

function StickyNavigation1() {
  return (
    <div className="absolute h-[112.609px] left-[32px] top-[32px] w-[1201px]" data-name="StickyNavigation">
      <Container30 />
      <Link7 />
    </div>
  );
}

export default function CarterbenoitmyerCom() {
  return (
    <div className="bg-[#0a0a0a] relative size-full" data-name="carterbenoitmyer.com">
      <App />
      <StickyNavigation1 />
    </div>
  );
}