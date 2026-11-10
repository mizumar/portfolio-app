import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-2 font-dm text-xs tracking-wide"
    >
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center gap-2">
          {index > 0 && <span className="text-[#665448]">/</span>}

          {item.href ? (
            <Link
              href={item.href}
              className="text-[#806b59] transition-colors hover:text-[#d8c3a5]"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[#d8c3a5]">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
