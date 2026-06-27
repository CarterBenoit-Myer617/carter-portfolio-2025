import imgImg3582 from "figma:asset/37edd938acdafefaa64232f910b7d03b055718fc.png";
import imgImage from "figma:asset/fe388b8d4080bd5b2f1ce29ba6b5dd60df7560fe.png";
import imgImage1 from "figma:asset/e67312e6a5e4590043ebb458ee83e7ecc1317c2a.png";
import imgImage2 from "figma:asset/f5315e57c9808491a04ea8486a67a22656928dd8.png";

function AboutMe() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1500px] pb-[100px] pt-[200px] px-0 relative shrink-0 w-full" data-name="About me">
      <div className="font-['Source_Serif_Pro:Light',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[50px] text-black tracking-[-2.25px] w-full">
        <p className="mb-0">
          Carter BenoÎt-Myer
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
        <p className="mb-0">
          Visual Freedom Fighter | Designer | Storyteller | Cultural Preservationist
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
        <p className="mb-0">
          I use design to reclaim narratives, preserve culture, and expand representation in outdoor recreation. Rooted in research and driven by storytelling, my work explores the relationship between nature, identity, and the African-American experience in New England and the East Coast. I believe in mothering our nature—nurturing both the land and the stories tied to it—through design that fosters connection, stewardship, and belonging.
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
        <p>My mission is clear: amplify underrepresented voices, dismantle outdated perceptions, and create designs that are not just seen but felt, remembered, and carried forward. I believe in a more inclusive, sustainable, and culturally rich future where the outdoors is a space of belonging for all. Through my work, I seek to bridge the past with the present, ensuring that my people and our stories are preserved, celebrated, and illuminated in the light they deserve.</p>
      </div>
    </div>
  );
}

function LeftColumn() {
  return (
    <div className="content-stretch flex items-start px-0 py-[40px] relative shrink-0 w-[700px]" data-name="Left column">
      <div aria-hidden="true" className="absolute border-[#4f4f4f] border-[0.75px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Source_Code_Pro:Regular',sans-serif] font-normal leading-[1.03] relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.72px]">Right now I am...</p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[19px] items-start px-0 py-[30px] relative shrink-0 w-full" data-name="Row 1">
      <div aria-hidden="true" className="absolute border-[#4f4f4f] border-[0.75px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Source_Code_Pro:Regular',sans-serif] font-normal leading-[1.03] relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.72px]">asdf to:</p>
      <p className="font-['Source_Code_Pro:Regular',sans-serif] font-normal leading-[1.03] relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.72px]">Relationships by Haim</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[19px] items-start px-0 py-[30px] relative shrink-0 w-full" data-name="Row 2">
      <div aria-hidden="true" className="absolute border-[#4f4f4f] border-[0.75px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Source_Code_Pro:Regular',sans-serif] font-normal leading-[1.03] relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.72px]">Dreaming of:</p>
      <p className="font-['Source_Code_Pro:Regular',sans-serif] font-normal leading-[1.03] relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.72px]">Gohar World’s dinner parties</p>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[19px] items-start px-0 py-[30px] relative shrink-0 w-full" data-name="Row 3">
      <div aria-hidden="true" className="absolute border-[#4f4f4f] border-[0.75px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Source_Code_Pro:Regular',sans-serif] font-normal leading-[1.03] relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.72px]">Eating at:</p>
      <p className="font-['Source_Code_Pro:Regular',sans-serif] font-normal leading-[1.03] relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.72px]">Mcdonald’s</p>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[19px] items-start px-0 py-[30px] relative shrink-0 w-full" data-name="Row 4">
      <div aria-hidden="true" className="absolute border-[#4f4f4f] border-[0.75px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Source_Code_Pro:Regular',sans-serif] font-normal leading-[1.03] relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.72px]">Training for:</p>
      <p className="font-['Source_Code_Pro:Regular',sans-serif] font-normal leading-[1.03] relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.72px]">The NYC Marathon</p>
    </div>
  );
}

