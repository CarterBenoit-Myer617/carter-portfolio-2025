function Heading() {
  return (
    <div className="h-[34px] relative shrink-0 w-[247px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[34px] not-italic relative shrink-0 text-[27px] text-nowrap text-white tracking-[-0.5488px]">Carter Benoît-Myer</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[88px] relative shrink-0 w-[257px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[22px] left-0 not-italic text-[20px] text-white top-0 tracking-[0.14px] w-[257px]">A selection of commissioned projects ranging from brand identity to digital experiences.</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[21px] relative shrink-0 w-[77.672px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[39.5px] not-italic text-[12px] text-center text-nowrap text-white top-0 tracking-[2.85px] translate-x-[-50%] uppercase">Contact</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[41px] relative shrink-0 w-[120px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-px pr-[1.016px] py-px relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[21px] relative shrink-0 w-[94.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[47px] not-italic text-[12px] text-center text-nowrap text-white top-0 tracking-[2.85px] translate-x-[-50%] uppercase">View work</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 grow h-[41px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-px pr-[1.016px] py-px relative size-full">
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[42px] relative shrink-0 w-[280px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

export default function Container1() {
  return (
    <div className="bg-black relative size-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[17px] items-start justify-center pl-[40px] pr-0 py-0 relative size-full">
          <Heading />
          <Paragraph />
          <Container />
        </div>
      </div>
    </div>
  );
}