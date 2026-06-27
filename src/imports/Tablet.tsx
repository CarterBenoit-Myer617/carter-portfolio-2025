import svgPaths from "./svg-kaneqnx35b";
import imgImage from "figma:asset/fe388b8d4080bd5b2f1ce29ba6b5dd60df7560fe.png";
import imgImage1 from "figma:asset/e67312e6a5e4590043ebb458ee83e7ecc1317c2a.png";
import imgImage2 from "figma:asset/f5315e57c9808491a04ea8486a67a22656928dd8.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col h-[520px] items-start relative shrink-0 w-[803px]">
      <section aria-hidden="true" className="block h-[610px] relative shrink-0 w-[891px]" data-name="Hero media" role="presentation">
        <div className="absolute inset-0 overflow-hidden">
          <video aria-hidden="true" autoPlay className="absolute h-full left-[-0.06%] max-w-none top-0 w-[109.54%]" controlsList="nodownload" loop playsInline role="presentation">
            <source src="/_videos/v1/1fff25d8bce494d291fa92ce9a9efd703ef72e35" />
          </video>
        </div>
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
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full relative shrink-0 text-[36px] text-black tracking-[-0.72px] w-[min-content]">
        <h2 className="block leading-[1.2]">A really compelling headline</h2>
      </div>
      <p className="font-['Source_Serif_Pro:Light',sans-serif] leading-[1.2] relative shrink-0 text-[50px] text-black tracking-[-2.25px] w-[654px]">From sun-drenched piazzas to intimate still-lives, I aimed to capture the soul of the country through light and composition.</p>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[20px] text-[rgba(0,0,0,0.55)] tracking-[-0.1px] w-[min-content]">
        <p className="leading-[1.45]">Call out a feature, benefit, or value of your site, then link to a page where people can learn more about it.</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-black content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[-0.09px]">
        <p className="leading-[1.45]">Call to action</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start pb-[80px] pt-0 px-0 relative shrink-0 w-full" data-name="Content">
      <Text1 />
      <Button1 />
    </div>
  );
}

function ImageStrip() {
  return <div className="shrink-0 w-full" data-name="Image strip" />;
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
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Project description contain">
      <ProjectTitle />
      <ProjectBodyCopy />
    </div>
  );
}

function NavHeader() {
  return (
    <div className="max-w-[1920px] relative shrink-0 w-full" data-name="Nav header">
      <div className="max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[inherit] pb-[50px] pt-0 px-[15px] relative w-full">
          <ImageStrip />
          <ProjectDescriptionContain />
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border border-[#ab0782] border-solid inset-0 pointer-events-none" />
      <p className="font-['Source_Code_Pro:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#ab0782] text-[16px] text-nowrap tracking-[-0.72px]">Explore</p>
    </div>
  );
}

function Info() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[19px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Info">
      <p className="[text-underline-position:from-font] decoration-solid font-['Source_Code_Pro:Medium',sans-serif] font-medium leading-[1.03] min-w-full relative shrink-0 text-[#ab0782] text-[16px] tracking-[-0.72px] underline w-[min-content]">Artwork</p>
      <p className="font-['Source_Serif_Pro:Light',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#ab0782] text-[50px] tracking-[-2.25px] w-[min-content]">
        Illustration
        <br aria-hidden="true" />
        sketches
      </p>
      <Button2 />
    </div>
  );
}

function Projects1() {
  return (
    <div className="content-stretch flex gap-[50px] items-start px-0 py-[50px] relative shrink-0 w-full" data-name="Projects 01">
      <div aria-hidden="true" className="absolute border-[#ab0782] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Info />
      <div className="aspect-[361.333/361.33] basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
          <img alt="abstract painting" className="absolute left-[-3.09%] max-w-none size-[106.19%] top-[-2.74%]" src={imgImage} />
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border border-[#978c11] border-solid inset-0 pointer-events-none" />
      <p className="font-['Source_Code_Pro:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#978c11] text-[16px] text-nowrap tracking-[-0.72px]">Explore</p>
    </div>
  );
}

function Info1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[19px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Info">
      <p className="[text-underline-position:from-font] decoration-solid font-['Source_Code_Pro:Medium',sans-serif] font-medium leading-[1.03] min-w-full relative shrink-0 text-[#6e660a] text-[16px] tracking-[-0.72px] underline w-[min-content]">Editorial</p>
      <p className="font-['Source_Serif_Pro:Light',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#6e660a] text-[50px] tracking-[-2.25px] w-[min-content]">
        Magazine
        <br aria-hidden="true" />
        study
      </p>
      <Button3 />
    </div>
  );
}

function Projects2() {
  return (
    <div className="content-stretch flex gap-[50px] items-start px-0 py-[50px] relative shrink-0 w-full" data-name="Projects 02">
      <div aria-hidden="true" className="absolute border-[#6e660a] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Info1 />
      <div className="aspect-[379.895/379.895] basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border border-[#0034ad] border-solid inset-0 pointer-events-none" />
      <p className="font-['Source_Code_Pro:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#0034ad] text-[16px] text-nowrap tracking-[-0.72px]">Explore</p>
    </div>
  );
}

