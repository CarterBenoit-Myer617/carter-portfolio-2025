function Source() {
  return <div className="h-0 shrink-0 w-full" data-name="Source" />;
}

function Video() {
  return (
    <div className="absolute content-stretch flex flex-col h-[808px] items-start left-0 overflow-clip pb-0 pl-[-32px] pr-[969px] pt-[-344px] top-0 w-[937px]" data-name="Video">
      <Source />
    </div>
  );
}

function Container() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[808px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.2)] w-[937px]" data-name="Container" />;
}

function GridItem() {
  return (
    <div className="absolute h-[808px] left-0 top-0 w-[937px]" data-name="GridItem">
      <Video />
      <Container />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16px] opacity-0 relative shrink-0 w-[117.703px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap tracking-[2px] uppercase">Spatial Design</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-[67.844px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[30px] text-nowrap text-white top-[-3px] tracking-[-0.75px]">VAVE</p>
      </div>
    </div>
  );
}

function GridItem1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[124px] items-start justify-end left-0 pb-0 pl-[32px] pr-0 pt-[32px] top-[692px] w-[937px]" data-name="GridItem">
      <Text />
      <Heading />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[808px] left-0 overflow-clip top-0 w-[937px]" data-name="Container">
      <GridItem />
      <GridItem1 />
    </div>
  );
}

function ImageCreaition() {
  return <div className="absolute h-[400px] left-0 top-0 w-[464.5px]" data-name="Image (Creaition)" />;
}

function Container2() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[400px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.2)] w-[464.5px]" data-name="Container" />;
}

function GridItem2() {
  return (
    <div className="absolute h-[400px] left-0 top-0 w-[464.5px]" data-name="GridItem">
      <ImageCreaition />
      <Container2 />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16px] opacity-0 relative shrink-0 w-[123.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap tracking-[2px] uppercase">Brand Identity</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[116.266px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[30px] text-nowrap text-white top-[-3px] tracking-[-0.75px]">Creaition</p>
      </div>
    </div>
  );
}

function GridItem3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[124px] items-start justify-end left-0 pb-0 pl-[32px] pr-0 pt-[32px] top-[284px] w-[464.5px]" data-name="GridItem">
      <Text1 />
      <Heading1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[400px] left-0 overflow-clip top-[816px] w-[464.5px]" data-name="Container">
      <GridItem2 />
      <GridItem3 />
    </div>
  );
}

function Source1() {
  return <div className="h-0 shrink-0 w-full" data-name="Source" />;
}

function Video1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[400px] items-start left-0 overflow-clip pb-0 pl-[-32px] pr-[969px] pt-[-1568px] top-0 w-[937px]" data-name="Video">
      <Source1 />
    </div>
  );
}

function Container4() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[400px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.2)] w-[937px]" data-name="Container" />;
}

function GridItem4() {
  return (
    <div className="absolute h-[400px] left-0 top-0 w-[937px]" data-name="GridItem">
      <Video1 />
      <Container4 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16px] opacity-0 relative shrink-0 w-[90.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap tracking-[2px] uppercase">Digital Art</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[36px] relative shrink-0 w-[94.25px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[30px] text-nowrap text-white top-[-3px] tracking-[-0.75px]">NSYNK</p>
      </div>
    </div>
  );
}

function GridItem5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[124px] items-start justify-end left-0 pb-0 pl-[32px] pr-0 pt-[32px] top-[284px] w-[937px]" data-name="GridItem">
      <Text2 />
      <Heading2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[400px] left-0 overflow-clip top-[1224px] w-[937px]" data-name="Container">
      <GridItem4 />
      <GridItem5 />
    </div>
  );
}

function ImageVitraWebsite() {
  return <div className="absolute h-[400px] left-0 top-0 w-[464.5px]" data-name="Image (Vitra Website)" />;
}

function Container6() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[400px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.2)] w-[464.5px]" data-name="Container" />;
}

function GridItem6() {
  return (
    <div className="absolute h-[400px] left-0 top-0 w-[464.5px]" data-name="GridItem">
      <ImageVitraWebsite />
      <Container6 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16px] opacity-0 relative shrink-0 w-[90.781px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap tracking-[2px] uppercase">Web Design</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[36px] relative shrink-0 w-[172.797px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[30px] text-nowrap text-white top-[-3px] tracking-[-0.75px]">Vitra Website</p>
      </div>
    </div>
  );
}

