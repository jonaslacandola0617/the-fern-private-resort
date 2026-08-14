import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ArrowUpRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function PoolIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <path d="M2.5 16.5c1.7 0 1.7 1.2 3.4 1.2s1.7-1.2 3.4-1.2 1.7 1.2 3.4 1.2 1.7-1.2 3.4-1.2 1.7 1.2 3.4 1.2 1.7-1.2 2-1.2" />
      <path d="M3.5 12.5c1.6 0 1.6 1 3.2 1s1.6-1 3.2-1 1.6 1 3.2 1 1.6-1 3.2-1 1.6 1 3.2 1" />
      <path d="M8 12V7.5A2.5 2.5 0 0 1 10.5 5M15 12V7.5A2.5 2.5 0 0 1 17.5 5" />
    </svg>
  );
}

export function KitchenIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <rect x="4" y="5" width="16" height="15" rx="1.5" />
      <path d="M4 11h16M8 8h.01M12 8h.01M16 8h.01M8 15h8M8 18h8" />
    </svg>
  );
}

export function LoungeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <path d="M5 12V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
      <path d="M4 12a2 2 0 0 0-2 2v3h20v-3a2 2 0 0 0-2-2 2 2 0 0 0-2 2H6a2 2 0 0 0-2-2Z" />
      <path d="M4 17v2M20 17v2" />
    </svg>
  );
}

export function BedIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <path d="M3 19v-8M21 19v-6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v4M3 17h18" />
      <path d="M6 11V7h5a2 2 0 0 1 2 2v2" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <path d="M16 20v-1.5a4.5 4.5 0 0 0-4.5-4.5h-3A4.5 4.5 0 0 0 4 18.5V20" />
      <circle cx="10" cy="7" r="3" />
      <path d="M17 11a3 3 0 1 0 0-6M18 14.2a4.5 4.5 0 0 1 2 3.8v2" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function MessageIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}>
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9.8 9.8 0 0 1-3.7-.8L3 21l1.7-5a8.5 8.5 0 1 1 16.3-4.5Z" />
    </svg>
  );
}
