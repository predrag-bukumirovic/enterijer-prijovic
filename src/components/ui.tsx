import type { CSSProperties, ElementType } from "react";

/** Kašnjenje animacije otkrivanja, u sekundama. */
export const delay = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;

/** Tekst u kome se `{X}` ispisuje kaligrafskim („swash“) slovom. */
export function SwashText({ text }: { text: string }) {
  return text.split(/\{(.)\}/).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="swash">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

/** Naslov čiji redovi izlaze iz maske, jedan za drugim. */
export function Heading({
  lines,
  as: Tag = "h2",
  className,
  start = 0,
}: {
  lines: string[];
  as?: ElementType;
  className?: string;
  start?: number;
}) {
  return (
    <Tag className={className ? `heading ${className}` : "heading"}>
      {lines.map((line, i) => (
        <span className="line" key={line}>
          <span style={{ "--i": i, "--d": `${start}s` } as CSSProperties}>
            <SwashText text={line} />
          </span>
        </span>
      ))}
    </Tag>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg className={className} width="22" height="12" viewBox="0 0 22 12" fill="none" aria-hidden="true">
      <path d="M0 6h20.5M15.5 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function TextLink({
  href,
  label,
  className,
  style,
  external,
}: {
  href: string;
  label: string;
  className?: string;
  style?: CSSProperties;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className={className ? `text-link ${className}` : "text-link"}
      style={style}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {label}
      <Arrow />
    </a>
  );
}