function GridItem7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[124px] items-start justify-end left-0 pb-0 pl-[32px] pr-0 pt-[32px] top-[284px] w-[464.5px]" data-name="GridItem">
      <Text3 />
      <Heading3 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[400px] left-0 overflow-clip top-[1632px] w-[464.5px]" data-name="Container">
      <GridItem6 />
      <GridItem7 />
    </div>
  );
}

function ImageMomem() {
  return <div className="absolute h-[808px] left-0 top-0 w-[464.5px]" data-name="Image (MOMEM)" />;
}

function Container8() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[808px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.2)] w-[464.5px]" data-name="Container" />;
}

function GridItem8() {
  return (
    <div className="absolute h-[808px] left-0 top-0 w-[464.5px]" data-name="GridItem">
      <ImageMomem />
      <Container8 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16px] opacity-0 relative shrink-0 w-[136.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap tracking-[2px] uppercase">Museum Identity</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[36px] relative shrink-0 w-[117.656px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[30px] text-nowrap text-white top-[-3px] tracking-[-0.75px]">MOMEM</p>
      </div>
    </div>
  );
}

function GridItem9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[124px] items-start justify-end left-0 pb-0 pl-[32px] pr-0 pt-[32px] top-[692px] w-[464.5px]" data-name="GridItem">
      <Text4 />
      <Heading4 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[808px] left-[472.5px] overflow-clip top-[1632px] w-[464.5px]" data-name="Container">
      <GridItem8 />
      <GridItem9 />
    </div>
  );
}

function Source2() {
  return <div className="h-0 shrink-0 w-full" data-name="Source" />;
}

function Video2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[808px] items-start left-0 overflow-clip pb-0 pl-[-32px] pr-[969px] pt-[-2792px] top-0 w-[937px]" data-name="Video">
      <Source2 />
    </div>
  );
}

function Container10() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[808px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.2)] w-[937px]" data-name="Container" />;
}

function GridItem10() {
  return (
    <div className="absolute h-[808px] left-0 top-0 w-[937px]" data-name="GridItem">
      <Video2 />
      <Container10 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[16px] opacity-0 relative shrink-0 w-[144.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap tracking-[2px] uppercase">Agency Portfolio</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[36px] relative shrink-0 w-[143.344px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[30px] text-nowrap text-white top-[-3px] tracking-[-0.75px]">Markgraph</p>
      </div>
    </div>
  );
}

function GridItem11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[124px] items-start justify-end left-0 pb-0 pl-[32px] pr-0 pt-[32px] top-[692px] w-[937px]" data-name="GridItem">
      <Text5 />
      <Heading5 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[808px] left-0 overflow-clip top-[2448px] w-[937px]" data-name="Container">
      <GridItem10 />
      <GridItem11 />
    </div>
  );
}

function ImageIsabelMarant() {
  return <div className="absolute h-[400px] left-0 top-0 w-[464.5px]" data-name="Image (Isabel Marant)" />;
}

function Container12() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[400px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.2)] w-[464.5px]" data-name="Container" />;
}

function GridItem12() {
  return (
    <div className="absolute h-[400px] left-0 top-0 w-[464.5px]" data-name="GridItem">
      <ImageIsabelMarant />
      <Container12 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[16px] opacity-0 relative shrink-0 w-[147.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap tracking-[2px] uppercase">Fashion Campaign</p>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[36px] relative shrink-0 w-[176.188px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[30px] text-nowrap text-white top-[-3px] tracking-[-0.75px]">Isabel Marant</p>
      </div>
    </div>
  );
}

function GridItem13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[124px] items-start justify-end left-0 pb-0 pl-[32px] pr-0 pt-[32px] top-[284px] w-[464.5px]" data-name="GridItem">
      <Text6 />
      <Heading6 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[400px] left-0 overflow-clip top-[3264px] w-[464.5px]" data-name="Container">
      <GridItem12 />
      <GridItem13 />
    </div>
  );
}

function Source3() {
  return <div className="h-0 shrink-0 w-full" data-name="Source" />;
}