function RightColumn() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Right column">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
      <div className="h-[496px] relative shrink-0 w-[701px]" data-name="IMG_3582">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[109.39%] left-[-14.86%] max-w-none top-[-9.39%] w-[116.23%]" src={imgImg3582} />
          </div>
          <div className="absolute bg-[rgba(121,184,199,0.2)] inset-0" />
        </div>
      </div>
    </div>
  );
}

function RightNowIAm() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start max-w-[1500px] pb-[100px] pt-0 px-0 relative shrink-0 w-full" data-name="Right now I am">
      <LeftColumn />
      <RightColumn />
    </div>
  );
}

function Button() {
  return (
    <div aria-label="See more of the illustration sketches" className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border border-[#ab0782] border-solid inset-0 pointer-events-none" />
      <p className="font-['Source_Code_Pro:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#ab0782] text-[16px] text-nowrap tracking-[-0.72px]">Explore</p>
    </div>
  );
}

function Info() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[19px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Info">
      <h2 className="[text-underline-position:from-font] block decoration-solid font-['Source_Code_Pro:Medium',sans-serif] font-medium leading-[1.03] min-w-full relative shrink-0 text-[#ab0782] text-[16px] tracking-[-0.72px] underline w-[min-content]">Artwork</h2>
      <p className="font-['Source_Serif_Pro:Light',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#ab0782] text-[50px] tracking-[-2.25px] w-[min-content]">
        Illustration
        <br aria-hidden="true" />
        sketches
      </p>
      <Button />
    </div>
  );
}

function Projects1() {
  return (
    <section aria-label="Project 1 details" className="content-stretch flex gap-[50px] items-start px-0 py-[50px] relative shrink-0 w-full" data-name="Projects 01">
      <div aria-hidden="true" className="absolute border-[#ab0782] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Info />
      <div className="aspect-[361.333/361.33] basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
          <img alt="abstract painting" className="absolute left-[-3.09%] max-w-none size-[106.19%] top-[-2.74%]" src={imgImage} />
        </div>
      </div>
    </section>
  );
}

function Button1() {
  return (
    <div aria-label="See more of the magazine study" className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border border-[#978c11] border-solid inset-0 pointer-events-none" />
      <a className="block font-['Source_Code_Pro:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#978c11] text-[16px] text-nowrap tracking-[-0.72px]" href="https://www.figma.com/design/UAsIi15apy4NIGc2ztqgvm?node-id=10165-2697">
        <p className="[text-underline-position:from-font] cursor-pointer decoration-solid leading-[1.25] underline">Explore</p>
      </a>
    </div>
  );
}

function Info1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[19px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Info">
      <h2 className="[text-underline-position:from-font] block decoration-solid font-['Source_Code_Pro:Medium',sans-serif] font-medium leading-[1.03] min-w-full relative shrink-0 text-[#6e660a] text-[16px] tracking-[-0.72px] underline w-[min-content]">Editorial</h2>
      <p className="font-['Source_Serif_Pro:Light',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#6e660a] text-[50px] tracking-[-2.25px] w-[min-content]">
        Magazine
        <br aria-hidden="true" />
        study
      </p>
      <Button1 />
    </div>
  );
}

function Projects2() {
  return (
    <section aria-label="Project 2 details" className="content-stretch flex gap-[50px] items-start px-0 py-[50px] relative shrink-0 w-full" data-name="Projects 02">
      <div aria-hidden="true" className="absolute border-[#6e660a] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Info1 />
      <div className="aspect-[379.895/379.895] basis-0 grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="Image">
        <img alt="magazine spread" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4px] size-full" src={imgImage1} />
      </div>
    </section>
  );
}

