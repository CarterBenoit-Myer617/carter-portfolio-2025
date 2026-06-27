import svgPaths from "./svg-7bbw044xbh";
import imgImage1 from "figma:asset/9398336d5f9d8d43a9a2f12bb3daa569b01e30ee.png";
import imgImage2 from "figma:asset/e195da7b5556b6a1ed4c4e48cbf9f16743ff8a56.png";
import imgRoamWebSpreadMin1 from "figma:asset/e6f0e5fc3961328b5f8ecc6d112fb06dd5859ea6.png";
import imgImage4 from "figma:asset/ed95418279ff56c9114cc5c759df34dcc3e1c47c.png";
import imgImage5 from "figma:asset/e4565d7806cf5bb456834198045bcb5506903699.png";
import imgImage3 from "figma:asset/1ebaa6996a7597faa2b1a67512d4148a87a52649.png";
import imgImage6 from "figma:asset/b5c38f628a879a4fe4031d296c2ef02d643c5814.png";
import imgImage7 from "figma:asset/35f5d2d4578619afd6f0e80508583136a50a3de9.png";
import imgImage8 from "figma:asset/bf0303f02b5c7f121641067a98a7a2c2a854ac39.png";
import imgImage from "figma:asset/97b8c0670d59184877ac0f85e15897ebb89eb86a.png";
import imgImage9 from "figma:asset/ad08668cc1de157129a5f9aa09d4628d866ddc64.png";
import imgImage10 from "figma:asset/f7a8d3463ebb5ada54d9ccc5ab9d9ee2021bda74.png";

function ProjectTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start leading-none relative shrink-0 text-white w-full" data-name="Project title">
      <a className="block css-ew64yg cursor-pointer decoration-solid relative shrink-0 text-[24px] tracking-[-1.2px] underline" href="https://figma.com/sites" style={{ fontVariationSettings: "'wdth' 100" }}>
        Case Study
      </a>
      <p className="css-4hzbpn min-w-full relative shrink-0 text-[64px] tracking-[-3.2px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Anders Interiors
      </p>
    </div>
  );
}

function ProjectDescript() {
  return (
    <div className="content-stretch flex flex-col gap-[44px] items-start relative shrink-0 text-[20px] tracking-[-1px] w-full" data-name="Project descript">
      <p className="css-4hzbpn leading-[0] min-w-full relative shrink-0 text-[0px] text-white w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Instrument_Sans:Italic',sans-serif] italic leading-[1.21]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Can a digital catalog capture the essence of luxury furniture? `}</span>
        <span className="leading-[1.21]">Anders Interior asked us to create a digital catalog that mirrored the elegance of their brand. See how we combined refined typography, stunning visuals, and intuitive design to deliver an online experience that truly resonates with their discerning clientele.</span>
      </p>
      <div className="leading-[1.21] relative shrink-0 text-[#767676] w-[276px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="css-4hzbpn mb-[4px]">{`Digital Catalog & Typography`}</p>
        <p className="css-4hzbpn mb-[4px]">Branding</p>
        <p className="css-4hzbpn mb-[4px]">Website</p>
        <p className="css-4hzbpn mb-[4px]">Logo</p>
        <p className="css-4hzbpn">Art Direction</p>
      </div>
    </div>
  );
}

function TitleContent() {
  return (
    <div className="content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[30px] items-start px-0 py-[10px] relative shrink-0 w-full" data-name="Title content">
      <ProjectTitle />
      <ProjectDescript />
    </div>
  );
}

