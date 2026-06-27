import svgPaths from "./svg-fjqy5wtcxd";
import imgTeaser01WorkMp4 from "figma:asset/51b6052d3b21d2eddf7eecf6002200a0ee3c4449.png";
import imgBackground from "figma:asset/b78bad563eba5cdecb6e32a9e8b3ec80a09e2d0e.png";
import imgTeaser02ServicesMp4 from "figma:asset/01d0edeaf788a43da52f3492da515ece4cdcc1c5.png";
import imgBackground1 from "figma:asset/8b5ecb9de4c42053aa6953e367bcb85d6845c06e.png";
import imgTeaser04StudioMp4 from "figma:asset/1215d514a06241d8a0d7f99185b436a2468b53db.png";
import imgBackground2 from "figma:asset/5092e60b9ba18de91b10636b17f48c5defe67111.png";
import imgHeaderPng from "figma:asset/b4cffda2343287ecc02d5bb17b540d66f190f0d5.png";

function Container() {
  return (
    <div className="basis-0 content-stretch flex grow items-start justify-center min-h-px min-w-px relative self-stretch shrink-0" data-name="Container">
      <div className="basis-0 grow h-full min-h-px min-w-px shrink-0" data-name="Rectangle" />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute content-stretch flex items-start left-[38.39px] right-[38.39px] top-0" data-name="Section">
      {[...Array(4).keys()].map((_, i) => (
        <Container key={i} />
      ))}
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[50.4px] not-italic relative shrink-0 text-[35.859px] text-black tracking-[0.2px] w-full">
        <p className="mb-0">Schultzschultz is a German design studio, that offers custom</p>
        <p className="mb-0">design solutions, with a focus on corporate design, type</p>
        <p>design and digital tool development, serving clients globally.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-center text-nowrap tracking-[4px] uppercase">
        <p className="leading-[18px] whitespace-pre">CONTACT</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Container">
      <Container1 />
    </div>
  );
}

function Link() {
  return (
    <div className="box-border content-stretch flex items-start pb-[20px] pt-[18px] px-[18px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none" />
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[30px] items-start left-0 max-w-[1305px] right-0 top-[-1.11px]" data-name="Container">
      <Heading2 />
      <Container3 />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-white h-[237.17px] left-[480px] right-[384px] top-[1247.58px]" data-name="Background">
      <Container4 />
    </div>
  );
}

function Teaser01WorkMp() {
  return (
    <div className="absolute h-[1004.39px] left-[calc(50%-0.01px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1785.61px]" data-name="Teaser_01-Work.mp4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-17.5%] max-w-none top-0 w-[135%]" src={imgTeaser01WorkMp4} />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[724.44px] left-0 overflow-clip top-0 w-[1785.61px]" data-name="Container">
      <Teaser01WorkMp />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[68px] text-nowrap text-white tracking-[6.9px] uppercase">
        <p className="leading-[88.4px] whitespace-pre">Work</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <Link1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="[text-shadow:rgba(0,0,0,0.3)_0px_0px_10px] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[35.438px] text-nowrap text-white">
        <p className="leading-[50.4px] whitespace-pre">A selection of commissioned projects.</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <Link2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[76.7px] pl-0 pr-[169.984px] pt-[19.14px] relative w-full">
          <Heading5 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="[text-shadow:rgba(0,0,0,0.3)_0px_0px_10px] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[17.859px] text-center text-nowrap text-white tracking-[4px] uppercase">
        <p className="leading-[18px] whitespace-pre">Show more</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Container">
      <Container7 />
    </div>
  );
}

