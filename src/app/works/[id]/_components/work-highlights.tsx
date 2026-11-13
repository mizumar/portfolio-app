// components/works/work-highlights.tsx
type WorkHighlightsProps = {
  highlights: string[];
};

export function WorkHighlights({ highlights }: WorkHighlightsProps) {
  return (
    <section className="mt-10 sm:mt-14">
      <div className="mb-8">
        <p className="font-dm text-xs tracking-[0.3em] text-[#d8c3a5]">
          HIGHLIGHTS
        </p>

        <h2 className="mt-3 text-2xl font-light tracking-wide text-[#f3e9e9] sm:text-3xl">
          主な実装・工夫した点
        </h2>
      </div>

      <ul className="space-y-4">
        {highlights.map((highlight, index) => (
          <li
            key={`${index}-${highlight}`}
            className="flex gap-4 border-b border-[#665448] pb-4 text-sm leading-8 text-[#d0c2b0]"
          >
            <span
              aria-hidden="true"
              className="mt-[0.8rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#d8c3a5]"
            />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
