function Paragraph() {
  return (
    <div className="content-stretch flex items-center justify-end opacity-70 relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-right text-white tracking-[1.29px]">02</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Heading 2">
      <p className="font-['Arial:Regular',sans-serif] leading-[90px] not-italic relative shrink-0 text-[60px] text-nowrap text-right text-white tracking-[7px] uppercase">ABOUT</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Paragraph">
      <p className="font-['Arial:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[20px] text-right text-white tracking-[0.14px] w-[233px]">Schultzschultz is a design studio focusing on corporate design, type design and digital tool development.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[248px] items-end justify-center relative shrink-0 w-[269px]">
      <Paragraph />
      <Heading />
      <Paragraph1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <Frame />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#18181b] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[10px] size-full" data-name="Section">
      <Frame1 />
    </div>
  );
}