function TitleSection() {
  return (
    <div className="max-w-[1920px] relative shrink-0 w-full" data-name="Title section">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] pb-[80px] pt-[15px] px-[15px] relative w-full">
        <TitleContent />
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="aspect-[1250/590] relative shrink-0 w-full" data-name="Image 1">
      <img alt="Anders brand wordmark in white placed on top of an image of a modern interior design." className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Image2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Image 2">
      <img alt="Graphic of a typography specimen showing the alphabet and numerals on top of a dark gray background." className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function ImageHorizontal() {
  return (
    <div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-full" data-name="Image horizontal 1">
      <Image2 />
      <div className="h-[528px] relative shrink-0 w-[578px]" data-name="roam web spread -min 1">
        <img alt="" className="block max-w-none size-full" height="528" src={imgRoamWebSpreadMin1} width="578" />
      </div>
    </div>
  );
}

function Image4() {
  return (
    <div className="aspect-[1250/590] relative shrink-0 w-full" data-name="Image 4">
      <img alt="Stationery design of letterhead and business cards for the company Anders on top of a blurred photo of a house interior." className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
    </div>
  );
}

function Image5() {
  return (
    <div className="aspect-[617.5/590] flex-[1_0_0] min-h-px min-w-px overflow-clip relative" data-name="Image 5">
      <img alt="Graphic of a close up of a website depicting an Our Projects page with sample project names and dates." className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage5} />
      <div className="absolute aspect-[712/733] left-[-167px] right-[-167.5px] top-[calc(50%+6.59px)] translate-y-[-50%]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function Image6() {
  return (
    <div className="aspect-[617.5/590] flex-[1_0_0] min-h-px min-w-px relative" data-name="Image 6">
      <img alt="Graphic depicting a color palette of Stone Brown, Dark Navy, Beige, and Cream White along with corresponding hex color codes." className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
    </div>
  );
}

function ImageHorizontal1() {
  return (
    <div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-full" data-name="Image horizontal 2">
      <Image5 />
      <Image6 />
    </div>
  );
}

function Image7() {
  return (
    <div className="aspect-[1250/590] relative shrink-0 w-full" data-name="Image 7">
      <img alt="Graphic depicting UI-styled buttons with different categories of interior design items on top of an image of a modern interior living room." className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
    </div>
  );
}

function ImageStack() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[15px] items-start min-h-px min-w-px relative" data-name="Image stack">
      <Image1 />
      <div className="h-[571px] relative shrink-0 w-[383px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
      </div>
      <ImageHorizontal />
      <Image4 />
      <ImageHorizontal1 />
      <Image7 />
    </div>
  );
}

function ImageSection() {
  return (
    <div className="max-w-[1920px] relative shrink-0 w-full" data-name="Image section">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center max-w-[inherit] px-[15px] py-0 relative w-full">
          <ImageStack />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[29px] items-start relative shrink-0 w-full" data-name="Title">
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 770 1">
            <path d="M0 0.5H770" id="Divider" stroke="var(--stroke-0, white)" />
          </svg>
        </div>
      </div>
      <p className="css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[64px] text-white tracking-[-3.2px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Other Projects
      </p>
    </div>
  );
}

function Image() {
  return (
    <a className="aspect-[407.3333435058594/389.1273193359375] block relative shrink-0 w-full" data-name="Image" href="https://figma.com/sites">
      <img alt="Graphic depicting a mountain peak at sunset cropped in a circle with the words RANGE CRAZY above and below." className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </a>
  );
}

function TextLink() {
  return (
    <a className="content-stretch flex font-['Instrument_Sans:Medium',sans-serif] font-medium gap-[3px] items-center leading-[1.1] p-0 relative shrink-0 text-[#767676] text-[16px] text-left tracking-[-0.48px]" data-name="Text link" href="https://figma.com/sites">
      <p className="css-ew64yg relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        See Project
      </p>
      <p className="css-ew64yg relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        →
      </p>
    </a>
  );
}

function ProjectCard() {
  return (
    <div className="aspect-[407.1026306152344/413.1273193359375] content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative" data-name="Project card 1">
      <Image />
      <TextLink />
    </div>
  );
}

function Image3() {
  return (
    <a className="aspect-[407.33331298828125/389.1273193359375] block relative shrink-0 w-full" data-name="Image" href="https://figma.com/sites">
      <img alt="Emblem design for Madame FC depicting an M monogram in a circle with the words 'Madame FC EST. 2003' inside on top of a background image of a soccer stadium." className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
    </a>
  );
}

