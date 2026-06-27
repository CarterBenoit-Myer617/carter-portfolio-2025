import imgWorkVave2Mp4 from "figma:asset/98e5fad9e8ceeaab6ddd9d8bd7e5030258352217.png";
import imgWorkCreaitionMp4 from "figma:asset/848b4f0707276c1d31216a95f1aaf740385525b2.png";
import imgBackground from "figma:asset/65ff760087dda3913c37c9cd2b0cb4b79d152728.png";
import imgBackground1 from "figma:asset/0ba85e6207b40dfa1c3a344a6c2b49e9f99b5b58.png";
import imgWorkMarkgraphMp4 from "figma:asset/b762217a55890f13509a42b3acaa05ca5c1e81a8.png";
import imgBackground2 from "figma:asset/75186cc330f34bb41da8bad7a5ffb31c117d6d21.png";
import imgBackground3 from "figma:asset/59c99bfce9f86c12e1a0d17481cff40a77f260ee.png";
import imgBackground4 from "figma:asset/61014404c89e19d468489c0504696b4f7b87a6ad.png";
import imgBackground5 from "figma:asset/d27e0c2e6bd90d6dc24175882bf350e8a49c4550.png";
import imgWorkZdfTitlesMixMp4 from "figma:asset/3f8a344e10893723437d2799b0af21408b2aa582.png";
import imgBackground6 from "figma:asset/4554038b2312ef9d423c265c9602e660a65b7d94.png";
import imgBackground7 from "figma:asset/cf556044a719314b0fc855710f1c06f15cc5fd66.png";
import imgBackground8 from "figma:asset/a4f9142ebbc8cfd65d91f91f6eb9d6c9b6305648.png";
import imgBackground9 from "figma:asset/755ec501944ea9c7eb41998f460d6e9d85cb45f0.png";
import imgWorkStrokeWeightMp4 from "figma:asset/48c7d87edd07fe7471e037a2902ed9791b12f0fe.png";
import imgBackground10 from "figma:asset/79ac242dac6d48eb35040eab69de1703ac8dee9e.png";
import imgWorkCbsMp4 from "figma:asset/321dcf419cc5ce00d5735fbbd78919d42987d7ff.png";
import imgBackground11 from "figma:asset/afe02a2c407314fbbf275956389869ca582b95a5.png";
import imgScreenshot20250313At120137E280AfpmPng from "figma:asset/b039c00c09e09d108d6fe4dbdcbf3fecf9039c6e.png";
import imgAnanse1 from "figma:asset/7e1096ae6877c4f73af8ea54866c56e7194c8e3b.png";

function Container() {
  return (
    <div className="basis-0 content-stretch flex grow items-start justify-center min-h-px min-w-px relative self-stretch shrink-0" data-name="Container">
      <div className="basis-0 grow h-full min-h-px min-w-px shrink-0" data-name="Rectangle" />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute content-stretch flex items-start left-[38.39px] right-[38.39px] top-0" data-name="Section">
      {[...Array(4).keys()].map((_, i) => (
        <Container key={i} />
      ))}
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[480px] right-0 top-[197.58px]" data-name="Heading 1">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[68px] text-black text-nowrap tracking-[6.9px] uppercase">
        <p className="leading-[88.4px]">Work</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-black text-nowrap">
        <p className="leading-[50.4px]">A selection of commissioned projects</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-white h-[50.39px] left-[480px] right-[384px] top-[324.36px]" data-name="Background">
      <Heading1 />
    </div>
  );
}

function WorkVave2Mp() {
  return (
    <div className="absolute h-[1080px] left-1/2 top-[calc(50%-0.01px)] translate-x-[-50%] translate-y-[-50%] w-[1920px]" data-name="Work_VAVE_2.mp4">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgWorkVave2Mp4} />
        </div>
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(90deg, rgb(115, 169, 68) 0%, rgb(115, 169, 68) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%)" }} />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[963.33px] left-0 overflow-clip top-0 w-[1920px]" data-name="Container">
      <WorkVave2Mp />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] h-[963.33px] relative shrink-0 w-full" data-name="Background">
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Background1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-wrap h-[963.33px] items-start justify-center left-0 max-w-[1920px] right-0 top-[528.34px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function WorkCreaitionMp() {
  return (
    <div className="absolute h-[972px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1728px]" data-name="Work_Creaition.mp4">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgWorkCreaitionMp4} />
        </div>
        <div className="absolute bg-[#1a5e38] inset-0" />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[938.28px] left-0 overflow-clip top-0 w-[1728px]" data-name="Container">
      <WorkCreaitionMp />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#1a5e38] h-[938.28px] relative shrink-0 w-full" data-name="Background">
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Container">
      <Background2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-wrap items-start justify-center left-0 max-w-[1920px] pl-[192px] pr-0 py-0 right-0 top-[1503.27px]" data-name="Container">
      <Container5 />
    </div>
  );
}

