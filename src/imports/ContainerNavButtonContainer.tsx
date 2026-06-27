function LandingPage() {
  return <div className="bg-white h-[2.993px] shrink-0 w-[39.993px]" data-name="LandingPage" />;
}

function SlotCloneHamburger() {
  return (
    <div className="relative shrink-0" data-name="SlotClone-hamburger">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11px] items-start p-[4px] relative">
        {[...Array(3).keys()].map((_, i) => (
          <LandingPage key={i} />
        ))}
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[17.998px] relative shrink-0 w-[27.14px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[18px] text-nowrap text-white top-[0.16px] tracking-[1.5605px] uppercase">EN</p>
    </div>
  );
}

function ContainerLanguageControl() {
  return (
    <div className="relative shrink-0" data-name="Container language control">
      <div aria-hidden="true" className="absolute border-[1.836px] border-solid border-white inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center p-[10px] relative">
        <Text />
      </div>
    </div>
  );
}

export default function ContainerNavButtonContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end justify-center relative size-full" data-name="Container-NAV button container">
      <SlotCloneHamburger />
      <ContainerLanguageControl />
    </div>
  );
}