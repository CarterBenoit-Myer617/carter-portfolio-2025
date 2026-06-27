function StickyNavigation() {
  return <div className="bg-white h-[2.979px] shrink-0 w-[39.972px]" data-name="StickyNavigation" />;
}

function SlotClone() {
  return (
    <div className="h-[38.965px] relative shrink-0 w-[47.966px]" data-name="SlotClone">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10.995px] items-end pb-[4.052px] pl-0 pr-[3.986px] pt-0 relative size-full">
        {[...Array(3).keys()].map((_, i) => (
          <StickyNavigation key={i} />
        ))}
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[18.004px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[-0.94px_-1.16px_0.95px_-0.26px] leading-[18px] not-italic text-[18px] text-center text-nowrap text-white tracking-[1.5605px] uppercase">EN</p>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[34.453px] relative shrink-0 w-[48.799px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.402px] border-solid border-white inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[1.402px] pl-[11px] pr-[12.222px] pt-[10px] relative size-full">
        <Text />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[31.978px] items-end relative size-full" data-name="Container">
      <SlotClone />
      <Button />
    </div>
  );
}