function WorkNsynkMp() {
  return <div className="absolute bg-[#73a944] h-[982.8px] left-[calc(50%-0.01px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1747.19px]" data-name="Work_NSYNK.mp4" />;
}

function Container7() {
  return (
    <div className="absolute h-[944.44px] left-0 overflow-clip top-0 w-[1747.2px]" data-name="Container">
      <WorkNsynkMp />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] h-[944.44px] relative shrink-0 w-full" data-name="Background">
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Container">
      <Background3 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-wrap items-start justify-center left-0 max-w-[1920px] pl-0 pr-[172.797px] py-0 right-0 top-[2453.15px]" data-name="Container">
      <Container8 />
    </div>
  );
}

function VitraWebsiteKurzMp() {
  return <div className="absolute bg-[#1a5e38] h-[938.34px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[958.5px]" data-name="Vitra-Website-kurz.mp4" />;
}

function Container10() {
  return (
    <div className="absolute h-[938.34px] left-0 overflow-clip top-0 w-[958.5px]" data-name="Container">
      <VitraWebsiteKurzMp />
    </div>
  );
}

function Background4() {
  return (
    <div className="basis-0 bg-repeat bg-size-[958.4999871253967px_958.4999871253967px] bg-top-left grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Background" style={{ backgroundImage: `url('${imgBackground}')` }}>
      <Container10 />
    </div>
  );
}

function WorkMomem1Mp() {
  return <div className="absolute bg-[#1a5e38] h-[938.34px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[958.5px]" data-name="Work_Momem-1.mp4" />;
}

function Container11() {
  return (
    <div className="absolute h-[938.34px] left-0 overflow-clip top-0 w-[958.5px]" data-name="Container">
      <WorkMomem1Mp />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-repeat bg-size-[1390.1333808898926px_938.3400321006775px] bg-top-left h-[938.34px] relative shrink-0 w-full" data-name="Background" style={{ backgroundImage: `url('${imgBackground1}')` }}>
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="basis-0 bg-[#1a5e38] content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Container">
      <Background5 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex gap-[3px] items-start left-0 max-w-[1920px] right-0 top-[3409.19px]" data-name="Container">
      <Background4 />
      <Container12 />
    </div>
  );
}

function WorkMarkgraphMp() {
  return (
    <div className="absolute h-[1036.8px] left-[calc(50%-0.01px)] top-[calc(50%+0.01px)] translate-x-[-50%] translate-y-[-50%] w-[1843.19px]" data-name="Work_Markgraph.mp4">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgWorkMarkgraphMp4} />
        </div>
        <div className="absolute bg-[#73a944] inset-0" />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[982.23px] left-0 overflow-clip top-0 w-[1843.2px]" data-name="Container">
      <WorkMarkgraphMp />
    </div>
  );
}

function Background6() {
  return (
    <div className="absolute h-[982.23px] left-[76.8px] right-0 top-[4359.13px]" data-name="Background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[105.56%] left-0 max-w-none top-[-2.78%] w-full" src={imgBackground2} />
      </div>
      <Container14 />
    </div>
  );
}

function WorkIsabelMarant1Mp() {
  return <div className="absolute bg-[#1a5e38] h-[939.59px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1670.41px]" data-name="Work_Isabel_Marant_1.mp4" />;
}

function Container15() {
  return (
    <div className="absolute h-[914.98px] left-0 overflow-clip top-0 w-[1670.41px]" data-name="Container">
      <WorkIsabelMarant1Mp />
    </div>
  );
}

function Background7() {
  return (
    <div className="absolute h-[914.98px] left-[249.59px] right-0 top-[5352.95px]" data-name="Background" style={{ backgroundImage: "linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%), linear-gradient(90deg, rgb(26, 94, 56) 0%, rgb(26, 94, 56) 100%)" }}>
      <Container15 />
    </div>
  );
}