function Link3() {
  return (
    <div className="box-border content-stretch flex items-start pb-[20px] pt-[18px] px-[18px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-2 border-[#f9f9f9] border-solid inset-0 pointer-events-none" />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link3 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(0,0,0,0.88)] min-h-[654px] relative shrink-0 w-full" data-name="Overlay">
      <div className="min-h-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start min-h-inherit pb-[214.266px] pl-[446.391px] pr-[124.984px] pt-[178.547px] relative w-full">
          <Heading />
          <Container6 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[134.39px] top-[1695.94px]" data-name="Background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[102.7%] left-0 max-w-none top-[-1.35%] w-full" src={imgBackground} />
      </div>
      <Container5 />
      <Overlay />
    </div>
  );
}

function Teaser02ServicesMp() {
  return (
    <div className="absolute h-[972px] left-1/2 top-[calc(50%-0.02px)] translate-x-[-50%] translate-y-[-50%] w-[1728px]" data-name="Teaser_02-Services.mp4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-17.5%] max-w-none top-0 w-[135%]" src={imgTeaser02ServicesMp4} />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[758.77px] left-0 overflow-clip top-0 w-[1728px]" data-name="Container">
      <Teaser02ServicesMp />
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[68px] text-nowrap text-white tracking-[6.9px] uppercase">
        <p className="leading-[88.4px] whitespace-pre">Services</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <Link4 />
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[50.4px] not-italic relative shrink-0 text-[35.578px] text-nowrap text-white whitespace-pre">
        <p className="mb-0">From digital and print applications to bespoke visual</p>
        <p>identities to whole brand communication.</p>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[0.585px] pt-0 px-0 relative shrink-0 w-full" data-name="Heading 3">
      <Link5 />
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[73.87px] pl-0 pr-[115.766px] pt-[18.765px] relative w-full">
          <Heading6 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="[text-shadow:rgba(0,0,0,0.3)_0px_0px_10px] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[17.859px] text-center text-nowrap text-white tracking-[4px] uppercase">
        <p className="leading-[18px] whitespace-pre">Show more</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Container">
      <Container12 />
    </div>
  );
}

function Link6() {
  return (
    <div className="box-border content-stretch flex items-start pb-[20px] pt-[18px] px-[18px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-2 border-[#f9f9f9] border-solid inset-0 pointer-events-none" />
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link6 />
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(0,0,0,0.8)] relative shrink-0 w-full" data-name="Overlay">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start pb-[207.359px] pl-[432px] pr-[138.234px] pt-[172.797px] relative w-full">
          <Heading1 />
          <Container11 />
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-repeat bg-size-[1821.05px_758.77px] bg-top-left content-stretch flex flex-col items-start left-[192px] right-0 top-[2423.38px]" data-name="Background" style={{ backgroundImage: `url('${imgBackground1}')` }}>
      <Container10 />
      <Overlay1 />
    </div>
  );
}

function Teaser04StudioMp() {
  return (
    <div className="absolute h-[918px] left-1/2 top-[calc(50%-0.01px)] translate-x-[-50%] translate-y-[-50%] w-[1632px]" data-name="Teaser_04-Studio.mp4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-17.5%] max-w-none top-0 w-[135%]" src={imgTeaser04StudioMp4} />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[789.14px] left-0 overflow-clip top-0 w-[1632px]" data-name="Container">
      <Teaser04StudioMp />
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[68px] text-nowrap text-white tracking-[6.9px] uppercase">
        <p className="leading-[88.4px] whitespace-pre">Studio</p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <Link7 />
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[35.578px] text-nowrap text-white">
        <p className="leading-[50.4px] whitespace-pre">Learn more about us and get in touch.</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <Link8 />
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[77.19px] pl-0 pr-[122.391px] pt-[19.23px] relative w-full">
          <Heading8 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="[text-shadow:rgba(0,0,0,0.3)_0px_0px_10px] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[17.859px] text-center text-nowrap text-white tracking-[4px] uppercase">
        <p className="leading-[18px] whitespace-pre">Show more</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Container">
      <Container17 />
    </div>
  );
}

