function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] py-0 relative">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[12px] text-black text-center text-nowrap tracking-[2.85px] uppercase">Contact</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center p-[1.626px] relative shrink-0 w-[94px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.626px] border-black border-solid inset-0 pointer-events-none" />
      <Text />
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[12px] text-black text-center text-nowrap tracking-[2.85px] uppercase">View work</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center p-[1.626px] relative shrink-0 w-[116px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.626px] border-black border-solid inset-0 pointer-events-none" />
      <Text1 />
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex gap-[12px] items-start pb-0 pt-[10px] px-0 relative shrink-0" data-name="Button Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[34px] not-italic relative shrink-0 text-[17px] text-black text-nowrap tracking-[-0.1172px]">Carter Benoît-Myer</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.7525px] w-[246px]">Working at the intersection of culture, ethics, and clarity</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] tracking-[-0.7525px] w-[246px]">I apply the rigor of high-performance athletics to design infrastructure that preserves culture and expands access. Former Division I rower building visual systems for economic sovereignty and community empowerment.</p>
      <ButtonContainer />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container />
    </div>
  );
}

function ManifestoSectionMobile() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[326px] items-center justify-center left-0 pl-[49px] pr-0 py-0 top-0 w-[375.029px]" data-name="Manifesto section mobile">
      <Container1 />
    </div>
  );
}

export default function ManifestoSectionanifestoSection() {
  return (
    <div className="relative size-full" data-name="Manifesto Sectionanifesto section">
      <ManifestoSectionMobile />
    </div>
  );
}