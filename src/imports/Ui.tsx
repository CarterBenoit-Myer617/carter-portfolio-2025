import svgPaths from "./svg-flkll9e7p2";

function Search() {
  return (
    <div className="relative shrink-0 size-[58.815px]" data-name="Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.8148 58.8148">
        <g id="Search">
          <path d={svgPaths.p17c8c700} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
        </g>
      </svg>
    </div>
  );
}

export default function Ui() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[12px] items-center justify-center px-[56px] py-[64px] relative rounded-[771.579px] size-full" data-name="UI">
      <Search />
      <p className="css-4hzbpn font-['Instrument_Sans:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[64px] text-white tracking-[-1.28px] w-[797px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Most magical aquarium
      </p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_8px_5px_40px_0px_rgba(255,255,255,0.65)]" />
    </div>
  );
}