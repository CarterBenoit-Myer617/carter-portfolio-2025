function Heading() {
  return (
    <div className="h-[40px] relative shrink-0 w-[300px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute bottom-[28.04px] font-['Inter:Bold',sans-serif] font-bold leading-none left-[-0.34px] not-italic right-[15.34px] text-[28px] text-white tracking-[-0.5px] translate-y-[100%]">Carter Benoît Myer</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[53.984px] relative shadow-[0px_3px_6px_0px_rgba(0,0,0,0.12)] shrink-0 w-[299.986px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[18px] text-white top-[-0.03px] tracking-[0.5px] w-[273px]">A selection of commissioned projects ranging from brand identity to digital experiences.</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[18.011px] relative shrink-0 w-[72.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[36.5px] not-italic text-[12px] text-center text-nowrap text-white top-[0.01px] tracking-[2px] translate-x-[-50%] uppercase">Contact</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="basis-0 bg-[rgba(0,0,0,0.1)] grow h-[43.989px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.014px] border-solid border-white inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.014px] relative size-full">
          <Text />
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[18.011px] relative shrink-0 w-[87.978px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[44px] not-italic text-[12px] text-center text-nowrap text-white top-[0.01px] tracking-[2px] translate-x-[-50%] uppercase">View Work</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 bg-[rgba(0,0,0,0.1)] grow h-[43.989px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.014px] border-solid border-white inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[1.014px] pr-[1.03px] py-[1.014px] relative size-full">
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[43.989px] relative shrink-0 w-[299.986px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.991px] items-center justify-center pl-[0.016px] pr-0 py-0 relative size-full">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[172px] relative shrink-0 w-[300px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-between relative size-full">
        <Heading />
        <Paragraph />
        <Container />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20.006px] relative shrink-0 w-[53.873px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Consolas:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.8)] top-[-0.99px] w-[54px]">03 — 04</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20.006px] relative shrink-0 w-[44.781px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-[0.03px] tracking-[0.7px] uppercase">ROAM</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[20.006px] relative shrink-0 w-[299.986px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text2 />
        <Text3 />
      </div>
    </div>
  );
}

function Container3() {
  return <div className="bg-white h-[1.996px] shrink-0 w-full" data-name="Container" />;
}

function Container4() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] h-[1.996px] relative shrink-0 w-[299.986px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pl-0 pr-[176.392px] py-0 relative rounded-[inherit] size-full">
        <Container3 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-gradient-to-t from-[rgba(0,0,0,0.8)] relative shrink-0 to-[rgba(0,0,0,0)]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15.999px] items-center relative">
        <Container2 />
        <Container4 />
      </div>
    </div>
  );
}

export default function Container6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between relative size-full" data-name="Container">
      <Container1 />
      <Container5 />
    </div>
  );
}