function Info2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[19px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Info">
      <p className="[text-underline-position:from-font] decoration-solid font-['Source_Code_Pro:Medium',sans-serif] font-medium leading-[1.03] min-w-full relative shrink-0 text-[#0034ad] text-[16px] tracking-[-0.72px] underline w-[min-content]">Design</p>
      <p className="font-['Source_Serif_Pro:Light',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#0034ad] text-[50px] tracking-[-2.25px] w-[min-content]">Castro Capital branding</p>
      <Button4 />
    </div>
  );
}

function Projects3() {
  return (
    <div className="content-stretch flex gap-[50px] items-start px-0 py-[50px] relative shrink-0 w-full" data-name="Projects 03">
      <div aria-hidden="true" className="absolute border-[#0034ad] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Info2 />
      <div className="aspect-[794/794] basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="stationery materials laying on a grid" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgImage2} />
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="Projects">
      <Projects1 />
      <Projects2 />
      <Projects3 />
    </div>
  );
}

function ExploreMore() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start px-0 py-[30px] relative shrink-0 w-[700px]" data-name="Explore More">
      <div aria-hidden="true" className="absolute border-[#4f4f4f] border-[0.75px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Source_Serif_Pro:Light',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[50px] text-black tracking-[-2.25px] w-full">From graphic design to interior spaces, see the breadth of my creative explorations.</p>
      <p className="font-['Source_Code_Pro:Regular',sans-serif] font-normal leading-[1.03] relative shrink-0 text-[16px] text-black tracking-[-0.72px] w-full">More projects</p>
      <Projects />
    </div>
  );
}

function ImageAndText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Image and text">
      <Content />
      <NavHeader />
      <ExploreMore />
    </div>
  );
}

function FeatureGallery() {
  return (
    <section className="relative shrink-0 w-full" data-name="Feature gallery">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[64px] relative w-full">
          <ImageAndText />
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-start pb-[16px] pt-0 px-0 relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.08px]">
        <p className="leading-[1.45]">Platform</p>
      </div>
    </div>
  );
}

function Column() {
  return (
    <nav className="content-stretch flex flex-col gap-[8px] items-start justify-center p-0 relative shrink-0 w-[90px]" data-name="Column 1">
      <Header />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45]">Individuals</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.08px] w-full">
        <p className="leading-[1.4]">Teams</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45]">Admins</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45]">Developers</p>
      </div>
    </nav>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex items-start pb-[16px] pt-0 px-0 relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.08px]">
        <p className="leading-[1.45]">Features</p>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <nav className="content-stretch flex flex-col gap-[8px] items-start justify-center p-0 relative shrink-0 w-[130px]" data-name="Column 2">
      <Header1 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45]">Core features</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45]">Pro experience</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45]">Integrations</p>
      </div>
    </nav>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex items-start pb-[16px] pt-0 px-0 relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.08px]">
        <p className="leading-[1.45]">Learn more</p>
      </div>
    </div>
  );
}

function Column2() {
  return (
    <nav className="content-stretch flex flex-col gap-[8px] items-start justify-center p-0 relative shrink-0 w-[130px]" data-name="Column 3">
      <Header2 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45]">Blog</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45]">Case studies</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45]">Customer stories</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45]">Best practices</p>
      </div>
    </nav>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex items-start pb-[16px] pt-0 px-0 relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.08px]">
        <p className="leading-[1.45]">Support</p>
      </div>
    </div>
  );
}

function Column3() {
  return (
    <nav className="content-stretch flex flex-col gap-[8px] items-start justify-center p-0 relative shrink-0 w-[90px]" data-name="Column 4">
      <Header3 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45]">Contact</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45]">Support</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45]">Legal</p>
      </div>
    </nav>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0" data-name="Nav">
      <Column />
      <Column1 />
      <Column2 />
      <Column3 />
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex grow items-start justify-between min-h-px min-w-px px-0 py-[80px] relative shrink-0" data-name="Content">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-nowrap text-white tracking-[-0.48px]">
        <p className="leading-[1.2]">Namedly</p>
      </div>
      <Nav />
    </div>
  );
}

function Image() {
  return (
    <div aria-hidden="true" className="bg-black relative shrink-0 w-full" data-name="Image" role="presentation">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pb-[96px] pt-0 px-[64px] relative w-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <main className="content-stretch flex flex-col items-start p-0 relative shrink-0 w-full" data-name="Container" tabIndex="-1">
      <FeatureGallery />
      <Image />
    </main>
  );
}

function Tablet() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-x-clip overflow-y-auto relative shrink-0 w-[800px]" data-name="Tablet">
      <Container1 />
    </div>
  );
}

export default function Tablet1() {
  return (
    <div className="bg-white relative size-full" data-name="Tablet">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[50px] py-0 relative size-full">
          <Frame />
          <Button />
          <Tablet />
        </div>
      </div>
    </div>
  );
}