import svgPaths from "./svg-pbs4ycrami";
import imgImageHeroBackground from "figma:asset/11915757c37e756b0bda4ac61f4cb2f036e28945.png";
import imgImageLogo from "figma:asset/7e1096ae6877c4f73af8ea54866c56e7194c8e3b.png";

function Section() {
  return <div className="absolute h-[1382.845px] left-0 top-[159.99px] w-[375.029px]" data-name="Section" />;
}

function Text() {
  return (
    <div className="absolute h-[24px] left-0 opacity-70 top-0 w-[266px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px] tracking-[1.29px]">01</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[90px] left-0 top-[32px] w-[266px]" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[90px] left-0 not-italic text-[60px] text-nowrap text-white top-[-6px] tracking-[7px] uppercase">Work</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[156px] left-0 top-[154px] w-[266px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[39px] left-0 not-italic text-[20px] text-white top-[-2px] tracking-[0.14px] w-[264px]">A selection of commissioned projects ranging from brand identity to digital experiences.</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex h-[56px] items-center justify-center left-0 p-px top-[358px] w-[266px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[3.65px] uppercase">Show More</p>
    </div>
  );
}

function LandingPage() {
  return (
    <div className="absolute h-[414px] left-[32px] top-[148px] w-[266px]" data-name="LandingPage">
      <Text />
      <Heading />
      <Paragraph />
      <Button />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute bg-[#18181b] h-[710px] left-[24px] rounded-[10px] top-[96px] w-[330px]" data-name="Section">
      <LandingPage />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[24px] left-0 opacity-70 top-0 w-[266px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[266.16px] not-italic text-[16px] text-nowrap text-right text-white top-[-2px] tracking-[1.29px] translate-x-[-100%]">02</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[90px] left-0 top-[32px] w-[266px]" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[90px] left-[266px] not-italic text-[60px] text-nowrap text-right text-white top-[-6px] tracking-[7px] translate-x-[-100%] uppercase">About</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[195px] left-0 top-[154px] w-[266px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[39px] left-[266.91px] not-italic text-[20px] text-right text-white top-[-2px] tracking-[0.14px] translate-x-[-100%] w-[234px]">Schultzschultz is a design studio focusing on corporate design, type design and digital tool development.</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex h-[56px] items-center justify-center left-0 p-px top-[397px] w-[266px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[3.65px] uppercase">Read More</p>
    </div>
  );
}

function LandingPage1() {
  return (
    <div className="h-[453px] relative shrink-0 w-[266px]" data-name="LandingPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text1 />
        <Heading1 />
        <Paragraph1 />
        <Button1 />
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute bg-[#18181b] content-stretch flex flex-col h-[709px] items-start justify-center left-[24px] pl-[32px] pr-0 py-0 rounded-[10px] top-[819px] w-[330px]" data-name="Section">
      <LandingPage1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[24px] left-0 opacity-70 top-0 w-[266px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px] tracking-[1.29px]">03</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[90px] left-0 top-[32px] w-[266px]" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[90px] left-0 not-italic text-[60px] text-nowrap text-white top-[-6px] tracking-[7px] uppercase">Studio</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[78px] left-0 top-[154px] w-[266px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[39px] left-0 not-italic text-[20px] text-white top-[-2px] tracking-[0.14px] w-[231px]">Learn more about us and get in touch.</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex h-[56px] items-center justify-center left-0 p-px top-[280px] w-[266px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[3.65px] uppercase">Show More</p>
    </div>
  );
}

function LandingPage2() {
  return (
    <div className="absolute h-[336px] left-[32px] top-[187px] w-[266px]" data-name="LandingPage">
      <Text2 />
      <Heading2 />
      <Paragraph2 />
      <Button2 />
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute bg-[#18181b] h-[710px] left-[24px] rounded-[10px] top-[1541px] w-[330px]" data-name="Section">
      <LandingPage2 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[#d9d9d9] bottom-[-128.47px] h-[2513px] left-[-3px] overflow-clip right-[0.03px]" data-name="Container">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

function Source() {
  return <div className="h-0 shrink-0 w-full" data-name="Source" />;
}

function ImageHeroBackground() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Image (Hero Background)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageHeroBackground} />
    </div>
  );
}

function Video() {
  return (
    <div className="absolute content-stretch flex flex-col h-[852px] items-start left-0 overflow-clip pl-0 pr-[378px] py-0 top-0 w-[378px]" data-name="Video">
      <Source />
      <ImageHeroBackground />
    </div>
  );
}

function Source1() {
  return <div className="h-0 shrink-0 w-full" data-name="Source" />;
}

function HeroPreview() {
  return (
    <div className="absolute content-stretch flex flex-col h-[425.973px] items-start left-0 opacity-80 overflow-clip pb-0 pl-0 pr-[375.029px] pt-[-159.994px] top-0 w-[375.029px]" data-name="HeroPreview">
      <Source1 />
    </div>
  );
}

function HeroPreview1() {
  return <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" data-name="HeroPreview" />;
}

function Container1() {
  return (
    <div className="absolute inset-[0_3px_-422px_0]" data-name="Container">
      <HeroPreview />
      <HeroPreview1 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[15.996px] relative shrink-0 w-[58.979px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.5)] top-[0.54px] tracking-[1.2px] w-[59px]">03 — 04</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[19.993px] relative shrink-0 w-[136.961px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-[0.63px] tracking-[1.8496px] uppercase">Digital Design</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[31.992px] h-[19.993px] items-center left-0 top-0 w-[227.932px]" data-name="Container">
      <Text3 />
      <Text4 />
    </div>
  );
}

function Container3() {
  return <div className="bg-white h-[0.999px] shrink-0 w-full" data-name="Container" />;
}

function Container4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col h-[0.999px] items-start left-0 overflow-clip pl-[-38.174px] pr-[38.174px] py-0 top-[51.98px] w-[127.993px]" data-name="Container">
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bottom-[188.02px] h-[52.984px] left-[63.99px] w-[227.932px]" data-name="Container">
      <Container2 />
      <Container4 />
    </div>
  );
}

function StickyNavigation() {
  return <div className="bg-black h-[2.998px] shrink-0 w-[39.994px]" data-name="StickyNavigation" />;
}

function SlotClone() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[55.982px]" data-name="SlotClone">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11px] items-start pb-0 pl-[7.994px] pr-0 pt-[7.994px] relative size-full">
        {[...Array(3).keys()].map((_, i) => (
          <StickyNavigation key={i} />
        ))}
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[18.003px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[18px] text-black text-nowrap top-[0.37px] tracking-[1.121px] uppercase">EN</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[45.253px] relative shrink-0 w-[51.511px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.626px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[1.626px] pt-[13.625px] px-[12.626px] relative size-full">
        <Text5 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[63.992px] h-[156.226px] items-end left-[271.05px] top-[48px] w-[55.982px]" data-name="Container">
      <SlotClone />
      <Container6 />
    </div>
  );
}

function ImageLogo() {
  return (
    <div className="h-[61.548px] relative w-[53.598px]" data-name="Image (Logo)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageLogo} />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[56.398px] relative w-[64.084px]" data-name="Container">
      <div className="absolute flex h-[71.417px] items-center justify-center left-[-68.13px] top-[-18.78px] w-[76.168px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[110deg]">
          <ImageLogo />
        </div>
      </div>
    </div>
  );
}

function RotatingLogo() {
  return (
    <div className="absolute left-[-31.99px] size-[99.998px] top-0" data-name="RotatingLogo">
      <div className="absolute flex h-[80.885px] items-center justify-center left-[-65.74px] top-[-27.04px] w-[83.698px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[150deg]">
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[99.998px] left-[48px] top-[48px] w-[68.006px]" data-name="Link">
      <RotatingLogo />
    </div>
  );
}

function StickyNavigation1() {
  return (
    <div className="absolute h-[252.219px] left-[-16px] top-[19px] w-[375.029px]" data-name="StickyNavigation">
      <Container7 />
      <Link />
    </div>
  );
}

function HeroPreview2() {
  return (
    <div className="basis-0 bg-[#18181b] grow min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="HeroPreview">
      <Container1 />
      <Container5 />
      <StickyNavigation1 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[#05f] content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Container">
      <HeroPreview2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.2)] h-[852px] left-0 top-0 w-[378px]" data-name="Container">
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[852px] left-[-3px] right-[0.03px] top-[-2px]" data-name="Container">
      <Video />
      <Container10 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[29.994px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[24px] text-black text-nowrap top-[-0.46px] tracking-[-0.5297px]">Visual Freedom Fighter</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[58.497px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[29.25px] left-0 not-italic text-[18px] text-black top-[0.79px] tracking-[-0.4395px] w-[243px]">Working at the intersection of culture, ethics, and clarity</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[233.987px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-0 not-italic text-[#6a7282] text-[18px] top-[0.79px] tracking-[-0.4395px] w-[255px]">I apply the rigor of high-performance athletics to design infrastructure that preserves culture and expands access. Former Division I rower building visual systems for economic sovereignty and community empowerment.</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[31.992px] h-[324.476px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute bottom-[52.58px] left-[195.69px] overflow-clip top-[56.91px] w-[17.723px]" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.74px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8156 1.47696">
            <path d="M0.738478 0.738478H11.0772" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.47696" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.6463 11.8156">
            <path d={svgPaths.pdde30c0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.47696" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[127.214px] relative shrink-0 w-[279.037px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.626px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute bottom-[43.67px] font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[118.92px] not-italic text-[14px] text-black text-center top-[43.54px] tracking-[1.8496px] translate-x-[-50%] uppercase w-[87px]">View Work</p>
        <Icon />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[56px] relative shrink-0 w-[140.469px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[26px] py-[18px] relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap tracking-[4px] uppercase">Contact</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[31.992px] h-[266.428px] items-start relative shrink-0 w-full" data-name="Container">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[47.996px] h-[956.872px] items-start left-0 pb-0 pt-[95.993px] px-[47.996px] top-[852px] w-[375.029px]" data-name="Container">
      <Heading3 />
      <Container12 />
      <Container13 />
    </div>
  );
}

function LandingPage3() {
  return (
    <div className="bg-white h-[4195.532px] overflow-clip relative shrink-0 w-full" data-name="LandingPage">
      <Section />
      <Container />
      <Container11 />
      <Container14 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[27.995px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[20px] text-nowrap text-white top-[-0.37px] tracking-[3.5508px] uppercase">Contact</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[23.99px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-0.83px] tracking-[-0.3125px]">Black Trail Collective</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[23.99px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-0.83px] tracking-[-0.3125px]">Boston, MA</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[7.994px] h-[55.973px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[23.99px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.83px] tracking-[-0.3125px]">studio@carterbenoitmyer.com</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[47.997px] h-[235.943px] items-start left-[48px] top-[95.99px] w-[279.037px]" data-name="Container">
      <Heading4 />
      <Container15 />
      <Link1 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[27.995px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[20px] text-nowrap text-white top-[-0.37px] tracking-[3.5508px] uppercase">Social Media</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[23.99px] relative shrink-0 w-[279.037px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.83px] tracking-[-0.3125px]">Instagram</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[23.99px] relative shrink-0 w-[279.037px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.83px] tracking-[-0.3125px]">LinkedIn</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[15.996px] h-[63.976px] items-start relative shrink-0 w-full" data-name="Container">
      <Link2 />
      <Link3 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[47.997px] h-[139.967px] items-start left-[48px] top-[427.93px] w-[279.037px]" data-name="Container">
      <Heading5 />
      <Container17 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[27.995px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[20px] text-nowrap text-white top-[-0.37px] tracking-[3.5508px] uppercase">Studio</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[23.99px] relative shrink-0 w-[279.037px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.83px] tracking-[1.6875px] uppercase">About</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[23.99px] relative shrink-0 w-[279.037px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.83px] tracking-[1.6875px] uppercase">Services</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[23.99px] relative shrink-0 w-[279.037px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.83px] tracking-[1.6875px] uppercase">Shop Archive</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[15.996px] h-[103.961px] items-start relative shrink-0 w-full" data-name="Container">
      <Button5 />
      <Button6 />
      <Button7 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[47.997px] h-[179.953px] items-start left-[48px] top-[663.89px] w-[279.037px]" data-name="Container">
      <Heading6 />
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[19.993px] left-[48px] top-[939.83px] w-[279.037px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-[0.63px] tracking-[-0.1504px]">© Carter Benoît-Myer 2025</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#121212] h-[1055.82px] relative shrink-0 w-full" data-name="Footer">
      <Container16 />
      <Container18 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function HB() {
  return (
    <div className="absolute content-stretch flex flex-col h-[851.946px] items-start left-0 right-[-0.03px] top-0" data-name="hB">
      <LandingPage3 />
      <Footer />
    </div>
  );
}

export default function CarterBenoitMyerMakeSite() {
  return (
    <div className="bg-white relative size-full" data-name="Carter Benoit Myer_Make_ Site_2025">
      <HB />
    </div>
  );
}