function WorkDrykornMp() {
  return <div className="absolute bg-[#73a944] h-[1015.2px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1804.8px]" data-name="Work_Drykorn.mp4" />;
}

function Container16() {
  return (
    <div className="absolute h-[1007.5px] left-0 overflow-clip top-0 w-[1804.81px]" data-name="Container">
      <WorkDrykornMp />
    </div>
  );
}

function Background8() {
  return (
    <div className="absolute bg-repeat bg-size-[1804.8099517822266px_1218.246717453003px] bg-top-left h-[1007.5px] left-0 right-[115.19px] top-[6279.53px]" data-name="Background" style={{ backgroundImage: `url('${imgBackground3}')` }}>
      <Container16 />
    </div>
  );
}

function WorkTouchpointRecordsMp() {
  return <div className="absolute bg-[#1a5e38] h-[1087.77px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[958.5px]" data-name="Work_Touchpoint-Records.mp4" />;
}

function Container17() {
  return (
    <div className="absolute bg-[#6c9566] h-[1087.78px] left-0 overflow-clip top-0 w-[958.5px]" data-name="Container">
      <WorkTouchpointRecordsMp />
    </div>
  );
}

function Background9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Background">
      <Container17 />
    </div>
  );
}

function WorkRobertJohnsonGiithMp() {
  return <div className="absolute bg-[#1a5e38] h-[1087.77px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[958.5px]" data-name="Work_Robert-Johnson-GIITH.mp4" />;
}

function Container18() {
  return (
    <div className="absolute h-[1087.78px] left-0 overflow-clip top-0 w-[958.5px]" data-name="Container">
      <WorkRobertJohnsonGiithMp />
    </div>
  );
}

function Background10() {
  return (
    <div className="basis-0 bg-repeat bg-size-[1087.7800369262695px_1087.7800369262695px] bg-top-left grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Background" style={{ backgroundImage: `url('${imgBackground4}')` }}>
      <Container18 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex gap-[3px] items-start left-0 max-w-[1920px] right-0 top-[7298.63px]" data-name="Container">
      <Background9 />
      <Background10 />
    </div>
  );
}

function WorkTheMediaMajlis1Mp() {
  return <div className="absolute h-[1044.66px] left-[calc(50%-0.01px)] top-[calc(50%-0.01px)] translate-x-[-50%] translate-y-[-50%] w-[1747.2px]" data-name="Work_The-Media-Majlis-1.mp4" />;
}

function Container20() {
  return (
    <div className="absolute bg-[#73a944] h-[1044.67px] left-0 overflow-clip top-0 w-[1747.2px]" data-name="Container">
      <WorkTheMediaMajlis1Mp />
    </div>
  );
}

function Background11() {
  return (
    <div className="absolute bg-[#73a944] h-[1044.67px] left-0 right-[172.8px] top-[8398.01px]" data-name="Background">
      <Container20 />
    </div>
  );
}

function WorkCocoonMp() {
  return <div className="absolute bg-[#1a5e38] h-[1053.11px] left-1/2 top-[calc(50%-0.01px)] translate-x-[-50%] translate-y-[-50%] w-[1804.81px]" data-name="Work_Cocoon.mp4" />;
}

function Container21() {
  return (
    <div className="absolute h-[1053.11px] left-0 overflow-clip top-0 w-[1804.81px]" data-name="Container">
      <WorkCocoonMp />
    </div>
  );
}

function Background12() {
  return (
    <div className="absolute h-[1053.11px] left-[115.19px] right-0 top-[9454.27px]" data-name="Background">
      <Container21 />
    </div>
  );
}

function WorkW19Mp() {
  return <div className="absolute bg-[#73a944] h-[1052.44px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1708.81px]" data-name="Work_W19.mp4" />;
}

function Container22() {
  return (
    <div className="absolute bg-[#7e0000] h-[1052.44px] left-0 overflow-clip top-0 w-[1708.81px]" data-name="Container">
      <WorkW19Mp />
    </div>
  );
}

function Background13() {
  return (
    <div className="absolute bg-gradient-to-r bg-repeat bg-size-[auto_auto,113.92066478729248px_113.92066478729248px] bg-top-left from-[rgba(91,0,0,0.2)] h-[1052.44px] left-[211.19px] right-0 to-[rgba(91,0,0,0.2)] top-[10518.98px]" data-name="Background" style={{ backgroundImage: `url('${imgBackground5}')` }}>
      <Container22 />
    </div>
  );
}

