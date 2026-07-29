import { cn } from "@/lib/utils";

export function ContourDivider({
  className,
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("w-full overflow-hidden leading-[0]", flip && "rotate-180", className)}
    >
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        className="h-14 w-full md:h-20"
        preserveAspectRatio="none"
      >
        <path d="M0 40 C 240 10, 480 70, 720 40 C 960 10, 1200 70, 1440 40" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1.5" />
        <path d="M0 55 C 240 25, 480 85, 720 55 C 960 25, 1200 85, 1440 55" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" />
        <path d="M0 70 C 240 40, 480 100, 720 70 C 960 40, 1200 100, 1440 70" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
