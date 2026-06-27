function H2Bold() {
  return (
    <div className="h-[72px] relative shrink-0 w-[176px]" data-name="h2-bold">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-black top-0 tracking-[-0.7525px] w-[176px]">Working at the intersection of culture, ethics, and clarity</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Heading">
      <H2Bold />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[166px] leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] tracking-[-0.7525px] w-[176px]">I apply the rigor of high-performance athletics to design infrastructure that preserves culture and expands access. Former Division I rower building visual systems for economic sovereignty and community empowerment.</p>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[263px] items-start relative shrink-0 w-[176px]" data-name="Title-">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[34px] not-italic relative shrink-0 text-[17px] text-black tracking-[-0.1172px] w-[156px]">Carter Benoît-Myer</p>
      <Heading />
      <Paragraph />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20.992px] relative shrink-0 w-[93.376px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[47px] not-italic text-[14px] text-black text-center text-nowrap top-[0.17px] tracking-[3.8496px] translate-x-[-50%] uppercase">View work</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-center pl-[1.626px] pr-[1.634px] py-[1.626px] relative shrink-0 w-[134px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.626px] border-black border-solid inset-0 pointer-events-none" />
      <Text />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20.992px] relative shrink-0 w-[93.376px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[47.5px] not-italic text-[14px] text-black text-center text-nowrap top-[0.17px] tracking-[3.8496px] translate-x-[-50%] uppercase">Contact</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-center pl-[1.626px] pr-[1.634px] py-[1.626px] relative shrink-0 w-[134px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.626px] border-black border-solid inset-0 pointer-events-none" />
      <Text1 />
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0" data-name="Button/container">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <Title />
      <ButtonContainer />
    </div>
  );
}

export default function ManifestoSectionMobile() {
  return (
    <div className="bg-white relative size-full" data-name="Manifesto section mobile">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pl-[110px] pr-[87px] pt-[41px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}