function WorkMastercard16X91Mp() {
  return <div className="absolute bg-[#1a5e38] h-[982.8px] left-[calc(50%-0.01px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1747.19px]" data-name="Work_Mastercard-16x9-1.mp4" />;
}

function Container23() {
  return (
    <div className="absolute h-[977.94px] left-0 overflow-clip top-0 w-[1747.2px]" data-name="Container">
      <WorkMastercard16X91Mp />
    </div>
  );
}

function Background14() {
  return (
    <div className="h-[977.94px] relative shrink-0 w-full" data-name="Background">
      <Container23 />
    </div>
  );
}

function Container24() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Container">
      <Background14 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-wrap items-start justify-center left-0 max-w-[1920px] pl-0 pr-[172.797px] py-0 right-0 top-[11583.02px]" data-name="Container">
      <Container24 />
    </div>
  );
}

function WorkJazzuniqueMp() {
  return <div className="absolute h-[1098.97px] left-1/2 top-[calc(50%-0.01px)] translate-x-[-50%] translate-y-[-50%] w-[958.5px]" data-name="Work_Jazzunique.mp4" />;
}

function Container26() {
  return (
    <div className="absolute h-[1098.98px] left-0 overflow-clip top-0 w-[958.5px]" data-name="Container">
      <WorkJazzuniqueMp />
    </div>
  );
}

function Background15() {
  return (
    <div className="h-[1098.98px] relative shrink-0 w-full" data-name="Background">
      <Container26 />
    </div>
  );
}

function Container27() {
  return (
    <div className="basis-0 bg-[#73a944] content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Container">
      <Background15 />
    </div>
  );
}

function WorkAeditto2Mp() {
  return <div className="absolute h-[1098.97px] left-1/2 top-[calc(50%-0.01px)] translate-x-[-50%] translate-y-[-50%] w-[958.5px]" data-name="Work_Aeditto-2.mp4" />;
}

function Container28() {
  return (
    <div className="absolute h-[1098.98px] left-0 overflow-clip top-0 w-[958.5px]" data-name="Container">
      <WorkAeditto2Mp />
    </div>
  );
}

function Background16() {
  return (
    <div className="basis-0 bg-[#73a944] grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Background">
      <Container28 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex gap-[3px] items-start left-0 max-w-[1920px] right-0 top-[12572.56px]" data-name="Container">
      <Container27 />
      <Background16 />
    </div>
  );
}

function WorkZdfTitlesMixMp() {
  return (
    <div className="absolute h-[1080px] left-1/2 top-[calc(50%-0.01px)] translate-x-[-50%] translate-y-[-50%] w-[1920px]" data-name="Work-ZDF_Titles_Mix.mp4">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgWorkZdfTitlesMixMp4} />
        </div>
        <div className="absolute bg-[#1a5e38] inset-0" />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[980.53px] left-0 overflow-clip top-0 w-[1920px]" data-name="Container">
      <WorkZdfTitlesMixMp />
    </div>
  );
}

function Background17() {
  return (
    <div className="absolute bg-repeat bg-size-[1920px_1080px] bg-top-left h-[980.53px] left-0 right-0 top-[13683.14px]" data-name="Background" style={{ backgroundImage: `url('${imgBackground6}')` }}>
      <Container30 />
    </div>
  );
}

function WorkHeidetonMp() {
  return <div className="absolute h-[1060.02px] left-1/2 top-[calc(50%-0.01px)] translate-x-[-50%] translate-y-[-50%] w-[958.5px]" data-name="Work_Heideton.mp4" />;
}

function Container31() {
  return (
    <div className="absolute bg-[#73a944] h-[1060.02px] left-0 overflow-clip top-0 w-[958.5px]" data-name="Container">
      <WorkHeidetonMp />
    </div>
  );
}

function Background18() {
  return (
    <div className="basis-0 bg-repeat bg-size-[1060.020031929016px_1060.020031929016px] bg-top-left grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Background" style={{ backgroundImage: `url('${imgBackground7}')` }}>
      <Container31 />
    </div>
  );
}

function WorkVariousLogosMp() {
  return <div className="absolute bg-[#73a944] h-[1060.02px] left-1/2 top-[calc(50%-0.01px)] translate-x-[-50%] translate-y-[-50%] w-[958.5px]" data-name="Work_Various-Logos.mp4" />;
}

