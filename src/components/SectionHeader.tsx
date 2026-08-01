import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  /** Optional element (e.g. a Compose button) rendered aligned right of the title. */
  action?: ReactNode;
  /** Render the gold-dot divider under the heading. Default true. */
  showDivider?: boolean;
}

export default function SectionHeader({ eyebrow, title, action, showDivider = true }: SectionHeaderProps) {
  return (
    <div>
      <div className="flex items-end justify-between">
        <div>
          <p className="type-caps text-xs text-gilt-dim">{eyebrow}</p>
          <h1 className="mt-2 font-display text-4xl text-parchment">{title}</h1>
        </div>
        {action}
      </div>
      {showDivider && <Divider className="mt-8" />}
    </div>
  );
}

/** Hairline rule with a small gold dot centered on it — reused between article rows too. */
export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative border-t border-ink-line ${className}`}>
      <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gilt" />
    </div>
  );
}