function Button2() {
  return (
    <div aria-label="See more of the castro capital branding" className="content-stretch flex items-center justify-center px-[10px] py-[4px] relative shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border border-[#0034ad] border-solid inset-0 pointer-events-none" />
      <p className="font-['Source_Code_Pro:Regular',sans-serif] font-normal leading-[1.25] relative shrink-0 text-[#0034ad] text-[16px] text-nowrap tracking-[-0.72px]">Explore</p>
    </div>
  );
}

function Info2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[19px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Info">
      <h2 className="[text-underline-position:from-font] block decoration-solid font-['Source_Code_Pro:Medium',sans-serif] font-medium leading-[1.03] min-w-full relative shrink-0 text-[#0034ad] text-[16px] tracking-[-0.72px] underline w-[min-content]">Design</h2>
      <p className="font-['Source_Serif_Pro:Light',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#0034ad] text-[50px] tracking-[-2.25px] w-[min-content]">Castro Capital branding</p>
      <Button2 />
    </div>
  );
}

function Projects3() {
  return (
    <section aria-label="Project 3 details" className="content-stretch flex gap-[50px] items-start px-0 py-[50px] relative shrink-0 w-full" data-name="Projects 03">
      <div aria-hidden="true" className="absolute border-[#0034ad] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Info2 />
      <div className="aspect-[794/794] basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="stationery materials laying on a grid" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgImage2} />
        </div>
      </div>
    </section>
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
    <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[1500px] px-0 py-[30px] relative shrink-0 w-full" data-name="Explore More">
      <div aria-hidden="true" className="absolute border-[#4f4f4f] border-[0.75px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Source_Serif_Pro:Light',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[50px] text-black tracking-[-2.25px] w-full">From graphic design to interior spaces, see the breadth of my creative explorations.</p>
      <a className="block cursor-pointer font-['Source_Code_Pro:Regular',sans-serif] font-normal leading-[1.03] relative shrink-0 text-[16px] text-black tracking-[-0.72px] w-full" href="https://www.figma.com/design/UAsIi15apy4NIGc2ztqgvm?node-id=10165-2697">
        More projects
      </a>
      <Projects />
    </div>
  );
}

function Main() {
  return (
    <main className="content-stretch flex flex-col items-start p-0 relative shrink-0 w-full" data-name="Main" tabIndex="-1">
      <AboutMe />
      <RightNowIAm />
      <ExploreMore />
    </main>
  );
}

function Links() {
  return (
    <div className="content-stretch flex items-start justify-between max-w-[1500px] pb-[150px] pt-[30px] px-0 relative shrink-0 w-full" data-name="Links">
      <div aria-hidden="true" className="absolute border-[#4f4f4f] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <a className="[text-underline-position:from-font] block cursor-pointer decoration-solid font-['Source_Serif_Pro:Light',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#ab0782] text-[50px] text-nowrap tracking-[-2.25px] underline" href="https://www.figma.com/sites">
        Email
      </a>
      <a className="[text-underline-position:from-font] block cursor-pointer decoration-solid font-['Source_Serif_Pro:Light',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#5f00ad] text-[50px] text-nowrap tracking-[-2.25px] underline" href="https://www.figma.com/sites">
        Behance
      </a>
      <a className="[text-underline-position:from-font] block cursor-pointer decoration-solid font-['Source_Serif_Pro:Light',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#0034ad] text-[50px] text-nowrap tracking-[-2.25px] underline" href="http://linkedin.com/company/figma">
        LinkedIn
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="content-stretch flex flex-col items-center max-w-[1500px] pb-[80px] pt-0 px-0 relative shrink-0 w-full" data-name="Footer">
      <Links />
      <p className="font-['Source_Serif_Pro:Light',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[50px] text-black tracking-[-2.25px] w-full">© Sarah Chen 2025 All Rights Reserved</p>
    </footer>
  );
}

export default function Tablet() {
  return (
    <div className="bg-white relative size-full" data-name="Tablet">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[50px] py-0 relative size-full">
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  );
}