function Container32() {
  return (
    <div className="absolute h-[1060.02px] left-0 overflow-clip top-0 w-[958.5px]" data-name="Container">
      <WorkVariousLogosMp />
    </div>
  );
}

function Background19() {
  return (
    <div className="basis-0 bg-repeat bg-size-[1060.0199890136719px_1060.0199890136719px] bg-top-left grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Background" style={{ backgroundImage: `url('${imgBackground8}')` }}>
      <Container32 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex gap-[3px] items-start left-0 max-w-[1920px] right-0 top-[14675.27px]" data-name="Container">
      <Background18 />
      <Background19 />
    </div>
  );
}

function WorkUptownMp() {
  return <div className="absolute bg-[#1a5e38] h-[1144.88px] left-1/2 top-[calc(50%-0.01px)] translate-x-[-50%] translate-y-[-50%] w-[1766.41px]" data-name="Work_Uptown.mp4" />;
}

function Container34() {
  return (
    <div className="absolute h-[1144.89px] left-0 overflow-clip top-0 w-[1766.41px]" data-name="Container">
      <WorkUptownMp />
    </div>
  );
}

function Background20() {
  return (
    <div className="absolute bg-repeat bg-size-[2035.360107421875px_1144.8900604248047px] bg-top-left h-[1144.89px] left-0 right-[153.59px] top-[15746.89px]" data-name="Background" style={{ backgroundImage: `url('${imgBackground9}')` }}>
      <Container34 />
    </div>
  );
}

function WorkStrokeWeightMp() {
  return (
    <div className="absolute h-[1015.2px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1804.8px]" data-name="Work_strokeWeight.mp4">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgWorkStrokeWeightMp4} />
        </div>
        <div className="absolute bg-[#73a944] inset-0" />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[795.41px] left-0 overflow-clip top-0 w-[1804.81px]" data-name="Container">
      <WorkStrokeWeightMp />
    </div>
  );
}

function Background21() {
  return (
    <div className="absolute bg-repeat bg-size-[1804.8099517822266px_1015.2055978775024px] bg-top-left h-[795.41px] left-[115.19px] right-0 top-[16903.38px]" data-name="Background" style={{ backgroundImage: `url('${imgBackground10}')` }}>
      <Container35 />
    </div>
  );
}

function WorkMartionMp() {
  return <div className="absolute h-[1080px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1920px]" data-name="Work_Martion.mp4" />;
}

function Container36() {
  return (
    <div className="absolute bg-[#1a5e38] h-[1025.72px] left-0 overflow-clip top-0 w-[1920px]" data-name="Container">
      <WorkMartionMp />
    </div>
  );
}

function Background22() {
  return (
    <div className="h-[1025.72px] relative shrink-0 w-full" data-name="Background">
      <Container36 />
    </div>
  );
}

function Container37() {
  return (
    <div className="basis-0 bg-[#1a5e38] content-stretch flex flex-col grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Container">
      <Background22 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex flex-wrap items-start justify-center left-0 max-w-[1920px] right-0 top-[17710.38px]" data-name="Container">
      <Container37 />
    </div>
  );
}

function WorkCbsMp() {
  return <div className="absolute bg-gradient-to-r bg-repeat bg-size-[auto_auto,1015.8399939537048px_1015.8399939537048px] bg-top-left from-[#73a944] h-[1015.83px] left-1/2 to-[#73a944] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[958.5px]" data-name="Work_CBS.mp4" style={{ backgroundImage: `url('${imgWorkCbsMp4}')` }} />;
}

function Container39() {
  return (
    <div className="absolute h-[1015.84px] left-0 overflow-clip top-0 w-[958.5px]" data-name="Container">
      <WorkCbsMp />
    </div>
  );
}

function Background23() {
  return (
    <div className="basis-0 bg-repeat bg-size-[1015.8399939537048px_1015.8399939537048px] bg-top-left grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Background" style={{ backgroundImage: `url('${imgBackground11}')` }}>
      <Container39 />
    </div>
  );
}

function WorkFunkyMrSalvadorMp() {
  return <div className="absolute h-[1015.83px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[958.5px]" data-name="Work_Funky-Mr-Salvador.mp4" />;
}

