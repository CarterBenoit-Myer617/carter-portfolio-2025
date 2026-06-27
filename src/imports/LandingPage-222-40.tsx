import imgImageLogo from "figma:asset/7e1096ae6877c4f73af8ea54866c56e7194c8e3b.png";

function LandingPage() {
  return (
    <div className="bg-white h-[3px] relative shrink-0 w-[40px]" data-name="LandingPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function LandingPage1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-[40px]" data-name="LandingPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function SlotClone() {
  return (
    <div className="h-[39px] relative shrink-0 w-[48px]" data-name="SlotClone">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11px] items-start pl-[4px] pr-0 py-[4px] relative size-full">
        {[...Array(2).keys()].map((_, i) => (
          <LandingPage key={i} />
        ))}
        <LandingPage1 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[18px] text-nowrap text-white top-0 tracking-[1.5605px] uppercase">EN</p>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[49.133px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[2px] pt-[12px] px-[11px] relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[113px] items-end left-[985.87px] top-[32px] w-[49.133px]" data-name="Container">
      <SlotClone />
      <Container />
    </div>
  );
}

function ImageLogo() {
  return (
    <div className="h-[123.777px] relative w-[107.623px]" data-name="Image (Logo)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageLogo} />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[132.786px] relative w-[140.076px]" data-name="Container">
      <div className="absolute flex h-[143.467px] items-center justify-center left-[-136.9px] top-[-37.83px] w-[153.122px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[110deg]">
          <ImageLogo />
        </div>
      </div>
    </div>
  );
}

function RotatingLogo() {
  return (
    <div className="absolute left-[32px] size-[100px] top-[38.5px]" data-name="RotatingLogo">
      <div className="absolute flex h-[185.034px] items-center justify-center left-[-207.74px] top-[-131.39px] w-[187.702px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[150deg]">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

export default function LandingPage2() {
  return (
    <div className="relative size-full" data-name="LandingPage">
      <Container1 />
      <RotatingLogo />
    </div>
  );
}