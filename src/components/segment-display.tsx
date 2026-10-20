const litSegments: Record<string, string[]> = {
  "0": ["a", "b", "c", "d", "e", "f"],
  "1": ["b", "c"],
  "2": ["a", "b", "d", "e", "g"],
  "3": ["a", "b", "c", "d", "g"],
  "4": ["b", "c", "f", "g"],
  "5": ["a", "c", "d", "f", "g"],
  "6": ["a", "c", "d", "e", "f", "g"],
  "7": ["a", "b", "c"],
  "8": ["a", "b", "c", "d", "e", "f", "g"],
  "9": ["a", "b", "c", "d", "f", "g"],
};

type SegmentDisplayProps = {
  value: string;
  tone: "red" | "amber" | "ghost";
  label: string;
  size?: "large" | "small";
};

export function SegmentDisplay({ value, tone, label, size = "large" }: SegmentDisplayProps) {
  return (
    <span className="segment-display" data-tone={tone} data-size={size} role="img" aria-label={label}>
      {Array.from(value).map((digit, digitIndex) => (
        <span className="segment-display__digit" key={`${digit}-${digitIndex}`} aria-hidden="true">
          {(litSegments[digit] ?? []).map((segment) => (
            <span className={`segment-display__part segment-display__part--${segment}`} key={segment} />
          ))}
        </span>
      ))}
    </span>
  );
}