function Video3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[400px] items-start left-0 overflow-clip pb-0 pl-[-32px] pr-[969px] pt-[-4016px] top-0 w-[937px]" data-name="Video">
      <Source3 />
    </div>
  );
}

function Container14() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[400px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.2)] w-[937px]" data-name="Container" />;
}

function GridItem14() {
  return (
    <div className="absolute h-[400px] left-0 top-0 w-[937px]" data-name="GridItem">
      <Video3 />
      <Container14 />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[16px] opacity-0 relative shrink-0 w-[62.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap tracking-[2px] uppercase">Apparel</p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[36px] relative shrink-0 w-[105.578px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[30px] text-nowrap text-white top-[-3px] tracking-[-0.75px]">Drykorn</p>
      </div>
    </div>
  );
}

function GridItem15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[124px] items-start justify-end left-0 pb-0 pl-[32px] pr-0 pt-[32px] top-[284px] w-[937px]" data-name="GridItem">
      <Text7 />
      <Heading7 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[400px] left-0 overflow-clip top-[3672px] w-[937px]" data-name="Container">
      <GridItem14 />
      <GridItem15 />
    </div>
  );
}

function ImageTouchpoint() {
  return <div className="absolute h-[400px] left-0 top-0 w-[464.5px]" data-name="Image (Touchpoint)" />;
}

function Container16() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[400px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.2)] w-[464.5px]" data-name="Container" />;
}

function GridItem16() {
  return (
    <div className="absolute h-[400px] left-0 top-0 w-[464.5px]" data-name="GridItem">
      <ImageTouchpoint />
      <Container16 />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[16px] opacity-0 relative shrink-0 w-[95.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap tracking-[2px] uppercase">Music Label</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[36px] relative shrink-0 w-[145.313px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[30px] text-nowrap text-white top-[-3px] tracking-[-0.75px]">Touchpoint</p>
      </div>
    </div>
  );
}

function GridItem17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[124px] items-start justify-end left-0 pb-0 pl-[32px] pr-0 pt-[32px] top-[284px] w-[464.5px]" data-name="GridItem">
      <Text8 />
      <Heading8 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[400px] left-0 overflow-clip top-[4080px] w-[464.5px]" data-name="Container">
      <GridItem16 />
      <GridItem17 />
    </div>
  );
}

function ImageRobertJohnson() {
  return <div className="absolute h-[400px] left-0 top-0 w-[464.5px]" data-name="Image (Robert Johnson)" />;
}

function Container18() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[400px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.2)] w-[464.5px]" data-name="Container" />;
}

function GridItem18() {
  return (
    <div className="absolute h-[400px] left-0 top-0 w-[464.5px]" data-name="GridItem">
      <ImageRobertJohnson />
      <Container18 />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[16px] opacity-0 relative shrink-0 w-[105.891px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap tracking-[2px] uppercase">Club Culture</p>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[36px] relative shrink-0 w-[203.484px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[30px] text-nowrap text-white top-[-3px] tracking-[-0.75px]">Robert Johnson</p>
      </div>
    </div>
  );
}

function GridItem19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[124px] items-start justify-end left-0 pb-0 pl-[32px] pr-0 pt-[32px] top-[284px] w-[464.5px]" data-name="GridItem">
      <Text9 />
      <Heading9 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[400px] left-[472.5px] overflow-clip top-[4080px] w-[464.5px]" data-name="Container">
      <GridItem18 />
      <GridItem19 />
    </div>
  );
}

function Source4() {
  return <div className="h-0 shrink-0 w-full" data-name="Source" />;
}

function Video4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[808px] items-start left-0 overflow-clip pb-0 pl-[-32px] pr-[969px] pt-[-4832px] top-0 w-[937px]" data-name="Video">
      <Source4 />
    </div>
  );
}

function Container20() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[808px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.2)] w-[937px]" data-name="Container" />;
}

function GridItem20() {
  return (
    <div className="absolute h-[808px] left-0 top-0 w-[937px]" data-name="GridItem">
      <Video4 />
      <Container20 />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[16px] opacity-0 relative shrink-0 w-[85.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap tracking-[2px] uppercase">Exhibition</p>
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[36px] relative shrink-0 w-[219.531px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[30px] text-nowrap text-white top-[-3px] tracking-[-0.75px]">The Media Majlis</p>
      </div>
    </div>
  );
}

function GridItem21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[124px] items-start justify-end left-0 pb-0 pl-[32px] pr-0 pt-[32px] top-[692px] w-[937px]" data-name="GridItem">
      <Text10 />
      <Heading10 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[808px] left-0 overflow-clip top-[4488px] w-[937px]" data-name="Container">
      <GridItem20 />
      <GridItem21 />
    </div>
  );
}

