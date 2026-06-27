import svgPaths from "./svg-1rz3rf8jsy";
import { motion } from 'motion/react';

function Text() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] tracking-[1.2px] w-[59px]">03 — 04</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[1.8496px] uppercase">Digital Design</p>
    </div>
  );
}

function Container() {
  return (
    <motion.div 
      className="bg-white h-[0.999px] shrink-0 w-full" 
      data-name="Container"
      initial={{ x: '-100%' }}
      animate={{ x: '0%' }}
      transition={{ duration: 4, ease: 'linear', repeat: Infinity }}
    />
  );
}

function Container1() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col h-[0.999px] items-start overflow-clip pl-[-56.093px] pr-[56.093px] py-0 relative shrink-0 w-[127.993px]" data-name="Container">
      <Container />
    </div>
  );
}

function IconArrow() {
  return (
    <div className="h-[60px] overflow-clip relative shrink-0 w-full" data-name="Icon/Arrow">
      <div className="absolute inset-[24.5%_22.88%_21.47%_22.88%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.547 32.421">
          <path d={svgPaths.p24330700} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function ArrowDown() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="ArrowDown">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <IconArrow />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-center relative shrink-0 w-[74px]" data-name="Container">
      <ArrowDown />
    </div>
  );
}

export default function Container3() {
  return (
    <div className="content-start flex flex-wrap gap-[16px_0px] items-start relative size-full" data-name="Container">
      <Text />
      <Text1 />
      <Container1 />
      <Container2 />
    </div>
  );
}