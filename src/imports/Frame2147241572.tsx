import imgImageLogo from "figma:asset/7e1096ae6877c4f73af8ea54866c56e7194c8e3b.png";

function LandingPage() {
  return <div className="bg-white h-[2.993px] shrink-0 w-[39.993px]" data-name="LandingPage" />;
}

function SlotClone() {
  return (
    <div className="h-[38.969px] relative shrink-0 w-[47.987px]" data-name="SlotClone">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10.998px] items-start pb-0 pl-[3.997px] pr-0 pt-[3.997px] relative size-full">
        {[...Array(3).keys()].map((_, i) => (
          <LandingPage key={i} />
        ))}
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[17.998px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[18px] text-nowrap text-white top-[0.16px] tracking-[1.5605px] uppercase">EN</p>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[48.81px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.836px] border-solid border-white inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[1.836px] pt-[11.83px] px-[10.835px] relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[31.998px] h-[112.624px] items-end right-[27.19px] top-[32px] w-[48.81px]" data-name="Container">
      <SlotClone />
      <Container />
    </div>
  );
}

function Container2() {
  return <div className="h-[132.788px] w-[140.076px]" data-name="Container" />;
}

function RotatingLogo() {
  return (
    <div className="absolute left-[32px] size-[99.991px] top-[38.31px]" data-name="RotatingLogo">
      <div className="absolute flex h-[185.035px] items-center justify-center left-[-207.75px] top-[-131.39px] w-[187.703px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[150deg]">
          <Container2 />
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

function LandingPage1() {
  return (
    <div className="absolute inset-[0_0_-22px_0]" data-name="LandingPage">
      <Container1 />
      <RotatingLogo />
      <div className="absolute bottom-[21.52px] flex items-center justify-center left-[27px] top-[28px] w-[140.585px]">
        <div className="flex-none h-[123.777px] rotate-[260deg] w-[107.625px]">
          <ImageLogo />
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <LandingPage1 />
    </div>
  );
}