import svgPaths from "./svg-wep28i8zeg";
import imgImageHeroBackground from "figma:asset/11915757c37e756b0bda4ac61f4cb2f036e28945.png";

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

function Container() {
  return (
    <div className="absolute inset-[0_3px_-422px_0]" data-name="Container">
      <HeroPreview />
      <HeroPreview1 />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[15.996px] relative shrink-0 w-[58.979px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.5)] top-[0.54px] tracking-[1.2px] w-[59px]">03 — 04</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[19.993px] relative shrink-0 w-[136.961px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-[0.63px] tracking-[1.8496px] uppercase">Digital Design</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex gap-[31.992px] h-[19.993px] items-center left-0 top-0 w-[227.932px]" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Container2() {
  return <div className="bg-white h-[0.999px] shrink-0 w-full" data-name="Container" />;
}

function Container3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col h-[0.999px] items-start left-0 overflow-clip pl-[-38.174px] pr-[38.174px] py-0 top-[51.98px] w-[127.993px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bottom-[188.02px] h-[52.984px] left-[63.99px] w-[227.932px]" data-name="Container">
      <Container1 />
      <Container3 />
    </div>
  );
}

function HeroPreview2() {
  return (
    <div className="basis-0 bg-[#18181b] grow min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="HeroPreview">
      <Container />
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[#05f] content-stretch flex flex-col inset-0 items-start overflow-clip" data-name="Container">
      <HeroPreview2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.2)] h-[852px] left-0 top-0 w-[378px]" data-name="Container">
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[852px] left-0 top-0 w-[378px]" data-name="Container">
      <Video />
      <Container6 />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[60px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[24.5%_22.88%_21.47%_22.88%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.547 32.421">
          <path d={svgPaths.p24330700} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="absolute content-stretch flex flex-col items-start right-[56px] size-[60px] top-[698.43px]" data-name="ArrowDown">
      <Icon />
    </div>
  );
}

function Container8() {
  return <div className="h-[61.887px] w-[53.811px]" data-name="Container" />;
}

function Container9() {
  return (
    <div className="h-[66.393px] relative w-[70.037px]" data-name="Container">
      <div className="absolute flex h-[71.733px] items-center justify-center left-[-68.45px] top-[-18.91px] w-[76.559px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[110deg]">
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function RotatingLogo() {
  return (
    <div className="absolute left-[24px] size-[50px] top-[96px]" data-name="RotatingLogo">
      <div className="absolute flex h-[92.516px] items-center justify-center left-[-103.86px] top-[-65.69px] w-[93.85px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[150deg]">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="bg-black h-[852px] overflow-clip relative shrink-0 w-full" data-name="Section">
      <Container7 />
      <ArrowDown />
      <RotatingLogo />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[29.994px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[24px] text-black text-nowrap top-[-0.46px] tracking-[-0.5297px]">Visual Freedom Fighter</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[58.497px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[29.25px] left-0 not-italic text-[18px] text-black top-[0.79px] tracking-[-0.4395px] w-[243px]">Working at the intersection of culture, ethics, and clarity</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[233.987px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-0 not-italic text-[#6a7282] text-[18px] top-[0.79px] tracking-[-0.4395px] w-[255px]">I apply the rigor of high-performance athletics to design infrastructure that preserves culture and expands access. Former Division I rower building visual systems for economic sovereignty and community empowerment.</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[31.992px] h-[324.476px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Icon1() {
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

function Button() {
  return (
    <div className="h-[127.214px] relative shrink-0 w-[279.037px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.626px] border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute bottom-[43.67px] font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[118.92px] not-italic text-[14px] text-black text-center top-[43.54px] tracking-[1.8496px] translate-x-[-50%] uppercase w-[87px]">View Work</p>
        <Icon1 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[56px] relative shrink-0 w-[140.469px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[26px] py-[18px] relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap tracking-[4px] uppercase">Contact</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[31.992px] h-[266.428px] items-start relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[47.996px] h-[956.872px] items-start pb-0 pt-[95.993px] px-[47.996px] relative shrink-0 w-[375.029px]" data-name="Container">
      <Heading1 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Text2() {
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

function Paragraph2() {
  return (
    <div className="absolute h-[156px] left-0 top-[154px] w-[266px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[39px] left-0 not-italic text-[20px] text-white top-[-2px] tracking-[0.14px] w-[264px]">A selection of commissioned projects ranging from brand identity to digital experiences.</p>
    </div>
  );
}

function Button2() {
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
      <Text2 />
      <Heading />
      <Paragraph2 />
      <Button2 />
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

function Text3() {
  return (
    <div className="absolute h-[24px] left-0 opacity-70 top-0 w-[266px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[266.16px] not-italic text-[16px] text-nowrap text-right text-white top-[-2px] tracking-[1.29px] translate-x-[-100%]">02</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[90px] left-0 top-[32px] w-[266px]" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[90px] left-[266px] not-italic text-[60px] text-nowrap text-right text-white top-[-6px] tracking-[7px] translate-x-[-100%] uppercase">About</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[195px] left-0 top-[154px] w-[266px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[39px] left-[266.91px] not-italic text-[20px] text-right text-white top-[-2px] tracking-[0.14px] translate-x-[-100%] w-[234px]">Schultzschultz is a design studio focusing on corporate design, type design and digital tool development.</p>
    </div>
  );
}

function Button3() {
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
        <Text3 />
        <Heading2 />
        <Paragraph3 />
        <Button3 />
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

function Text4() {
  return (
    <div className="absolute h-[24px] left-0 opacity-70 top-0 w-[266px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px] tracking-[1.29px]">03</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[90px] left-0 top-[32px] w-[266px]" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[90px] left-0 not-italic text-[60px] text-nowrap text-white top-[-6px] tracking-[7px] uppercase">Studio</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[78px] left-0 top-[154px] w-[266px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[39px] left-0 not-italic text-[20px] text-white top-[-2px] tracking-[0.14px] w-[231px]">Learn more about us and get in touch.</p>
    </div>
  );
}

function Button4() {
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
      <Text4 />
      <Heading3 />
      <Paragraph4 />
      <Button4 />
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

function Container13() {
  return (
    <div className="bg-[#d9d9d9] h-[2513px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[40px] relative shrink-0 w-[590.438px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[40px] left-0 not-italic text-[36px] text-nowrap text-white top-[-3px] tracking-[3.6px] uppercase">Sign up for our newsletter</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[48px] items-center pl-[24px] pr-0 py-0 relative size-full">
          {[...Array(12).keys()].map((_, i) => (
            <Heading4 key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function NewsletterMarquee() {
  return (
    <div className="bg-black h-[89px] relative shrink-0 w-full" data-name="NewsletterMarquee">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-px pl-[-162.517px] pr-[162.517px] pt-[24px] relative rounded-[inherit] size-full">
        <Container14 />
      </div>
      <div aria-hidden="true" className="absolute border-[#27272a] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-white tracking-[4px] uppercase">Contact</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-2px]">Schultzschultz GmbH</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-2px]">Koselstraße 37</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-2px]">60318 Frankfurt am Main</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-2px]">Germany</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[108px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph5 />
      <Paragraph6 />
      <Paragraph7 />
      <Paragraph8 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px]">T +49 69 90 55 77 30</p>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px]">info@schultzschultz.com</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px]">www.schultzschultz.com</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[96px] items-start pb-0 pt-[16px] px-0 relative shrink-0 w-full" data-name="Container">
      <Paragraph9 />
      <Link />
      <Link1 />
    </div>
  );
}

function Container17() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[24px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading5 />
      <Container15 />
      <Container16 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-white tracking-[4px] uppercase">Social Media</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[330px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px]">Instagram</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[330px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px]">LinkedIn</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[330px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px]">Youtube</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[330px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px]">X</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[120px] items-start relative shrink-0 w-full" data-name="Container">
      <Link2 />
      <Link3 />
      <Link4 />
      <Link5 />
    </div>
  );
}

function Container19() {
  return (
    <div className="[grid-area:2_/_1] content-stretch flex flex-col gap-[24px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading6 />
      <Container18 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-white tracking-[4px] uppercase">Press</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px]">press@schultzschultz.com</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[76px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Link6 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-white tracking-[4px] uppercase">Workshops</p>
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2px]">workshops@schultzschultz.com</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[76px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Link7 />
    </div>
  );
}

function Container22() {
  return (
    <div className="[grid-area:3_/_1] content-stretch flex flex-col gap-[48px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Link8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[87.516px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[18px] text-nowrap text-white">Impressum</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[20px] relative shrink-0 w-[330px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[14px]">© Schultzschultz GmbH 2025</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="[grid-area:4_/_1] place-self-stretch relative shrink-0" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start justify-between pb-0 pt-[2px] px-0 relative size-full">
          <Link8 />
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#121212] h-[1084px] relative shrink-0 w-full" data-name="Footer">
      <div className="size-full">
        <div className="gap-[48px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[minmax(0px,_280fr)_minmax(0px,_172fr)_minmax(0px,_200fr)_minmax(0px,_1fr)] px-[24px] py-[96px] relative size-full">
          <Container17 />
          <Container19 />
          <Container22 />
          <Container24 />
        </div>
      </div>
    </div>
  );
}

export default function LandingPage3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="LandingPage">
      <Section />
      <Container12 />
      <Container13 />
      <NewsletterMarquee />
      <Footer />
    </div>
  );
}