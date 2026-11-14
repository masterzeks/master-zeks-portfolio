import type { ReactNode } from "react";

type IconProps = { className?: string };

export function IconBrand({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4.2" fill="currentColor" />
    </svg>
  );
}

export function IconArrow({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconArrowUpRight({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconChevronDown({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconChevronUp({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 15l6-6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconWave({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M6.5 18c.4-3.4 2.6-6 5.2-5.4 1.3.3 2 1.5 2.3 2.8.3-2.6 1.8-4.6 3.6-4.3 1.7.3 2.5 2.4 2.6 4.6.4-1.8 1.6-3.1 3-2.8 1.6.3 2.3 2.5 1.8 5.2-1 5-4.3 8.3-9.1 8.3-4.6 0-8-3.6-9.4-8.4Z"
        fill="currentColor"
        opacity="0.95"
      />
      <path d="M20 8.2c.7-1.4 2-2.2 3.2-1.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconSpark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.5 13.7 9 20 10.2 13.7 12.2 12 18.5 10.3 12.2 4 10.2 10.3 9 12 2.5Z" />
    </svg>
  );
}

export function IconMenu({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconX({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.7 10.4 21.2 3h-1.9l-5.5 6.3L9.3 3H3.5l7 9.9L3.5 21h1.9l6-6.8 4.8 6.8h5.8l-7.3-10.6ZM5.9 4.3h2.6l9.6 15.4h-2.6L5.9 4.3Z" />
    </svg>
  );
}

export function IconTelegram({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.7 4.3 3.9 10.6c-1.1.4-1.1 1.1-.2 1.4l4.3 1.3 1.7 5.1c.2.6.1.8.7.8.4 0 .6-.2.8-.4l2.5-2.4 4.6 3.4c.9.5 1.5.2 1.7-.8l3-14.1c.3-1.2-.4-1.7-1.3-1.4Zm-2.7 3.2-8.8 8-.4 3.2-1.6-5.4 10.8-5.8Z" />
    </svg>
  );
}

const skillPaths: Record<string, ReactNode> = {
  "Web3 storytelling": (
    <path d="M5 6.5h9.5A2.5 2.5 0 0 1 17 9v9.5H7.5A2.5 2.5 0 0 1 5 16V6.5Z" stroke="currentColor" strokeWidth="1.6" fill="none" />
  ),
  "Content strategy": (
    <>
      <path d="M5 7h14M5 12h10M5 17h7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="17.5" cy="17" r="2.2" fill="currentColor" />
    </>
  ),
  "Community growth": (
    <>
      <circle cx="9" cy="9" r="2.3" fill="currentColor" />
      <circle cx="15.5" cy="9.5" r="2" fill="currentColor" />
      <path d="M4.8 18c.6-2.4 2.3-3.7 4.3-3.7s3.6 1.3 4.2 3.7M14 14.6c1.6 0 3 .9 3.6 2.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </>
  ),
  "AI & automation": (
    <>
      <rect x="7" y="7" width="10" height="10" rx="2.2" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
      <path d="M12 4.5v2.2M12 17.3v2.2M4.5 12h2.2M17.3 12h2.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  "Research & writing": (
    <>
      <path d="M7 5.5h8.5A1.5 1.5 0 0 1 17 7v12H8.2A1.7 1.7 0 0 1 6.5 17.3V7A1.5 1.5 0 0 1 8 5.5Z" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M9 10h6M9 13.5h6M9 17h3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  "Creative direction": (
    <path d="M5.5 16.5 12 5l6.5 11.5H5.5Z" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinejoin="round" />
  ),
  "Web3 writing & storytelling": (
    <path d="M5 6.5h9.5A2.5 2.5 0 0 1 17 9v9.5H7.5A2.5 2.5 0 0 1 5 16V6.5Z" stroke="currentColor" strokeWidth="1.6" fill="none" />
  ),
  "Community management": (
    <>
      <circle cx="9" cy="9" r="2.3" fill="currentColor" />
      <circle cx="15.5" cy="9.5" r="2" fill="currentColor" />
      <path d="M4.8 18c.6-2.4 2.3-3.7 4.3-3.7s3.6 1.3 4.2 3.7M14 14.6c1.6 0 3 .9 3.6 2.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </>
  ),
  "AI-assisted content": (
    <>
      <rect x="7" y="7" width="10" height="10" rx="2.2" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
      <path d="M12 4.5v2.2M12 17.3v2.2M4.5 12h2.2M17.3 12h2.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
};

export function IconSkill({ name, className }: IconProps & { name: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {skillPaths[name] ?? <circle cx="12" cy="12" r="4" fill="currentColor" />}
    </svg>
  );
}

export function IconBolt({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.2 2 4 13.5h7.2L9.6 22 20 10.2h-7.4L13.2 2Z" />
    </svg>
  );
}

export function IconBurst({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 1.2 13.8 8.4 21 10 13.8 11.8 12 19.2 10.2 11.8 3 10 10.2 8.4 12 1.2Z" />
    </svg>
  );
}
