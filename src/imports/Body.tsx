function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[20px]">
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[1.29px] w-full">01</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-70 relative shrink-0" data-name="Paragraph">
      <Frame3 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Heading 2">
      <p className="font-['Arial:Regular',sans-serif] leading-[90px] not-italic relative shrink-0 text-[60px] text-nowrap text-white tracking-[7px] uppercase">WORK</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0">
      <Paragraph />
      <Heading />
      <p className="font-['Arial:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[20px] text-white tracking-[0.14px] w-[257px]">A selection of commissioned projects ranging from brand identity to digital experiences.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative">
        <Frame2 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[#18181b] h-[450px] relative rounded-[10px] shrink-0 w-[363px]" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Frame1 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex items-center justify-end opacity-70 relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-right text-white tracking-[1.29px]">02</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Heading 2">
      <p className="font-['Arial:Regular',sans-serif] leading-[90px] not-italic relative shrink-0 text-[60px] text-nowrap text-right text-white tracking-[7px] uppercase">ABOUT</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Paragraph">
      <p className="font-['Arial:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[20px] text-right text-white tracking-[0.14px] w-[233px]">Schultzschultz is a design studio focusing on corporate design, type design and digital tool development.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-end justify-center relative shrink-0 w-[318.995px]">
      <Paragraph1 />
      <Heading1 />
      <Paragraph2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0">
      <Frame />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-[#18181b] h-[450px] relative rounded-[10px] shrink-0 w-[363px]" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Frame4 />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[20px]">
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[1.29px] w-full">03</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-70 relative shrink-0" data-name="Paragraph">
      <Frame5 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Heading 2">
      <p className="font-['Arial:Regular',sans-serif] leading-[90px] not-italic relative shrink-0 text-[60px] text-nowrap text-white tracking-[7px] uppercase">STUDIO</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0">
      <Paragraph3 />
      <Heading2 />
      <p className="font-['Arial:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[20px] text-white tracking-[0.14px] w-[257px]">A selection of commissioned projects ranging from brand identity to digital experiences.</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative">
        <Frame6 />
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#18181b] h-[450px] relative rounded-[10px] shrink-0 w-[363px]" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Frame7 />
      </div>
    </div>
  );
}

function SectionPageCardImg() {
  return (
    <div className="bg-[#736878] content-stretch flex flex-col gap-[12px] h-[1566px] items-center justify-center overflow-clip px-0 py-[80px] relative shrink-0 w-full" data-name="Section_page_card_img">
      <Section />
      <Section1 />
      <Section2 />
    </div>
  );
}

export default function Body() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full" data-name="Body">
      <SectionPageCardImg />
    </div>
  );
}