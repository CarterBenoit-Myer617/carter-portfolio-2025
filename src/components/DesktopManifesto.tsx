import React from 'react';
import { useNavigate } from 'react-router-dom';

function Heading() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Heading 1">
      <p className="font-['Inter',sans-serif] leading-[34px] not-italic relative shrink-0 text-[27px] text-white text-nowrap tracking-[-0.5488px]" style={{ fontWeight: 700 }}>
        Carter Benoît-Myer
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[434px]" data-name="Paragraph">
      <p className="basis-0 font-['Inter',sans-serif] grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#D1D5DB] text-[30px] tracking-[0.14px]">
        A selection of commissioned projects ranging from brand identity to digital experiences.
      </p>
    </div>
  );
}

function ContactButtonText() {
  return (
    <div className="h-[21px] relative shrink-0 w-[76.877px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter',sans-serif] font-normal leading-[21px] left-[38.5px] not-italic text-[12px] text-black text-center text-nowrap top-[0.06px] tracking-[2.85px] translate-x-[-50%] uppercase">
          Contact
        </p>
      </div>
    </div>
  );
}

function ContactButton({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="h-[64px] relative shrink-0 w-[187px] cursor-pointer group" 
      data-name="Button"
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border-[1.224px] border-white border-solid inset-0 pointer-events-none group-hover:bg-white transition-colors" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.224px] relative size-full group-hover:bg-white transition-colors">
        <div className="h-[21px] relative shrink-0 w-[76.877px]" data-name="Text">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <p className="absolute font-['Inter',sans-serif] font-normal leading-[21px] left-[38.5px] not-italic text-[12px] text-white group-hover:text-black text-center text-nowrap top-[0.06px] tracking-[2.85px] translate-x-[-50%] uppercase transition-colors">
              Contact
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ViewWorkButton({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="h-[64px] relative shrink-0 w-[229px] cursor-pointer group" 
      data-name="Button"
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border-[1.224px] border-white border-solid inset-0 pointer-events-none group-hover:bg-white transition-colors" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[1.224px] relative size-full group-hover:bg-white transition-colors">
        <div className="h-[21px] relative shrink-0 w-[95.325px]" data-name="Text">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <p className="absolute font-['Inter',sans-serif] font-normal leading-[21px] left-[48px] not-italic text-[12px] text-white group-hover:text-black text-center text-nowrap top-[0.06px] tracking-[2.85px] translate-x-[-50%] uppercase transition-colors">
              View work
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonsContainer({ onContactClick, onViewWorkClick }: { onContactClick: () => void; onViewWorkClick: () => void }) {
  return (
    <div className="content-stretch flex gap-[15px] items-start relative shrink-0 w-full" data-name="Container">
      <ContactButton onClick={onContactClick} />
      <ViewWorkButton onClick={onViewWorkClick} />
    </div>
  );
}

function Frame({ onContactClick, onViewWorkClick }: { onContactClick: () => void; onViewWorkClick: () => void }) {
  return (
    <div className="h-[234px] relative shrink-0 w-[390px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[18px] items-start justify-center relative size-full">
        <Heading />
        <Paragraph />
        <ButtonsContainer onContactClick={onContactClick} onViewWorkClick={onViewWorkClick} />
      </div>
    </div>
  );
}

export function DesktopManifesto() {
  const navigate = useNavigate();

  return (
    <div className="bg-[radial-gradient(circle_at_center,#1F2937,#0B0F19)] content-stretch flex flex-col items-center justify-end pb-[140px] relative min-h-[963px]" data-name="DesktopDesktop manifesto manifesto">
      <Frame 
        onContactClick={() => navigate('/contact')}
        onViewWorkClick={() => navigate('/studio')}
      />
    </div>
  );
}