import imgImg1983 from "figma:asset/b119114a2287ab8aba30ce069b6c318251fc8425.png";

function Frame() {
  return (
    <div className="absolute h-[960px] left-0 top-0 w-[1440px]">
      <div className="absolute h-[960px] left-0 top-0 w-[1440px]" data-name="IMG_1983">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg1983} />
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <Frame />
    </div>
  );
}