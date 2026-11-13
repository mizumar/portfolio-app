type WorkHeaderProps = {
  title: string;
};

export function WorkHeader({ title }: WorkHeaderProps) {
  return (
    <header className="mt-8 sm:mt-12">
      <p className="font-dm text-xs tracking-[0.3em] text-[#d8c3a5]">
        WORK DETAIL
      </p>

      <h1 className="mt-4 text-3xl font-light tracking-wide text-[#f3e9e9] sm:text-5xl">
        {title}
      </h1>
    </header>
  );
}
