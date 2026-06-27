import imgImageLogo from "figma:asset/7e1096ae6877c4f73af8ea54866c56e7194c8e3b.png";

function Heading() {
  return (
    <div className="absolute h-[96px] left-0 top-0 w-[921px]" data-name="Heading 1">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[96px] left-0 not-italic text-[#0a0a0a] text-[96px] text-nowrap top-[-9px] tracking-[-2.4px]">WORK</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[64px] left-0 top-[120px] w-[672px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[32px] left-0 not-italic text-[#6a7282] text-[24px] top-[-2px] w-[609px]">A selection of commissioned projects ranging from brand identity to spatial activations and archival research.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[184px] left-[248px] top-[96px] w-[921px]" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

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

function Container1() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[808px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.2)] w-[937px]" data-name="Container" />;
}

function GridItem() {
  return (
    <div className="absolute h-[808px] left-0 top-0 w-[937px]" data-name="GridItem">
      <Video />
      <Container1 />
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

function Heading2() {
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
      <Heading2 />
    </div>
  );
}

function Container2() {
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

function Container3() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[400px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.2)] w-[464.5px]" data-name="Container" />;
}

function GridItem2() {
  return (
    <div className="absolute h-[400px] left-0 top-0 w-[464.5px]" data-name="GridItem">
      <ImageCreaition />
      <Container3 />
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

function Heading3() {
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
      <Heading3 />
    </div>
  );
}

function Container4() {
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

function Container5() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[400px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.2)] w-[937px]" data-name="Container" />;
}

function GridItem4() {
  return (
    <div className="absolute h-[400px] left-0 top-0 w-[937px]" data-name="GridItem">
      <Video1 />
      <Container5 />
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

function Heading4() {
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
      <Heading4 />
    </div>
  );
}

function Container6() {
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

function Container7() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[400px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.2)] w-[464.5px]" data-name="Container" />;
}

function GridItem6() {
  return (
    <div className="absolute h-[400px] left-0 top-0 w-[464.5px]" data-name="GridItem">
      <ImageVitraWebsite />
      <Container7 />
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

function Heading5() {
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
      <Heading5 />
    </div>
  );
}

function Container8() {
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

function Container9() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[808px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.2)] w-[464.5px]" data-name="Container" />;
}

function GridItem8() {
  return (
    <div className="absolute h-[808px] left-0 top-0 w-[464.5px]" data-name="GridItem">
      <ImageMomem />
      <Container9 />
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

function Heading6() {
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
      <Heading6 />
    </div>
  );
}

function Container10() {
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

function Container11() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[808px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.2)] w-[937px]" data-name="Container" />;
}

function GridItem10() {
  return (
    <div className="absolute h-[808px] left-0 top-0 w-[937px]" data-name="GridItem">
      <Video2 />
      <Container11 />
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

function Heading7() {
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
      <Heading7 />
    </div>
  );
}

function Container12() {
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

function Container13() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[400px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.2)] w-[464.5px]" data-name="Container" />;
}

function GridItem12() {
  return (
    <div className="absolute h-[400px] left-0 top-0 w-[464.5px]" data-name="GridItem">
      <ImageIsabelMarant />
      <Container13 />
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

function Heading8() {
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
      <Heading8 />
    </div>
  );
}

function Container14() {
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

function Container15() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[400px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.2)] w-[937px]" data-name="Container" />;
}

function GridItem14() {
  return (
    <div className="absolute h-[400px] left-0 top-0 w-[937px]" data-name="GridItem">
      <Video3 />
      <Container15 />
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

function Heading9() {
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
      <Heading9 />
    </div>
  );
}

function Container16() {
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

function Container17() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[400px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.2)] w-[464.5px]" data-name="Container" />;
}

function GridItem16() {
  return (
    <div className="absolute h-[400px] left-0 top-0 w-[464.5px]" data-name="GridItem">
      <ImageTouchpoint />
      <Container17 />
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

function Heading10() {
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
      <Heading10 />
    </div>
  );
}

function Container18() {
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

function Container19() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[400px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.2)] w-[464.5px]" data-name="Container" />;
}

function GridItem18() {
  return (
    <div className="absolute h-[400px] left-0 top-0 w-[464.5px]" data-name="GridItem">
      <ImageRobertJohnson />
      <Container19 />
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

function Heading11() {
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
      <Heading11 />
    </div>
  );
}

function Container20() {
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

function Container21() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[808px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.2)] w-[937px]" data-name="Container" />;
}

function GridItem20() {
  return (
    <div className="absolute h-[808px] left-0 top-0 w-[937px]" data-name="GridItem">
      <Video4 />
      <Container21 />
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

function Heading12() {
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
      <Heading12 />
    </div>
  );
}

function Container22() {
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

function Container23() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[808px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.2)] w-[464.5px]" data-name="Container" />;
}

function GridItem22() {
  return (
    <div className="absolute h-[808px] left-0 top-0 w-[464.5px]" data-name="GridItem">
      <ImageCocoon />
      <Container23 />
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

function Heading13() {
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
      <Heading13 />
    </div>
  );
}

function Container24() {
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

function Container25() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[400px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.2)] w-[937px]" data-name="Container" />;
}

function GridItem24() {
  return (
    <div className="absolute h-[400px] left-0 top-0 w-[937px]" data-name="GridItem">
      <Video5 />
      <Container25 />
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

function Heading14() {
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
      <Heading14 />
    </div>
  );
}

function Container26() {
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

function Container27() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] h-[400px] left-0 opacity-60 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.2)] w-[464.5px]" data-name="Container" />;
}