function Container40() {
  return (
    <div className="absolute bg-[#73a944] h-[1015.84px] left-0 overflow-clip top-0 w-[958.5px]" data-name="Container">
      <WorkFunkyMrSalvadorMp />
    </div>
  );
}

function Background24() {
  return (
    <div className="basis-0 bg-[#73a944] grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Background">
      <Container40 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex gap-[3px] items-start left-0 max-w-[1920px] right-0 top-[18747.7px]" data-name="Container">
      <Background23 />
      <Background24 />
    </div>
  );
}

function WorkFutureClassicMp() {
  return <div className="absolute h-[961.2px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1708.8px]" data-name="Work_FutureClassic.mp4" />;
}

function Container42() {
  return (
    <div className="absolute bg-[#1a5e38] h-[921.75px] left-0 overflow-clip top-0 w-[1708.81px]" data-name="Container">
      <WorkFutureClassicMp />
    </div>
  );
}

function Background25() {
  return (
    <div className="absolute bg-[#1a5e38] h-[921.75px] left-[211.19px] right-0 top-[19775.14px]" data-name="Background">
      <Container42 />
    </div>
  );
}

function WorkKabelMp() {
  return <div className="absolute bg-[#73a944] h-[972px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1728px]" data-name="Work_Kabel.mp4" />;
}

function Container43() {
  return (
    <div className="absolute h-[939.66px] left-0 overflow-clip top-0 w-[1728px]" data-name="Container">
      <WorkKabelMp />
    </div>
  );
}