function TextLink1() {
  return (
    <a className="content-stretch flex font-['Instrument_Sans:Medium',sans-serif] font-medium gap-[3px] items-center leading-[1.1] p-0 relative shrink-0 text-[#767676] text-[16px] text-left tracking-[-0.48px]" data-name="Text link" href="https://figma.com/sites">
      <p className="css-ew64yg relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        See Project
      </p>
      <p className="css-ew64yg relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        →
      </p>
    </a>
  );
}

function ProjectCard1() {
  return (
    <div className="aspect-[407.10260009765625/413.1273193359375] content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative" data-name="Project card 2">
      <Image3 />
      <TextLink1 />
    </div>
  );
}

function Image8() {
  return (
    <a className="aspect-[407.33331298828125/389.1273193359375] block relative shrink-0 w-full" data-name="Image" href="https://figma.com/sites">
      <img alt="Stylized blue and pink image of a whiskey glass with the wordmark of Vèloce in pink all-caps letters above." className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
    </a>
  );
}

function TextLink2() {
  return (
    <a className="content-stretch flex font-['Instrument_Sans:Medium',sans-serif] font-medium gap-[3px] items-center leading-[1.1] p-0 relative shrink-0 text-[#767676] text-[16px] text-left tracking-[-0.48px]" data-name="Text link" href="https://figma.com/sites">
      <p className="css-ew64yg relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        See Project
      </p>
      <p className="css-ew64yg relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        →
      </p>
    </a>
  );
}

function ProjectCard2() {
  return (
    <div className="aspect-[407.10260009765625/413.1273193359375] content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative" data-name="Project card 3">
      <Image8 />
      <TextLink2 />
    </div>
  );
}

function ProjectGrid() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[14px] items-center relative shrink-0 w-full" data-name="Project grid">
      <ProjectCard />
      <ProjectCard1 />
      <ProjectCard2 />
    </div>
  );
}

function OtherProjectsSection() {
  return (
    <div className="max-w-[1920px] relative shrink-0 w-full" data-name="Other projects section">
      <div className="content-stretch flex flex-col gap-[104px] items-start max-w-[inherit] pb-[80px] pt-[15px] px-[15px] relative w-full">
        <Title />
        <ProjectGrid />
      </div>
    </div>
  );
}

function ConnectWithUsContent() {
  return (
    <div className="content-stretch flex flex-col gap-[34px] items-start relative shrink-0 w-full" data-name="Connect with us content">
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-0.53px_0]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 770 1.06678">
            <path d={svgPaths.p13564800} id="Divider" stroke="var(--stroke-0, white)" strokeWidth="1.06667" />
          </svg>
        </div>
      </div>
      <p className="css-4hzbpn font-['Instrument_Sans:Regular',sans-serif] font-normal leading-none min-w-full relative shrink-0 text-[37px] text-white tracking-[-1.11px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Connect with us to explore your project's potential.`}</p>
      <div className="h-0 relative shrink-0 w-[1250px]" data-name="Divider">
        <div className="absolute inset-[-0.53px_0]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1250 1.06678">
            <path d={svgPaths.p27a2876f} id="Divider" stroke="var(--stroke-0, white)" strokeWidth="1.06667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ConnectWithUsSection() {
  return (
    <div className="max-w-[1920px] relative shrink-0 w-full" data-name="Connect with us section">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[15px] py-0 relative w-full">
        <ConnectWithUsContent />
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Main">
      <TitleSection />
      <ImageSection />
      <OtherProjectsSection />
      <ConnectWithUsSection />
    </div>
  );
}

export default function CodeLayer() {
  return (
    <div className="bg-black content-stretch flex flex-col items-center relative size-full" data-name="Code layer 1">
      <Main />
    </div>
  );
}