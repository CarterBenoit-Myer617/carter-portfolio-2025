import svgPaths from "./svg-9tv6zbfnaj";
import imgHeroPreview from "figma:asset/021c349ac05dc4997129639d9ed8074d3c7a21b0.png";

function Heading() {
  return (
    <div className="absolute content-stretch flex h-[34px] items-start left-[124px] top-[531px] w-[246.234px]" data-name="Heading">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[34px] not-italic relative shrink-0 text-[27px] text-nowrap text-white tracking-[-0.5488px]">Carter Benoît Myer</p>
    </div>
  );
}

function Container() {
  return <div className="absolute border border-solid border-white h-[64px] left-0 top-0 w-[187px]" data-name="Container" />;
}

function Paragraph() {
  return (
    <div className="absolute h-[21px] left-[54.73px] top-[21.55px] w-[77.672px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[39.5px] not-italic text-[12px] text-center text-nowrap text-white top-0 tracking-[2.85px] translate-x-[-50%] uppercase">Contact</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[64px] left-0 top-0 w-[187px]" data-name="Container">
      <Paragraph />
    </div>
  );
}

function ContactButton() {
  return (
    <div className="absolute h-[64px] left-0 top-0 w-[187px]" data-name="ContactButton">
      <Container />
      <Container1 />
    </div>
  );
}

function Container2() {
  return <div className="absolute border border-solid border-white inset-0" data-name="Container" />;
}

function Paragraph1() {
  return (
    <div className="h-[21px] relative shrink-0 w-[94.484px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[47px] not-italic text-[12px] text-center text-nowrap text-white top-0 tracking-[2.85px] translate-x-[-50%] uppercase">View work</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[1px_0_0_0] items-center justify-center px-[26px] py-[21px]" data-name="Container">
      <Paragraph1 />
    </div>
  );
}

function ViewWorkButton() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-[188px]" data-name="ViewWorkButton">
      <Container2 />
      <Container3 />
    </div>
  );
}

function ButtonsContainer() {
  return (
    <div className="absolute h-[64px] left-[124px] top-[754px] w-[395px]" data-name="ButtonsContainer">
      <ContactButton />
      <ViewWorkButton />
    </div>
  );
}

function Frame() {
  return (
    <div className="[grid-area:1_/_1] bg-[#100f24] place-self-stretch relative shrink-0" data-name="Frame">
      <Heading />
      <div className="absolute flex flex-col font-['Arial:Regular',sans-serif] h-[145px] justify-center leading-[0] left-[124px] not-italic text-[30px] text-white top-[638.5px] tracking-[0.14px] translate-y-[-50%] w-[395px]">
        <p className="leading-none">A selection of commissioned projects ranging from brand identity to digital experiences.</p>
      </div>
      <ButtonsContainer />
    </div>
  );
}

function HeroPreview() {
  return (
    <div className="absolute h-[1080px] left-0 opacity-80 top-0 w-[632.5px]" data-name="HeroPreview">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHeroPreview} />
    </div>
  );
}

function HeroPreview1() {
  return <div className="absolute bg-[rgba(0,0,0,0.2)] h-[1080px] left-0 top-0 w-[632.5px]" data-name="HeroPreview" />;
}

function Container4() {
  return (
    <div className="absolute h-[1080px] left-0 opacity-[0.712] top-0 w-[632.5px]" data-name="Container">
      <HeroPreview />
      <HeroPreview1 />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16px] relative shrink-0 w-[58.984px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.5)] top-px tracking-[1.2px] w-[59px]">04 — 04</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-[0.5px] tracking-[1.8496px] uppercase">Spatial Activation</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[32px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Container6() {
  return <div className="bg-white h-px shrink-0 w-full" data-name="Container" />;
}

function Container7() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col h-px items-start overflow-clip pl-[-120.768px] pr-[120.768px] py-0 relative shrink-0 w-[128px]" data-name="Container">
      <Container6 />
    </div>
  );
}

function IconArrow() {
  return (
    <div className="h-[60px] overflow-clip relative shrink-0 w-full" data-name="Icon/Arrow">
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[60px]" data-name="ArrowDown">
      <IconArrow />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[18px] h-[282px] items-start left-[58.5px] px-0 py-[82px] top-[678px] w-[269px]" data-name="Container">
      <Container5 />
      <Container7 />
      <ArrowDown />
    </div>
  );
}

function HeroPreview2() {
  return (
    <div className="bg-[#18181b] h-[1080px] overflow-clip relative shrink-0 w-full" data-name="HeroPreview">
      <Container4 />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="[grid-area:1_/_2] bg-black content-stretch flex flex-col items-start overflow-clip place-self-stretch relative shrink-0" data-name="Container">
      <HeroPreview2 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] relative size-full" data-name="Section">
      <Frame />
      <Container9 />
    </div>
  );
}