function Background26() {
  return (
    <div className="absolute h-[939.66px] left-0 right-[192px] top-[20708.48px]" data-name="Background">
      <Container43 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[4px] uppercase w-full">
        <p className="leading-[26px]">Contact</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[24px] not-italic relative shrink-0 text-[17.156px] text-white w-full">
        <p className="mb-0">Schultzschultz GmbH</p>
        <p className="mb-0">Koselstraße 37</p>
        <p className="mb-0">60318 Frankfurt am Main</p>
        <p>Germany</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16.031px] text-nowrap text-white">
        <p className="leading-[24px]">T +49 69 90 55 77 30</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[17.719px] text-nowrap text-white">
        <p className="leading-[24px]">info@schultzschultz.com</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-nowrap text-white">
        <p className="leading-[24px] text-[17.859px]">www.schultzschultz.com</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[24px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Heading3 />
      <Heading4 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[473.3299865722656px] pb-0 pt-[8px] px-0 relative shrink-0 w-[473.33px]" data-name="Container">
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[288px] right-[1158.67px] top-[76.79px]" data-name="Container">
      <Container45 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[4px] uppercase w-full">
        <p className="leading-[26px]">Social Media</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[17.859px] text-nowrap text-white">
        <p className="leading-[24px]">Instagram</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-nowrap text-white">
        <p className="leading-[24px]">LinkedIn</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-nowrap text-white">
        <p className="leading-[24px]">Youtube</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-nowrap text-white">
        <p className="leading-[24px]">X</p>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <Link3 />
      <Link4 />
      <Link5 />
      <Link6 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[24px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Heading6 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[771.33px] pb-[80px] pt-[8px] px-0 right-[675.34px] top-[76.79px]" data-name="Container">
      <Container47 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[4px] uppercase w-full">
        <p className="leading-[26px]">Press</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[17.578px] text-nowrap text-white">
        <p className="leading-[24px]">press@schultzschultz.com</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <Link7 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[24px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Heading8 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[473.3399963378906px] mb-[-8px] pb-0 pt-[8px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container49 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[4px] uppercase w-full">
        <p className="leading-[26px]">Workshops</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[17.578px] text-nowrap text-white">
        <p className="leading-[24px]">workshops@schultzschultz.com</p>
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <Link8 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[24px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Heading9 />
      <Heading10 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-8px] pb-0 pt-[38px] px-0 relative shrink-0 w-full" data-name="Container">
      <Container51 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[1254.66px] pb-[40px] pt-0 px-0 right-[192px] top-[76.79px]" data-name="Container">
      <Container50 />
      <Container52 />
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-nowrap text-white">
        <p className="leading-[24px]">Impressum</p>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[288px] top-[336.79px]" data-name="Heading 5">
      <Link9 />
    </div>
  );
}

function Background27() {
  return (
    <div className="absolute bg-[#121212] h-[495.19px] left-0 right-0 top-[22428.45px]" data-name="Background">
      <Container46 />
      <Container48 />
      <Container53 />
      <Heading11 />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] left-[1254.66px] not-italic text-[17.719px] text-white top-[348.79px] translate-y-[-50%] w-[250.11px]">
        <p className="leading-[24px]">© Schultzschultz GmbH 2025</p>
      </div>
    </div>
  );
}

function Screenshot20250313At120137E280AfpmPng() {
  return (
    <div className="absolute h-[764.448px] left-[0.36px] right-[-0.36px] top-[21664px]" data-name="Screenshot+2025-03-13+at+12.01.37%E2%80%AFPM.png">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgScreenshot20250313At120137E280AfpmPng} />
        <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0" />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[4px] uppercase">
        <p className="leading-[18px]">{` View Portfolio`}</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Container">
      <Container54 />
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute content-stretch flex items-start left-0 pb-[20px] pt-[18px] px-[18px] top-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none" />
      <Container55 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute h-[96.2px] left-[163.31px] right-[624.53px] top-[22096.13px]" data-name="Container">
      <Link10 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[0.36px] top-[21664px]">
      <Screenshot20250313At120137E280AfpmPng />
      <Container56 />
      <div className="absolute flex flex-col font-['Familjen_Grotesk:Bold',sans-serif] font-bold h-[169.997px] justify-center leading-[0] left-[163.31px] text-[57.5px] text-white top-[21985.12px] tracking-[-1.149px] translate-y-[-50%] w-[463.492px]">
        <p className="leading-[64px]">Check out my shop</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[22765px] relative shrink-0 w-full" data-name="Container">
      <Section />
      <Heading />
      <Background />
      <Container3 />
      <Container6 />
      <Container9 />
      <Container13 />
      <Background6 />
      <Background7 />
      <Background8 />
      <Container19 />
      <Background11 />
      <Background12 />
      <Background13 />
      <Container25 />
      <Container29 />
      <Background17 />
      <Container33 />
      <Background20 />
      <Background21 />
      <Container38 />
      <Container41 />
      <Background25 />
      <Background26 />
      <Background27 />
      <Group />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#f9f9f9] text-[18px] text-center text-nowrap tracking-[2px] uppercase">
        <p className="leading-[18px]">EN</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Container">
      <Container58 />
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex items-start px-[9px] py-[10px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-2 border-[#f9f9f9] border-solid inset-0 pointer-events-none" />
      <Container59 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-end pb-0 pl-[1819.05px] pr-0 pt-[2px] relative shrink-0" data-name="Container">
      <Link11 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex flex-col h-[170px] items-start left-0 mix-blend-difference pb-0 pl-0 pr-[55px] pt-[130px] top-0" data-name="Container">
      <Container60 />
    </div>
  );
}

function Label() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Label">
      <div className="absolute bg-[#f9f9f9] h-[3px] left-0 right-0 top-[calc(50%-12.5px)] translate-y-[-50%]" data-name="Background" />
      <div className="absolute bg-[#f9f9f9] h-[3px] left-0 right-0 top-[calc(50%+1.5px)] translate-y-[-50%]" data-name="Background" />
      <div className="absolute bg-[#f9f9f9] h-[3px] left-0 right-0 top-[calc(50%+15.5px)] translate-y-[-50%]" data-name="Background" />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-end pl-[1820px] pr-0 py-0 relative shrink-0" data-name="Container">
      <Label />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex flex-col h-[100px] items-start left-0 mix-blend-difference pb-0 pl-0 pr-[60px] pt-[60px] top-0" data-name="Container">
      <Container62 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[8.39px] pt-0 px-0 relative w-[200px]" data-name="Container">
      <div className="flex h-[255.499px] items-center justify-center relative shrink-0 w-[254.024px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[110deg]">
          <div className="h-[197.532px] relative w-[200px]" data-name="Ananse 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAnanse1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[6.28px] max-w-[1920px] mix-blend-difference top-0 w-[232.114px]" data-name="Container">
      <div className="flex h-[278.194px] items-center justify-center relative shrink-0 w-[316.378px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[250deg]">
          <Container64 />
        </div>
      </div>
    </div>
  );
}

export default function Component1920WLight() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="1920w light">
      <Container61 />
      <Container63 />
      <Container65 />
      <Container57 />
    </div>
  );
}