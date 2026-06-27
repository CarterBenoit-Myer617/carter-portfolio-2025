import svgPaths from "./svg-pab09dg3o6";

function Frame() {
  return (
    <div className="content-stretch flex flex-col h-[493px] items-start relative shrink-0 w-[377px]">
      <section aria-hidden="true" className="block h-[576px] relative shrink-0 w-full" data-name="Hero media" role="presentation">
        <video aria-hidden="true" autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline role="presentation">
          <source src="/_videos/v1/1fff25d8bce494d291fa92ce9a9efd703ef72e35" />
        </video>
      </section>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[18px] relative shrink-0 w-[58.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap top-[0.5px] tracking-[2px] uppercase">Scroll</p>
      </div>
    </div>
  );
}

function VideoLanding() {
  return (
    <div className="h-[46px] overflow-clip relative shrink-0 w-full" data-name="VideoLanding">
      <div className="absolute inset-[0_0.94%_1.33%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
          <path d={svgPaths.p90d6800} fill="var(--fill-0, #B35F5F)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="opacity-70 relative shrink-0 size-[46px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <VideoLanding />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col gap-[12.007px] h-[76px] items-center pb-[-0.007px] pt-0 px-0 relative shrink-0 w-[58.688px]" data-name="Button">
      <Text />
      <Container />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[28px] text-black tracking-[-0.56px] w-full">
        <h2 className="block leading-[1.2]">A really compelling headline</h2>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45]">Call out a feature, benefit, or value of your site, then link to a page where people can learn more about it.</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-black relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.08px]">
            <p className="leading-[1.45]">Call to action</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start pb-[48px] pt-0 px-0 relative shrink-0 w-full" data-name="Content">
      <Text1 />
      <Button1 />
    </div>
  );
}

function OurWorkContent() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Our work content">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[24px] text-black text-nowrap tracking-[-1.2px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Work
      </p>
    </div>
  );
}

function ImageStrip() {
  return <div className="shrink-0 w-[915.75px]" data-name="Image strip" />;
}

function Titles() {
  return (
    <div className="content-stretch flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold gap-[4px] items-start justify-center leading-none relative shrink-0 text-[16px] tracking-[-0.48px]" data-name="Titles">
      <p className="relative shrink-0 text-black w-[286px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Redo
      </p>
      <p className="relative shrink-0 text-[#767676] w-[286px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Digital Rebrand & User Experience`}</p>
    </div>
  );
}

function ProjectTitle() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[341px]" data-name="Project title">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#767676] text-[16px] text-nowrap tracking-[-0.48px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Project
      </p>
      <Titles />
    </div>
  );
}

function TextLink() {
  return (
    <div className="content-stretch flex font-['Instrument_Sans:Medium',sans-serif] font-medium gap-[3px] items-center leading-[1.1] relative shrink-0 text-[#767676] text-[16px] text-nowrap tracking-[-0.48px]" data-name="Text link">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        See Project
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        →
      </p>
    </div>
  );
}

function ProjectBodyCopy() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start max-w-[360px] relative shrink-0 w-[316px]" data-name="Project body copy">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.1] min-w-full relative shrink-0 text-[16px] text-black tracking-[-0.48px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Our redesign of Redo's digital presence focused on a streamlined user interface and a modern visual identity. Through intuitive UX design and a refreshed color palette, we enhanced engagement through brand messaging. `}</p>
      <TextLink />
    </div>
  );
}

function ProjectDescriptionContain() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Project description contain">
      <ProjectTitle />
      <ProjectBodyCopy />
    </div>
  );
}

function NavHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Nav header">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start pb-[50px] pt-0 px-[15px] relative w-full">
          <ImageStrip />
          <ProjectDescriptionContain />
        </div>
      </div>
    </div>
  );
}

function OurWorkSection() {
  return (
    <div className="max-w-[1920px] relative shrink-0 w-full" data-name="Our work section">
      <div className="max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start max-w-[inherit] pb-[40px] pt-[20px] px-[15px] relative w-full">
          <Content />
          <OurWorkContent />
          <NavHeader />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[40px] relative shrink-0 w-[590.438px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[40px] left-0 not-italic text-[36px] text-nowrap text-white top-[-3px] tracking-[3.6px] uppercase">Sign up for our newsletter</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[48px] items-center pl-[24px] pr-0 py-0 relative size-full">
          {[...Array(12).keys()].map((_, i) => (
            <Heading key={i} />
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
        <Container1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#27272a] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[28px] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-white tracking-[4px] uppercase">Contact</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-2px]">Schultzschultz GmbH</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-2px]">Koselstraße 37</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-2px]">60318 Frankfurt am Main</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] text-nowrap top-[-2px]">Germany</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[108px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Paragraph1 />
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
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

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[96px] items-start pb-0 pt-[16px] px-0 relative shrink-0 w-full" data-name="Container">
      <Paragraph4 />
      <Link />
      <Link1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[24px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Heading2() {
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

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[120px] items-start relative shrink-0 w-full" data-name="Container">
      <Link2 />
      <Link3 />
      <Link4 />
      <Link5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="[grid-area:2_/_1] content-stretch flex flex-col gap-[24px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading2 />
      <Container5 />
    </div>
  );
}

function Heading3() {
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

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[76px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Link6 />
    </div>
  );
}

function Heading4() {
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

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[76px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Link7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="[grid-area:3_/_1] content-stretch flex flex-col gap-[48px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container7 />
      <Container8 />
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

function Container10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[330px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[14px]">© Schultzschultz GmbH 2025</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="[grid-area:4_/_1] place-self-stretch relative shrink-0" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start justify-between pb-0 pt-[2px] px-0 relative size-full">
          <Link8 />
          <Container10 />
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
          <Container4 />
          <Container6 />
          <Container9 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <main className="content-stretch flex flex-col items-start p-0 relative shrink-0 w-full" data-name="Container" tabIndex="-1">
      <OurWorkSection />
      <NewsletterMarquee />
      <Footer />
    </main>
  );
}

export default function Mobile() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="Mobile">
      <Frame />
      <Button />
      <Container12 />
    </div>
  );
}