function ImageCocoon() {
  return <div className="absolute h-[808px] left-0 top-0 w-[464.5px]" data-name="Image (Cocoon)" />;
}

function Container22() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[808px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.2)] w-[464.5px]" data-name="Container" />;
}

function GridItem22() {
  return (
    <div className="absolute h-[808px] left-0 top-0 w-[464.5px]" data-name="GridItem">
      <ImageCocoon />
      <Container22 />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[16px] opacity-0 relative shrink-0 w-[69.047px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap tracking-[2px] uppercase">Interior</p>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[36px] relative shrink-0 w-[99.5px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[30px] text-nowrap text-white top-[-3px] tracking-[-0.75px]">Cocoon</p>
      </div>
    </div>
  );
}

function GridItem23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[124px] items-start justify-end left-0 pb-0 pl-[32px] pr-0 pt-[32px] top-[692px] w-[464.5px]" data-name="GridItem">
      <Text11 />
      <Heading11 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[808px] left-0 overflow-clip top-[5304px] w-[464.5px]" data-name="Container">
      <GridItem22 />
      <GridItem23 />
    </div>
  );
}

function Source5() {
  return <div className="h-0 shrink-0 w-full" data-name="Source" />;
}

function Video5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[400px] items-start left-0 overflow-clip pb-0 pl-[-32px] pr-[969px] pt-[-6464px] top-0 w-[937px]" data-name="Video">
      <Source5 />
    </div>
  );
}

function Container24() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[400px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.2)] w-[937px]" data-name="Container" />;
}

function GridItem24() {
  return (
    <div className="absolute h-[400px] left-0 top-0 w-[937px]" data-name="GridItem">
      <Video5 />
      <Container24 />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[16px] opacity-0 relative shrink-0 w-[108.188px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap tracking-[2px] uppercase">Architecture</p>
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[36px] relative shrink-0 w-[55.547px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[30px] text-nowrap text-white top-[-3px] tracking-[-0.75px]">W19</p>
      </div>
    </div>
  );
}

function GridItem25() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[124px] items-start justify-end left-0 pb-0 pl-[32px] pr-0 pt-[32px] top-[284px] w-[937px]" data-name="GridItem">
      <Text12 />
      <Heading12 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[400px] left-0 overflow-clip top-[6120px] w-[937px]" data-name="Container">
      <GridItem24 />
      <GridItem25 />
    </div>
  );
}

function ImageMastercard() {
  return <div className="absolute h-[400px] left-0 top-0 w-[464.5px]" data-name="Image (Mastercard)" />;
}

function Container26() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[400px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.2)] w-[464.5px]" data-name="Container" />;
}

function GridItem26() {
  return (
    <div className="absolute h-[400px] left-0 top-0 w-[464.5px]" data-name="GridItem">
      <ImageMastercard />
      <Container26 />
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[16px] opacity-0 relative shrink-0 w-[139.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap tracking-[2px] uppercase">Global Campaign</p>
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[36px] relative shrink-0 w-[144.953px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[30px] text-nowrap text-white top-[-3px] tracking-[-0.75px]">Mastercard</p>
      </div>
    </div>
  );
}

function GridItem27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[124px] items-start justify-end left-0 pb-0 pl-[32px] pr-0 pt-[32px] top-[284px] w-[464.5px]" data-name="GridItem">
      <Text13 />
      <Heading13 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[400px] left-0 overflow-clip top-[6528px] w-[464.5px]" data-name="Container">
      <GridItem26 />
      <GridItem27 />
    </div>
  );
}

export default function Container28() {
  return (
    <div className="relative size-full" data-name="Container">
      <Container1 />
      <Container3 />
      <Container5 />
      <Container7 />
      <Container9 />
      <Container11 />
      <Container13 />
      <Container15 />
      <Container17 />
      <Container19 />
      <Container21 />
      <Container23 />
      <Container25 />
      <Container27 />
    </div>
  );
}