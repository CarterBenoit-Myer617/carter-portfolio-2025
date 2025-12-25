interface ThreeLensesBadgeProps {
  systems: number;
  culture: number;
  clarity: number;
  total: number;
}

export default function ThreeLensesBadge({
  systems,
  culture,
  clarity,
  total,
}: ThreeLensesBadgeProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex gap-2">
        <LensIndicator label="Systems" score={systems} max={5} color="bg-black" />
        <LensIndicator label="Culture" score={culture} max={5} color="bg-gray-700" />
        <LensIndicator label="Clarity" score={clarity} max={5} color="bg-gray-500" />
      </div>
      <div className="text-sm font-bold">
        Total: <span className="text-lg">{total}</span>/15
      </div>
    </div>
  );
}

function LensIndicator({
  label,
  score,
  max,
  color,
}: {
  label: string;
  score: number;
  max: number;
  color: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-xs uppercase tracking-wide text-gray-600 font-semibold">
        {label}
      </div>
      <div className="flex gap-0.5">
        {Array.from({ length: max }).map((_, i) => (
          <div
            key={i}
            className={`w-4 h-4 ${
              i < score ? color : 'bg-gray-200'
            } transition-colors`}
          />
        ))}
      </div>
    </div>
  );
}
