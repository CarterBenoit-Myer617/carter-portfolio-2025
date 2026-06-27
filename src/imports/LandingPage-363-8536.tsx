import imgImageLogo from "figma:asset/7e1096ae6877c4f73af8ea54866c56e7194c8e3b.png";

function LandingPage() {
  return <div className="bg-white h-[3px] shrink-0 w-[40px]" data-name="LandingPage" />;
}

function LandingPage1() {
  return <div className="basis-0 bg-white grow min-h-px min-w-px shrink-0 w-[40px]" data-name="LandingPage" />;
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
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[18px] left-0 not-italic text-[18px] text-nowrap text-white top-[-1px] tracking-[2px] uppercase">EN</p>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[48.578px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[2px] pt-[12px] px-[11px] relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[113px] items-end left-[305.42px] top-[24px] w-[48.578px]" data-name="Container">
      <SlotClone />
      <Container />
    </div>
  );
}

function Container2() {
  return <div className="h-[123.774px] w-[107.623px]" data-name="Container" />;
}

function Container3() {
  return (
    <div className="h-[132.785px] relative w-[140.073px]" data-name="Container">
      <div className="absolute flex h-[143.466px] items-center justify-center left-[-136.89px] top-[-37.83px] w-[153.119px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[110deg]">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function RotatingLogo() {
  return (
    <div className="absolute left-[8px] size-[100px] top-[30.5px]" data-name="RotatingLogo">
      <div className="absolute flex h-[185.032px] items-center justify-center left-[-207.73px] top-[-131.39px] w-[187.699px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[150deg]">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function ImageLogo() {
  return (
    <div className="relative size-full" data-name="Image (Logo)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageLogo} />
    </div>
  );
}

export default function LandingPage2() {
  return (
    <div className="relative size-full" data-name="LandingPage">
      <Container1 />
      <RotatingLogo />
      <div className="absolute bottom-[27.45px] flex items-center justify-center left-[12.4px] top-[25.93px] w-[123.777px]">
        <div className="flex-none h-[123.777px] rotate-[270deg] w-[107.623px]">
          <ImageLogo />
        </div>
      </div>
    </div>
  );
}