function Link9() {
  return (
    <div className="box-border content-stretch flex items-start pb-[20px] pt-[18px] px-[18px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-2 border-[#f9f9f9] border-solid inset-0 pointer-events-none" />
      <Container18 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Link9 />
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(0,0,0,0.8)] relative shrink-0 w-full" data-name="Overlay">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start pb-[293.75px] pl-[408px] pr-0 pt-[163.188px] relative w-full">
          <Heading7 />
          <Container16 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-repeat bg-size-[1893.94px_789.14px] bg-top-left content-stretch flex flex-col items-start left-0 right-[288px] top-[3185.14px]" data-name="Background" style={{ backgroundImage: `url('${imgBackground2}')` }}>
      <Container15 />
      <Overlay2 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[4px] uppercase w-full">
        <p className="leading-[26px]">Contact</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[17.156px] text-white w-full">
        <p className="mb-0">Schultzschultz GmbH</p>
        <p className="mb-0">Koselstraße 37</p>
        <p className="mb-0">60318 Frankfurt am Main</p>
        <p>Germany</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16.031px] text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">T +49 69 90 55 77 30</p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[17.719px] text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">info@schultzschultz.com</p>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-nowrap text-white">
        <p className="leading-[24px] text-[17.859px] whitespace-pre">www.schultzschultz.com</p>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <Link10 />
      <Link11 />
      <Link12 />
    </div>
  );
}

function Container20() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-[24px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Heading4 />
      <Heading9 />
    </div>
  );
}

function Container21() {
  return (
    <div className="box-border content-stretch flex flex-col items-start max-w-[473.33px] pb-0 pt-[8px] px-0 relative shrink-0 w-[473.33px]" data-name="Container">
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[288px] right-[1158.67px] top-[76.8px]" data-name="Container">
      <Container21 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[4px] uppercase w-full">
        <p className="leading-[26px]">Social Media</p>
      </div>
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[17.859px] text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">Instagram</p>
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">LinkedIn</p>
      </div>
    </div>
  );
}

function Link15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">Youtube</p>
      </div>
    </div>
  );
}

function Link16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">X</p>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <Link13 />
      <Link14 />
      <Link15 />
      <Link16 />
    </div>
  );
}

function Container23() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-[24px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Heading10 />
      <Heading11 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[771.33px] pb-[80px] pt-[8px] px-0 right-[675.34px] top-[76.8px]" data-name="Container">
      <Container23 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[4px] uppercase w-full">
        <p className="leading-[26px]">Press</p>
      </div>
    </div>
  );
}

function Link17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[17.578px] text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">press@schultzschultz.com</p>
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <Link17 />
    </div>
  );
}

function Container25() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-[24px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Heading12 />
      <Heading13 />
    </div>
  );
}

function Container26() {
  return (
    <div className="box-border content-stretch flex flex-col items-start max-w-[473.34px] mb-[-8px] pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container25 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[4px] uppercase w-full">
        <p className="leading-[26px]">Workshops</p>
      </div>
    </div>
  );
}

function Link18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[17.578px] text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">workshops@schultzschultz.com</p>
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <Link18 />
    </div>
  );
}

function Container27() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-[24px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Heading14 />
      <Heading15 />
    </div>
  );
}

function Container28() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-8px] pb-0 pt-[38px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[1254.66px] pb-[40px] pt-0 px-0 right-[192px] top-[76.8px]" data-name="Container">
      <Container26 />
      <Container28 />
    </div>
  );
}

function Link19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">Impressum</p>
      </div>
    </div>
  );
}

function Heading16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[288px] top-[336.8px]" data-name="Heading 5">
      <Link19 />
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute bg-[#121212] h-[495.19px] left-0 right-0 top-[4054.28px]" data-name="Background">
      <Container22 />
      <Container24 />
      <Container29 />
      <Heading16 />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] left-[1254.66px] not-italic text-[17.719px] text-white top-[348.8px] translate-y-[-50%] w-[250.11px]">
        <p className="leading-[24px]">© Schultzschultz GmbH 2025</p>
      </div>
    </div>
  );
}