function GridItem26() {
  return (
    <div className="absolute h-[400px] left-0 top-0 w-[464.5px]" data-name="GridItem">
      <ImageMastercard />
      <Container27 />
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

function Heading15() {
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
      <Heading15 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[400px] left-0 overflow-clip top-[6528px] w-[464.5px]" data-name="Container">
      <GridItem26 />
      <GridItem27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[6928px] left-[32px] top-[344px] w-[937px]" data-name="Container">
      <Container2 />
      <Container4 />
      <Container6 />
      <Container8 />
      <Container10 />
      <Container12 />
      <Container14 />
      <Container16 />
      <Container18 />
      <Container20 />
      <Container22 />
      <Container24 />
      <Container26 />
      <Container28 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[444.5px]" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[40px] left-0 not-italic text-[#0a0a0a] text-[36px] text-nowrap top-[-3px]">{`Let's build together.`}</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[139.55px] size-[24px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M5 12H19" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 5L19 12L12 19" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[28px] left-0 top-[64px] w-[163.547px]" data-name="Button">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-[62.5px] not-italic text-[#0a0a0a] text-[20px] text-center text-nowrap top-[-3px] translate-x-[-50%]">Start a project</p>
      <Icon />
    </div>
  );
}

function Container30() {
  return (
    <div className="[grid-area:1_/_1] place-self-stretch relative shrink-0" data-name="Container">
      <Heading1 />
      <Button />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[444.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[14px]">© Schultzschultz GmbH 2025</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[444.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#6a7282] text-[14px]">Impressum</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col items-start justify-end pb-0 place-self-stretch pt-[52px] px-0 relative shrink-0" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute gap-[48px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[157px] left-[32px] pb-0 pt-[65px] px-0 top-[7400px] w-[937px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Container30 />
      <Container31 />
    </div>
  );
}

function StudioPage() {
  return (
    <div className="absolute bg-white h-[7653px] left-0 top-0 w-[1001px]" data-name="StudioPage">
      <Container />
      <Container29 />
      <Container32 />
    </div>
  );
}

function StickyNavigation() {
  return (
    <div className="bg-black h-[3px] relative shrink-0 w-[40px]" data-name="StickyNavigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function StickyNavigation1() {
  return (
    <div className="basis-0 bg-black grow min-h-px min-w-px relative shrink-0 w-[40px]" data-name="StickyNavigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function SlotClone() {
  return (
    <div className="h-[39px] relative shrink-0 w-[48px]" data-name="SlotClone">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11px] items-start pl-[4px] pr-0 py-[4px] relative size-full">
        {[...Array(2).keys()].map((_, i) => (
          <StickyNavigation key={i} />
        ))}
        <StickyNavigation1 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[18px] left-0 not-italic text-[18px] text-black text-nowrap top-[-1px] tracking-[1.5605px] uppercase">EN</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[51.703px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[2px] pt-[14px] px-[13px] relative size-full">
        <Text14 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[117px] items-end left-[901.3px] top-[32px] w-[51.703px]" data-name="Container">
      <SlotClone />
      <Container33 />
    </div>
  );
}

function ImageLogo() {
  return (
    <div className="h-[123.774px] relative w-[107.623px]" data-name="Image (Logo)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageLogo} />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[132.785px] relative w-[140.073px]" data-name="Container">
      <div className="absolute flex h-[143.466px] items-center justify-center left-[-136.89px] top-[-37.83px] w-[153.119px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[110deg]">
          <ImageLogo />
        </div>
      </div>
    </div>
  );
}

function RotatingLogo() {
  return (
    <div className="absolute left-[-16px] size-[100px] top-0" data-name="RotatingLogo">
      <div className="absolute flex h-[185.032px] items-center justify-center left-[-207.73px] top-[-131.39px] w-[187.699px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[150deg]">
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[100px] left-[48px] top-[32px] w-[84px]" data-name="Link">
      <RotatingLogo />
    </div>
  );
}

function StickyNavigation2() {
  return (
    <div className="absolute h-[181px] left-0 top-0 w-[1001px]" data-name="StickyNavigation">
      <Container34 />
      <Link />
    </div>
  );
}

export default function CarterBenoitMyerMakeSite() {
  return (
    <div className="bg-white relative size-full" data-name="CARTER BENOIT MYER MAKE SITE">
      <StudioPage />
      <StickyNavigation2 />
    </div>
  );
}