function HeaderPng() {
  return (
    <div className="h-[1080px] max-w-[1920px] mb-[-120px] relative shrink-0 w-full" data-name="Header.png">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-black inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgHeaderPng} />
        </div>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[84px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84 84">
        <g id="SVG">
          <path d={svgPaths.p3eef1ab0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <Svg />
    </div>
  );
}

function Container31() {
  return (
    <div className="box-border content-stretch flex flex-col items-center pb-[8.39px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="box-border content-stretch flex flex-col items-start max-w-[1920px] mb-[-120px] mix-blend-difference pb-[140px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-0 max-w-[1920px] pb-[120px] pt-0 px-0 right-0 top-[-17.61px]" data-name="Container">
      <HeaderPng />
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[4549.47px] relative shrink-0 w-full" data-name="Container">
      <Section />
      <Background />
      <Background1 />
      <Background2 />
      <Background3 />
      <Background4 />
      <Container33 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-center text-nowrap tracking-[2px] uppercase">
        <p className="leading-[18px] whitespace-pre">DE</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Container">
      <Container35 />
    </div>
  );
}

function Link20() {
  return (
    <div className="box-border content-stretch flex items-start px-[9px] py-[10px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none" />
      <Container36 />
    </div>
  );
}

function Container37() {
  return (
    <div className="box-border content-stretch flex flex-col items-end pb-0 pl-[1819.05px] pr-0 pt-[2px] relative shrink-0" data-name="Container">
      <Link20 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[170px] items-start left-0 pb-0 pt-[130px] px-0 top-0 w-[1920px]" data-name="Container">
      <Container37 />
    </div>
  );
}

function Label() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Label">
      <div className="absolute bg-black h-[3px] left-0 right-0 top-[calc(50%-12.5px)] translate-y-[-50%]" data-name="Background" />
      <div className="absolute bg-black h-[3px] left-0 right-0 top-[calc(50%+1.5px)] translate-y-[-50%]" data-name="Background" />
      <div className="absolute bg-black h-[3px] left-0 right-0 top-[calc(50%+15.5px)] translate-y-[-50%]" data-name="Background" />
    </div>
  );
}

function Container39() {
  return (
    <div className="box-border content-stretch flex flex-col items-end pl-[1820px] pr-0 py-0 relative shrink-0" data-name="Container">
      <Label />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[100px] items-start left-0 pb-0 pt-[60px] px-0 top-0 w-[1920px]" data-name="Container">
      <Container39 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[5.73%_5.5%_5.7%_5.5%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 178 178">
        <g id="Group">
          <path d={svgPaths.p3148b400} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1f186380} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p23690a00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p3d497000} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p3d338780} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p3a90c900} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p349d6140} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p2718bd00} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p32602980} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p3957da80} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p1b6bc500} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p32cc5a80} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p1741a000} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.pe3f5dc0} fill="var(--fill-0, white)" id="Vector_14" />
        </g>
      </svg>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[200px]" data-name="SVG">
      <Group />
    </div>
  );
}

function Link21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <Svg1 />
    </div>
  );
}

function Container41() {
  return (
    <div className="box-border content-stretch flex flex-col items-center pb-[8.39px] pt-0 px-0 relative w-[200px]" data-name="Container">
      <Link21 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[6.28px] max-w-[1920px] mix-blend-difference top-0 w-[232.114px]" data-name="Container">
      <div className="flex h-[259.212px] items-center justify-center relative shrink-0 w-[264.227px]" style={{ "--transform-inner-width": "200", "--transform-inner-height": "208.375" } as React.CSSProperties}>
        <div className="flex-none rotate-[250deg]">
          <Container41 />
        </div>
      </div>
    </div>
  );
}

export default function Component1920WLight() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="1920w light">
      <Container38 />
      <Container40 />
      <Container42 />
      <Container34 />
    </div>
  );
}